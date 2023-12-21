import ProductCard from "./components/ProductCard";
import PaginationComponent from "./components/PaginationComponent";
import prisma from "./lib/db/prisma";

export default async function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;
  const pageSize = 8;

  const totalItemCount = await prisma.product.count();
  const products = await prisma.product.findMany({
    orderBy: {
      created_at: "asc",
    },
    skip: (page - 1) * pageSize,
    take: pageSize,
  });
  return (
    <>
      <div className="grid lg:grid-cols-4 gap-4 grid-cols-2 my-10 ">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
      <div>
        <PaginationComponent
          pageSize={pageSize}
          currentPage={page}
          itemCount={totalItemCount}
        />
      </div>
    </>
  );
}
