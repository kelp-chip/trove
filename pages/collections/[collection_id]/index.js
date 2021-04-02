import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAppContext } from '../../appContext.js';
import ItemGrid from '../../../components/collection/itemGrid.js';
import ItemView from '../../../components/collection/itemView.js';


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
  console.log("data: ", data);
  const [selectedItem, setSelectedItem] = useState(data.items);
  const { theme } = useAppContext();
  let color = data.color;

  const setItem = (e) => {

    let id = (e.target.getAttribute('data-id'));
    let curItem = data.items.filter(item => item.id === Number(id));

    setSelectedItem(curItem);

  };

  const items = data.items.map(item => (<div onClick={setItem} data-id={item.id} className={`${theme[`${color}ItemCard`]} card`}>{item.name}</div>));


  console.log("selectedItem: ", selectedItem);
  return (
    <>
      {/* <ItemGrid items={items} name={data.id}/> */}
      <ItemView selectedItem={selectedItem} items={items} name={data.id} />

    </>
  );
}

export default Collection;

//Route to access this page
//localhost:3000/collections/collection_id



// import Head from 'next/head';

  // <Link key={item.id} href={`/collections/${collection.id}`}><div key={collection.id} className={`${theme[`${collection.color}CollectionCard`]} card`} >{collection.id}</div></Link>)