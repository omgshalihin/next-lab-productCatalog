/* eslint-disable max-len */

import Link from 'next/link';

// http://localhost:3000/
export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, tempora! Tenetur blanditiis qui sint libero impedit ea at itaque delectus.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat praesentium atque corrupti nihil eius doloremque harum quos doloribus nam explicabo.</p>
      <Link href="ninjas">See Ninja Listing</Link>
    </div>
  );
}
