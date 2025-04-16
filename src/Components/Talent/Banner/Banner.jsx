import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import sampleGif from "../../../assests/Images/Banner/recruiting-professionals-studying-candidate-profiles.png";

const Banner = () => {
  const [isGifVisible, setIsGifVisible] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setIsGifVisible(true);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      setIsGifVisible(false); // Reset when out of view if you want re-animation
    }
  }, [isInView]);

  return (
    <section
      ref={ref}
      className="relative p-12 w-full text-white font-sans overflow-hidden"
    >
      {/* Background gradient and glow shapes */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f] via-[#0e223f] to-[#102e56]">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-500 opacity-10 blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-teal-300 opacity-10 blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full h-full px-6 lg:px-20 max-w-7xl mx-auto py-16"
      >
        {/* Left Text Section */}
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

        {/* Right: Animated GIF */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isGifVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-end"
        >
          <img
            src={sampleGif}
            alt="Digital Solutions Illustration"
            className="w-full max-w-lg h-auto"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Banner;
