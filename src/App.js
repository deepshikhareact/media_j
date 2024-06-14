// import React from "react";
// import First from "./Components/First";

import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Second from "./Components/Second";
import Third from "./Components/Third";
import Four from "./Components/Four";
import Five from "./Components/Five";
import Six from "./Components/Six";
import Seven from "./Components/Seven";
import Eight from "./Components/Eight";
import Nine from "./Components/Nine";
import Ten from "./Components/Ten";
// import Elevan from "./Components/Elevan";
import Twelve from "./Components/Twelve";
import Thirteen from "./Components/Thirteen";
import Fourteen from "./Components/Fourteen";
import Fifteen from "./Components/Fifteen";
import Sixteen from "./Components/Sixteen"
import Carousel from './Components/Carousel';
import SearchBar from "./Components/SearchBar";

import FAQItem from './Components/FAQItem';
import ServiceSelection from './Components/ServiceSelection';
import Footer from './Components/Footer';


const faqData = [
  {
    question: "Question number one goes here.....",
    answer: [
      "Answer for question number one goes here in paragraph.",
      "This is the second line of the answer.",
      "This can be a short answer or long answer.",
    ],
  },
  {
    question: "Question number two goes here.....",
    answer: [
      "Answer for question number two goes here in paragraph.",
      "This is the second line of the answer.",
      "This can be a short answer or long answer.",
    ],
  },
];


function App() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      {/* <First /> */}
      <Second />
      <Third />
      <Four />
      <Five />
      <Six />
      <Seven />
      <Eight />
      <Nine />
      <Ten />
      {/* <Elevan /> */}
      <Twelve />
      <Thirteen />
      <Fourteen />
      <Fifteen />
      <Sixteen />
      <header className="bg-gray-800 p-4">
        <h1 className="text-white text-center text-3xl">Company Logo Carousel</h1>
      </header>
      <main>
        <Carousel />
      </main>

      {/* <div className="relative min-h-screen bg-white">
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10"
          onClick={toggleSidebar}
        ></div>
      )}
      <main className="p-4">
 
      </main>
    </div> */}
      <SearchBar />

      <div className="flex items-center justify-center px-4 min-h-screen  bg-white border-b-2">
      <div className="flex flex-col w-full max-w-6xl p-6">
        {faqData.map((item, index) => (
          <FAQItem 
            key={index} 
            question={item.question} 
            answer={item.answer} 
          />
        ))}
      </div>
    </div>
    <ServiceSelection />
    <Footer />



    </>
  );
}

export default App;
