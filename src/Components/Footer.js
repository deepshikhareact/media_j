import React from 'react';

const Footer = () => {
  return (

<>

    {/* <div className="bg-gray-300 text-center py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="text-black flex items-center space-x-2">
            <div className="w-8 h-8 bg-black rounded-full"></div>
            <span className="font-bold text-lg">LogoType</span>
          </div>
        </div>
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <div>
            <h5 className="font-semibold mb-2">Home</h5>
            <ul className="space-y-1">
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Home</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">About Us</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-2">Services</h5>
            <ul className="space-y-1">
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Service 01</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Service 02</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Service 03</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Service 04</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-2">Resources</h5>
            <ul className="space-y-1">
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Blogs</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Articles</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Whitepapers</a></li>
            </ul>
          </div>
          <div className="flex justify-center items-center space-x-2">
            <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
            <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
            <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>

 */}


{/* <div className="flex justify-center items-center  px-4">
      <div className="max-w-4xl w-full p-6 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-4 md:mb-0">
            Subscribe to our Newsletter
          </h2>
          <div className="flex flex-col md:flex-row items-center">
            <input
              type="email"
              placeholder="Your Email ID"
              className="text-gray-700 text-base md:text-lg p-3 rounded-full mb-4 md:mb-0 md:mr-4 focus:outline-none"
            />
            <button className="bg-white text-black text-base md:text-lg font-bold py-3 px-6 rounded-full shadow-lg hover:bg-gray-200 focus:outline-none">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div> */}



<div className="flex justify-center items-center  bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-6">
      <div className="max-w-4xl w-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-lg p-8 shadow-lg ">
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-6 md:mb-2 md:mr-6">
          Subscribe to our Newsletter
        </h2>
        <div className="flex flex-col md:flex-row w-full md:w-auto items-center">
          <input
            type="email"
            placeholder="Your Email ID"
            className="p-4 w-full md:w-72 rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4 md:mb-0 md:mr-4"
          />
          <button className="px-6 py-3 bg-white text-black font-bold rounded-full shadow-md hover:bg-gray-100 focus:outline-none">
            Subscribe
          </button>
        </div>
      </div>
    </div>

{/* <div className="flex items-center justify-center  bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 ">
      <div className="w-full max-w-2xl  bg-opacity-20 rounded-lg p-8 shadow-lg">
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-white mb-4">
          Subscribe to our Newsletter
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <input
            type="email"
            placeholder="Your Email ID"
            className="w-full md:w-2/3 p-3 rounded-full text-black focus:outline-none mb-4 md:mb-0 md:mr-4 shadow-md"
          />
          <button className="w-full md:w-auto px-8 py-3 bg-white text-black font-bold rounded-full shadow-md hover:bg-gray-200">
            Subscribe
          </button>
        </div>
      </div>
    </div> */}



    <div className="py-8 bg-white " >
      <div className=" px-4 mx-auto h-[200px] w-full  border-b-2">
        {/* <div className="mb-8 text-center">
          <input
            type="email"
            placeholder="Your Email ID"
            className="w-full max-w-md px-4 py-2 font-medium border rounded-full shadow"
          />
          <button className="px-6 py-2 ml-4 font-semibold text-black bg-white rounded-full shadow">
            Subscribe
          </button>
        </div> */}
        <div className="flex flex-wrap justify-between p-8 bg-gray-300 rounded-lg">
          <div className="w-full h-[200px]  mb-4 lg:w-1/4">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 mr-2 bg-black rounded-full"></div>
              <span className="text-xl font-semibold">LogoType</span>
            </div>
            <p>All rights reserved</p>
          </div>
          <div className="flex flex-wrap justify-between w-full lg:w-3/4">
            <div className="w-full mb-4 sm:w-1/2 md:w-1/4">
              <h3 className="font-bold">Home</h3>
              <ul>
                <li><a href="/" className="hover:text-gray-700">About Us</a></li>
                <li><a href="/" className="hover:text-gray-700">Contact Us</a></li>
              </ul>
            </div>
            <div className="w-full mb-4 sm:w-1/2 md:w-1/4">
              <h3 className="font-bold">Services</h3>
              <ul>
                <li><a href="/" className="hover:text-gray-700">Service 01</a></li>
                <li><a href="/" className="hover:text-gray-700">Service 02</a></li>
                <li><a href="/" className="hover:text-gray-700">Service 03</a></li>
                <li><a href="/" className="hover:text-gray-700">Service 04</a></li>
              </ul>
            </div>
            <div className="w-full mb-4 sm:w-1/2 md:w-1/4">
              <h3 className="font-bold">Resources</h3>
              <ul>
                <li><a href="/" className="hover:text-gray-700">Blogs</a></li>
                <li><a href="/" className="hover:text-gray-700">Articles</a></li>
                <li><a href="/" className="hover:text-gray-700">Whitepapers</a></li>
              </ul>
            </div>
            <div className="w-full mb-4 sm:w-1/2 md:w-1/4">
              <h3 className="font-bold">Social</h3>
              <ul className="flex space-x-4 pt-3">
                <li><a href="/" className="p-3 bg-white rounded-full border-solid shadow"><span className="sr-only">Social Link 1</span></a></li>
                <li><a href="/" className="p-3 bg-white rounded-full shadow"><span className="sr-only">Social Link 2</span></a></li>
                <li><a href="/" className="p-3 bg-white rounded-full shadow"><span className="sr-only">Social Link 3</span></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Footer;
