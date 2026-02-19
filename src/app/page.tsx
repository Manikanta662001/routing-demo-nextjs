import Link from "next/link";
import React from "react";
import Image from "next/image";
import natureImg from "../../public/nature.jpg";
export default function Home() {
  console.log("HOME::::::");
  return (
    <>
      <h1>This is main Page</h1>
      <Link href={"/about"}>About page</Link>
      <Link href={"/profile"}>Profile page</Link>
      <Link href={"/products"}>Products page</Link>
      <Link href={"/blog"}>Blog page</Link>
      <Link href={"/articles/news-article-123?lang=en"}>Read in english</Link>
      <Link href={"/articles/news-article-123?lang=fr"}>Read in french</Link>
      <Image src={natureImg} alt="unavailable" width={500} height={200} />
      <img src="./next.svg" alt="" />
    </>
  );
}
