import Link from "next/link";
import React from "react";
export default function Home() {
  console.log('HOME::::::')
  return (
    <>
      <h1>This is main Page</h1>
      <Link href={'/about'}>About page</Link>
      <Link href={'/profile'}>Profile page</Link>
    </>
  );
}
