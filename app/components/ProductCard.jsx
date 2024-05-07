import React from "react";
import PriceTag from "./PriceTag";
import Image from "next/image";
import Link from "next/link";
import AddToCart from "../products/[id]/AddToCart";

const ProductCard = ({ product }) => {
  const isNew =
    Date.now() - new Date(product.created_at).getTime() <
    1000 * 60 * 60 * 24 * 7;
  return (
    <>
      <div className="card hover:shadow-lg py-4 px-6 rounded-xl border-2 border-slate-400 flex flex-col justify-between">
        <Image
          src={product.imgUrl}
          width={1000}
          height={600}
          alt={product.title}
          className="w-80 h-80 object-cover rounded-xl"
        />
        <Link href={`/products/${product.id}`} className="">
          <h2 className="card-title my-2 text-black">
            {product.title}
            <span className="badge badge-accent">{isNew && "NEW"}</span>
          </h2>
        </Link>

        <div className="flex items-center justify-between">
          <PriceTag price={product.price} />
          <AddToCart productId={product.id} />
        </div>
      </div>
    </>
  );
};

export default ProductCard;
