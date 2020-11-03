import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import cx from 'classnames';

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
        <Img
          key={slide.foto.id}
          className={cx(index === i && styles.active, styles.slide)}
          fluid={slide.foto.childImageSharp.fluid}
        />
      ))}

    </div>
  );
};

export default Slider;

Slider.propTypes = {
  slides: PropTypes.array.isRequired,
};
