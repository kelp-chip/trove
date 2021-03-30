import Head from 'next/head';
import Link from 'next/link';
import dark from '../styles/base-dark.module.css';
import light from '../styles/base-light.module.css';
import { useEffect, useState } from 'react';
import Layout from '../components/layout/index';




export const getStaticProps = async () => {
  let user = 1;
   const data = await fetch(`http://localhost:3000/api/collections?id=${user}`)
      .then(result => result.json())
    

  return {
    props: {
      data: data
    }
  };
};




function Home({data}) {

  const [theme, setTheme] = useState(light)
  const click = () => {
    theme === dark ? setTheme(light) : setTheme(dark);
  };
  console.log("theme: ",theme);
  console.log(data)



  const collections = data.map(collection => (<Link href={`/collections/${collection.id}`}><div key={collection.id} className={`${theme[`${collection.color}CollectionCard`]} card`} >{collection.id}</div></Link>));

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
               {collections}
            </div>
            </div>
      </Layout>
    </>
  );
};

export default Home;