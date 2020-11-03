import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './button.module.scss';

const MobileHeader = ({ onClick, children, className }) => (

  <button type="button" className={cx(className, styles.button)} onClick={onClick}>
    {children}
  </button>
);

export default MobileHeader;

MobileHeader.defaultProps = {
  children: "I'm a button!!!",
  className: '',
};

MobileHeader.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.any,
  className: PropTypes.node,
};
