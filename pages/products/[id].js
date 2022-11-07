import React from 'react';
import Image from 'next/image';

// eslint-disable-next-line max-len
// The reason for doing this get static path props function is to first tell next how many html pages needs to be made based on our data.
export const getStaticPaths = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json(); // data is an array of objects
  const paths = data.map(product => ({
    params: { id: product.id.toString() }, // return an object from this array
  }));
  return {
    paths, // now we telling next.js what to build using this paths
    fallback: false,
  };
};

// eslint-disable-next-line max-len
export const getStaticProps = async context => { // if there are 10 paths, this function will run 10 times
  const { id } = context.params;
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await response.json();
  return {
    props: { product: data },
  };
};

// http://localhost:3000/ninjas/[id]
const Details = ({ product }) => (
  <div>
    <h1>{product.title}</h1>
    <p>{product.price}</p>
    <p>{product.description}</p>
    <p>{product.category}</p>
    <Image src={product.image} alt="image" width={100} height={100} />
    <p>{product.rating.rate}</p>
    <p>{product.rating.count}</p>
  </div>
);

export default Details;
