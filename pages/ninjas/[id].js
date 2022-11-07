import React from 'react';

// eslint-disable-next-line max-len
// The reason for doing this get static path props function is to first tell next how many html pages needs to be made based on our data.
export const getStaticPaths = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json(); // data is an array of objects
  const paths = data.map(ninja => ({
    params: { id: ninja.id.toString() }, // return an object from this array
  }));
  return {
    paths, // now we telling next.js what to build using this paths
    fallback: false,
  };
};

// eslint-disable-next-line max-len
export const getStaticProps = async context => { // if there are 10 paths, this function will run 10 times
  const { id } = context.params;
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await response.json();
  return {
    props: { ninja: data },
  };
};

// http://localhost:3000/ninjas/[id]
const Details = ({ ninja }) => (
  <div>
    <h1>{ninja.name}</h1>
    <p>{ninja.email}</p>
    <p>{ninja.website}</p>
    <p>{ninja.address.city}</p>
  </div>
);

export default Details;
