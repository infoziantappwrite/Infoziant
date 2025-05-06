import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import sampleGif1 from '../../../../assests/Images/Ourservice/GenAI/LLMWhyChooseUs/llmAIspl.webp';
import sampleGif2 from '../../../../assests/Images/Ourservice/GenAI/LLMWhyChooseUs/llmDataTesting1.png';
import sampleGif3 from '../../../../assests/Images/Ourservice/GenAI/LLMWhyChooseUs/llmStrategies1.png';
import sampleGif4 from '../../../../assests/Images/Ourservice/GenAI/LLMWhyChooseUs/llmPioneers1.webp';
import sampleGif5 from '../../../../assests/Images/Ourservice/GenAI/LLMWhyChooseUs/llmReporting2.png';
import sampleGif6 from '../../../../assests/Images/Ourservice/GenAI/LLMWhyChooseUs/llmComprehensive1.png';

const items = [
  {
    title: 'AI Specialists',
    description:
      'Our dedicated team comprises leading AI experts with deep knowledge and specialized skills in LLM testing. We leverage this expertise to ensure your model achieves top-notch performance and accuracy.',
    image: sampleGif1,
  },
  {
    title: 'Data Testing Capabilities',
    description:
      'We provide robust tools and frameworks to assess and improve data quality. This ensures your LLM is trained on reliable, clean, and diverse datasets.',
    image: sampleGif2,
  },
  {
    title: 'Adaptive Strategies',
    description:
      'We adapt our testing strategies as your LLM evolves, ensuring ongoing quality and performance improvements.',
    image: sampleGif3,
  },
  {
    title: 'Pioneers in Testing',
    description:
      'Backed by a rich history in AI/ML validation, we pioneer LLM testing frameworks and set standards for reliability.',
    image: sampleGif4,
  },
  {
    title: 'Actionable Reporting',
    description:
      'Receive comprehensive, easy-to-digest reports that provide clear next steps to resolve performance bottlenecks.',
    image: sampleGif5,
  },
  {
    title: 'Comprehensive Coverage',
    description:
      'Our services cover everything from data validation to post-deployment monitoring, giving you end-to-end assurance.',
    image: sampleGif6,
  },
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    position: 'relative',
  },
  exit: (direction) => ({
    x: direction < 0 ? 100 : -100,
    opacity: 0,
  }),
};

const sectionVariants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  hidden: { opacity: 0, y: 50, transition: { duration: 0.8, ease: 'easeIn' } },
};

const listContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const listItem = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const WhyChooseUs = () => {
  const [[current, direction], setCurrent] = useState([0, 0]);
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-100px' });

  const goToSlide = (newIndex) => {
    if (newIndex >= 0 && newIndex < items.length) {
      setCurrent([newIndex, newIndex > current ? 1 : -1]);
    }
  };

  return (
    <motion.section
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className="relative bg-gradient-to-r from-[#0a192f] via-[#112240] to-[#1a365d] text-gray-100 py-12 md:py-20 px-4 md:px-6"
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-blue-500 opacity-5"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-teal-400 opacity-5"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-purple-500 opacity-5"></div>
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent opacity-[0.03]"
          style={{
            backgroundSize: '20px 20px',
            backgroundImage:
              'linear-gradient(to right, gray 1px, transparent 1px), linear-gradient(to bottom, gray 1px, transparent 1px)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 px-2 md:px-12">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-14">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#15f5b9] to-[#3F00FF]">Why</span>{' '}
          <span className="text-white">Choose Us ?</span>
        </h2>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 md:gap-10">
          {/* Stepper - Hidden on mobile, shown on desktop */}
          <div className="hidden md:block relative w-full md:w-1/3">
            <motion.div
              className="flex flex-col space-y-6 relative z-10"
              variants={listContainer}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              {items.map((item, index) => (
                <motion.div
                  key={index}
                  variants={listItem}
                  onClick={() => goToSlide(index)}
                  className={`flex items-center space-x-3 cursor-pointer transition-all ${
                    current === index
                      ? 'text-[#15f5b9] font-semibold scale-105'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      current === index ? 'border-[#15f5b9]' : 'border-gray-500'
                    }`}
                  >
                    {current === index && <div className="w-2 h-2 bg-[#15f5b9] rounded-full"></div>}
                  </div>
                  <span className="text-lg">{`0${index + 1}. ${item.title}`}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Mobile Stepper - Only shown on mobile */}
          <div className="md:hidden flex justify-center mb-4">
            <div className="flex space-x-2">
              {items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    current === index ? 'bg-[#15f5b9] scale-125' : 'bg-gray-500'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full md:w-2/3 bg-gray-800 rounded-2xl md:rounded-3xl shadow-lg md:shadow-2xl p-4 md:p-8 transition-all overflow-hidden relative  md:h-auto">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="flex flex-col md:flex-row items-center gap-4 md:gap-6 w-full h-full"
              >
                <img
                  src={items[current].image}
                  alt={items[current].title}
                  className="w-full md:w-1/2 rounded-lg md:rounded-xl object-contain max-h-[180px] md:max-h-64"
                />
                <div className="text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">{items[current].title}</h3>
                  <p className="text-gray-300 text-xs md:text-sm">{items[current].description}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 md:gap-6 mt-6 md:mt-8">
          <button
            onClick={() => goToSlide(current - 1)}
            disabled={current === 0}
            className="transition-all p-2 md:px-3 md:py-2 rounded-full bg-gradient-to-r from-[#15f5b9] to-[#3F00FF] text-white disabled:opacity-30"
          >
            <ChevronLeft size={18} />
          </button>
          <span className="font-semibold text-gray-300 text-sm md:text-base">
            {current + 1}/{items.length}
          </span>
          <button
            onClick={() => goToSlide(current + 1)}
            disabled={current === items.length - 1}
            className="transition-all p-2 md:px-3 md:py-2 rounded-full bg-gradient-to-r from-[#15f5b9] to-[#3F00FF] text-white disabled:opacity-30"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;