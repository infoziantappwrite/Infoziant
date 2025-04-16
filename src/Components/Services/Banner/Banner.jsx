import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import sampleGif from "../../../assests/Images/Ourservice/banner.png";

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
      className="relative h-auto min-h-[80vh] lg:min-h-[90vh]  text-white flex items-center"
      style={{
        background: `radial-gradient(circle at center, #2563eb 0%, #0f172a 70%, #000000 100%)`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Content */}
      <div className="relative z-20 flex flex-col-reverse lg:flex-row items-center justify-between  gap-10 w-full px-6 sm:px-10 md:px-16 max-w-7xl mx-auto py-10 md:py-20">
        {/* Left: Text & Buttons */}
        <motion.div
          className="text-white text-center lg:text-left max-w-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-[#15f5ba] to-[#06f] bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Web & App Solutions
          </motion.h1>

          <motion.p
            className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 px-2 sm:px-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Turning Ideas into Impactful Digital Experiences — Our expert team delivers scalable, secure, and high-performance web and app solutions tailored to your needs.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center lg:justify-start gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
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
          </motion.div>
        </motion.div>

        {/* Right: GIF/Image */}
        <motion.div
          className="relative w-full sm:w-2/3 md:w-1/2 max-w-xs sm:max-w-md md:max-w-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Glow Background */}
          <div className="absolute inset-0 z-0 rounded-xl blur-3xl opacity-30 bg-[radial-gradient(circle_at_center,_#15f5ba,_#06f)]"></div>

          {/* Actual Image */}
          <img
            src={sampleGif}
            alt="Illustration"
            className={`relative z-10 w-full h-auto transition-opacity duration-1000 ${
              isGifVisible ? "opacity-100" : "opacity-0"
            }`}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
