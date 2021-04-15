import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Img from 'gatsby-image';
import cx from 'classnames';

import Layout from '../../components/layout';
import styles from './NewsPage.module.scss';

const NewsPage = () => {
  const data = useStaticQuery(graphql`
    {
      posts: allMarkdownRemark(
        filter: { frontmatter: { doctype: { eq: "news" } } }
        sort: { fields: frontmatter___data, order: DESC }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            html
            excerpt(format: HTML, pruneLength: 200)
            frontmatter {
              title
              foto {
                childImageSharp {
                  fluid(jpegQuality: 50, quality: 50, maxWidth: 1024) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
      pageInfo: markdownRemark(frontmatter: { title: { eq: "News" } }) {
        frontmatter {
          title
          foto {
            childImageSharp {
              fluid(jpegQuality: 50, quality: 50, maxWidth: 1920) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  const news = data.posts.edges;

  return (
    <Layout className={styles.container}>
      <BackgroundImage
        className={styles.title_background}
        fluid={data.pageInfo.frontmatter.foto.childImageSharp.fluid}
      >
        <h1 className={cx('giant', 'fondotinta', styles.title)}>News</h1>
      </BackgroundImage>

      {news.map((n, i) => {
        const isRightPicture = i % 2 !== 0;

        const article = n.node;
        return (
          <div
            key={article.id}
            className={cx(
              styles.article_container,
              isRightPicture && styles.right
            )}
          >
            <Img
              className={cx(styles.article_foto, styles.mobile)}
              fluid={{
                ...article.frontmatter.foto.childImageSharp.fluid,
                aspectRatio: 3 / 4,
              }}
            />

            <Img
              className={cx(styles.article_foto, styles.desktop)}
              fluid={{
                ...article.frontmatter.foto.childImageSharp.fluid,
                aspectRatio: 122 / 100,
              }}
            />

            <div className={styles.article_preview}>
              <Link className={styles.article_title} to={article.fields.slug}>
                <h2>{article.frontmatter.title}</h2>
              </Link>
              <p>
                <p
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{
                    __html: article.excerpt,
                  }}
                />
                <Link to={article.fields.slug}>Leggi di più</Link>
              </p>
            </div>
          </div>
        );
      })}
    </Layout>
  );
};

export default NewsPage;
