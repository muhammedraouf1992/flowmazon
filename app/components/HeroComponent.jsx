import Link from "next/link";
import React from "react";

const HeroComponent = () => {
  return (
    <section className=" text-white hero_background">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center justify-start">
        <div className=" max-w-3xl text-left">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl text-center md:text-left">
            Understand User Flow.
            <span className="sm:block"> Increase Conversion. </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed text-black text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div className="mt-8 flex justify-center md:justify-start gap-4">
            <Link
              className="block  rounded border border-primary px-12 py-3 text-sm font-medium text-black hover:bg-primary hover:text-white focus:outline-none focus:ring active:bg-primary sm:w-auto"
              href="/about"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;
