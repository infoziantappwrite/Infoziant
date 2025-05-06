import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import sampleGif from "../../../assests/Images/Banner/recruiting-professionals-studying-candidate-profiles.png";
import InquiryFormSerivies from "../../Services/InquiryFormSerivies.jsx"; // Adjust path as needed

const Banner = () => {
  const [isGifVisible, setIsGifVisible] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const [showForm, setShowForm] = useState(false);


  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setIsGifVisible(true);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      setIsGifVisible(false);
    }
  }, [isInView]);

  return (
    <section
      ref={ref}
      className="relative px-8 sm:px-8 md:px-12 lg:px-20 lg:py-32 py-12 w-full text-white  overflow-hidden"
    >
      {/* Background gradient and glow shapes */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f] via-[#0e223f] to-[#102e56]">
        <div className="absolute top-20 left-10 w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-blue-500 opacity-10 blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-56 h-56 sm:w-80 sm:h-80 rounded-full bg-teal-300 opacity-10 blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full h-full max-w-7xl mx-auto"
      >
        {/* Left Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6 mb-10 lg:mb-0">
        <div className="inline-block px-4 py-1 bg-blue-600/20 rounded-full border border-blue-400/30">
            <span className="text-blue-300 text-sm font-medium">Innovative Tech & Business Services</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
            <span className="block bg-gradient-to-r from-teal-300 to-blue-500 bg-clip-text text-transparent">
              Tech Talent Services
            </span>
          </h1>

          <span className="block text-lg sm:text-xl text-gray-200">
            One Stop IT Staffing and Solutioning Vendors
          </span>

          <p className="text-gray-300 text-md max-w-xl mx-auto lg:mx-0">
            At Infoziant, we specialize in providing top-tier talents for businesses enabling them to enhance productivity, drive innovation, and scale efficiently
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#get-started"
              className="px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-600 to-teal-400 text-white font-semibold rounded-full shadow-lg hover:shadow-blue-500/20 transition-all duration-300 text-center"
            >
              Explore Now
            </a>
            <button
  onClick={() => setShowForm(true)}
  className="px-6 sm:px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 text-center"
>
  Schedule a Call
</button>
          </div>
        </div>

        {/* Right: Animated GIF */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isGifVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full lg:w-1/2 flex justify-center mr-20 lg:mr-0" 
        >
          <img
            src={sampleGif}
            alt="Digital Solutions Illustration"
            className="w-full max-w-xs sm:max-w-md md:max-w-lg h-auto"
          />
        </motion.div>
      </motion.div>

      {showForm && (
  <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
    <InquiryFormSerivies closeModal={() => setShowForm(false)} />
  </div>
)}

    </section>
  );
};

export default Banner;
