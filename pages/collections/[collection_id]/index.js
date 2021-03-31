import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAppContext } from '../../appContext.js';


export const getServerSideProps = async (context) => {
  let id = context.params.collection_id;
  const data = await fetch(`http://localhost:3000/api/collections/${id}`)
    .then(result => result.json());


  return {
    props: {
      data: data[0]
    }
  };
};

function Collection({ data }) {
  console.log('data: ', data);
  const { theme } = useAppContext();
  // <Link key={item.id} href={`/collections/${collection.id}`}><div key={collection.id} className={`${theme[`${collection.color}CollectionCard`]} card`} >{collection.id}</div></Link>)
  let color = data.color;
  const items = data.items.map(item => (<div className={`${theme[`${color}ItemCard`]} card`}>{item.name}</div>));




  return (
    <div>
      <div className={theme.page}>
        <div className="page-header">
          <div className="path">

            <Link href='/'><span className="passed">your collections / </span></Link>
              {data.id}
            </div>
          <button className={theme.editBtn}>add collection</button>
        </div>
        <div className="card-container">
          {items}
        </div>
      </div>
    </div>
  );
}

export default Collection;

//Route to access this page
//localhost:3000/collections/collection_id



// import Head from 'next/head';

