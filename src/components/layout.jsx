import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { motion, AnimatePresence } from 'framer-motion';
import MobileHeader from './mobile-header/MobileHeader';
import MobileNavigation from './mobile-navigation/MobileNavigation';
import Footer from './footer';
import Button from './utils/button';
import Newsletter from './newsletter';
import CloseIcon from '../../content/svg/close.svg';
import DesktopHeader from './desktop-header';
import styles from './Layout.module.scss';

const Layout = ({ className, isHome, children }) => {
  const data = useStaticQuery(graphql`
  {
    markdownRemark(fields: {slug: {eq: "/impostazioni_contatti/"}}) {
      frontmatter {
        instagram
        facebook
        shopify
      }
    }
    allFile(filter: {relativeDirectory: {eq: "collections"}}) {
      edges {
        node {
          childMarkdownRemark {
            fields {
              slug
            }
            frontmatter {
              title
            }
            id
          }
        }
      }
    }
  }`);

  const [hasScrolled, setHasScrolled] = useState(false);

  useScrollPosition(({ currPos }) => {
    if (currPos.y < -200 && !hasScrolled) {
      setHasScrolled(!hasScrolled);
    } else if (currPos.y >= -200 && hasScrolled) {
      setHasScrolled(false);
    }
  });

  const [visited, setVisited] = useState();
  const [showNewsletter, setShowNewsletter] = useState(false);

  useEffect(() => {
    setVisited(localStorage.getItem('visited'));
    if (!visited) {
      setTimeout(() => {
        setShowNewsletter(true);
      }, 2000);
    }
  });

  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    setVisited(window.localStorage.getItem('visited'));
  });

  const toggleNavigation = () => {
    setShowMenu(!showMenu);
  };

  const toggleVisited = () => {
    localStorage.setItem('visited', true);
    setVisited(!visited);
  };

  if (showMenu) return <MobileNavigation onClose={toggleNavigation} data={data} />;

  return (
    <>
      <main className={className}>
        <AnimatePresence>
          {!visited && showNewsletter && (
            <motion.div
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 300 }}
              transition={{ duration: 1 }}
              className={styles.newsletter_popup}
            >
              <Button
                type="button"
                className={styles.close_button}
                onClick={toggleVisited}
              >
                <CloseIcon />
              </Button>
              <Newsletter />
            </motion.div>
          )}

          {hasScrolled && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <DesktopHeader key="fixedHeader" fixed data={data} />
            </motion.div>
          )}

          {!isHome && (
            <DesktopHeader key="normalHeader" data={data} />
          )}
        </AnimatePresence>

        <MobileHeader hasScrolled={hasScrolled} isHome={isHome} onOpen={toggleNavigation} />

        {children}
      </main>
      <Footer data={data} />
    </>
  );
};

Layout.defaultProps = {
  isHome: false,
  className: '',
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isHome: PropTypes.bool,
  className: PropTypes.string,
};

export default Layout;
