import React, { useState, useEffect } from "react";
import sampleGif from "../../../assests/Images/Banner/sample.gif"; // Keep the GIF

const Banner = () => {
  const [isGifVisible, setIsGifVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsGifVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative h-auto min-h-[90vh] w-full text-white font-sans flex items-center"
      style={{
        background: `radial-gradient(circle at center, #2563eb 0%, #0f172a 70%, #000000 100%)`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Content */}
      <div className="relative z-20 flex flex-col sm:flex-row items-center justify-between w-full px-6 sm:px-16 max-w-7xl mx-auto py-5 sm:py-0">
        
        {/* Left: Text & Buttons */}
        <div className="text-white text-left max-w-xl mt-8 sm:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6 bg-[linear-gradient(90deg,_#15f5ba,_#06f)] bg-clip-text text-transparent">
            Transforming Ideas into Powerful Digital Solutions
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6">
            Build Scalable, Secure & High-Performance Web & App Solutions with Our Expert Team
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href="#get-started"
              className="px-5 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-teal-400 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:from-blue-600 hover:to-teal-400 transition-all duration-300"
            >
              Get Started
            </a>
            <a
              href="#contact"
              className="px-5 sm:px-6 py-2 sm:py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-gray-200 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Right: GIF */}
        <div className="relative w-full sm:w-1/2 max-w-xs sm:max-w-md">
          {/* Glow Background */}
          <div className="absolute inset-0 z-0 rounded-xl blur-3xl opacity-30 bg-[radial-gradient(circle_at_center,_#15f5ba,_#06f)]"></div>

          {/* Actual Image */}
          <img
            src={sampleGif}
            alt="Illustration"
            className={`relative z-10 w-full h-auto rounded-xl shadow-lg transition-opacity duration-1000 animate-swing ${
              isGifVisible ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
