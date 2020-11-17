import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useStaticQuery, graphql } from 'gatsby';
import { motion } from 'framer-motion';
import styles from './Newsletter.module.scss';
import Loader from '../utils/loader';

const Newsletter = () => {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: {title: {eq: "Home"}}) {
        frontmatter {
          newsletter
          thankyou
        }
      }
    }
  `);
  const formik = useFormik({
    initialValues: {
      email: '',
    },

    onSubmit: (values) => {
      setLoading(true);

      setTimeout(() => {
        setDone(true);
        setLoading(false);
      }, 2000);
      // eslint-disable-next-line no-console
      console.log(JSON.stringify(values, null, 2));
    },

  });

  return (
    <div className={styles.container}>
      <h2>Newsletter</h2>
      {loading && <Loader type="TailSpin" />}

      {done && (
        <motion.div
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <p
            className={styles.slogan}
          >
            {data.markdownRemark.frontmatter.thankyou}
          </p>
        </motion.div>
      )}

      {!done && !loading && (
        <>
          <p
            className={styles.slogan}
          >
            {data.markdownRemark.frontmatter.newsletter}
          </p>

          <form className={styles.form_container} onSubmit={formik.handleSubmit}>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              placeholder="Email"
            />

            <button type="submit">Subscribe</button>

          </form>
        </>
      )}
    </div>
  );
};

export default Newsletter;
