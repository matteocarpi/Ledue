import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import Slider from '../../components/slider';
import CollectionPreview from '../../components/collection-preview';

import styles from './Home.module.scss';

const Home = () => {
  const data = useStaticQuery(graphql`
    query HomeQuery {
        slider: markdownRemark(id: {eq: "f60a85e5-16d8-5343-98e3-e22b022a528c"}) {
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
          collection: allFile(filter: {relativeDirectory: {eq: "collections"}}, limit: 1, sort: {order: ASC, fields: birthTime}) {
            edges {
              node {
                childMarkdownRemark {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    galleria {
                      childImageSharp {
                        fluid {
                          ...GatsbyImageSharpFluid
                        }
                        id
                      }
                    }
                    link_allo_shop
                  }
                }
              }
            }
          }
    }`);

  const collectionData = data.collection.edges[0].node;

  return (

    <Layout isHome>
      <SEO title="Home" />
      <Slider slides={data.slider.frontmatter.slider} />
      <main className={styles.content}>
        <p
          className={styles.welcome_text}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: data.slider.frontmatter.welcome_text }}
        />

        <CollectionPreview collection={collectionData} />
      </main>
    </Layout>
  );
};

export default Home;
