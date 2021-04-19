import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

import { NavItem, SubItem } from '../utils/nav-item/NavItem';
import Button from '../utils/button/Button';
import IconClose from '../../../content/svg/close.svg';
import Logo from '../../../content/svg/logo_ledue_dark.svg';
import * as styles from './MobileNavigation.module.scss';

const MobileNavigation = ({ onClose, data }) => {
  const [isCollectionOpen, setIsCollectionOpen] = useState(false);

  const collections = data?.allMarkdownRemark;
  const social = data?.markdownRemark.frontmatter;

  return (
    <div className={styles.container}>
      <Button className={styles.close_button} onClick={onClose}>
        <IconClose />
      </Button>

      <NavItem link="/" kind="link" onClick={onClose}>
        <Logo className={styles.logo} />
      </NavItem>

      <div className={styles.nav_wrap}>
        <nav className={styles.navigation}>
          <ul>
            <NavItem onClick={onClose} link="/#about" kind="link">
              About
            </NavItem>

            <NavItem
              kind="action"
              onClick={() => setIsCollectionOpen(!isCollectionOpen)}
            >
              Collections
            </NavItem>
            {isCollectionOpen && (
              <ul>
                {collections.edges.map((colData) => {
                  const collection = colData.node;
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
            )}

            <NavItem onClick={onClose} link="/news" kind="link">
              News
            </NavItem>

            <NavItem onClick={onClose} link="/#contacts" kind="link">
              Contacts
            </NavItem>

            <NavItem onClick={onClose} link={social.shopify} kind="external">
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
      </div>
    </div>
  );
};

export default MobileNavigation;

MobileNavigation.propTypes = {
  onClose: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};
