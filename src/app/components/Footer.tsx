import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#2A254B] w-full opacity-1 mt-[50px] ">
      {/* Upper Footer Section */}
      <div className="flex flex-col md:flex-row justify-between items-start px-6 md:px-[82px] pt-[58px] gap-6 md:gap-[12px]">
        {/* Column 1: Menu */}
        <div className="flex flex-col gap-[12px] w-full md:w-[108px] h-auto opacity-1">
          <p className="text-white font-display text-[16px] font-normal leading-[19.68px]">Menu</p>
          <p className="text-white font-satoshi text-[14px] font-normal leading-[18.9px]">New arrivals</p>
          <p className="text-white font-satoshi text-[14px] font-normal leading-[18.9px]">Best sellers</p>
          <p className="text-white font-satoshi text-[14px] font-normal leading-[18.9px]">Recently viewed</p>
          <p className="text-white font-satoshi text-[14px] font-normal leading-[18.9px]">Popular this week</p>
          <p className="text-white font-satoshi text-[14px] font-normal leading-[18.9px]">All products</p>
        </div>

        {/* Column 2: Categories */}
        <div className="flex flex-col gap-[12px] w-full md:w-[84px] h-auto opacity-1">
          <p className="text-white font-display text-[16px] font-normal leading-[19.68px]">Categories</p>
          <p className="text-white font-satoshi text-[14px] font-normal leading-[18.9px]">Crockery</p>
          <p className="text-white font-satoshi text-[14px] font-normal leading-[18.9px]">Furniture</p>
          <p className="text-white font-satoshi text-[14px] font-normal leading-[18.9px]">Homeware</p>
          <p className="text-white font-satoshi text-[14px] font-normal leading-[18.9px]">Plant pots</p>
          <p className="text-white font-satoshi text-[14px] font-normal leading-[18.9px]">Chairs</p>
        </div>

        {/* Column 3: Our Company */}
        <div className="flex flex-col gap-[12px] w-full md:w-[105px] opacity-1">
          <p className="text-white font-display text-[16px] font-normal leading-[19.68px]">Our Company</p>
          <p className="text-white font-satoshi text-[14px] font-normal leading-[18.9px]">About us</p>
          <p className="text-white font-satoshi text-[14px] font-normal leading-[18.9px]">Vacancies</p>
          <p className="text-white font-satoshi text-[14px] font-normal leading-[18.9px]">Contact us</p>
          <p className="text-white font-satoshi text-[14px] font-normal leading-[18.9px]">Privacy</p>
          <p className="text-white font-satoshi text-[14px] font-normal leading-[18.9px]">Returns policy</p>
        </div>

        {/* Right Section: Join Mailing List */}
        <div className="flex flex-col items-start justify-start opacity-1 mt-6 md:mt-0 w-full md:w-[472px]">
          <p className="text-white font-display text-[19px] font-normal leading-[19.68px]">Join our mailing list</p>
          <div className="flex items-center justify-between w-full mt-4">
            {/* Email Input Field */}
            <div className="flex items-center justify-start w-full md:w-[354px] h-[56px] bg-[#FFFFFF26] px-6 py-4">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full h-[22px] text-[white] text-lg font-normal bg-[#FFFFFF26] focus:outline-none"
              />
            </div>

            {/* Sign Up Button */}
            <button
              className="w-[118px] h-[56px] bg-[white] text-[#2A254B] font-medium text-lg flex items-center justify-center"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>

      {/* Divider Line Between Upper Footer and Bottom with margin on mobile */}
      <div className="w-full h-[1px] mx-auto border-t border-solid border-[#4E4D93] opacity-1 mt-6 md:mt-1"></div>

      {/* Bottom Footer Section */}
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-[82px] pt-8 pb-4 gap-6 md:gap-0">
        {/* Left: Copyright */}
        <p className="text-white text-[18px] font-normal">Copyright 2022 Avion LTD</p>

        {/* Right: Social Links */}
        <div className="flex gap-6 items-center opacity-1">
          <Image src="/linkedin.png" alt="LinkedIn" width={24} height={24} className="opacity-1" />
          <Image src="/facebook.png" alt="Facebook" width={24} height={24} className="opacity-1" />
          <Image src="/instagram.png" alt="Instagram" width={24} height={24} className="opacity-1" />
          <Image src="/skype.png" alt="Skype" width={24} height={24} className="opacity-1" />
          <Image src="/twitter.png" alt="Twitter" width={24} height={24} className="opacity-1" />
          <Image src="/pintrest.png" alt="Pinterest" width={24} height={24} className="opacity-1" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
