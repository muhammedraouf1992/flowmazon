import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  return (
    <div className="container mx-auto mt-20">
      <div className="text-center">
        <h2 className="text-6xl capitalize font-bold">featured products</h2>
        <p className="capitalize text-slate-700 mt-5">
          summer collection new modern design
        </p>
      </div>
      <div className="grid lg:grid-cols-4 gap-4 grid-cols-2 my-10 container mx-auto">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
