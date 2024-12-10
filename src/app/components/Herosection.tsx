import React from "react";
import Image from "next/image";
import Link from "next/link";

const Herosection = () => {
  return (
    <section className="relative w-full h-[704px] bg-white p-0 md:p-[60px_80px] ml-0 md:ml-[16px] opacity-1">
      {/* Container */}
      <div className="relative w-full md:w-[1380px] h-[584px] top-[5px] left-[16px]">
        <div className="flex justify-between items-center h-full flex-col md:flex-row">
          {/* Left Section (Top Content + Bottom Para) */}
          <div className="w-full md:w-[913px] h-[584px] flex flex-col justify-between bg-[#2A254B] px-[20px] md:px-[60px]">
            {/* Top Content Section */}
            <div className="w-full md:w-[513px] h-auto gap-[40px] mt-[100px] md:mt-[80px] ml-[20px] md:ml-[105px] text-center md:text-left">
              {/* Paragraph */}
              <p className="text-white font-clash-display text-[32px] md:text-[40px] font-normal leading-[36px] md:leading-[44.8px] mb-4">
                The furniture brand for the future, with timeless designs
              </p>

              {/* Button (visible on both mobile and large screens, centered only on mobile) */}
              {/* <div className="flex justify-center md:justify-start mt-[30px] md:mt-[50px]">
                <Link href="/link">
                  <button className="bg-[#F9F9F926] text-white text-[16px] font-medium py-[18px] px-[20px] w-full md:w-[200px] h-[66px]">
                    View collection
                  </button>
                </Link>
              </div> */}
                     <div className="flex justify-center md:justify-start mt-[30px] md:mt-[50px]">
  <Link href="/link">
    <button className="bg-[#F9F9F926] text-white text-[16px] font-medium py-[18px] px-[20px] w-full md:w-[200px] h-[66px] hover:bg-[#F9F9F950]">
      View collection
    </button>
  </Link>
</div>
            </div>

            {/* Bottom Para Section */}
            <p className="text-white font-satoshi text-[16px] md:text-[18px] font-normal leading-[28px] md:leading-[30px] w-full md:w-[610px] mx-auto md:ml-20 mb-[10px] md:mb-[52px] text-center md:text-left">
              A new era in eco-friendly furniture with Avelon, the French luxury
              retail brand with nice fonts, tasteful colors, and a beautiful way to
              display things digitally using modern web technologies.
            </p>
          </div>

          {/* Right Section (Image) */}
          <div className="relative w-full md:w-[520px] h-[584px] opacity-1 hidden md:block">
            <Image
              src="/chair.jpg"  // Image in the public folder
              alt="Chair"
              width={520}
              height={584}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
