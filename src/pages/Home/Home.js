import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import Slider from '../../components/slider';
import styles from './Home.module.scss';

const Home = () => {
  const data = useStaticQuery(graphql`
    query HomeQuery {
        homeData: markdownRemark(id: {eq: "f60a85e5-16d8-5343-98e3-e22b022a528c"}) {
            frontmatter {
              slider {
                colore_del_logo
                foto {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
    }`);

  return (

    <Layout>
      <SEO title="Home" />
      <main className={styles.content}>
        <Slider slides={data.homeData.frontmatter.slider} />
      </main>
    </Layout>
  );
};

export default Home;

Home.propTypes = {
  data: PropTypes.node,
};
