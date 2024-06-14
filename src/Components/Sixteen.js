import React, { useState } from "react";

const Sixteen = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="flex  justify-center items-start bg-white min-h-screen border-b-2">
      <div className="  max-w-7xl w-full  ">
        <div
          className="bg-white text-black h-[120px] py-4 flex items-center relative cursor-pointer"
          onClick={toggleDropdown}
        >
          <div className="container mx-auto flex items-center justify-between md:px-14 px-8">
            <div className="flex items-start">
              <div className="md:h-12 md:w-12 h-8 w-8 bg-black rounded-full "></div>
              <span className="text-lg md:text-2xl font-semibold cursor-pointer smooch-regular">
                LogoType
              </span>
            </div>

            <div className="flex items-center">
              <button className="mobile-menu-button">
                <svg
                  className="md:w-16 md:h-16 w-8 h-10 bg-yellow-400 text-black rounded-full p-1 md:p-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        {dropdownVisible && (
          <div className="bg-yellow-400 text-black py-4 open-sans">
            {/* Dropdown content goes here */}
            <div className="bg-yellow-400 text-black flex flex-col justify-center items-end p-10 md:p-20  min-h-[calc(100vh-120px)]">
              <div className="flex-1">
                <div className="mb-8 w-full text-end ">
                  <h1 className="text-2xl md:text-4xl font-bold mb-4">Home</h1>
                </div>
                <div className="mb-8 w-full text-end ">
                  <h1 className="text-2xl md:text-4xl font-bold mb-4">
                    About Us
                  </h1>
                  <p className="text-lg md:text-xl">
                    Company | People | Work With Us
                  </p>
                </div>
                <div className="mb-8 w-full text-end ">
                  <h1 className="text-2xl md:text-4xl font-bold mb-4">
                    Our Services
                  </h1>
                  <p className="text-lg md:text-xl">
                    Consulting | Design | Digital & Tech | Marketing | CX
                  </p>
                </div>
                <div className="mb-8 w-full text-end ">
                  <h1 className="text-2xl md:text-4xl font-bold mb-4">
                    Our Work
                  </h1>
                  <p className="text-lg md:text-xl">
                    Design | Digital & Tech | Production | Case Studies
                  </p>
                </div>
                <div className="mb-8 w-full text-end ">
                  <h1 className="text-2xl md:text-4xl font-bold mb-4">
                    Resources
                  </h1>
                </div>
                <div className="w-full text-end">
                  <h1 className="text-2xl md:text-4xl font-bold mb-4">
                    Contact Us
                  </h1>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sixteen;


