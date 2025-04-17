import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const Banner = ({
  badgeText,
  title,
  description,
  primaryBtnText,
  primaryBtnLink,
  secondaryBtnText,
  secondaryBtnLink,
  image,
}) => {
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
      setIsGifVisible(false);
    }
  }, [isInView]);

  return (
    <section
      ref={ref}
      className="relative px-6 sm:px-8 md:px-12 lg:px-20 py-20 w-full font-sans overflow-hidden bg-white text-gray-900"
    >
      {/* Background abstract shapes */}
      <div className="absolute inset-0 z-0">
        {/* Right glowing shape */}
        <div className="absolute top-10 left-10 w-48 h-48 rounded-full bg-blue-200 opacity-20 blur-3xl animate-pulse"></div>
        

        {/* NEW: Left glow behind text */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-blue-100 via-teal-100 to-white opacity-40 blur-2xl z-0"></div>
      </div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-7xl mx-auto"
      >
        {/* Left Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6 mt-10 lg:mt-0">
          <div className="inline-block px-4 py-1 bg-blue-100 rounded-full border border-blue-200 text-blue-700 text-sm font-medium">
            {badgeText}
          </div>

          <h1 className="text-3xl sm:text-4xl pb-6 lg:text-6xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
            {title}
          </h1>

          <p className="text-gray-600 text-md max-w-xl mx-auto lg:mx-0">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href={primaryBtnLink}
              className="px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-center"
            >
              {primaryBtnText}
            </a>
            <a
              href={secondaryBtnLink}
              className="px-6 sm:px-8 py-3 border border-gray-300 text-gray-700 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 text-center"
            >
              {secondaryBtnText}
            </a>
          </div>
        </div>

        {/* Right: Image Section (larger size) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isGifVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full lg:w-[55%]  flex justify-center"
        >
          <img
            src={image}
            alt={title}
            className="w-full max-w-sm sm:max-w-md md:max-w-xl h-auto object-contain"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Banner;
