"use client";
import React, { useState, useTransition } from "react";
import { incrementQuantity } from "./actions";
const AddToCart = ({ productId }) => {
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);
  return (
    <div className="mt-10">
      <button
        disabled={isPending}
        className="btn btn-primary"
        onClick={() => {
          setSuccess(false);
          startTransition(async () => {
            await incrementQuantity(productId);
            setSuccess(true);
          });
        }}
      >
        Add To Cart
        {isPending && <span className="loading loading-spinner"></span>}
        {isPending && success && (
          <span className="">added to cart successfully</span>
        )}
      </button>
    </div>
  );
};

export default AddToCart;
