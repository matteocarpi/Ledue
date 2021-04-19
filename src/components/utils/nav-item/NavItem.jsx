import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { Link } from 'gatsby';
import Button from '../button/Button';
import ArrowIcon from '../../../../content/svg/right_arrow_black.svg';

import * as styles from './NavItem.module.scss';

export const NavItem = ({ link, kind, onClick, children, className }) => {
  if (kind === 'anchor') {
    return (
      <li className={className}>
        <AnchorLink className={styles.text} to={link}>
          <h3>{children}</h3>
        </AnchorLink>
      </li>
    );
  }
  if (kind === 'link') {
    return (
      <li className={className}>
        <Button onClick={onClick}>
          <Link className={styles.text} to={link}>
            <h3>{children}</h3>
          </Link>
        </Button>
      </li>
    );
  }
  if (kind === 'action') {
    return (
      <li className={className}>
        <Button className={styles.text} onClick={onClick}>
          <h3>{children}</h3>
        </Button>
      </li>
    );
  }
  if (kind === 'parent') {
    return (
      <li className={cx(className, styles.text)}>
        <h3>{children}</h3>
      </li>
    );
  }
  return (
    <li className={className}>
      <Button onClick={onClick}>
        <a className={styles.text} href={link} target="_blank" rel="noreferrer">
          <h3>{children}</h3>
        </a>
      </Button>
    </li>
  );
};

export const SubItem = ({ link, kind, onClick, children, className }) => (
  <div className={cx(className, styles.sub_item)}>
    <ArrowIcon className={styles.arrow_icon} />
    <NavItem link={link} kind={kind} onClick={onClick}>
      {children}
    </NavItem>
  </div>
);

export default NavItem;

NavItem.defaultProps = {
  children: 'Link',
  link: '#',
  className: '',
  // eslint-disable-next-line no-console
  onClick: () => console.log('Clicked'),
};

NavItem.propTypes = {
  link: PropTypes.string,
  kind: PropTypes.oneOf(['anchor', 'link', 'external', 'action', 'parent'])
    .isRequired,
  children: PropTypes.any,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

SubItem.defaultProps = {
  children: 'Link',
  link: '#',
  className: '',
  // eslint-disable-next-line no-console
  onClick: () => console.log('Clicked'),
};

SubItem.propTypes = {
  link: PropTypes.string,
  kind: PropTypes.oneOf(['anchor', 'link', 'external', 'action', 'parent'])
    .isRequired,
  children: PropTypes.any,
  onClick: PropTypes.func,
  className: PropTypes.string,
};
