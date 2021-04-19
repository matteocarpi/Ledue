import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

import Logo from '../../../content/svg/logo_ledue_dark.svg';
import * as styles from './Footer.module.scss';

const Footer = ({ data }) => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <span>{`© ${year}`}</span>
      <Logo className="logo" />

      <div className={styles.social}>
        <a
          target="_blank"
          rel="noreferrer"
          href={data.markdownRemark.frontmatter.instagram}
        >
          <FontAwesomeIcon className={styles.icon} icon={faInstagram} />
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href={data.markdownRemark.frontmatter.facebook}
        >
          <FontAwesomeIcon className={styles.icon} icon={faFacebook} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

Footer.propTypes = {
  data: PropTypes.object.isRequired,
};
