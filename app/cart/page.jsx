import React from "react";
import { getCart } from "../lib/db/cartActions";
import CartComponent from "../components/CartComponent";
import { format } from "../lib/priceFormatter";
const cartPage = async () => {
  const cart = await getCart();

  return (
    <div>
      {cart.items.map((item) => (
        <CartComponent key={item.id} product={item} />
      ))}
      {!cart || (cart.items.length === 0 && <p>there is no items in cart</p>)}
      <p className="font-bold"> total amount is {format(cart.totalAmount)}</p>
    </div>
  );
};

export default cartPage;
