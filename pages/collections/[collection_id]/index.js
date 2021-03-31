import Head from 'next/head';

import dark from '../../../styles/base-dark.module.css';
import light from '../../../styles/base-light.module.css';
import { useEffect, useState } from 'react';
import { useAppContext } from '../../appContext.js';

export default function Collection() {

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

