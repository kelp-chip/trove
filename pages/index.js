import Head from 'next/head';
import styles from '../styles/base-light.module.css';
import { useEffect, useState } from 'react';
import Layout from '../components/layout';


export default function Home() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('http://localhost:3000/api/collections')
      .then(result => result.json())
      .then(data => setData(data))
      .catch(err => console.error(err));
  }, []);
  return (

    <div>
    <Layout>
      <div>
        <div>
          Players:{" "}
          {data ? data.map((input) => (
            input.player
          )) : <span>Loading...</span>}
        </div>
      </div>
    </Layout>
  </div>
  );
}
