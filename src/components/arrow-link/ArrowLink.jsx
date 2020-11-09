import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import cx from 'classnames';

import ArrowPink from '../../../content/svg/right_arrow_pink.svg';
import ArrowBlack from '../../../content/svg/right_arrow_black.svg';

import styles from './ArrowLink.module.scss';

const ArrowLink = ({
  kind, link, children, color, className,
}) => {
  const renderArrow = (arrowColor) => {
    if (arrowColor === 'pink') return <ArrowPink className={styles.arrow} />;
    return <ArrowBlack className={styles.arrow} />;
  };

  if (kind === 'internal') {
    return (
      <Link className={cx(styles.container, styles[color], className)} to={link}>
        {renderArrow(color)}
        <span>
          {children}
        </span>
      </Link>
    );
  }
  return (
    <a className={cx(styles.container, styles[color], className)} href={link}>
      {renderArrow(color)}
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
  color: 'pink',
  className: '',
};

ArrowLink.propTypes = {
  kind: PropTypes.oneOf(['external', 'internal']).isRequired,
  link: PropTypes.string,
  children: PropTypes.any,
  color: PropTypes.oneOf(['pink', 'black']),
  className: PropTypes.string,
};
