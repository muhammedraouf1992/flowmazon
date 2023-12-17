import React from "react";
import PriceTag from "./PriceTag";

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <h2 className="card-title">{product.title}</h2>
      <PriceTag price={product.price} />
    </div>
  );
};

export default ProductCard;
