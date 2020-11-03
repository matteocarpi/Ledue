import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
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
      <div className={styles.logoWrapper}>
        <LogoDark className={styles.logo} />
      </div>

      {slides.map((slide, i) => (
        <div
          key={slide.foto.id}
          className={cx(index === i && styles.active, styles.slide)}
        >
          <Img
            fluid={slide.foto.childImageSharp.fluid}
          />
        </div>
      ))}
    </div>
  );
};

export default Slider;

Slider.propTypes = {
  slides: PropTypes.array.isRequired,
};
