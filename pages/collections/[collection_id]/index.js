import Head from 'next/head';
import Layout from '../../../components/layout/index';
import dark from '../../../styles/base-dark.module.css';
import light from '../../../styles/base-light.module.css';
import { useEffect, useState } from 'react';

export default function Collection() {
  const [data, setData] = useState(null);
  const [theme, setTheme] = useState(light);
  const [user, setUser] = useState(1)
  // useEffect(() => {
  //   fetch(`http://localhost:3000/api/collections/`)
  //     .then(result => result.json())
  //     .then(data => setData(data))
  //     .catch(err => console.error(err));
  // }, []);

  const click = () => {
    theme === dark ? setTheme(light) : setTheme(dark);
  };
  console.log(theme);
  console.log(data)

  return (
       <>
      <Layout>
        <div className={theme.page}>
          <div className="page-header">
            <div className="path">
              <span className="passed">your collections / </span>
              birds
            </div>
            <button className={theme.editBtn}>add collection</button>

          </div>

          <div className="card-container">
            <div className={`${theme.blueItemCard} card`}>Kyle</div>
              <div className={`${theme.blueItemCard} card`}>Joel</div>
              <div className={`${theme.blueItemCard} card`}>Jay</div>
              <div className={`${theme.blueItemCard}  card`}>Sam</div>
              <div className={`${theme.blueItemCard} card`}>Kyle</div>
              <div className={`${theme.blueItemCard} card`}>Joel</div>
              <div className={`${theme.blueItemCard} card`}>Jay</div>
              <div className={`${theme.blueItemCard}  card`}>Sam</div>
            </div>
            </div>
      </Layout>
    </>
  );
}


//Route to access this page
//localhost:3000/collections/collection_id



// import Head from 'next/head';

