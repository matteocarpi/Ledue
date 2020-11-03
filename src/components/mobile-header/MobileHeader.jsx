import React from 'react';
import PropTypes from 'prop-types';

import Button from '../utils/button/Button';

import Burger from '../../../content/svg/burger.svg';

import styles from './MobileHeader.module.scss';

const MobileHeader = ({ onOpen }) => (

  <Button className={styles.burger} onClick={onOpen}>
    <Burger />
  </Button>
);

export default MobileHeader;

MobileHeader.propTypes = {
  onOpen: PropTypes.func.isRequired,
};
