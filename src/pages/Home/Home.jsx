import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import Slider from '../../components/slider';

import styles from './Home.module.scss';

const Home = () => {
  const data = useStaticQuery(graphql`
    query HomeQuery {
        homeData: markdownRemark(id: {eq: "f60a85e5-16d8-5343-98e3-e22b022a528c"}) {
            frontmatter {
              welcome_text
              slider {
                colore_del_logo
                foto {
                  id
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
      <Slider slides={data.homeData.frontmatter.slider} />
      <main className={styles.content}>
        <p
          className={styles.welcome_text}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: data.homeData.frontmatter.welcome_text }}
        />
      </main>
    </Layout>
  );
};

export default Home;
