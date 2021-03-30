import Head from 'next/head';
import dark from '../styles/base-dark.module.css';
import light from '../styles/base-light.module.css';
import { useEffect, useState } from 'react';
import Layout from '../components/layout/index';


export default function Home() {
  const [data, setData] = useState(null);
  const [theme, setTheme] = useState(light);

  useEffect(() => {
    fetch('http://localhost:3000/api/collections')
      .then(result => result.json())
      .then(data => setData(data))
      .catch(err => console.error(err));
  }, []);

  const click = () => {
    theme === dark ? setTheme(light) : setTheme(dark);
  };
  console.log(theme);
  return (
    <>
      <Layout>
        <div className={theme.page}>
          <div className="page-header">
            <div className="path">
              your collections
            </div>
            <button className={theme.editBtn}>add collection</button>

          </div>

            <div className="card-container">
              <div className={`${theme.redCollectionCard} card`} > Birds</div>
              <div className={`${theme.blueCollectionCard} card`}>Birds</div>
              <div className={`${theme.greenCollectionCard} card`}>Birds</div>
              <div className={`${theme.yellowCollectionCard} card`}>Birds</div>
              <div className={`${theme.redCollectionCard} card`} > Birds</div>
              <div className={`${theme.blueCollectionCard} card`}>Birds</div>
              <div className={`${theme.greenCollectionCard} card`}>Birds</div>
              <div className={`${theme.yellowCollectionCard} card`}>Birds</div>
            </div>
            </div>
      </Layout>
    </>
  );
};
