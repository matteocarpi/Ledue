import React from 'react';

import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

const Post = ({ data }) => (
  <div>
    <h1>{data.postData.frontmatter.title}</h1>
    <section
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: data.postData.html }}
    />
  </div>
);

export default Post;

export const query = graphql`
query PostData($slug: String!) {
  postData: markdownRemark(fields: {slug: {eq: $slug}}) {
    html
    frontmatter {
      title
    }
  }
}
`;

Post.propTypes = {
  // eslint-disable-next-line react/require-default-props
  data: PropTypes.node,
};
