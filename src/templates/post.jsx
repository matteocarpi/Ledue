import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import BackgroundImage from 'gatsby-background-image';
import cx from 'classnames';

import Layout from '../components/layout';
import ArrowLink from '../components/arrow-link';

import styles from './Post.module.scss';

const Post = ({ data }) => (
  <Layout>
    <main className={styles.wrapper}>
      <BackgroundImage
        className={styles.title_slide}
        fluid={data.postData.frontmatter.foto.childImageSharp.fluid}
        style={{ backgroundPosition: 'top' }}
      >
        <h2 className={cx('fondotinta', styles.title)}>
          {data.postData.frontmatter.title}
        </h2>
      </BackgroundImage>
      <div
        className={styles.content}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: data.postData.frontmatter.content }}
      />

      <div className={styles.other_posts_wrapper}>
        <div className={styles.other_posts}>
          {data.otherPosts.edges.map((p) => (
            <ArrowLink
              className={styles.other_post_link}
              link={p.node.childMarkdownRemark.fields.slug}
              key={p.node.id}
              kind="internal"
              color="black"
            >
              {p.node.childMarkdownRemark.frontmatter.title}
            </ArrowLink>
          ))}
        </div>
      </div>
    </main>
  </Layout>
);

export default Post;

export const query = graphql`
  query PostData($slug: String!) {
    postData: markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        foto {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        content
      }
    }
    otherPosts: allFile(
      filter: {
        relativeDirectory: { eq: "news" }
        childMarkdownRemark: { fields: { slug: { ne: $slug } } }
      }
    ) {
      edges {
        node {
          id
          childMarkdownRemark {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  }
`;

Post.propTypes = {
  data: PropTypes.object.isRequired,
};
