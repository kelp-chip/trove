import Head from 'next/head';
import { useRouter } from 'next/router';
import { useAppContext } from '../../appContext.js';


// export async function getStaticPaths() {

//   const data = await fetch(`http://localhost:3000/api/collections/${collectionId}`)
//     .then(result => result.json());

//   const paths = data[0].items.map((item) => {
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

// }


export const getStaticProps = async () => {

  const data = await fetch(`http://localhost:3000/api/collections/${id}`)
    .then(result => result.json());


  return {
    props: {
      data: data
    }
  };
};

export default function Collection({ data }) {

  const { theme } = useAppContext();

  return (
    <>
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
        </div>
      </div>
    </>
  );
}


//Route to access this page
//localhost:3000/collections/collection_id



// import Head from 'next/head';

