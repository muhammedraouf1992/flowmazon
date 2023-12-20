"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const PaginationComponent = ({ currentPage, pageSize, itemCount }) => {
  const pageCount = Math.ceil(itemCount / pageSize);
  const searchParams = useSearchParams();
  const router = useRouter();

  const changePage = (page) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.push("?" + params.toString());
  };
  if (pageCount <= 1) return null;

  return (
    <div className="flex justify-center items-center">
      <button
        disabled={currentPage === 1}
        onClick={() => changePage(1)}
        className="bg-slate-500 py-1 px-2 mx-2"
      >
        « «
      </button>
      <button
        disabled={currentPage === 1}
        onClick={() => changePage(currentPage - 1)}
        className="bg-slate-500 py-1 px-2 mx-2"
      >
        «
      </button>
      <p>
        page {currentPage} of {pageCount}
      </p>
      <button
        disabled={currentPage === pageCount}
        onClick={() => changePage(currentPage + 1)}
        className="bg-slate-500 py-1 px-2 mx-2"
      >
        »
      </button>
      <button
        disabled={currentPage === pageCount}
        onClick={() => changePage(pageCount)}
        className="bg-slate-500 py-1 px-2 mx-2"
      >
        » »
      </button>
    </div>
  );
};

export default PaginationComponent;
