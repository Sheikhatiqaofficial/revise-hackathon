import React from "react";
import Image from "next/image";

const Ceramic = () => {
  return (
//     <div className="w-full bg-white opacity-1 sm:ml-0 sm:mt-[80px] lg:mt-[120px]">
//       {/* Heading Section */}
//       <div className="w-full h-[39px] mt-[100px] mx-auto text-center sm:text-left opacity-1">
//   <h3 className="text-[#2A254B] text-[35px] font-normal leading-[39.36px] lg:ml-[42]">
//     New Ceramics
//   </h3>
// </div>


//       {/* Image Grid */}
//       <div className="flex flex-col sm:flex-row justify-between gap-[16px] sm:gap-[24px] mt-[52px] mx-[20px] sm:mx-[70px] lg:gap-[0px]">
//         {/* Image 1 */}
//         <div className="w-full sm:w-[305px] h-[462px]">
//           <div className="w-full h-[375px]">
//             <Image
//               src="/chair.jpg"
//               alt="The Dandy chair"
//               width={305}
//               height={375}
//               className="w-full h-full opacity-1"
//             />
//           </div>
//           <h4 className="text-[#2A254B] text-[20px] font-normal mt-[25px]">
//             The Dandy chair
//           </h4>
//           <p className="text-[#2A254B] text-[18px] font-normal mt-[15px]">£250</p>
//         </div>

//         {/* Image 2 */}
//         <div className="w-full sm:w-[305px] h-[462px]">
//           <div className="w-full h-[375px]">
//             <Image
//               src="/vases.jpg"
//               alt="Rustic Vase Set"
//               width={305}
//               height={375}
//               className="w-full h-full opacity-1"
//             />
//           </div>
//           <h4 className="text-[#2A254B] text-[20px] font-normal mt-[25px]">
//             Rustic Vase Set
//           </h4>
//           <p className="text-[#2A254B] text-[18px] font-normal mt-[15px]">£150</p>
//         </div>

//         {/* Image 3 */}
//         <div className="w-full sm:w-[305px] h-[462px]">
//           <div className="w-full h-[375px]">
//             <Image
//               src="/grayvase.jpg"
//               alt="The Silky Vase"
//               width={305}
//               height={375}
//               className="w-full h-full opacity-1"
//             />
//           </div>
//           <h4 className="text-[#2A254B] text-[20px] font-normal mt-[25px]">
//             The Silky Vase
//           </h4>
//           <p className="text-[#2A254B] text-[18px] font-normal mt-[15px]">£150</p>
//         </div>

//         {/* Image 4 */}
//         <div className="w-full sm:w-[305px] h-[462px] hidden sm:block">
//           <div className="w-full h-[375px]">
//             <Image
//               src="/lamp.jpg"
//               alt="The Lucky Lamp"
//               width={305}
//               height={375}
//               className="w-full h-full opacity-1"
//             />
//           </div>
//           <h4 className="text-[#2A254B] text-[20px] font-normal mt-[25px]">
//             The Lucky Lamp
//           </h4>
//           <p className="text-[#2A254B] text-[18px] font-normal mt-[15px]">£399</p>
//         </div>
//       </div>

//       {/* View Collection Button */}
//       <div className="w-full sm:w-[170px] h-[56px] mt-[52px] mx-auto bg-[#F9F9F9] text-center">
//         <button className="w-full sm:w-[170px] h-[56px] text-[#2A254B] text-[16px] font-normal leading-[24px]">
//           View Collection
//         </button>
//       </div>
//     </div>
<div className="w-full bg-white opacity-1 sm:ml-0 sm:mt-[80px] lg:mt-[120px]">
  {/* Heading Section */}
  <div className="w-full h-[39px] mt-[100px] mx-auto text-center lg:text-left opacity-1">
    <h3 className="text-[#2A254B] text-[35px] font-normal leading-[39.36px] lg:ml-[42px]">
      New Ceramics
    </h3>
  </div>

  {/* Image Grid */}
  <div className="flex flex-col sm:flex-row justify-between gap-[16px] sm:gap-[24px] mt-[52px] mx-[20px] sm:mx-[70px] lg:gap-[0px]">
    {/* Image 1 */}
    <div className="w-full sm:w-[305px] h-[462px]">
      <div className="w-full h-[375px]">
        <Image
          src="/chair.jpg"
          alt="The Dandy chair"
          width={305}
          height={375}
          className="w-full h-full opacity-1"
        />
      </div>
      <h4 className="text-[#2A254B] text-[20px] font-normal mt-[25px]">
        The Dandy chair
      </h4>
      <p className="text-[#2A254B] text-[18px] font-normal mt-[15px]">£250</p>
    </div>

    {/* Image 2 */}
    <div className="w-full sm:w-[305px] h-[462px]">
      <div className="w-full h-[375px]">
        <Image
          src="/vases.jpg"
          alt="Rustic Vase Set"
          width={305}
          height={375}
          className="w-full h-full opacity-1"
        />
      </div>
      <h4 className="text-[#2A254B] text-[20px] font-normal mt-[25px]">
        Rustic Vase Set
      </h4>
      <p className="text-[#2A254B] text-[18px] font-normal mt-[15px]">£150</p>
    </div>

    {/* Image 3 */}
    <div className="w-full sm:w-[305px] h-[462px]">
      <div className="w-full h-[375px]">
        <Image
          src="/grayvase.jpg"
          alt="The Silky Vase"
          width={305}
          height={375}
          className="w-full h-full opacity-1"
        />
      </div>
      <h4 className="text-[#2A254B] text-[20px] font-normal mt-[25px]">
        The Silky Vase
      </h4>
      <p className="text-[#2A254B] text-[18px] font-normal mt-[15px]">£150</p>
    </div>

    {/* Image 4 */}
    <div className="w-full sm:w-[305px] h-[462px] hidden sm:block">
      <div className="w-full h-[375px]">
        <Image
          src="/lamp.jpg"
          alt="The Lucky Lamp"
          width={305}
          height={375}
          className="w-full h-full opacity-1"
        />
      </div>
      <h4 className="text-[#2A254B] text-[20px] font-normal mt-[25px]">
        The Lucky Lamp
      </h4>
      <p className="text-[#2A254B] text-[18px] font-normal mt-[15px]">£399</p>
    </div>
  </div>

  {/* View Collection Button */}
  <div className="w-full sm:w-[170px] h-[56px] mt-[52px] mx-auto bg-[#F9F9F9] text-center">
    <button className="w-full sm:w-[170px] h-[56px] text-[#2A254B] text-[16px] font-normal leading-[24px]">
      View Collection
    </button>
  </div>
</div>

  );
};

export default Ceramic;
