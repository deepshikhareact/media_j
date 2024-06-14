// import React from "react";

// const Six = () => {
//   const cartItems = [
//     { id: 1, image: "bg12.png", icon: "zoom.png" },
//     { id: 2, image: "bg122.png", icon: "zoom.png" },
//     { id: 3, image: "bg123.png", icon: "zoom.png" },
//     { id: 4, image: "bg124.png", icon: "zoom.png" },
  
//     // ... other cart items
//   ];

//   return (
//     <div className="container px-4 py-8">
//       <div className="flex flex-row items-center justify-start space-x-2 overflow-y-auto md:flex-nowrap md:justify-center ">
//         {cartItems.map((item) => (
//           <div key={item.id} className="relative flex-none w-56 h-60">
//             <div className="w-full h-full overflow-hidden bg-white rounded shadow-md">
//               <img
//                 src={item.image}
//                 alt={`Cart item ${item.id}`}
//                 className="object-cover w-full h-full"
//               />

//               <div className="absolute inset-0 flex items-center justify-center text-white">
//                 <img
//                   src={item.icon}
//                   alt={`Icon for cart item ${item.id}`}
//                   className="transition-transform transform cursor-pointer w-14 h-14 hover:scale-125"
//                 />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Six;
import React from "react";

const Six = () => {
  const cartItems = [
    { id: 1, image: "bg12.png", icon: "zoom.png" },
    { id: 2, image: "bg122.png", icon: "zoom.png" },
    { id: 3, image: "bg123.png", icon: "zoom.png" },
    { id: 4, image: "bg124.png", icon: "zoom.png" },
    { id: 4, image: "bg12.png", icon: "zoom.png" },
    // ... other cart items
  ];

  return (
    <div className=" px-4 py-8">
    <div className="flex flex-row items-center justify-start space-x-4 overflow-x-auto no-scrollbar">
      {cartItems.map((item) => (
        <div key={item.id} className="relative flex-none w-56 h-56 md:w-60 md:h-60">
          <div className="w-full h-full overflow-hidden">
            <img
              src={item.image}
              alt={`Cart item ${item.id}`}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white">
              <img
                src={item.icon}
                alt={`Icon for cart item ${item.id}`}
                className="transition-transform transform cursor-pointer w-14 h-14 hover:scale-125"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Six;
