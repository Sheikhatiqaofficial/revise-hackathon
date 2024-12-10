// import React from "react";

// const Topnav = () => {
// return(
// <nav className="relative w-full bg-white p-2">
//       {/* Section 1 */}
//       <div className="relative flex items-center justify-between">
//         {/* Magnifying Glass Icon */}
//         <div className="absolute left-7 top-6">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="17"
//             height="17"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="#2A254B"
//           >
//             <circle cx="10" cy="10" r="7" stroke="#2A254B" strokeWidth="2" />
//             <line x1="16" y1="16" x2="22" y2="22" stroke="#2A254B" strokeWidth="2" />
//           </svg>
//         </div>

//         {/* Avion Text */}
//         <div className="absolute left-1/2 transform -translate-x-1/2 top-5 opacity-9">
//           <h1
//             className="font-clash-display text-[#22202E] text-3xl font-normal leading-[29.52px] text-left"
//             style={{ fontFamily: "Clash Display" }}
//           >
//             Avion
//           </h1>
//         </div>

//         <div className="absolute right-20 top-6">
//           <img
//             src="/cart.svg"  // This references the cart.svg from the public folder
//             alt="Shopping Cart"
//             width={20}       // You can adjust the size here if needed
//             height={20}      // You can adjust the size here if needed
//           />
//         </div>

//         {/* User Avatar Icon */}
//         <div className="absolute right-10 top-6">
//         <img
//             src="/user.svg"  // This references the cart.svg from the public folder
//             alt="Shopping Cart"
//             width={20}       // You can adjust the size here if needed
//             height={20}      // You can adjust the size here if needed
//           />
//         </div>
//       </div>
//         {/* Divider */}
//         <div className="w-[1386px] h-[1px] border-t border-[#0000001A] opacity-1 mt-16"></div>


//       {/* Section 2 (Add any additional content below Section 1) */}
//        {/* Section 2 Links */}
//        <div className="flex justify-center items-center mt-6 space-x-[44px]">
//         {/* Link 1 */}
//         <a
//           href="#"
//           className="w-[70px] h-[22px] text-[#726E8D] font-satoshi text-[16px] font-normal leading-[21.6px]"
//           style={{ fontFamily: "Satoshi" }}
//         >
//           Plant Pots
//         </a>
        
//         {/* Link 2 */}
//         <a
//           href="#"
//           className="w-[66px] h-[22px] text-[#726E8D] font-satoshi text-[16px] font-normal leading-[21.6px]"
//           style={{ fontFamily: "Satoshi" }}
//         >
//           Ceramics
//         </a>

//         {/* Link 3 */}
//         <a
//           href="#"
//           className="w-[44px] h-[22px] text-[#726E8D] font-satoshi text-[16px] font-normal leading-[21.6px]"
//           style={{ fontFamily: "Satoshi" }}
//         >
//           Tables
//         </a>

//         {/* Link 4 */}
//         <a
//           href="#"
//           className="w-[45px] h-[22px] text-[#726E8D] font-satoshi text-[16px] font-normal leading-[21.6px]"
//           style={{ fontFamily: "Satoshi" }}
//         >
//           Chairs
//         </a>

//         {/* Link 5 */}
//         <a
//           href="#"
//           className="w-[64px] h-[22px] text-[#726E8D] font-satoshi text-[16px] font-normal leading-[21.6px]"
//           style={{ fontFamily: "Satoshi" }}
//         >
//        Crockery
//         </a>

//         {/* Link 6 */}
//         <a
//           href="#"
//           className="w-[71px] h-[22px] text-[#726E8D] font-satoshi text-[16px] font-normal leading-[21.6px]"
//           style={{ fontFamily: "Satoshi" }}
//         >
//           Tableware
//         </a>

//         {/* Link 7 */}
//         <a
//           href="#"
//           className="w-[51px] h-[22px] text-[#726E8D] font-satoshi text-[16px] font-normal leading-[21.6px]"
//           style={{ fontFamily: "Satoshi" }}
//         >
//           Cutlery
//         </a>
//       </div>
//     </nav>

// );
// };

// export default Topnav;
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Topnav = () => {
  return (
    <nav className="relative w-full bg-white p-2">
      {/* Section 1 */}
      <div className="relative flex items-center justify-between">
        {/* Magnifying Glass Icon */}
        <div className="absolute left-7 top-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2A254B"
          >
            <circle cx="10" cy="10" r="7" stroke="#2A254B" strokeWidth="2" />
            <line x1="16" y1="16" x2="22" y2="22" stroke="#2A254B" strokeWidth="2" />
          </svg>
        </div>

        {/* Avion Text */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-5 opacity-9">
        <Link href={"/"}>
          <h1
            className="font-clash-display text-[#22202E] text-3xl font-normal leading-[29.52px] text-left"
            style={{ fontFamily: "Clash Display" }}
          >
            Avion
          </h1>
          </Link>
        </div>

        <div className="absolute right-20 top-6">
          <Image
            src="/cart.svg"  // This references the cart.svg from the public folder
            alt="Shopping Cart"
            width={20}       // You can adjust the size here if needed
            height={20}      // You can adjust the size here if needed
          />
        </div>

        {/* User Avatar Icon */}
        <div className="absolute right-10 top-6">
          <Image
            src="/user.svg"  // This references the cart.svg from the public folder
            alt="Shopping Cart"
            width={20}       // You can adjust the size here if needed
            height={20}      // You can adjust the size here if needed
          />
        </div>
      </div>
      
      {/* Divider */}
      <div className="w-full h-[1px] border-t border-[#0000001A] opacity-1 mt-16"></div>

      {/* Section 2 Links */}
      <div className="flex flex-wrap justify-center items-center mt-6 space-x-[44px] sm:flex hidden">
        {/* Link 1 */}
        <a
          href="#"
          className="w-[70px] h-[22px] text-[#726E8D] font-satoshi text-[16px] font-normal leading-[21.6px]"
          style={{ fontFamily: "Satoshi" }}
        >
          Plant Pots
        </a>

        {/* Link 2 */}
        <a
          href="#"
          className="w-[66px] h-[22px] text-[#726E8D] font-satoshi text-[16px] font-normal leading-[21.6px]"
          style={{ fontFamily: "Satoshi" }}
        >
          Ceramics
        </a>

        {/* Link 3 */}
        <a
          href="#"
          className="w-[44px] h-[22px] text-[#726E8D] font-satoshi text-[16px] font-normal leading-[21.6px]"
          style={{ fontFamily: "Satoshi" }}
        >
          Tables
        </a>

        {/* Link 4 */}
        <a
          href="#"
          className="w-[45px] h-[22px] text-[#726E8D] font-satoshi text-[16px] font-normal leading-[21.6px]"
          style={{ fontFamily: "Satoshi" }}
        >
          Chairs
        </a>

        {/* Link 5 */}
        <a
          href="#"
          className="w-[64px] h-[22px] text-[#726E8D] font-satoshi text-[16px] font-normal leading-[21.6px]"
          style={{ fontFamily: "Satoshi" }}
        >
          Crockery
        </a>

        {/* Link 6 */}
        <a
          href="#"
          className="w-[71px] h-[22px] text-[#726E8D] font-satoshi text-[16px] font-normal leading-[21.6px]"
          style={{ fontFamily: "Satoshi" }}
        >
          Tableware
        </a>

        {/* Link 7 */}
        <a
          href="#"
          className="w-[51px] h-[22px] text-[#726E8D] font-satoshi text-[16px] font-normal leading-[21.6px]"
          style={{ fontFamily: "Satoshi" }}
        >
          Cutlery
        </a>
      </div>
    </nav>
  );
};

export default Topnav;
