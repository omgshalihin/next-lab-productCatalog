/* eslint-disable max-len */

import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

// http://localhost:3000/
export default function Home() {
  return (
    <>
      <Head>
        <title>Salt | Home</title>
        <meta name="keywords" content="salt" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, tempora! Tenetur blanditiis qui sint libero impedit ea at itaque delectus.</p>
        <p className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat praesentium atque corrupti nihil eius doloremque harum quos doloribus nam explicabo.</p>
        <Link href="/products" className={styles.btn}>See Product Listing</Link>
      </div>
    </>

  );
}
