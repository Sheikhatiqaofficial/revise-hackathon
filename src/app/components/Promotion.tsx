// import React from "react";
// import Image from "next/image"; 

// const Promotion = () => {
// return(

//     <div className="relative flex items-center justify-between w-[1581px] h-[503px] gap-0 opacity-1 mt-[50]">
//       {/* Left Content Section */}
//       <div className="relative w-[720px] h-[603px] p-[72px_100px_54px_84px] gap-0 opacity-1 text-white">
        
//         {/* Top Content (Text Section) */}
//         <div className="w-[536px] h-[225px] absolute top-[72px] left-[84px] gap-[25px] opacity-1">
          
//           {/* Upper Text (Heading) */}
//           <p className="w-[514px] h-[68px] text-[#2A254B] text-2xl font-normal leading-[33.6px] text-left">
//             From a studio in London to a global brand with over 400 outlets
//           </p>
    
//           {/* Paragraph Text */}
//           <p className="w-[596px] h-[132px] text-[#505977] text-lg font-normal leading-[25px] text-left mt-[35]">
//             When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. <br />
//             <span><br />
//             Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique 
//             became the hotbed for the London interior design community.
//           </span>
//           </p>
//         </div>
    
//         {/* Button Section */}
//         <div className="w-[150px] h-[56px] absolute bottom-[54px] left-[84px] p-[16px_32px] bg-[#F9F9F9] opacity-1 mb-[50]">
//           <button className="w-[118px] h-[24px] text-[#2A254B] text-lg font-medium leading-[24px] text-left">
//             Get in touch
//           </button>
//         </div>
//       </div>
    
//       {/* Right Side Image (Using Next.js Image component) */}
//       <div className="w-[700px] h-[550px] opacity-1 mb-[50]">
//         <Image 
//           src="/image.jpg" 
//           alt="Promotion Image" 
//           className="w-full h-full object-cover"
//           width={720} // Define width of the image
//           height={603} // Define height of the image
//         />
//       </div>
//     </div>
    
// );

// };
// export default Promotion;
import React from "react";
import Image from "next/image";

const Promotion = () => {
  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-between w-full h-auto opacity-1 mt-[50px] lg:mt-[100px]">
      {/* Left Content Section */}
      <div className="relative w-full lg:w-[720px] h-auto p-[20px_30px_54px_30px] lg:p-[72px_100px_54px_84px] gap-0 opacity-1 text-white">
        
        {/* Top Content (Text Section) */}
        <div className="w-full lg:w-[536px] h-auto opacity-1 mb-[20px] lg:mb-0">
          {/* Upper Text (Heading) */}
          <p className="w-full text-[#2A254B] text-2xl font-normal leading-[33.6px] text-left">
            From a studio in London to a global brand with over 400 outlets
          </p>

          {/* Paragraph Text */}
          <p className="w-full text-[#505977] text-lg font-normal leading-[25px] text-left mt-[35px]">
            When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. <br />
            <span><br />
            Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique 
            became the hotbed for the London interior design community.
            </span>
          </p>
        </div>
    
        {/* Button Section */}
        <div className="w-full lg:w-auto h-[56px] mt-[20px] lg:mt-[54px] text-center">
          <button className="w-full lg:w-[170px] h-[56px] p-[16px_32px] bg-[#F9F9F9] text-[#2A254B] text-lg font-medium leading-[24px]">
            Get in touch
          </button>
        </div>
      </div>
    
      {/* Right Side Image (Visible on small and large screens, hidden on tablets) */}
      <div className="w-full lg:w-[700px] h-auto opacity-1 mb-[50px] lg:mb-0 mt-[20px] lg:mt-0">
        <Image 
          src="/image.jpg" 
          alt="Promotion Image" 
          className="w-full h-full object-cover"
          width={720} // Define width of the image
          height={603} // Define height of the image
        />
      </div>
    </div>
  );
};

export default Promotion;
