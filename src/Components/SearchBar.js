// src/SearchBar.js
// src/SearchBar.js
import React, { useState, useRef } from 'react';
import { BiSearchAlt } from "react-icons/bi";

const SearchBar = () => {
  const [isActive, setIsActive] = useState(false);
  const [searchText, setSearchText] = useState('');
  const inputRef = useRef(null);

  const handleSearchClick = () => {
    setIsActive(true);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent px-4">
      <div className="relative w-full max-w-lg">
        <input
          type="text"
          ref={inputRef}
          className={`w-full border-0 border-b-4 py-2 px-4 text-center text-lg duration-300 transition-colors ${
            isActive ? 'border-blue-700' : 'border-black'
          } focus:outline-none`}
          placeholder={isActive ? '' : 'Search'}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
        />
        <button
          className="absolute -md:right-4 text-2xl text-black transform -translate-y-1/4 top-1/2 focus:outline-none"
          onClick={handleSearchClick}
        >
          <BiSearchAlt />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;


// src/SearchBar.js
// import React, { useState } from 'react';

// const SearchBar = () => {
//   const [isActive, setIsActive] = useState(false);
//   const [searchText, setSearchText] = useState('');

//   const handleSearchClick = () => {
//     setIsActive(true);
//     setSearchText(''); // Remove the placeholder text on click
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-transparent">
//       <div className="relative w-full max-w-md">
//         <input
//           type="text"
//           className={`w-full border-0 border-b-2 p-2 text-center text-lg ${
//             isActive ? 'border-blue-700' : 'border-black'
//           }`}
//           placeholder={isActive ? '' : 'Search'}
//           value={searchText}
//           onChange={(e) => setSearchText(e.target.value)}
//         />
//         <button
//           className="absolute -right-20 top-1/2 transform -translate-y-1/2 text-2xl p-2 rounded-full shadow-md"
//           onClick={handleSearchClick}
//         >
//           🔍
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SearchBar;

