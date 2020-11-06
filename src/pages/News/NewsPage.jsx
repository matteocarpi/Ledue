import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const NewsPage = () => {
  const data = useStaticQuery(graphql`
  {
    allFile(filter: {relativeDirectory: {eq: "news"}}) {
      edges {
        node {
          id
          childMarkdownRemark {
            frontmatter {
              title
            }
          }
        }
      }
    }
}
  `);
  const news = data.allFile.edges;

  return (
    <div>
      <BackgroundImage>
        <h1>News</h1>
      </BackgroundImage>

      {

      }
    </div>

  );
};

export default NewsPage;
