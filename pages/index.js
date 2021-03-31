import Link from 'next/link';
import { useAppContext } from './appContext.js';


export const getStaticProps = async () => {
  let user = 1;
  const data = await fetch(`http://localhost:3000/api/collections?id=${user}`)
    .then(result => result.json());


  return {
    props: {
      data: data
    }
  };
};


function Home({ data }) {
  const { theme } = useAppContext();

  const collections = data.map(collection => (<Link href={`/collections/${collection.id}`}><div key={collection.id} className={`${theme[`${collection.color}CollectionCard`]} card`} >{collection.id}</div></Link>));

  return (
    <>
      {/* <div className={theme.page}> */}
        <div className="page-header">
          <div className="path">
            your collections
            </div>
          <button className={theme.editBtn}>add collection</button>
        </div>
        <div className="card-container">
          {collections}
        </div>
      {/* </div> */}
    </>
  );
};

export default Home;