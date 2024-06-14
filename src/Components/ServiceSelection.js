// // ServiceSelection.js
// import React, { useState } from 'react';
// import { FaCheck } from 'react-icons/fa'; // Ensure you have react-icons installed

// const ServiceSelection = () => {
//   const services = [
//     { id: 1, icon: '🎮', label: 'Gaming' },
//     { id: 2, icon: '📻', label: 'Radio' },
//     { id: 3, icon: '🚑', label: 'Healthcare' },
//     { id: 4, icon: '📲', label: 'Apps' },
//     { id: 5, icon: '📶', label: 'Networking' }
//   ];

//   const [selectedServices, setSelectedServices] = useState([]);

//   const handleClick = (service) => {
//     setSelectedServices(prevSelected => 
//       prevSelected.includes(service.id)
//         ? prevSelected.filter(id => id !== service.id)
//         : [...prevSelected, service.id]
//     );
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-white">
//       <p className="mb-4 text-lg font-semibold text-center md:text-xl lg:text-2xl">
//         Think we can support you? <br /> Please select the services you are interested in.
//       </p>
//       <div className="flex space-x-4">
//         {services.map(service => (
//           <div 
//             key={service.id} 
//             className="relative flex flex-col items-center cursor-pointer"
//             onClick={() => handleClick(service)}
//           >
//             <div className="text-4xl md:text-5xl lg:text-6xl">
//               {service.icon}
//             </div>
//             {selectedServices.includes(service.id) && (
//               <FaCheck className="absolute top-0 right-0 text-xl text-green-500 md:text-2xl lg:text-3xl" />
//             )}
//             <p className="mt-2 text-sm text-center md:text-base lg:text-lg">
//               {service.label}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ServiceSelection;


import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa'; // Ensure you have react-icons installed

const ServiceSelection = () => {
  const services = [
    { id: 1, icon: '🎮', label: 'Gaming' },
    { id: 2, icon: '📻', label: 'Radio' },
    { id: 3, icon: '🚑', label: 'Healthcare' },
    { id: 4, icon: '📲', label: 'Apps' },
    { id: 5, icon: '📶', label: 'Networking' }
  ];

  const [selectedServices, setSelectedServices] = useState([]);

  const handleClick = (service) => {
    setSelectedServices(prevSelected =>
      prevSelected.includes(service.id)
        ? prevSelected.filter(id => id !== service.id)
        : [...prevSelected, service.id]
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-white">
      <p className="mb-4 text-lg font-semibold text-center md:text-xl lg:text-2xl">
        Think we can support you? <br /> Please select the services you are interested in.
      </p>
      <div className="flex flex-wrap justify-center">
        {services.map(service => (
          <div
            key={service.id}
            className="relative flex flex-col items-center cursor-pointer w-24 md:w-32 lg:w-40 mb-4 mx-2" // Adjust width for different screen sizes
            onClick={() => handleClick(service)}
          >
            <div className="text-4xl md:text-5xl lg:text-6xl">
              {service.icon}
            </div>
            {selectedServices.includes(service.id) && (
              <FaCheck className="absolute top-0 right-0 text-xl text-green-500 md:text-2xl lg:text-3xl" />
            )}
            <p className="mt-2 text-sm text-center md:text-base lg:text-lg">
              {service.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceSelection;
