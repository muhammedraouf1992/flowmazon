import Image from "next/image";
import prisma from "./lib/db/prisma";
import ProductCard from "./components/ProductCard";

export default async function Home() {
  const products = await prisma.product.findMany();
  return (
    <div>
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
}
