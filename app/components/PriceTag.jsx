import React from "react";
import { format } from "../lib/priceFormatter";

const PriceTag = ({ price }) => {
  return <div className="badge badge-primary">{format(price)}</div>;
};

export default PriceTag;
