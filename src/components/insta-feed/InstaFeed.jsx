import React from 'react';
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
    <a className={styles.container} target="_blank" rel="noreferrer" href={data.markdownRemark.frontmatter.instagram}>
      <FontAwesomeIcon className={styles.icon} icon={faInstagram} />
      <h1>@ledue_handbags</h1>
    </a>
  );
};
export default InstaFeed;
