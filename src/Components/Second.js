import React from "react";

function Second() {
  return (
    <div className="flex justify-center items-start bg-white min-h-screen px-4 border-b-2 ">
      <div className="max-w-4xl p-6 mt-16">
        <h1 className="text-left text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Introduction line heading or value
          <br />
          proposition goes here in 4 lines.
        </h1>
        <p className="mt-4 text-black text-left text-lg md:text-lg font-medium md:leading-7">
          Description text paragraph can go here in 200 words. This can be
          multi-line text. Description text paragraph can go here in 200 words.
          This can be multi-line text.
        </p>
        <div className="mt-6 text-left">
          <button className="px-6 md:px-8 py-3 bg-purple-600 text-white text-base md:text-lg duration-200 font-bold rounded shadow-lg hover:bg-black hover:text-white focus:outline-none">
            View Services
          </button>
        </div>
      </div>
    </div>
  );
}

export default Second;
