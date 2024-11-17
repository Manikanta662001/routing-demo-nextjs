"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function OrderProduct() {
  const router = useRouter();
  const handleClick = () => {
    console.log("Order Placed SuccessFully");
    router.push("/");
    //  to relace the history
    // router.replace("/");
    // to go back one step
    // router.back();
    // to go forward one step
    // router.forward();
  };
  return (
    <>
      <h1>Order Product</h1>
      <button onClick={handleClick}>Place order</button>
    </>
  );
}
