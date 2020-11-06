import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import cx from 'classnames';

import styles from './AboutUs.module.scss';

const AboutUs = () => {
  const data = useStaticQuery(graphql`
    {
        about: markdownRemark(id: {eq: "f60a85e5-16d8-5343-98e3-e22b022a528c"}) {
            frontmatter {
                about_us {
                    biografia
                    foto {
                        childImageSharp {
                            fluid {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
    }
    `);
  const aboutData = data.about.frontmatter.about_us;

  return (
    <div className={styles.container}>
      <h1 className={cx('giant', 'black', styles.mobile)}>About us</h1>
      <Img
        className={styles.image}
        fluid={aboutData?.foto.childImageSharp.fluid}
      />
      <div className={styles.content}>
        <h1 className={cx('giant', 'black', styles.desktop)}>About us</h1>
        <p
      // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: aboutData.biografia }}
          className={styles.biografia}
        />
      </div>
    </div>
  );
};

export default AboutUs;
