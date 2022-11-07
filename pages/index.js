/* eslint-disable max-len */

import Link from 'next/link';
import styles from '../styles/Home.module.css';

// http://localhost:3000/
export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, tempora! Tenetur blanditiis qui sint libero impedit ea at itaque delectus.</p>
      <p className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat praesentium atque corrupti nihil eius doloremque harum quos doloribus nam explicabo.</p>
      <Link href="ninjas" className={styles.btn}>See Ninja Listing</Link>
    </div>
  );
}
