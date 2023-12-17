import React from "react";
import { format } from "../lib/priceFormatter";

const PriceTag = ({ price }) => {
  return <span className="badge badge-secondary">{format(price)}</span>;
};

export default PriceTag;
