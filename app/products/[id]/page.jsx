import React, { cache } from "react";

import Image from "next/image";
import PriceTag from "../../components/PriceTag";
import AddToCart from "./AddToCart";
import { notFound } from "next/navigation";
import prisma from "@/app/lib/db/prisma";

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

export async function generateStaticParams() {
  const products = await prisma.product.findMany();

  return products.map((product) => ({
    id: product.id,
  }));
}

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
        <p className="my-4 text-slate-700">{product.description}</p>
        <PriceTag price={product.price} />
        <AddToCart productId={product.id} isSingleProduct={true} />
      </div>
    </div>
  );
};

export default singleProduct;
