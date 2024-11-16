import React from "react";
export default async function Docs({ params }: { params: { slug: string[] } }) {
  const { slug } = await params;
  console.log("PARAMS::::", slug);
  if (slug?.length === 2) {
    return (
      <div>
        Viewing docs for feature {slug[0]} and concept {slug[1]}
      </div>
    );
  }
  if (slug?.length === 1) {
    return <div>Viewing docs for feature {slug[0]} </div>;
  }
  return <h1>Docs home page</h1>;
}
