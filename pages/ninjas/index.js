import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Ninjas.module.css';

// this runs before component is rendered
export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json(); // data is an array of objects
  return {
    props: { ninjas: data },
  };
};

// http://localhost:3000/ninjas
const Ninjas = ({ ninjas }) => (
  <div>
    <h1>All Ninjas</h1>
    {ninjas.map(ninja => (
      <Link href={`/ninjas/${ninja.id}`} className={styles.single} key={ninja.id}>
        <h3>{ninja.name}</h3>
      </Link>
    ))}
  </div>
);

export default Ninjas;
