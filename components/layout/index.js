import Head from 'next/head';
import Link from 'next/link';
import styles from './layout.module.css';

import { useAppContext } from '../../pages/appContext.js';
export default function Layout({ children }) {
  const { theme, click } = useAppContext();

  return (
    <>
      <Head>
        <title>
          Trove
      </title>
      </Head>
      <header>
        <div id="header-placeholder"><button onClick={click}>Theme</button></div>
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