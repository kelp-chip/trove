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

  return (
    <>
      <Layout>
        <div>
          <h1>Collections:{" "}</h1>
          {data ? data[0].collections.map((input) => (
            <div key={input.id}>{input.id}</div>
          )) : <span>Loading...</span>}
        </div>
        <div className={styles.buttonContainer}>
          <button onClick={click}>theme changer</button>
          Buttons
          <button className={theme.editBtn}>edit item</button>
          <button className={theme.closeBtn}>close item</button>
          <button className={theme.saveBtn}>save item</button>
          <button className={theme.cancelBtn}>cancel</button>
          <button className={theme.deleteBtn}>delete collection</button>
          <button className={theme.addFieldBtn}>+ add a field</button>
        </div>
      </Layout>
    </>
  );
}

