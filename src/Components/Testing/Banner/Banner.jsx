import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import codeThemeImage from "../../../assests/Images/Banner/intelex_software_development1.gif";
import InquiryFormSerivies from "../../Services/InquiryFormSerivies";

const Banner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const [showForm, setShowForm] = useState(false);


  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [isInView]);

  return (
    <section
      ref={ref}
      className="relative px-4 min py-16 sm:px-6 md:px-12 w-full text-white  overflow-hidden"
    >
      {/* Background gradient with glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050d1f] via-[#0f1b3f] to-[#180f4a]">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-500 opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-teal-400 opacity-20 blur-3xl animate-pulse"></div>
      </div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto py-16"
      >
        {/* Left Section */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <div className="inline-block px-4 py-1 bg-blue-600/20 rounded-full border border-blue-400/30 mb-2">
            <span className="text-blue-300 text-sm font-medium">Innovative Tech & Business Services</span>
          </div>

          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-snug lg:leading-[1.24]">
              <span className="block bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent py-1">
                Software Testing Services
              </span>
            </h1>
            <p className="text-gray-300 text-sm sm:text-base mt-4 max-w-2xl mx-auto lg:mx-0">
              Ensure quality, performance, and security of your applications with our expert QA solutions tailored for modern businesses.
              Our testing services cover functional, automation, performance, security, and usability testing — enabling faster releases with confidence.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#get-started"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-teal-400 text-white font-semibold rounded-full shadow-lg hover:shadow-blue-500/20 transition-all duration-300 text-center"
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

        {/* Right Section - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full lg:w-1/2 mt-10 lg:mt-0 flex justify-center lg:justify-end"
        >
          <img
            src={codeThemeImage}
            alt="Software Development Illustration"
            className="w-full max-w-sm sm:max-w-md md:max-w-lg h-auto drop-shadow-2xl"
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
