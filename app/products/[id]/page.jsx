import React, { cache } from "react";
import prisma from "../../lib/db/prisma";
import Image from "next/image";
import PriceTag from "../../components/PriceTag";
import AddToCart from "./AddToCart";
import { notFound } from "next/navigation";

const getProduct = cache(async (id) => {
  const product = await prisma.product.findUnique({
    where: {
      id: id,
    },
  });
  if (!product) notFound();
  return product;
});
export const generateMetadata = async ({ params }) => {
  const product = await getProduct(params.id);
  if (!product) {
    return {
      title: "product not found",
      description: "no description",
    };
  }
  return {
    title: product?.title + " - Flowmazon",
    description: product?.description,
    openGraph: {
      images: [{ url: product.imgUrl }],
    },
  };
};

const singleProduct = async ({ params }) => {
  const product = await getProduct(params.id);
  if (!product) notFound();
  return (
    <div className="flex flex-col lg:flex-row p-5 gap-5 max-w-7xl mx-auto">
      <div>
        <Image
          src={product.imgUrl}
          alt={product.title}
          height={400}
          width={800}
          className="w-[900px]"
          priority
        />
      </div>
      <div>
        <h2 className="text-4xl font-bold text-primary">{product.title}</h2>
        <p className="my-4 text-slate-200">{product.description}</p>
        <PriceTag price={product.price} />
        <AddToCart productId={product.id} />
      </div>
    </div>
  );
};

export default singleProduct;
