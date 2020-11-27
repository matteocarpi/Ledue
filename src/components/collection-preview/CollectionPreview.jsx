import React from 'react';
import PropTypes from 'prop-types';
import BackgroundImage from 'gatsby-background-image';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import cx from 'classnames';

import styles from './CollectionPreview.module.scss';

const CollectionPreview = ({ collection }) => {
  const data = collection.frontmatter;

  const uri = collection.fields.slug;

  return (
    <Link to={uri} className={styles.wrapper}>

      <BackgroundImage
        fluid={{ ...data.galleria[0].childImageSharp.fluid, aspectRatio: 3 / 4 }}
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

          {data?.galleria.map((edge, index) => {
            if (index === 1 || index === 2) {
              return (

                <Img
                  key={edge.childImageSharp.id}
                  className={styles.thumb}
                  fluid={{
                    ...edge.childImageSharp.fluid,
                    aspectRatio: index === 2 || index === 3 ? 4 / 3 : 3 / 4,
                  }}
                />
              );
            }
          })}

        </div>

        <div className={styles.right_column}>
          {data?.galleria.map((edge, index) => {
            if (index === 3 || index === 4) {
              return (

                <Img
                  key={edge.childImageSharp.id}
                  className={styles.thumb}
                  fluid={{
                    ...edge.childImageSharp.fluid,
                    aspectRatio: index === 2 || index === 3 ? 4 / 3 : 3 / 4,
                  }}
                />
              );
            }
          })}

        </div>
      </div>

    </Link>
  );
};

export default CollectionPreview;

CollectionPreview.propTypes = {
  collection: PropTypes.object.isRequired,
};
