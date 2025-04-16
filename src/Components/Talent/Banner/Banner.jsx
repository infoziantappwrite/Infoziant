import React, { useState, useEffect } from "react";
import sampleGif from "../../../assests/Images/Banner/recruiting-professionals-studying-candidate-profiles.png"; // Transparent GIF

const Banner = () => {
  const [isGifVisible, setIsGifVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsGifVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative p-12 w-full text-white font-sans overflow-hidden">
      {/* Background gradient and glow shapes */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f] via-[#0e223f] to-[#102e56]">
        {/* Soft animated shapes */}
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-500 opacity-10 blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-teal-300 opacity-10 blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full h-full px-6 lg:px-20 max-w-7xl mx-auto py-16">
        {/* Left: Text Section */}
        <div className="w-full lg:w-1/2 text-left space-y-8 mb-12 lg:mb-0">
          <div className="inline-block px-4 py-1 bg-blue-600/20 rounded-full border border-blue-400/30 mb-2">
            <span className="text-blue-300 text-sm font-medium">Digital Excellence</span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
            <span className="block bg-gradient-to-r from-teal-300 to-blue-500 bg-clip-text text-transparent">
            Tech talent services
            </span>
            
          </h1>
          <span className="block text-xl">One Stop IT Staffing and Solutioning Vendors</span>

          <p className="text-gray-300 text-md max-w-lg">
          At Infoziant, we specialize in providing top-tier talents for businesses enabling them to enhance productivity, drive innovation, and scale efficiently
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#get-started"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-teal-400 text-white font-semibold rounded-full shadow-lg hover:shadow-blue-500/20 transition-all duration-300 text-center"
            >
              Start Your Project
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 text-center"
            >
              Schedule a Call
            </a>
          </div>
        </div>

        {/* Right: Transparent GIF - clean and borderless */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src={sampleGif}
            alt="Digital Solutions Illustration"
            className={`w-full max-w-lg h-auto transition-all duration-1000 ease-in-out ${
              isGifVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
