import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Img from 'gatsby-image';

import styles from './InstaFeed.module.scss';

const InstaFeed = () => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: {title: {eq: "Impostazioni"}}) {
        frontmatter {
          instagram
        }
      }
      allInstaNode(sort: {fields: timestamp, order: DESC}, limit: 9) {
        edges {
          node {
            id
            caption
            localFile {
              childImageSharp {
                fluid {
                  aspectRatio
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }    
  `);

  const instaData = data.allInstaNode.edges;

  return (
    <div className={styles.container}>
      <a className={styles.container} target="_blank" rel="noreferrer" href={data.markdownRemark.frontmatter.instagram}>
        <FontAwesomeIcon className={styles.icon} icon={faInstagram} />
        <h2>@ledue_handbags</h2>
      </a>

      <div className={styles.feed_container}>

        {instaData?.map((edge) => (
          <Img
            className={styles.thumb}
            alt={edge.node.caption}
            key={edge.node.id}
            fluid={edge.node.localFile.childImageSharp.fluid}
            aspectRatio={edge.node.localFile.childImageSharp.fluid.aspectRatio}
          />
        ))}

      </div>
    </div>
  );
};
export default InstaFeed;
