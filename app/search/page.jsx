import ProductCard from "../components/ProductCard";
import prisma from "../lib/db/prisma";

const SearchPage = async ({ searchParams }) => {
  const query = searchParams.query;
  const products = await prisma.product.findMany({
    where: {
      OR: [
        { title: { contains: query, mode: "insensitive" } },
        { description: { contains: query, mode: "insensitive" } },
      ],
    },
  });
  return (
    <>
      <div className="grid lg:grid-cols-4 gap-4 grid-cols-2 my-10 ">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </>
  );
};

export default SearchPage;
