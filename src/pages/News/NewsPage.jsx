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
    allFile(filter: {relativeDirectory: {eq: "news"}}) {
      edges {
        node {
          id
          childMarkdownRemark {
            fields {
              slug
            }
            html
            excerpt
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
      }
    }
      pageInfo: markdownRemark(id: {eq: "81a8aec2-c30d-5c23-bd1b-713cc49f7cc2"}) {
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
  `);

  const news = data.allFile.edges;

  return (
    <Layout className={styles.container}>
      <BackgroundImage
        className={styles.title_background}
        fluid={data.pageInfo.frontmatter.foto.childImageSharp.fluid}
      >
        <h1 className={cx('giant', 'fondotinta', styles.title)}>News</h1>
      </BackgroundImage>

      {news.map((n) => {
        const article = n.node;
        return (
          <div
            key={article.id}
            className={styles.article_container}
          >
            <Img
              className={styles.article_foto}
              fluid={{
                ...article.childMarkdownRemark.frontmatter.foto.childImageSharp.fluid,
                aspectRatio: 3 / 4,
              }}
            />
            <Link className={styles.article_title} to={article.childMarkdownRemark.fields.slug}>
              <h2>
                {article.childMarkdownRemark.frontmatter.title}
              </h2>
            </Link>
            <p>
              <p
            // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: article.childMarkdownRemark.excerpt }}
              />
              <Link to={article.childMarkdownRemark.fields.slug}>Leggi di più</Link>
            </p>
          </div>
        );
      })}
    </Layout>

  );
};

export default NewsPage;
