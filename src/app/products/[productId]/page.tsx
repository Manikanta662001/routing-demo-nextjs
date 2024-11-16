import React from "react";
export default async function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  const { productId } = await params;
  console.log("PARAMS::::", productId);
  return (
    <>
      <h1>This is Product Details Page for product {productId}</h1>
    </>
  );
}
