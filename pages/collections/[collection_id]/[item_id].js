import Head from 'next/head';
import { useAppContext } from '../appContext.js';

export const getStaticPaths = async () => {
  let user = 1;
  const collections = await fetch(`http://localhost:3000/api/collections?id=${user}`)
    .then(result => result.json());
  // fetch collections from individual users
  const paths = collections.map((collection) => {
    return {
      params: {
        id: collection.id.toString()
      }
    };
  });

  return {
    paths: paths,
    fallback: false
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  console.log("context: ", context);
  // fetch items from individual collections
  const items = await fetch(`http://localhost:3000/api/collections?id=${id}`)
    .then(result => result.json());


  return {
    props: {
      collection: items
    }
  };
};




export default function Collections({ collection }) {
  console.log(collection);
  return (
    <div>
      <h1>{collection.id} Page</h1>
    </div>
  );
}

//Route to access this page
//localhost:3000/collections/collection_id/item_id