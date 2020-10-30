/* eslint-disable no-undef */
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const longSlug = createFilePath({ node, getNode, basePath: 'content/pages' });
    const slug = longSlug.split('/');
    createNodeField({
      node,
      name: 'slug',
      value: `/${slug[slug.length - 2]}/`,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const collections = graphql(`
    query {
      allFile(filter: {relativeDirectory: {eq: "collections"}}) {
        edges {
          node {
            childMarkdownRemark {
              fields {
                slug
              }
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allFile.edges.forEach(({ node }) => {
      createPage({
        path: node.childMarkdownRemark.fields.slug,
        component: path.resolve('./src/templates/collection.js'),
        context: {
          slug: node.childMarkdownRemark.fields.slug,
        },
      });
    });
  });

  const posts = graphql(`
    query {
      allFile(filter: {relativeDirectory: {eq: "posts"}}) {
        edges {
          node {
            childMarkdownRemark {
              fields {
                slug
              }
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allFile.edges.forEach(({ node }) => {
      createPage({
        path: node.childMarkdownRemark.fields.slug,
        component: path.resolve('./src/templates/post.js'),
        context: {
          slug: node.childMarkdownRemark.fields.slug,
        },
      });
    });
  });

  return Promise.all([collections, posts]);
};