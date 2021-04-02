import Head from 'next/head';
import Link from 'next/link';
import style from '../styles/404.module.css';

function NotFound() {
    return (
        <>
        <Head>
            <title>
                Page not found
            </title>
        </Head>
        <div className={style.container}>
        <h1>Whoops! Page not found!</h1>
        <Link href='/'>back to homepage</Link>
        </div>
        </>
    )
}

export default NotFound;