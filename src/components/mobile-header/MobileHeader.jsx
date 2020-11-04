import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import cx from 'classnames';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

import Button from '../utils/button/Button';
import Burger from '../../../content/svg/burger.svg';
import Logo from '../../../content/svg/logo_ledue_dark.svg';

import styles from './MobileHeader.module.scss';

const MobileHeader = ({ isHome, onOpen }) => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useScrollPosition(({ currPos }) => {
    if (currPos.y < -200 && !hasScrolled) {
      setHasScrolled(!hasScrolled);
    } else if (currPos.y >= -200 && hasScrolled) {
      setHasScrolled(false);
    }
  });

  return (
    <header className={cx(styles.container, isHome && !hasScrolled && styles.home)}>
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
};

export default MobileHeader;

MobileHeader.defaultProps = {
  isHome: false,
};

MobileHeader.propTypes = {
  onOpen: PropTypes.func.isRequired,
  isHome: PropTypes.bool,
};
