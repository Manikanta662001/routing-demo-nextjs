import Link from "next/link";
import React from "react";
export default function F2() {
  return (
    <>
      <h1>This is F2 Page</h1>
      <div>
        <Link href={"/f4"}>F4</Link>
      </div>
    </>
  );
}
