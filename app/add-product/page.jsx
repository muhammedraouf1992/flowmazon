import React from "react";
import prisma from "../lib/db/prisma";
import { redirect } from "next/navigation";
import FormButton from "../components/FormButton";
export const metadata = {
  title: "Add product - Flowmazon",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae iusto saepe, deserunt itaque inventore odit?",
};
const addProduct = async (formData) => {
  "use server";
  const title = formData.get("title")?.toString();
  const description = formData.get("description")?.toString();
  const imgUrl = formData.get("imageUrl")?.toString();
  const price = Number(formData.get("price"));

  if (!title || !description || !imgUrl) {
    throw Error("all fields are required");
  }
  await prisma.product.create({
    data: {
      title,
      description,
      imgUrl,
      price,
    },
  });
  redirect("/");
};
const addProductPage = () => {
  return (
    <div className="max-w-lg">
      <h1 className="mb-3 text-lg font-bold">Add Product</h1>
      <form action={addProduct}>
        <input
          required
          name="title"
          placeholder="title"
          className="input-bordered input mb-3 w-full"
        />
        <textarea
          required
          name="description"
          placeholder="Description"
          className="textarea-bordered textarea mb-3 w-full"
        />
        <input
          required
          name="imageUrl"
          placeholder="Image URL"
          type="url"
          className="input-bordered input mb-3 w-full"
        />
        <input
          required
          name="price"
          placeholder="Price"
          type="number"
          className="input-bordered input mb-3 w-full"
        />
        <FormButton className="btn-block">Add Product</FormButton>
      </form>
    </div>
  );
};

export default addProductPage;
