import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import { NavItem, SubItem } from '../utils/nav-item/NavItem';
import Button from '../utils/button/Button';
import IconClose from '../../../content/svg/close.svg';
import Logo from '../../../content/svg/logo_ledue_dark.svg';
import styles from './MobileNavigation.module.scss';

const MobileNavigation = ({ onClose, data }) => {
  const [isCollectionOpen, setIsCollectionOpen] = useState(false);

  const collections = data?.allFile;
  const social = data?.markdownRemark.frontmatter;

  return (
    <div className={styles.container}>
      <Button className={styles.close_button} onClick={onClose}>
        <IconClose />
      </Button>

      <Logo className={styles.logo} />
      <div className={styles.nav_wrap}>

        <nav className={styles.navigation}>
          <ul>
            <NavItem
              onClick={onClose}
              link="#about"
              kind="anchor"
            >
              About
            </NavItem>

            <NavItem kind="action" onClick={() => setIsCollectionOpen(!isCollectionOpen)}>
              Collections
            </NavItem>
            {isCollectionOpen && (
            <ul>
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
            )}

            <NavItem
              onClick={onClose}
              link="/news"
              kind="link"
            >
              News
            </NavItem>

            <NavItem
              onClick={onClose}
              link="#contacts"
              kind="anchor"
            >
              Contacts
            </NavItem>

            <NavItem
              onClick={onClose}
              link="http://www.shopify.com"
              kind="external"
            >
              Shop
            </NavItem>

            <NavItem link={social.instagram} kind="external">
              <FontAwesomeIcon className={styles.insta} icon={faInstagram} />
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
