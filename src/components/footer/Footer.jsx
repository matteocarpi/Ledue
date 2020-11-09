import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

import Logo from '../../../content/svg/logo_ledue_dark.svg';

const Footer = ({ data }) => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <span>{`Copyright© ${year}`}</span>
      <Logo className="logo" />

      <div>
        <a target="_blank" rel="noreferrer" href={data.markdownRemark.frontmatter.instagram}>
          <FontAwesomeIcon icon={faInstagram} />
        </a>

        <a target="_blank" rel="noreferrer" href={data.markdownRemark.frontmatter.facebook}>
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

Footer.propTypes = {
  data: PropTypes.object.isRequired,
};
