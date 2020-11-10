import React, { useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import styles from './InstaFeed.module.scss';

const InstaFeed = () => {
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
      redirect: 'follow',
    };

    fetch('https://graph.instagram.com/786315888592536/media?fields=id,caption,media_url&access_token=IGQVJVVkM2YU5ESGRZASktHTHRZAcGgyeWN4UlhlaEM5SG1UQ2xnVHdLbVZAxNFdUVEhMNFI3a1VDd1N2Mm1sb3NoQU5rOWVpTzNnWWRBVmsyRlFxSlgyS3Vqa0F0SUpTNGdCeHNNZADFVYTBEVlFlemQySQZDZD', requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
  });

  // const [data, setData] = useState();
  // // eslint-disable-next-line no-new
  // useEffect(() => {
  //   const requestOptions = {
  //     method: 'GET',
  //     redirect: 'follow',
  //   };

  //   fetch('https://www.instagram.com/graphql/query/?query_hash=56a7068fea504063273cc2120ffd54f3&variables=%7B%22id%22%3A%2231044158025%22%2C%22first%22%3A12%7D', requestOptions)
  //     .then((response) => response.json())
  //     .then((result) => console.log(result))
  //     .catch((error) => console.log('error', error));
  // });
  return (
    <div className={styles.container}>
      <a className={styles.container} target="_blank" rel="noreferrer" href={data.markdownRemark.frontmatter.instagram}>
        <FontAwesomeIcon className={styles.icon} icon={faInstagram} />
        <h1>@ledue_handbags</h1>
      </a>

    </div>
  );
};
export default InstaFeed;
