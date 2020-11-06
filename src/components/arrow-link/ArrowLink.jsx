import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import Arrow from '../../../content/svg/right_arrow_pink.svg';

import styles from './ArrowLink.module.scss';

const ArrowLink = ({ kind, link, children }) => {
  if (kind === 'internal') {
    return (
      <Link className={styles.container} to={link}>
        <Arrow className={styles.arrow} />
        <span>
          {children}
        </span>
      </Link>
    );
  }
  return (
    <a className={styles.container} href={link}>
      <Arrow className={styles.arrow} />
      <span className={styles.content}>
        {children}
      </span>
    </a>
  );
};

export default ArrowLink;

ArrowLink.defaultProps = {
  link: '#',
  children: 'Link',
};

ArrowLink.propTypes = {
  kind: PropTypes.oneOf(['external', 'internal']).isRequired,
  link: PropTypes.string,
  children: PropTypes.any,
};
