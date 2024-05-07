import Link from "next/link";
import React from "react";

const NewsLetterBanner = () => {
  return (
    <section className="news_background">
      <div className="flex flex-col text-white items-center space-y-6">
        <h3 className="text-lg capitalize font-bold">repair services</h3>
        <h2 className="capitalize text-4xl font-bold">
          up to <span className="text-red-600">70% off</span>-all t-shirts &
          accessories
        </h2>
        <Link href={"/about"} className="btn hover:bg-primary">
          About us
        </Link>
      </div>
    </section>
  );
};

export default NewsLetterBanner;
