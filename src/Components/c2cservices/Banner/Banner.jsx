import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

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
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setIsGifVisible(false);
    }
  }, [isInView]);

  return (
    <section
      ref={ref}
      className="relative px-6 min-h-[80vh] w-full overflow-hidden bg-gradient-to-br from-white via-blue-50 to-white text-gray-900 flex items-center "
    >
     
      <div className="absolute inset-0 pointer-events-none z-0">

        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 15, -15, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          className="absolute top-[-60px] left-[-60px] w-72 h-72 bg-blue-300 rounded-full opacity-30 blur-3xl"
        ></motion.div>

       
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 10, -10, 0], y: [0, -10, 10, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
          className="absolute bottom-[-80px] right-[-60px] w-80 h-80 bg-blue-400 rounded-full opacity-30 blur-2xl mix-blend-multiply"
        ></motion.div>

       
        <motion.svg
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
          className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 opacity-20"
          width="500"
          height="500"
          viewBox="0 0 500 500"
          fill="none"
        >
          <circle
            cx="250"
            cy="250"
            r="200"
            stroke="url(#grad2)"
            strokeWidth="1.5"
            strokeDasharray="8 6"
          />
          <defs>
            <linearGradient id="grad2" x1="0" y1="0" x2="500" y2="500">
              <stop stopColor="#3B82F6" />
              <stop offset="1" stopColor="#14B8A6" />
            </linearGradient>
          </defs>
        </motion.svg>

        {/* Top Right Wave */}
        <motion.svg
          animate={{ rotate: [12, 14, 10, 12] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute top-[-80px] right-[-80px] w-[300px] opacity-20"
          viewBox="0 0 200 200"
          fill="none"
        >
          <path
            d="M0,100 C50,0 150,200 200,100"
            stroke="url(#grad3)"
            strokeWidth="4"
            fill="none"
          />
          <defs>
            <linearGradient id="grad3" x1="0" y1="0" x2="200" y2="200">
              <stop stopColor="#60A5FA" />
              <stop offset="1" stopColor="#2DD4BF" />
            </linearGradient>
          </defs>
        </motion.svg>

        
        <div className="absolute bottom-6 left-6 space-y-1">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -5, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
              className="w-2 h-2 bg-blue-500 rounded-full opacity-50"
            ></motion.div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-7xl mx-auto">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-8 mt-12 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center px-4 py-1.5 bg-gradient-to-r from-blue-50 to-teal-50 rounded-full border border-blue-200 text-blue-600 text-sm font-medium">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
              {badgeText}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
          >
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
                {title}
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
          >
            <a
              href={primaryBtnLink}
              className="group px-8 py-3.5 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold rounded-full shadow-lg shadow-blue-200/30 hover:shadow-blue-300/40 transition-all duration-300 text-center relative overflow-hidden"
            >
              <span className="relative z-10">{primaryBtnText}</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </a>
            <a
              href={secondaryBtnLink}
              className="group px-8 py-3.5 bg-white border border-gray-200 text-gray-700 font-semibold rounded-full hover:bg-gray-50 hover:border-gray-300 shadow-sm hover:shadow transition-all duration-300 text-center"
            >
              <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent group-hover:text-gray-800 transition-colors duration-300">
                {secondaryBtnText}
              </span>
            </a>
          </motion.div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-[48%] flex justify-center relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-50 via-teal-50 to-blue-50 rounded-3xl blur-xl opacity-70"></div>

          <AnimatePresence>
            {isInView && (
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 20 }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.2,
                }}
                className="relative z-10 w-full flex justify-center p-2"
              >
                <img
                  src={image}
                  alt={title}
                  className="w-full max-w-sm sm:max-w-md lg:max-w-lg h-auto object-contain rounded-xl shadow-2xl shadow-blue-100/50"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Banner;
