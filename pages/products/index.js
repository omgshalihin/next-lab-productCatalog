import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Ninjas.module.css';

// this runs before component is rendered
export const getStaticProps = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json(); // data is an array of objects
  return {
    props: { products: data },
  };
};

// http://localhost:3000/ninjas
const Ninjas = ({ products }) => (
  <div>
    <h1>All Products</h1>
    {products.map(product => (
      <Link href={`/products/${product.id}`} className={styles.single} key={product.id}>
        <h3>{product.title}</h3>
      </Link>
    ))}
  </div>
);

export default Ninjas;
