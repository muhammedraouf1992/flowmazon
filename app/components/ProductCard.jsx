import React from "react";
import PriceTag from "./PriceTag";
import Image from "next/image";
import Link from "next/link";
import AddToCart from "../products/[id]/AddToCart";

const ProductCard = ({ product }) => {
  const isNew =
    Date.now() - new Date(product.created_at).getTime() >
    1000 * 60 * 60 * 24 * 7;
  return (
    <>
      <div className="card hover:shadow-xl bg-slate-600 py-6 px-4 h-[450px] ">
        <Image
          src={product.imgUrl}
          width={800}
          height={400}
          alt={product.title}
          className="w-80 h-60 object-cover "
        />
        <Link href={`/products/${product.id}`} className="">
          <h2 className="card-title my-2">
            {product.title}
            <span className="badge badge-accent">NEW</span>
          </h2>
        </Link>
        <PriceTag price={product.price} />
        <AddToCart productId={product.id} />
      </div>
    </>
  );
};

export default ProductCard;
