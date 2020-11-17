import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import Slider from '../../components/slider';
import CollectionPreview from '../../components/collection-preview';
import NewsPreview from '../../components/news-preview';
import styles from './Home.module.scss';
import InstaFeed from '../../components/insta-feed';
import AboutUs from '../../components/about-us';
import Newsletter from '../../components/newsletter';

const Home = () => {
  const data = useStaticQuery(graphql`
    query HomeQuery {
        slider: markdownRemark(frontmatter: {title: {eq: "Home"}}) {
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
                          aspectRatio
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
          news: allFile(filter:{relativeDirectory: {eq: "news"}}) {
              edges {
                node {
                  id
                  childMarkdownRemark {
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      foto {
                        childImageSharp {
                          fluid {
                            ...GatsbyImageSharpFluid
                          }
                        }
                      }
                    }
                    excerpt (pruneLength: 200)
                  }
                }
              }
            }
          
    }`);

  const collectionData = data.collection.edges[0].node;
  const newsData = data.news.edges;

  return (

    <Layout isHome>
      <SEO title="Home" />
      <Slider slides={data.slider.frontmatter.slider} />

      <main className={styles.content}>
        <p
          className={styles.welcome_text}
        >
          {data.slider.frontmatter.welcome_text}
        </p>

        <CollectionPreview collection={collectionData} />

        <NewsPreview news={newsData} />

        <InstaFeed />

        <AboutUs />

        <Newsletter />
      </main>
    </Layout>
  );
};

export default Home;
