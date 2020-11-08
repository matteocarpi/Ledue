import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import BackgroundImage from 'gatsby-background-image';
import cx from 'classnames';

import Layout from '../components/layout';

import styles from './Post.module.scss';

const Post = ({ data }) => (
  <Layout className={styles.wrapper}>
    <BackgroundImage
      className={styles.title_slide}
      fluid={data.postData.frontmatter.foto.childImageSharp.fluid}
      style={{ backgroundPosition: 'top' }}
    >
      <h2 className={cx('fondotinta', styles.title)}>
        {data.postData.frontmatter.title}
      </h2>
    </BackgroundImage>
    <section
      className={styles.content}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: data.postData.html }}
    />
  </Layout>
);

export default Post;

export const query = graphql`
query PostData($slug: String!) {
  postData: markdownRemark(fields: {slug: {eq: $slug}}) {
    html
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
  }
}
`;

Post.propTypes = {
  // eslint-disable-next-line react/require-default-props
  data: PropTypes.node,
};
