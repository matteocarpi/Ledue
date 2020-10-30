import React from 'react';

import Layout from '../../components/layout';
import SEO from '../../components/seo';

import styles from './Home.module.scss';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';

const Home = () => {
    
  const data = useStaticQuery(graphql`
    query HomeQuery {
        site {
            siteMetadata {
                title
            }
        }
    }`);

  return(

    <Layout>
      <SEO title="Home" />
      <div className={styles.content}>
        <h1>{data.site.siteMetadata.title}</h1>
      </div>
    </Layout>
  ); 
};

export default Home;

Home.propTypes = {
  data: PropTypes.node,
};
