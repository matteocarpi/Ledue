import React from 'react';
import { useFormik } from 'formik';
import { useStaticQuery, graphql } from 'gatsby';

import styles from './Newsletter.module.scss';

const Newsletter = () => {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: {title: {eq: "Home"}}) {
        frontmatter {
          newsletter
        }
      }
    }
  `);
  const formik = useFormik({
    initialValues: {
      email: '',
    },

    onSubmit: (values) => {
      // eslint-disable-next-line no-console
      console.log(JSON.stringify(values, null, 2));
    },

  });

  return (
    <div className={styles.container}>
      <h2>Newsletter</h2>
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
    </div>
  );
};

export default Newsletter;
