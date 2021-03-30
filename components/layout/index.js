import Head from 'next/head';
import Link from 'next/link';
import styles from './layout.module.css';
import light from '../../styles/base-light.module.css';
import dark from '../../styles/base-dark.module.css';

import {useState, useEffect} from 'react';


export default function Layout({ children }) {

  return (
    <>
      <Head>
        <title>
          Trove
      </title>
      </Head>
      <header>
        <div id="header-placeholder"></div>
        {/* <button onClick={click}>Theme</button> */}
    </header>
      <main>
        {children}
      </main>
      <footer>
        Footer
      </footer>
    </>
  );
}