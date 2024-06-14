// import React from "react";
// import img from "../assets/Rectangle.png";

// function Eight() {
//   return (
//     <section className="w-full p-2  max-w-[1100px] m-auto">
//       <div className="relative overflow-hidden rounded-lg ">
//         <img
//           src={img}
//           alt=""
//           className="w-[600px] h-[300px] md:h-[500px] object-cover"
//         />
//         <div className="md:absolute bottom-0  lg:bottom-10 right-0 md:right-[226px] bg-white p-4 md:p-8 w-[600px] md:w-[550px] h-[350px] lg:h-[400px] flex flex-col justify-center shadow-lg ">
//           <p className="text-sm leading-relaxed md:text-base lg:text-lg">
//             Small descriptive text in 3-4 lines can <br />
//             go here. They can be a single line <br />
//             or short paragraph too. Small descriptive <br />
//             text in 3-4 lines can go here. They can <br />
//             be a single line or short paragraph <br />
//             too. Small descriptive text in 3-4 lines <br />
//             can go here. They can be a single line or short paragraph too. Small
//             descriptive text in 3-4 lines can go <br />
//             here. They can be a single line or short paragraph too. <br />
//           </p>
//           <div className="flex items-center justify-start mt-4">
//             <button className="w-full p-2 px-6 py-4 font-semibold text-black transition-transform duration-200 bg-yellow-400 rounded-md hover:bg-neutral-800 hover:text-white">
//               KNOW MORE
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Eight;


// import React from "react";
// import img from "../assets/Rectangle.png";

// function BigHeadCardafter() {
//   return (
//     <section className="w-full p-2 max-w-[1100px]  py-8">
//       <div className="relative overflow-hidden px-4">
//         <img
//           src={img}
//           alt=""
//           className="w-[900px] h-[200px] sm:h-[300px] md:h-[500px] lg:h-[700px] object-cover px-8"
//         />
//         <div className="absolute bottom-0 md:bottom-20 lg:bottom-20 right-0 md:right-14 bg-[#edd8d7] p-4 md:p-10 w-full md:w-[500px] h-auto md:h-[400px] lg:h-[600px] flex flex-col justify-center shadow-lg ">
//           <h1 className="text-2xl font-bold md:text-3xl">
//             HEADING GOES HERE
//           </h1>
//           <p className="text-sm leading-relaxed md:text-base lg:text-lg mt-2">
//             Small descriptive text in 3-4 lines can <br />
//             go here. They can be a single line or <br />
//             short paragraph too. Small descriptive <br />
//             text in 3-4 lines can go here. They can <br />
//             be a single line or short paragraph <br />
//             too. Small descriptive text in 3-4 lines <br />
//             can go here. They can be a single line or short paragraph too. Small
//             descriptive text in 3-4 lines can go <br />
//             here. They can be a single line or short paragraph too.
//           </p>
//           <div className="flex items-center justify-start mt-4">
//             <button className="w-full p-2 font-semibold text-black transition-transform duration-200 bg-yellow-400 rounded-md hover:bg-neutral-800 hover:text-white">
//               KNOW MORE
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default BigHeadCardafter;

// import React from "react";
// import img from "../assets/Rectangle.png";

// function BigHeadCardafter() {
//   return (
//     <section className="w-full p-2 max-w-[1100px] py-8 mx-auto">
//       <div className="relative overflow-hidden">
//         <img
//           src={img}
//           alt=""
//           className="w-full h-[200px] sm:h-[300px] md:h-[500px] lg:h-[700px] object-cover"
//         />
//         <div className="absolute bottom-0 md:bottom-20 lg:bottom-20 right-0 md:right-14 bg-[#edd8d7] p-4 md:p-10 w-full md:w-[500px] h-auto md:h-[400px] lg:h-[600px] flex flex-col justify-center shadow-lg">
//           <h1 className="text-lg sm:text-xl font-bold md:text-2xl lg:text-3xl">
//             HEADING GOES HERE
//           </h1>
//           <p className="text-xs sm:text-sm leading-relaxed md:text-base lg:text-lg mt-2">
//             Small descriptive text in 3-4 lines can go here. They can be a single line or short paragraph too. Small descriptive text in 3-4 lines can go here. They can be a single line or short paragraph too. Small descriptive text in 3-4 lines can go here. They can be a single line or short paragraph too. Small descriptive text in 3-4 lines can go here. They can be a single line or short paragraph too.
//           </p>
//           <div className="flex items-center justify-start mt-4">
//             <button className="w-full p-2 font-semibold text-black transition-transform duration-200 bg-yellow-400 rounded-md hover:bg-neutral-800 hover:text-white">
//               KNOW MORE
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default BigHeadCardafter;
import React from "react";
import img from "../assets/Rectangle.png";

function CustomCard() {
  return (
    <section className="w-full p-4 max-w-[1100px] px-8">
      <div className="relative overflow-hidden space x-4">
        <img
          src={img}
          alt="Decorative"
          className="w-[700px] h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] object-cover"
        />
        <div className="absolute bottom-0 md:bottom-20 lg:bottom-20 top-0 right-0 md:left-40  bg-[#f3e5e4] p-4 md:p-8 w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] h-auto flex flex-col justify-center shadow-lg mt-4 md:mt-8 lg:mt-12 transform md:translate-x-1/4 lg:translate-x-1/2">
          <h1 className="text-xl sm:text-2xl font-bold md:text-3xl mb-2">
            HEADING GOES HERE
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed mb-4">
            Small descriptive text in 3-4 lines can go here. They can be a single line or short paragraph too. Small descriptive text in 3-4 lines can go here. They can be a single line or short paragraph too. Small descriptive text in 3-4 lines can go here. They can be a single line or short paragraph too. Small descriptive text in 3-4 lines can go here. They can be a single line or short paragraph too.
          </p>
          <div className="flex items-center justify-start mt-4">
            <button className="px-4 py-2 font-semibold text-black transition-transform duration-200 bg-yellow-400 rounded-md hover:bg-neutral-800 hover:text-white">
              KNOW MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CustomCard;
