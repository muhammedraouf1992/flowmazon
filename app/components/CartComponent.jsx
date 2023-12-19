"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useTransition } from "react";
import { format } from "../lib/priceFormatter";
import { setProductQuantity } from "../cart/actions";
import { removeItem } from "../cart/actions";
const CartComponent = ({ product }) => {
  const [isPending, startTransition] = useTransition();
  const quantityOptions = [];

  for (let i = 1; i < 100; i++) {
    quantityOptions.push(
      <option value={i} key={i}>
        {i}
      </option>
    );
  }
  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        <Image
          src={product.product.imgUrl}
          alt={product.product.title}
          width={200}
          height={200}
          className="rounded-lg"
        />
        <div>
          <Link href={"/products/" + product.product.id} className="font-bold">
            {product.product.title}
          </Link>
          <div>Price: {format(product.product.price)}</div>
          <div className="my-1 flex items-center gap-2">
            Quantity: {product.quantity}
            <select
              className="select-bordered select w-full max-w-[80px]"
              defaultValue={product.quantity}
              onClick={(e) => {
                const newQuantity = parseInt(e.currentTarget.value);
                startTransition(async () => {
                  await setProductQuantity(product.product.id, newQuantity);
                });
              }}
            >
              {quantityOptions}
            </select>
          </div>
          <div className="flex items-center gap-3">
            Total: {format(product.product.price * product.quantity)}
            {isPending && (
              <span className="loading loading-spinner loading-sm" />
            )}
          </div>
          <button
            onClick={() => {
              startTransition(async () => {
                await removeItem(product.product.id);
              });
            }}
            className="btn btn-warning"
          >
            remove item
          </button>
        </div>
      </div>

      <div className="divider" />
    </div>
  );
};

export default CartComponent;
