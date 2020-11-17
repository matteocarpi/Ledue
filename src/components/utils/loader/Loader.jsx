import React from 'react';
import PropTypes from 'prop-types';
import ReactLoader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Loader = ({ type }) => (
  <ReactLoader
    type={type}
    color="#a0735f"
    width={40}
    height={40}
  />
);

export default Loader;

Loader.defaultProps = {
  type: 'Circles',
};

Loader.propTypes = {
  type: PropTypes.string,
};
