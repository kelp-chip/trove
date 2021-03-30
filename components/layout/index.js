import Head from 'next/head';
import Link from 'next/link';
import styles from './layout.module.css';

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