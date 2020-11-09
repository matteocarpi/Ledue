import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import MobileHeader from './mobile-header/MobileHeader';
import MobileNavigation from './mobile-navigation/MobileNavigation';
import Footer from './footer';
import Button from './utils/button';
import Newsletter from './newsletter';
import CloseIcon from '../../content/svg/close.svg';

import styles from './Layout.module.scss';

const Layout = ({ className, isHome, children }) => {
  const [visited, setVisited] = useState();

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

  if (showMenu) return <MobileNavigation onClose={toggleNavigation} />;

  return (
    <>
      <main className={className}>
        <MobileHeader isHome={isHome} onOpen={toggleNavigation} />
        {!visited
        && (
        <div className={styles.newsletter_popup}>
          <Button
            type="button"
            className={styles.close_button}
            onClick={toggleVisited}
          >
            <CloseIcon />
          </Button>
          <Newsletter />
        </div>
        )}
        {children}
      </main>
      <Footer />
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
