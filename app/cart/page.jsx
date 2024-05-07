import React from "react";
import { getCart } from "../lib/db/cartActions";
import CartComponent from "../components/CartComponent";
import { format } from "../lib/priceFormatter";
import Link from "next/link";
const cartPage = async () => {
  const cart = await getCart();

  return (
    <div className="container mx-auto my-5">
      {cart.items.map((item) => (
        <CartComponent key={item.id} product={item} />
      ))}
      {!cart || (cart.items.length === 0 && <p>there is no items in cart</p>)}
      <div className="flex justify-center flex-col items-center gap-2">
        <p className="font-bold capitalize">
          total amount is
          <span className="font-bold">{format(cart.totalAmount)}</span>
        </p>
        <Link href={"/checkout"} className="btn btn-warning">
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default cartPage;
