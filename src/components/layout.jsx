import React, { useState } from 'react';
import PropTypes from 'prop-types';

import MobileHeader from './mobile-header/MobileHeader';
import MobileNavigation from './mobile-navigation/MobileNavigation';

const Layout = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleNavigation = () => {
    setShowMenu(!showMenu);
  };

  if (showMenu) return <MobileNavigation onClose={toggleNavigation} />;

  return (
    <>
      <main>
        <MobileHeader onOpen={toggleNavigation} />
        {children}
      </main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
