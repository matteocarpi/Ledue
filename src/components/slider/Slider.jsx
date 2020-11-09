import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

import BackgroundImage from 'gatsby-background-image';
import cx from 'classnames';
import LogoLight from '../../../content/svg/logo_ledue_light.svg';
import LogoDark from '../../../content/svg/logo_ledue_dark.svg';

import styles from './slider.module.scss';

const Slider = ({ slides }) => {
  const [index, setIndex] = useState(0);

  const pause = 10000;

  const slidesNumber = slides.length;

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

  const [hasScrolled, setHasScrolled] = useState(false);

  useScrollPosition(({ currPos }) => {
    if (currPos.y < -50 && !hasScrolled) {
      setHasScrolled(!hasScrolled);
    } else if (currPos.y >= -50 && hasScrolled) {
      setHasScrolled(false);
    }
  });

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
            <AnimatePresence>
              {!hasScrolled && (
              <motion.div
                className={styles.logo_wrapper}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {slide.colore_del_logo === 'Nero'
                  ? <LogoDark className={styles.logo} />
                  : <LogoLight className={styles.logo} />}
              </motion.div>
              )}
            </AnimatePresence>
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
