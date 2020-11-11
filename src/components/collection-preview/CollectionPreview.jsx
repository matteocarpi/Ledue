import React, { useRef, useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import BackgroundImage from 'gatsby-background-image';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import cx from 'classnames';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

import styles from './CollectionPreview.module.scss';

const CollectionPreview = ({ collection }) => {
  const ref = useRef();

  const [scrollPercentageStart, setScrollPercentageStart] = useState();
  const [scrollPercentageEnd, setScrollPercentageEnd] = useState();

  const { scrollYProgress } = useViewportScroll();

  useLayoutEffect(() => {
    // Get the distance from the start of the page to the element start
    const rect = ref.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const offsetTop = rect.top + scrollTop;

    const offsetStart = rect.top + scrollTop;
    const offsetEnd = (offsetTop + rect.height);

    const elementScrollStart = offsetStart / document.body.clientHeight;
    const elementScrollEnd = offsetEnd / document.body.clientHeight;

    setScrollPercentageStart(elementScrollStart);
    setScrollPercentageEnd(elementScrollEnd);
  });

  const height = (scrollPercentageEnd - scrollPercentageStart);

  const opacity = useTransform(
    scrollYProgress,
    [
      scrollPercentageStart - height, scrollPercentageEnd - ((height / 4) * 3),
    ],
    [1, 1],
  );

  const translateX = useTransform(
    scrollYProgress,
    [
      scrollPercentageStart - height,
      scrollPercentageEnd - height,
    ],
    [400, 0],
  );

  const data = collection.childMarkdownRemark.frontmatter;

  const uri = collection.childMarkdownRemark.fields.slug;

  return (
    <Link to={uri} className={styles.wrapper}>
      <motion.div
        ref={ref}
        style={{
          opacity,
          translateX,
        }}
        className={styles.container}
      >

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

      </motion.div>
    </Link>
  );
};

export default CollectionPreview;

CollectionPreview.propTypes = {
  collection: PropTypes.object.isRequired,
};
