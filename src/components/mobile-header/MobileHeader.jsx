import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import cx from 'classnames';

import Button from '../utils/button/Button';
import Burger from '../../../content/svg/burger.svg';
import Logo from '../../../content/svg/logo_ledue_dark.svg';

import * as styles from './MobileHeader.module.scss';

const MobileHeader = ({ isHome, onOpen, hasScrolled }) => (
  <header
    className={cx(
      styles.container,
      isHome && !hasScrolled && styles.home,
      hasScrolled && styles.fixed
    )}
  >
    <div className={styles.burger}>
      <Button onClick={onOpen}>
        <Burger />
      </Button>
    </div>

    <Link to="/">
      <Logo className={styles.logo} />
    </Link>
  </header>
);

export default MobileHeader;

MobileHeader.defaultProps = {
  isHome: false,
};

MobileHeader.propTypes = {
  onOpen: PropTypes.func.isRequired,
  isHome: PropTypes.bool,
  hasScrolled: PropTypes.bool.isRequired,
};
