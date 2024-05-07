import Link from "next/link";
import React from "react";

const AboutBanner = () => {
  return (
    <section className="about_background my-5">
      <div className="">
        <div className="">
          <h1 className="md:text-6xl text-white font-bold text-lg">#knowus</h1>
          <p className="text-white text-lg uppercase">
            thats a simple ecommerce website where i showcase some simple
            functionalites
          </p>
          <ul className="list-disc mt-5 text-white text-sm font-light">
            <li>you can add and remove items from cart</li>
            <li>
              it supports anonymous carts and once you sign in the anonymous
              cart is merged with your user cart
            </li>
            <li>
              there is a simple page where you can add products but you need to
              be authorized{" "}
              <Link
                href={"/add-product"}
                className="text-white text-lg font-bold underline hover:text-primary"
              >
                here
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
