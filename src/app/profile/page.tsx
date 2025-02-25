import React from "react";
export default async function Profile() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log("DATA::::", data);
  return (
    <>
      <h1>This is profile Page</h1>
    </>
  );
}
