import React, { useState } from 'react';
import PropTypes from 'prop-types';

import MobileHeader from './mobile-header/MobileHeader';
import MobileNavigation from './mobile-navigation/MobileNavigation';
import Footer from './footer';

const Layout = ({ isHome, children }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleNavigation = () => {
    setShowMenu(!showMenu);
  };

  if (showMenu) return <MobileNavigation onClose={toggleNavigation} />;

  return (
    <>
      <MobileHeader isHome={isHome} onOpen={toggleNavigation} />
      <main>
        {children}
      </main>
      <Footer />
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
