"use client";
import React from "react";
import { notFound } from "next/navigation";
export default function ReviewDetails({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  const { productId, reviewId } = params;
  const random = Math.floor(Math.random() * 2);
  console.log("PARAMS::::", productId, reviewId, random);
  if (random === 1) {
    throw new Error("Error loading review");
  }
  if (Number(reviewId) > 1000) {
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
