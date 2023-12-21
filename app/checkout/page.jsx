import React from "react";
import prisma from "../lib/db/prisma";
import { redirect } from "next/navigation";
import FormButton from "../components/FormButton";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getCart } from "../lib/db/cartActions";

export const metadata = {
  title: "Checkout - Flowmazon",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae iusto saepe, deserunt itaque inventore odit?",
};

const handleCheckout = async (formData) => {
  "use server";

  const cart = await getCart();
  await prisma.cart.delete({
    where: {
      id: cart.id,
    },
  });
  redirect("/success");
};

const checkoutPage = () => {
  return (
    <div className="max-w-lg mx-auto h-[70vh]">
      <h1 className="mb-3 text-lg font-bold">Checkout cash on delivery</h1>
      <form action={handleCheckout}>
        <input
          required
          name="name"
          placeholder="fullname"
          className="input-bordered input mb-3 w-full"
        />
        <input
          required
          name="email"
          type="email"
          placeholder="email"
          className="input-bordered input mb-3 w-full"
        />
        <input
          required
          name="phone"
          placeholder="Phone Number"
          type="text"
          className="input-bordered input mb-3 w-full"
        />
        <input
          required
          name="address"
          placeholder="Address"
          type="text"
          className="input-bordered input mb-3 w-full"
        />
        <FormButton className="btn-block btn-warning">Checkout</FormButton>
      </form>
    </div>
  );
};

export default checkoutPage;
