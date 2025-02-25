import Link from "next/link";
import React from "react";
import Image from "next/image";
import natureImg from '../../public/nature.jpg'
export default function Home() {
  console.log("HOME::::::");
  return (
    <>
      <h1>This is main Page</h1>
      <Link href={"/about"}>About page</Link>
      <Link href={"/profile"}>Profile page</Link>
      <Link href={"/products"}>Products page</Link>
      <Link href={"/blog"}>Blog page</Link>
      <Image src={natureImg} alt="unavailable" width={500} height={200}/>
      <img src="./next.svg" alt="" />
    </>
  );
}
