import { Metadata } from "next";
import React from "react";
export type Props = {
  params: { productId: string };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { productId } = await params;
  const title = await new Promise((res) => {
    setTimeout(() => {
      res(`iPhone ${productId}`);
    }, 100);
  });
  return {
    title: `Product ${title}`,
  };
};
export default async function ProductDetails({ params }: Props) {
  const { productId } = await params;
  console.log("PARAMS::::", productId);
  return (
    <>
      <h1>This is Product Details Page for product {productId}</h1>
    </>
  );
}
