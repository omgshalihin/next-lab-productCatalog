import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => (
  <nav>
    {/* <h1>All Products</h1> */}
    <div className="logo">
      <Link className="logo" href="/">
        <Image href="/" src="/favicon.ico" width={80} height={80} alt="logo" />
      </Link>
    </div>
    <Link href="/">Home</Link>
    <Link href="/about">About</Link>
    <Link href="/products">Product Listing</Link>
  </nav>
);

export default Navbar;
