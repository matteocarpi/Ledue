import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import BackgroundImage from 'gatsby-background-image';
import cx from 'classnames';
import LogoLight from '../../../content/svg/logo_ledue_light.svg';
import LogoDark from '../../../content/svg/logo_ledue_dark.svg';

import styles from './slider.module.scss';

const Slider = ({ slides }) => {
  const [index, setIndex] = useState(0);

  const pause = 2000;

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
            {slide.colore_del_logo === 'Nero'
              ? <LogoDark />
              : <LogoLight />}
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
