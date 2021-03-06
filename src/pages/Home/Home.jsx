import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import Slider from '../../components/slider';
import CollectionPreview from '../../components/collection-preview';
import NewsPreview from '../../components/news-preview';
import * as styles from './Home.module.scss';
import InstaFeed from '../../components/insta-feed';
import AboutUs from '../../components/about-us';
import Newsletter from '../../components/newsletter';

const Home = () => {
  const data = useStaticQuery(graphql`
    query HomeQuery {
      slider: markdownRemark(frontmatter: { title: { eq: "Home" } }) {
        frontmatter {
          welcome_text
          slider {
            colore_del_logo
            foto {
              id
              childImageSharp {
                fluid(jpegQuality: 30, quality: 30, maxWidth: 1920) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      collection: allMarkdownRemark(
        filter: { frontmatter: { doctype: { eq: "collection" } } }
        sort: { fields: frontmatter___date, order: DESC }
        limit: 1
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              galleria {
                childImageSharp {
                  fluid(jpegQuality: 30, quality: 30, maxWidth: 1024) {
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
      news: allMarkdownRemark(
        filter: { frontmatter: { doctype: { eq: "news" } } }
        sort: { fields: frontmatter___data, order: DESC }
        limit: 10
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            excerpt(pruneLength: 200)
            frontmatter {
              title
              foto {
                childImageSharp {
                  fluid(jpegQuality: 30, quality: 30, maxWidth: 1024) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const collectionData = data.collection.edges[0].node;
  const newsData = data.news.edges;

  return (
    <Layout isHome>
      <SEO title="Home" />
      <Slider slides={data.slider.frontmatter.slider} />

      <main className={styles.content}>
        <div
          className={styles.welcome_text}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: data.slider.frontmatter.welcome_text,
          }}
        />

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
