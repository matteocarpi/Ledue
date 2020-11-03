import React, { useState } from 'react';
import PropTypes from 'prop-types';

import MobileHeader from './mobile-header/MobileHeader';

const Layout = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleOpenMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <main>
        <MobileHeader onOpen={handleOpenMenu} />
        {children}
      </main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
