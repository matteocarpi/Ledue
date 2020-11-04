import React from 'react';
import PropTypes from 'prop-types';
import BackgroundImage from 'gatsby-background-image';
import { Link } from 'gatsby';
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
          className={styles.image}
        >
          <div className={styles.overlay}>

            <h1 className={cx('giant', 'fondotinta', styles.collection_title)}>
              {data.title}
            </h1>

          </div>
        </BackgroundImage>

      </div>
    </Link>
  );
};

export default CollectionPreview;

CollectionPreview.propTypes = {
  collection: PropTypes.object.isRequired,
};
