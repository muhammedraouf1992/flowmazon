import Image from "next/image";
import prisma from "./lib/db/prisma";
import ProductCard from "./components/ProductCard";

export default async function Home() {
  const products = await prisma.product.findMany();
  return (
    <div className="grid lg:grid-cols-4 gap-4 grid-cols-2 my-10">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}
