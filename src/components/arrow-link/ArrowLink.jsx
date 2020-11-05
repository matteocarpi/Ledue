import React from 'react';
import { Link } from 'gatsby';
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
  } if (kind === 'external') {
    return (
      <a className={styles.container} href={link}>
        <Arrow className={styles.arrow} />
        <span className={styles.content}>
          {children}
        </span>
      </a>
    );
  }
};

export default ArrowLink;
