import React, { useEffect, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import styles from './InstaFeed.module.scss';

const InstaFeed = () => {
  const [instaData, setInstaData] = useState();
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: {title: {eq: "Impostazioni"}}) {
        frontmatter {
          instagram
        }
      }
    }    
  `);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
    };

    fetch('https://graph.instagram.com/me/media?fields=id,media_url,media_type,caption&access_token=IGQVJVVkM2YU5ESGRZASktHTHRZAcGgyeWN4UlhlaEM5SG1UQ2xnVHdLbVZAxNFdUVEhMNFI3a1VDd1N2Mm1sb3NoQU5rOWVpTzNnWWRBVmsyRlFxSlgyS3Vqa0F0SUpTNGdCeHNNZADFVYTBEVlFlemQySQZDZD', requestOptions)
      .then((response) => response.json())
      .then((result) => setInstaData(result))
      .catch((error) => console.log('error', error));
  }, []);

  return (
    <div className={styles.container}>
      <a className={styles.container} target="_blank" rel="noreferrer" href={data.markdownRemark.frontmatter.instagram}>
        <FontAwesomeIcon className={styles.icon} icon={faInstagram} />
        <h1>@ledue_handbags</h1>
      </a>

      {instaData?.data?.map((picture) => {
        console.log(picture.url);
        return (<img alt={picture.caption} key={picture.id} src={picture.url} />);
      })}
    </div>
  );
};
export default InstaFeed;
