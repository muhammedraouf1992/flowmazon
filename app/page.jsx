import PaginationComponent from "./components/PaginationComponent";
import prisma from "./lib/db/prisma";
import HeroComponent from "./components/HeroComponent";
import StoreFeatured from "./components/StoreFeatured";
import ProductList from "./components/ProductList";
import NewsLetterBanner from "./components/NewsLetterBanner";

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
      <HeroComponent />
      <StoreFeatured />
      <ProductList products={products} />
      <div>
        <PaginationComponent
          pageSize={pageSize}
          currentPage={page}
          itemCount={totalItemCount}
        />
      </div>
      <NewsLetterBanner />
    </>
  );
}
