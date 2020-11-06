import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BackgroundImage from 'gatsby-background-image';
import cx from 'classnames';
import { Link } from 'gatsby';

import ArrowLink from '../arrow-link';
import Button from '../utils/button';
import Circle from '../../../content/svg/circle.svg';
import Outline from '../../../content/svg/outline.svg';

import styles from './NewsPreview.module.scss';

const NewsPreview = ({ news }) => {
  const [index, setIndex] = useState(0);

  const currentNews = news[index].node.childMarkdownRemark;

  return (
    <>
      <BackgroundImage
        className={styles.mobile_banner}
        fluid={currentNews.frontmatter.foto.childImageSharp.fluid}
      >
        <ArrowLink kind="internal" link="/news">
          news
        </ArrowLink>
        {/* Arrow link to be insert here */}
      </BackgroundImage>

      <div className={styles.container}>
        <BackgroundImage
          fluid={currentNews.frontmatter.foto.childImageSharp.fluid}
          className={styles.image}
        >
          <Link to={currentNews.fields.slug}>
            <h1 className={cx('giant', 'fondotinta', styles.title)}>
              {currentNews.frontmatter.title}
            </h1>
          </Link>
        </BackgroundImage>

        <div className={styles.excerpt_wrapper}>
          <p className={styles.excerpt}>{currentNews.excerpt}</p>
        </div>

        <div className={styles.selector}>
          {news.map((n, i) => {
            if (i === index) {
              return (
                <Button
                  key={n.id}
                  className={styles.circle}
                  onClick={() => {}}
                >
                  <Circle />
                </Button>
              );
            }
            return (
              <Button
                key={n.id}
                className={styles.circle}
                onClick={() => setIndex(i)}
              >
                <Outline />
              </Button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default NewsPreview;

NewsPreview.propTypes = {
  news: PropTypes.object.isRequired,
};
