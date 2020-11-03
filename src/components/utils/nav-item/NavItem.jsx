import React from 'react';
import PropTypes from 'prop-types';

import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { Link } from 'gatsby';
import Button from '../button/Button';
import ArrowIcon from '../../../../content/svg/right_arrow_black.svg';

import styles from './NavItem.module.scss';

export const NavItem = ({
  link, kind, onClick, children,
}) => {
  if (kind === 'anchor') {
    return (
      <li>
        <Button onClick={onClick}>
          <AnchorLink className={styles.text} to={link}>
            <h3>{children}</h3>
          </AnchorLink>
        </Button>
      </li>
    );
  } if (kind === 'link') {
    return (
      <li>
        <Button onClick={onClick}>
          <Link className={styles.text} to={link}><h3>{children}</h3></Link>
        </Button>
      </li>
    );
  } if (kind === 'action') {
    return (
      <li>
        <Button className={styles.text} onClick={onClick}>
          <h3>{children}</h3>
        </Button>
      </li>
    );
  }
  return (
    <li>
      <Button onClick={onClick}>
        <a className={styles.text} href={link} target="_blank" rel="noreferrer"><h3>{children}</h3></a>
      </Button>
    </li>
  );
};

export const SubItem = ({
  link, kind, onClick, children,
}) => (
  <div className={styles.sub_item}>
    <ArrowIcon className={styles.arrow_icon} />
    <NavItem link={link} kind={kind} onClick={onClick}>
      <h3>{children}</h3>
    </NavItem>
  </div>
);

export default NavItem;

NavItem.defaultProps = {
  children: 'Link',
  link: '#',
  // eslint-disable-next-line no-console
  onClick: () => console.log('Clicked'),
};

NavItem.propTypes = {
  link: PropTypes.string,
  kind: PropTypes.oneOf(['anchor', 'link', 'external', 'action']).isRequired,
  children: PropTypes.any,
  onClick: PropTypes.func,
};

SubItem.defaultProps = {
  children: 'Link',
  link: '#',
  // eslint-disable-next-line no-console
  onClick: () => console.log('Clicked'),
};

SubItem.propTypes = {
  link: PropTypes.string,
  kind: PropTypes.oneOf(['anchor', 'link', 'external', 'action']).isRequired,
  children: PropTypes.any,
  onClick: PropTypes.func,
};
