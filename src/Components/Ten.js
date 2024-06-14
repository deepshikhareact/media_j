// import React from "react";

// function Ten() {
//   return (
//     <div className="flex justify-center items-center bg-white min-h-screen px-4 border-b-2">
//       <div className="max-w-6xl w-full flex flex-col lg:flex-row ">
//         <div className="h-screen flex-1 bg-gray-200 p-16">
//           <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">
//             Sub-title goes here, which is 18 points smaller
//           </h2>
//           <div className="max-w-fit">
//             <p className="hidden lg:block text-justify text-sm md:text-base lg:text-lg text-black">
//               This is the text for larger screens. It can be 200 words long.
//               This can be multi-line text. Continue with your text
//               here.Description text paragraph can go here in 200 words. This can
//               be multi-line text. Description text paragraph can go here in 200
//               words. This can be multi-line text. Description text paragraph can
//               go here in 200 words. This can be multi-line text. Description
//               text paragraph can go here in 200 words. This can be multi-line
//               text. Description text paragraph can go here in 200 words. This
//               can be multi-line text. Description text paragraph can go here in
//               200 words. This can be multi-line text. Description text paragraph
//               can go here in 200 words. This can be multi-line text. Description
//               text paragraph can go here in 200 words. This can be multi-line
//               text.Description text paragraph can go here in 200 words. This can
//               be multi-line text. Description text paragraph can go here in 200
//               words. This can be multi-line text.
//             </p>
//             <p className="block lg:hidden text-justify text-sm text-black">
//               This is the text for larger screens. It can be 200 words long.
//               This can be multi-line text. Continue with your text
//               here.Description text paragraph can go here in 200 words. This can
//               be multi-line text.
//             </p>
//           </div>
//         </div>
//         <div className="flex-1"></div>
//       </div>
//     </div>
//   );
// }

// export default Ten;

import React from "react";

function Ten() {
  return (
    <div className="flex justify-center items-center bg-white min-h-screen px-2 border-b-2">
      <div className="max-w-3xl w-full flex flex-col lg:flex-row ">
        {/* Left Content Area */}
        <div className="lg:h-screen lg:flex-1 bg-gray-200 p-16">
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">
            Sub-title goes here, which is 18 points smaller
          </h2>
          <div className="max-w-fit">
            <p className="hidden lg:block text-justify text-sm md:text-base lg:text-lg text-black">
              This is the text for larger screens. It can be 200 words long.
              This can be multi-line text. Continue with your text
              here.Description text paragraph can go here in 200 words. This can
              be multi-line text. Description text paragraph can go here in 200
              words. This can be multi-line text. Description text paragraph can
              go here in 200 words. This can be multi-line text. Description
              text paragraph can go here in 200 words. This can be multi-line
              text. Description text paragraph can go here in 200 words. This
              can be multi-line text. 
              {/* Description text paragraph can go here in
              200 words. This can be multi-line text. Description text paragraph
              can go here in 200 words. This can be multi-line text. Description
              text paragraph can go here in 200 words. This can be multi-line
              text.Description text paragraph can go here in 200 words. This can
              be multi-line text. Description text paragraph can go here in 200
              words. This can be multi-line text. */}
            </p>
            <p className="block lg:hidden text-justify text-sm text-black">
              This is the text for smaller screens. It should be concise and
              adapted for mobile view.
            </p>
          </div>
        </div>
        
        {/* Right Content Area (Empty flex-1 for spacing or future content) */}
        <div className="flex-1"></div>
      </div>
    </div>
  );
}

export default Ten;

