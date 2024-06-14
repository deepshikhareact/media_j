// import React from "react";
// import img from "../assets/samm.jpg";

// function Saat() {
//   return (
//     <section className="w-full p-2  max-w-[1100px] m-auto">
//       <div className="relative overflow-hidden rounded-lg ">
//         <img
//           src={img}
//           alt=""
//           className="w-[600px] h-[300px] md:h-[500px] object-cover"
//         />

//         <div className="absolute p-4 text-white top-10 left-8 md:left-20 md:p-8">
//           <h1 className="text-3xl font-bold md:text-5xl">
//             Big Heading
//             <br />
//             Text goes here
//           </h1>
//           <hr className="w-2/3 my-6 border-t-4 rounded border-amber-400" />
//         </div>

//         <div className="md:absolute bottom-0  lg:bottom-10 right-0 md:right-[20px] bg-white p-4 md:p-8 w-[600px] md:w-[550px] h-[350px] lg:h-[400px] flex flex-col justify-center shadow-lg ">
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
//             <button className="w-40 p-2 px-6 py-4 font-semibold text-black transition-transform duration-200 bg-yellow-400 rounded-md hover:bg-neutral-800 hover:text-white">
//               KNOW MORE
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Saat;
import React from "react";
import img from "../assets/samm.jpg";

function BigHeadCard () {
  return (
    <section className="w-full p-2 max-w-[1100px] ">
      <div className="relative overflow-hidden ">
        <img
          src={img}
          alt=""
          className="w-[600px]  h-[200px] sm:h-[300px] md:h-[700px] object-cover"
        />

        <div className="absolute p-4 text-white top-10 left-8 md:left-20 md:p-8">
          <h1 className="text-3xl font-bold md:text-5xl">
            Big Heading
            <br />
            Text goes here
          </h1>
          <hr className="w-2/3 my-6 border-t-4 rounded border-amber-400" />
        </div>

        <div className="md:absolute bottom-0 lg:bottom-10 right-0 -md:right-20 bg-white p-4 md:p-6 w-full md:w-[500px] h-auto md:h-[500px] lg:h-[600px] flex flex-col justify-center shadow-lg">
          <p className="text-sm leading-relaxed md:text-base lg:text-lg">
            Small descriptive text in 3-4 lines can <br />
            go here. They can be a single line <br />
            or short paragraph too. Small descriptive <br />
            text in 3-4 lines can go here. They can <br />
            be a single line or short paragraph <br />
            too. Small descriptive text in 3-4 lines <br />
            can go here. They can be a single line or short paragraph too. Small
            descriptive text in 3-4 lines can go <br />
            here. They can be a single line or short paragraph too. <br />
          </p>
          <div className="flex items-center justify-start mt-4">
            <button className="w-40 p-2 px-6 py-4 font-semibold text-black transition-transform duration-200 bg-yellow-400 rounded-md hover:bg-neutral-800 hover:text-white">
              KNOW MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BigHeadCard;
