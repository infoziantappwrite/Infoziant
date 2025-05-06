import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import sampleGif from '../../../../assests/Images/Ourservice/GenAI/llmimages1.png';
import InquiryFormSerivies from '../../../Genai/InquiryFormSerivies';

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
      {/* Banner Section - Adjusted for mobile */}
      <section
        ref={ref}
        className="relative w-full min-h-[80vh] md:h-[90vh] p-4 sm:p-6 md:p-8 bg-cover bg-center text-white overflow-hidden"
        style={{
          backgroundImage:
            "url('https://cdn-cekmh.nitrocdn.com/SlrtebQxNZbUBkfXeRIcTgUmxZsOSldb/assets/images/optimized/rev-ee81cca/codoid.com/wp-content/uploads/2024/08/LLM-Service-Page-web-banner-new.png')",
          backgroundPosition: 'center top' // Better mobile positioning
        }}
      >
        {/* Background gradient and animated circles - Adjusted for mobile */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f] via-[#0e223f] to-[#102e56]">
          <div className="absolute top-10 left-4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full bg-blue-500 opacity-10 blur-xl md:blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-10 right-4 w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 rounded-full bg-teal-300 opacity-10 blur-xl md:blur-3xl animate-pulse"
            style={{ animationDelay: '1s' }}
          ></div>
        </div>

        {/* Content - Mobile optimized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-10 pt-12 sm:pt-16 md:pt-20 lg:pt-28 flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto"
        >
          {/* Text Content - Mobile adjustments */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-3 sm:space-y-4 mb-6 sm:mb-8 md:mb-10 lg:mb-0 px-2 sm:px-0">
            <div className="inline-block px-3 py-1 sm:px-4 sm:py-1 bg-blue-600/20 rounded-full border border-blue-400/30">
              <span className="text-blue-300 text-xs sm:text-sm font-medium">
                Innovative Tech & Business Services
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-snug sm:leading-tight">
              <span className="block bg-gradient-to-r pb-2 sm:pb-3 md:pb-4 from-teal-300 to-blue-500 bg-clip-text text-transparent">
                Achieve Excellence in AI with LLM Software Testing
              </span>
            </h1>

            <p className="text-gray-300 text-xs sm:text-sm max-w-md sm:max-w-xl mx-auto lg:mx-0">
              Empower your business with next-gen capabilities in AI automation, personalization, and decision-making through our tailored LLM solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a
                href="#get-started"
                className="px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-600 to-teal-400 text-white font-medium sm:font-semibold rounded-full shadow-lg hover:shadow-blue-500/20 transition-all duration-300 text-sm sm:text-base text-center"
              >
                Get Started
              </a>
              <button
                onClick={() => setShowForm(true)}
                className="px-4 py-2 sm:px-6 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium sm:font-semibold rounded-full hover:bg-white/20 transition-all duration-300 text-sm sm:text-base text-center"
              >
                Schedule a Call
              </button>
            </div>
          </div>

          {/* Right Image - Mobile adjustments */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isGifVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="w-full lg:w-1/2 flex justify-center mx-auto lg:mx-0 lg:justify-center mt-6 sm:mt-8 md:mt-0"
          >
            <img
              src={sampleGif}
              alt="GenAI Solutions Illustration"
              className="w-full h-auto object-contain max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg"
              loading="lazy"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Inquiry Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <InquiryFormSerivies closeModal={() => setShowForm(false)} />
        </div>
      )}
    </>
  );
};

export default Banner;