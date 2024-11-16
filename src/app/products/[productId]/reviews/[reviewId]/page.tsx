import React from "react";
import { notFound } from "next/navigation";
export default async function ReviewDetails({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  const { productId, reviewId } = await params;
  console.log("PARAMS::::", productId,reviewId);
  if (Number(reviewId) > 1000){
    notFound();
  }
  return (
    <>
      <h1>
        Review {reviewId} for product {productId}
      </h1>
    </>
  );
}
