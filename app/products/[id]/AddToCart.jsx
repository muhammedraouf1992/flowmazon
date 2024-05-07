"use client";
import React, { useState, useTransition } from "react";
import { incrementQuantity } from "./actions";
import svg from "../../../public/assets/right-tick-svgrepo-com.svg";
import cartSvg from "../../../public/assets/cart.svg";
import Image from "next/image";
const AddToCart = ({ productId, isSingleProduct }) => {
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);
  return (
    <div className="">
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
        {isSingleProduct ? (
          "Add To Cart"
        ) : (
          <Image
            src={cartSvg}
            width={30}
            height={30}
            alt="icon"
            className="inline-block"
          />
        )}
      </button>

      {isPending && <span className="loading loading-spinner"></span>}

      {!isPending && success && (
        <Image
          src={svg}
          width={30}
          height={30}
          alt="icon"
          className="inline-block"
        />
      )}
    </div>
  );
};

export default AddToCart;
