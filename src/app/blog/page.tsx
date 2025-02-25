import List from "@/components/List";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: {
    absolute: "Blog",
  },
};
async function fetchData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return { data, status: "success" };
  } catch (error: any) {
    return { message: error.message, status: "failure" };
  }
}
export default async function Blog() {
  const res = await fetchData();
  return (
    <>
      <h1>This is Blog Page</h1>
      <List response={res} />
    </>
  );
}
