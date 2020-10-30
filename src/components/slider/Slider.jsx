import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import styles from './slider.module.scss';

const Slider = ({ slides }) => {
  const [index, setIndex] = useState(0);
  const [slide, setSlide] = useState(slides[index]);

  const pause = 5000;

  const slidesNumber = slides.length;

  useEffect(() => {
    let interval = null;

    const updateSlide = () => {
      if (slidesNumber - 1 <= index) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
      setSlide(slides[index]);
    };

    interval = setInterval(() => {
      updateSlide();
    }, pause);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className={styles.container}>
      <Img fluid={slide.foto.childImageSharp.fluid} />
    </div>
  );
};

export default Slider;

Slider.propTypes = {
  slides: PropTypes.array.isRequired,
};
