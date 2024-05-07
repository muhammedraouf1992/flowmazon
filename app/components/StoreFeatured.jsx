import React from "react";
import Image from "next/image";
import Feature1 from "../../public/features/f1.png";
import Feature2 from "../../public/features/f2.png";
import Feature3 from "../../public/features/f3.png";
import Feature4 from "../../public/features/f4.png";
import Feature5 from "../../public/features/f5.png";
import Feature6 from "../../public/features/f6.png";

const StoreFeatured = () => {
  return (
    <section className="container mx-auto my-10">
      <div className="grid lg:grid-cols-6 grid-cols-2 gap-4">
        <div className="border-2 border-slate-400 rounded-lg flex flex-col items-center space-y-3 p-5 hover:shadow-xl duration-300">
          <Image src={Feature1} height={200} width={200} alt="features" />
          <p className="bg-[#e0b9c9] text-[#088178] px-2 py-1 rounded-md font-medium">
            Free Shipping
          </p>
        </div>
        <div className="border-2 border-slate-400 rounded-lg flex flex-col items-center space-y-3 p-5 hover:shadow-xl duration-300">
          <Image src={Feature2} height={200} width={200} alt="features" />
          <p className="bg-[#cdebbc] text-[#088178] px-2 py-1 rounded-md font-medium">
            Online order
          </p>
        </div>
        <div className="border-2 border-slate-400 rounded-lg flex flex-col items-center space-y-3 p-5 hover:shadow-xl duration-300">
          <Image src={Feature3} height={200} width={200} alt="features" />
          <p className="bg-[#d1e8f2] text-[#088178] px-2 py-1 rounded-md font-medium">
            save money
          </p>
        </div>
        <div className="border-2 border-slate-400 rounded-lg flex flex-col items-center space-y-3 p-5 hover:shadow-xl duration-300">
          <Image src={Feature4} height={200} width={200} alt="features" />
          <p className="bg-[#cdd4f8] text-[#088178] px-2 py-1 rounded-md font-medium">
            promotions
          </p>
        </div>
        <div className="border-2 border-slate-400 rounded-lg flex flex-col items-center space-y-3 p-5 hover:shadow-xl duration-300">
          <Image src={Feature5} height={200} width={200} alt="features" />
          <p className="bg-[#f6dbf6] text-[#088178] px-2 py-1 rounded-md font-medium">
            happy sell
          </p>
        </div>
        <div className="border-2 border-slate-400 rounded-lg flex flex-col items-center space-y-3 p-5 hover:shadow-xl duration-300">
          <Image src={Feature6} height={200} width={200} alt="features" />
          <p className="bg-[#fff2e5] text-[#088178] px-2 py-1 rounded-md font-medium">
            f24/7 support
          </p>
        </div>
      </div>
    </section>
  );
};

export default StoreFeatured;
