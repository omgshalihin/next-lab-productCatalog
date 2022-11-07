import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => (
  <nav>
    <div className="logo">
      {/* <h1>Ninja List</h1> */}
      <Image src="/favicon.ico" width={80} height={80} alt="logo" />
    </div>
    <Link href="/">Home</Link>
    <Link href="/about">About</Link>
    <Link href="/ninjas">Ninja Listing</Link>
  </nav>
);

export default Navbar;
