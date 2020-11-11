import React, { useRef, useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

export const EnterOnScroll = ({
  opacity, x, y, children, className,
}) => {
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

  const opacityValue = useTransform(
    scrollYProgress,
    [
      scrollPercentageStart - height, scrollPercentageEnd - ((height / 4) * 3),
    ],
    opacity,
  );

  const translateX = useTransform(
    scrollYProgress,
    [
      scrollPercentageStart - height,
      scrollPercentageEnd - height,
    ],
    x,
  );

  const translateY = useTransform(
    scrollYProgress,
    [
      scrollPercentageStart - height,
      scrollPercentageEnd - height,
    ],
    y,
  );

  return (
    <motion.div
      ref={ref}
      style={{
        opacity: opacityValue,
        translateX,
        translateY,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

EnterOnScroll.defaultProps = {
  opacity: [1, 1],
  x: [0, 0],
  y: [0, 0],
  className: '',
};

EnterOnScroll.propTypes = {
  opacity: PropTypes.array,
  x: PropTypes.array,
  y: PropTypes.array,
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
};

export default EnterOnScroll;
