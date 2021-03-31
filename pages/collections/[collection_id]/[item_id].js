import Head from 'next/head';
import { useAppContext } from '../../appContext.js';

// export const getStaticPaths = async () => {
//   let collectionId = 'birds';
//   const collections = await fetch(`http://localhost:3000/api/collection/${collectionId}`)
//     .then(result => result.json());
//   // fetch collections from individual users
//   console.log("collections: ", collections[0].items);
//   const paths = collections[0].items.map((item) => {

//     return {
//       params: {
//         id: item.id.toString()
//       }
//     };
//   });

//   return {
//     paths: paths,
//     fallback: false
//   };
// };

// export const getStaticProps = async (context) => {
//   const id = context.params.id;
//   console.log("context: ", context);
//   // fetch items from individual collections
//   const items = await fetch(`http://localhost:3000/api/collections/${id}`)
//     .then(result => result.json());


//   return {
//     props: {
//       item: items
//     }
//   };
// };



export default function Item() {

  return (
    <div>
      <h1> Page</h1>
    </div>
  );
}

// //Route to access this page
// //localhost:3000/collections/collection_id/item_id