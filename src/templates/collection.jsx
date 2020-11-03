import React from 'react';

import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

const Collection = ({ data }) => (
  <div>
    <h1>{data.collectionData.frontmatter.title}</h1>
  </div>
);

export default Collection;

export const query = graphql`
query CollectionData($slug: String!) {
  collectionData: markdownRemark(fields: {slug: {eq: $slug}}) {
    frontmatter {
      title
    }
  }
}
`;

Collection.propTypes = {
  // eslint-disable-next-line react/require-default-props
  data: PropTypes.node,
};
