import React, { useState } from 'react';
import PropTypes from 'prop-types';

import MobileHeader from './mobile-header/MobileHeader';
import MobileNavigation from './mobile-navigation/MobileNavigation';

const Layout = ({ isHome, children }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleNavigation = () => {
    setShowMenu(!showMenu);
  };

  if (showMenu) return <MobileNavigation onClose={toggleNavigation} />;

  return (
    <>
      <main>
        <MobileHeader isHome={isHome} onOpen={toggleNavigation} />
        {children}
      </main>
    </>
  );
};

Layout.defaultProps = {
  isHome: false,
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isHome: PropTypes.bool,
};

export default Layout;
