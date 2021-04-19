import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useStaticQuery, graphql } from 'gatsby';
import { motion } from 'framer-motion';
import addToMailChimp from 'gatsby-plugin-mailchimp';

import * as styles from './Newsletter.module.scss';
import Loader from '../utils/loader';

const Newsletter = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [done, setDone] = useState(false);

  const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "Home" } }) {
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

      addToMailChimp(values.email)
        .then(() => {
          setDone(true);
          setLoading(false);
        })
        .catch(() => setError(true));
    },
  });

  return (
    <div className={styles.container}>
      <h2>Newsletter</h2>

      {loading && !error && <Loader type="TailSpin" />}

      {error && (
        <motion.div
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <p className={styles.slogan}>
            Ups... qualcosa è andato storto :( riprova più tardi
          </p>
        </motion.div>
      )}

      {done && (
        <motion.div
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <p className={styles.slogan}>
            {data.markdownRemark.frontmatter.thankyou}
          </p>
        </motion.div>
      )}

      {!done && !loading && (
        <>
          <p className={styles.slogan}>
            {data.markdownRemark.frontmatter.newsletter}
          </p>

          <form
            className={styles.form_container}
            onSubmit={formik.handleSubmit}
          >
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
