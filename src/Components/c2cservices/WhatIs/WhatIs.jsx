import React from "react";
import { ArrowRight } from "lucide-react"; // Importing an icon for the CTA

// Import BackgroundGlow from Code 2
const BackgroundGlow = () => (
  <div className="absolute inset-0 opacity-10 pointer-events-none">
    <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-purple-400 blur-3xl"></div>
    <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-blue-400 blur-3xl"></div>
  </div>
);

const WhatIsCodeChef = ({ heading, subheading, description, image, ctaText, ctaLink }) => {
  return (
    <section className="relative w-full py-20 bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#1a365d] text-white font-sans overflow-hidden">
      {/* Background Glow Effect */}
      <BackgroundGlow />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading and Subheading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-teal-300 via-teal-500 to-blue-500 bg-clip-text text-transparent mb-4">
            {heading}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-400 via-blue-400 to-blue-500 rounded-full mx-auto my-2"></div>
          <p className="text-xl sm:text-2xl font-medium text-gray-100">
            {subheading}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">


           {/* Left-side Image */}
          <div className="flex justify-center">
            <img
              src={image} 
              alt="CodeChef"
              className="w-full max-w-xs md:max-w-md lg:max-w-lg rounded-xl  transform transition-transform hover:scale-105 "
            />
          </div>


          {/* Text Content */}
          <div>
            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-8">
              {description}
            </p>
            {ctaText && ctaLink && (
              <a
                href={ctaLink}
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-teal-400 to-blue-500 text-white font-medium rounded-lg shadow-md hover:opacity-90 hover:shadow-lg transition-all duration-300"
              >
                {ctaText} <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            )}
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default WhatIsCodeChef;
