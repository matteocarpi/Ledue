import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BackgroundImage from 'gatsby-background-image';
import ArrowLink from '../arrow-link';

import styles from './NewsPreview.module.scss';

const NewsPreview = ({ news }) => {
  console.log(news);

  const [index, setIndex] = useState(0);

  const currentNews = news[index].node.childMarkdownRemark;

  return (
    <BackgroundImage
      className={styles.mobile_banner}
      fluid={currentNews.frontmatter.foto.childImageSharp.fluid}
    >
      <ArrowLink kind="internal" link="/news">
        news
      </ArrowLink>
      {/* Arrow link to be insert here */}
    </BackgroundImage>
  );
};

export default NewsPreview;

NewsPreview.propTypes = {
  news: PropTypes.object.isRequired,
};
