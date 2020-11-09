import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, useTransform, useViewportScroll } from 'framer-motion';

import BackgroundImage from 'gatsby-background-image';
import cx from 'classnames';
import LogoLight from '../../../content/svg/logo_ledue_light.svg';
import LogoDark from '../../../content/svg/logo_ledue_dark.svg';

import styles from './slider.module.scss';

const Slider = ({ slides }) => {
  const [index, setIndex] = useState(0);

  const pause = 10000;

  const slidesNumber = slides.length;

  const { scrollYProgress } = useViewportScroll();

  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  useEffect(() => {
    let interval = null;

    const updateSlide = () => {
      if (slidesNumber - 1 <= index) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    };

    interval = setInterval(() => {
      updateSlide();
    }, pause);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className={styles.container}>
      {slides.map((slide, i) => (
        <div
          key={slide.foto.id}
          className={cx(index === i && styles.active, styles.slide)}
        >
          <BackgroundImage
            fluid={slide.foto.childImageSharp.fluid}
            className={styles.image}
          >
            <motion.div
              className={styles.logo_wrapper}
              style={{
                opacity,
              }}
            >
              {slide.colore_del_logo === 'Nero'
                ? <LogoDark className={styles.logo} />
                : <LogoLight className={styles.logo} />}
            </motion.div>
          </BackgroundImage>
        </div>
      ))}
    </div>
  );
};

export default Slider;

Slider.propTypes = {
  slides: PropTypes.array.isRequired,
};
