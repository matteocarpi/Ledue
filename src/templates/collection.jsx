import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import cx from 'classnames';
import BackgroundImage from 'gatsby-background-image';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import ArrowLink from '../components/arrow-link';

import styles from './Collection.module.scss';

const Collection = ({ data }) => {
  const { galleria } = data.collectionData.frontmatter;

  return (
    <Layout>
      <BackgroundImage
        className={styles.title_slide}
        fluid={data.collectionData.frontmatter.foto.childImageSharp.fluid}
        style={{ backgroundPosition: 'top' }}
      >
        <h1 className={cx('giant', 'fondotinta', styles.title)}>
          {data.collectionData.frontmatter.title}
        </h1>

        <p className={styles.sottotitolo}>
          {data.collectionData.frontmatter.sottotitolo}
        </p>

        <ArrowLink kind="internal" className={styles.shop_link} link="#">shop</ArrowLink>

      </BackgroundImage>

      <div className={styles.galleria}>

        {galleria.map((foto, index) => {
          const posizione = index % 4;

          if (posizione === 3) {
            return (
              <div className={styles.left_aligned}>
                <Img
                  className={cx(styles.photo, styles[`photo_${posizione}`])}
                  fluid={{
                    ...foto.childImageSharp.fluid,
                    aspectRatio: foto.childImageSharp.fluid.aspectRatio,
                  }}
                />
              </div>
            );
          }
          return (
            <Img
              className={cx(styles.photo, styles[`photo_${posizione}`])}
              fluid={{
                ...foto.childImageSharp.fluid,
                aspectRatio: foto.childImageSharp.fluid.aspectRatio,
              }}
            />
          );
        })}

      </div>

    </Layout>
  );
};

export default Collection;

export const query = graphql`
query CollectionData($slug: String!) {
  collectionData: markdownRemark(fields: {slug: {eq: $slug}}) {
    frontmatter {
      title
      sottotitolo
      link_allo_shop
      foto {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      galleria {
        childImageSharp {
          fluid {
            aspectRatio
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}
`;

Collection.propTypes = {
  // eslint-disable-next-line react/require-default-props
  data: PropTypes.node,
};
