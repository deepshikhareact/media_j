import React from "react";

function Third() {
  return (
    <div className="flex justify-start items-center bg-white min-h-screen px-4 border-b-2">
      <div className="max-w-6xl w-full flex flex-col md:flex-row p-6">
        {/* Left Column */}
        <div className="flex-1">
          
            <h1 className="text-left text-4xl md:text-6xl lg:text-5xl lg:mt-[-2.75rem] lg:ml-[15rem] font-bold leading-tight">
              Value <br /> proposition.
            </h1>
          
        </div>
        {/* Divider */}
        {/* <div className="hidden md:block w-[2px] bg-purple-600 mx-8"></div> */}

        {/* Right Column */}
        <div className="flex-1 mt-4 md:mt-[52px]">
          <div className="border-l-4  border-purple-600 pl-4">
            <p className="text-black text-left text-base md:text-lg">
              Description text paragraph can go here in 200 words. This can be
              multi-line text. Description text paragraph can go here in 200
              words. This can be multi-line text.
            </p>
            <div className="mt-6 text-left">
              <button className="px-6 md:px-8 py-3 bg-purple-600 text-white text-base md:text-lg duration-200 font-bold rounded shadow-lg hover:bg-black hover:text-white focus:outline-none">
                View Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Third;


// import React from 'react';

// const Third = () => {
//   return (
//     <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-white">
//     <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
//       <h2 className="text-4xl font-bold mb-4">Value proposition.</h2>
//     </div>
//     <div className="hidden md:block border-l-2 border-purple-500 h-32 mx-4"></div>
//     <div className="md:w-1/2 flex flex-col items-center md:items-start">
//       <p className="text-lg mb-4 max-w-md text-center md:text-left">
//         Description text paragraph can go here in 200 words. This can be multi-line text.
//         Description text paragraph can go here in 200 words. This can be multi-line text.
//       </p>
//       <button className="bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 shadow-lg">
//         View Services
//       </button>
//     </div>
//   </div>
//   );
// }

// export default Third;

