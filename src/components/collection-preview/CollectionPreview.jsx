import React from 'react';
import PropTypes from 'prop-types';
import BackgroundImage from 'gatsby-background-image';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import cx from 'classnames';

import styles from './CollectionPreview.module.scss';

const CollectionPreview = ({ collection }) => {
  const data = collection.childMarkdownRemark.frontmatter;

  const uri = collection.childMarkdownRemark.fields.slug;

  return (
    <Link to={uri} className={styles.wrapper}>

      <div className={styles.container}>

        <BackgroundImage
          fluid={data.galleria[0].childImageSharp.fluid}
          className={styles.main_image}
        >
          <div className={styles.overlay}>

            <h1 className={cx('giant', 'fondotinta', styles.collection_title)}>
              {data.title}
            </h1>

          </div>
        </BackgroundImage>

        <div className={styles.galleria}>
          <div className={styles.left_column}>
            <Img
              fluid={data.galleria[1].childImageSharp.fluid}
              key={data.galleria[1].childImageSharp.id}
              className={styles.thumb}
            />
            <Img
              fluid={data.galleria[2].childImageSharp.fluid}
              key={data.galleria[2].childImageSharp.id}
              className={styles.thumb}
            />
          </div>

          <div className={styles.right_column}>
            <Img
              fluid={data.galleria[3].childImageSharp.fluid}
              key={data.galleria[3].childImageSharp.id}
              className={styles.thumb}
            />
            <Img
              fluid={data.galleria[4].childImageSharp.fluid}
              key={data.galleria[4].childImageSharp.id}
              className={styles.thumb}
            />
          </div>
        </div>

      </div>
    </Link>
  );
};

export default CollectionPreview;

CollectionPreview.propTypes = {
  collection: PropTypes.object.isRequired,
};
