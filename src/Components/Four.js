import React from "react";

function Four() {
  return (
    <div className="flex justify-center items-center bg-white min-h-screen px-4 border-b-2">
      <div className="max-w-6xl w-full flex flex-col md:flex-row p-6">
        <div className="flex-1 mb-6 md:mb-0">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb- leading-9 ">
            Introduction line heading or value proposition.
          </h1>
        </div>
        <div className="flex-1 max-w-xl">
          <p className="hidden md:block text-base md:text-xl md:leading-9 text-black mb-6">
            Description text paragraph can go here in 200 words. This can be
            multi-line text. Description text paragraph can go here in 200
            words. This can be multi-line text. Description text paragraph can
            go here in 200 words. This can be multi-line text. Description text
            paragraph can go here in 200 words. This can be multi-line text.
          </p>
          <p className="md:hidden block text-base md:text-xl md:leading-9 text-black mb-4">
            Description text paragraph can go here in 200 words. This can be
            multi-line text. Description text paragraph can go here in 200
            words. This can be multi-line text.
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-x-4">
            {/* <button className="bg-purple-600 text-white px-6 py-3 rounded-md text-lg hover:bg-purple-700">
              View Services
            </button> */}
             <button className="px-6 md:px-8 py-3 bg-purple-600 text-white text-base md:text-lg duration-200 font-bold rounded shadow-lg hover:bg-black hover:text-white focus:outline-none">
                View Services
              </button>
              <span>  <button className="bg-gray-200 text-gray-800 px-6  md:px-8 py-3 rounded-md text-lg hover:bg-gray-300">
              Case Study
            </button></span>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Four;
