import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'gatsby';

import { NavItem, SubItem } from '../utils/nav-item/NavItem';
import Logo from '../../../content/svg/logo_ledue_dark.svg';

import styles from './DesktopHeader.module.scss';

const DesktopHeader = ({ data }) => {
  const collections = data?.allFile;
  const social = data?.markdownRemark.frontmatter;

  return (
    <header className={styles.desktop_header}>

      <Link to="/">
        <Logo className={styles.logo} />
      </Link>

      <nav className={styles.desktop_navigation}>
        <ul className={styles.navigation_content}>
          <NavItem
            link="#about"
            kind="anchor"
          >
            About
          </NavItem>

          <NavItem className={styles.second_level_wrapper} kind="action" link="#">
            Collections
            <ul className={styles.second_level}>
              {collections.edges.map((colData) => {
                const collection = colData.node.childMarkdownRemark;
                return (
                  <SubItem
                    key={collection.id}
                    link={collection.fields.slug}
                    kind="link"
                  >
                    {collection.frontmatter.title}
                  </SubItem>
                );
              })}
            </ul>
          </NavItem>

          <NavItem
            link="/news"
            kind="link"
          >
            News
          </NavItem>

          <NavItem
            link="#contacts"
            kind="anchor"
          >
            Contacts
          </NavItem>

          <NavItem
            link="http://www.shopify.com"
            kind="external"
          >
            Shop
          </NavItem>

          <NavItem link={social.instagram} kind="external">
            <FontAwesomeIcon className={styles.insta} icon={faInstagram} />
          </NavItem>

          <NavItem link={social.facebook} kind="external">
            <FontAwesomeIcon className={styles.insta} icon={faFacebook} />
          </NavItem>

        </ul>
      </nav>
    </header>
  );
};

export default DesktopHeader;

DesktopHeader.propTypes = {
  data: PropTypes.object.isRequired,
};
