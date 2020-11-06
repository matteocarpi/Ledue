import React from 'react';
import Logo from '../../../content/svg/logo_ledue_dark.svg';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <span>{`Copyright© ${year}`}</span>
      <Logo className="logo" />
    </footer>
  );
};

export default Footer;
