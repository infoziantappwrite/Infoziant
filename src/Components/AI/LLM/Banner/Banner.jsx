import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import sampleGif from '../../../../assests/Images/Ourservice/Genai.png'; // Adjust path as needed
import InquiryFormSerivies from '../../../Genai/InquiryFormSerivies'; // Adjust path as needed

const Banner = () => {
  const [isGifVisible, setIsGifVisible] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

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
    <>
      {/* Banner Section */}
      <section
  ref={ref}
  className="relative w-full h-[90vh] p-8 bg-cover bg-center text-white overflow-hidden" // Increased height to 90vh
  style={{
    backgroundImage:
      "url('https://cdn-cekmh.nitrocdn.com/SlrtebQxNZbUBkfXeRIcTgUmxZsOSldb/assets/images/optimized/rev-ee81cca/codoid.com/wp-content/uploads/2024/08/LLM-Service-Page-web-banner-new.png')",
  }}
>
        {/* Background gradient and animated circles */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f] via-[#0e223f] to-[#102e56]">
          <div className="absolute top-20 left-10 w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-blue-500 opacity-10 blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-56 h-56 sm:w-80 sm:h-80 rounded-full bg-teal-300 opacity-10 blur-3xl animate-pulse"
            style={{ animationDelay: '1s' }}
          ></div>
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-10 mt-16 sm:mt-20 lg:mt-28 flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto"
        >
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4 mb-10 lg:mb-0">
            <div className="inline-block px-4 py-1 bg-blue-600/20 rounded-full border border-blue-400/30">
              <span className="text-blue-300 text-sm font-medium">
                Innovative Tech & Business Services
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              <span className="block bg-gradient-to-r pb-4 from-teal-300 to-blue-500 bg-clip-text text-transparent">
                Achieve Excellence in AI with LLM Software Testing
              </span>
            </h1>

            <p className="text-gray-300 text-sm max-w-xl mx-auto lg:mx-0">
              Empower your business with next-gen capabilities in AI automation, personalization, and decision-making through our tailored LLM solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#get-started"
                className="px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-600 to-teal-400 text-white font-semibold rounded-full shadow-lg hover:shadow-blue-500/20 transition-all duration-300 text-center"
              >
                Get Started
              </a>
              <button
                onClick={() => setShowForm(true)}
                className="px-6 sm:px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 text-center"
              >
                Schedule a Call
              </button>
            </div>
          </div>

          {/* Right Image */}
          <motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={isGifVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
  transition={{ duration: 1.2, ease: 'easeOut' }}
  className="w-full lg:w-1/2 flex justify-center mx-auto lg:mx-0 lg:justify-center mt-8 sm:mt-0"
>
  <img
    src={sampleGif}
    alt="GenAI Solutions Illustration"
    className="w-full h-auto object-contain max-w-xs sm:max-w-md md:max-w-lg" // Adjusting for responsiveness
  />
</motion.div>
        </motion.div>
      </section>

      {/* Inquiry Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
          <InquiryFormSerivies closeModal={() => setShowForm(false)} />
        </div>
      )}
    </>
  );
};

export default Banner;
