import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import sampleGif1 from '../../../../assests/Images/Ourservice/GenAI/WhyChooseUs/llmAIspl.webp';
import sampleGif2 from '../../../../assests/Images/Ourservice/GenAI/WhyChooseUs/llmDataTesting.png';
import sampleGif3 from '../../../../assests/Images/Ourservice/GenAI/WhyChooseUs/llmStrategies.png';
import sampleGif4 from '../../../../assests/Images/Ourservice/GenAI/WhyChooseUs/llmPioneers.png';
import sampleGif5 from '../../../../assests/Images/Ourservice/GenAI/WhyChooseUs/llmReporting.webp';
import sampleGif6 from '../../../../assests/Images/Ourservice/GenAI/WhyChooseUs/llmComprehensive.png';


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
    image: sampleGif2
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

const WhyChooseUs = () => {
  const [current, setCurrent] = useState(0);

  const goToSlide = (index) => {
    if (index >= 0 && index < items.length) setCurrent(index);
  };

  return (
    <section className="relative bg-gradient-to-r from-[#0a192f] via-[#112240] to-[#1a365d] text-gray-100 py-20 px-6">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-blue-500 opacity-5"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-teal-400 opacity-5"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-purple-500 opacity-5"></div>
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent opacity-[0.03]"
          style={{
            backgroundSize: "20px 20px",
            backgroundImage:
              "linear-gradient(to right, gray 1px, transparent 1px), linear-gradient(to bottom, gray 1px, transparent 1px)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#15f5b9] to-[#3F00FF]">Why</span>{' '}
          <span className="text-white">Choose Us ?</span>
        </h2>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
          {/* Stepper */}
          <div className="relative w-full md:w-1/3">
            <div className="flex flex-col space-y-6 relative z-10">
              {items.map((item, index) => (
                <div
                  key={index}
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
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full md:w-2/3 bg-gray-800 rounded-3xl shadow-2xl p-8 transition-all">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col md:flex-row items-center gap-6"
              >
                <img
                  src={items[current].image}
                  alt={items[current].title}
                  className="w-full md:w-1/2 rounded-xl object-contain max-h-64"
                />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">{items[current].title}</h3>
                  <p className="text-gray-300 text-sm">{items[current].description}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={() => goToSlide(current - 1)}
            disabled={current === 0}
            className="transition-all px-3 py-2 rounded-full bg-gradient-to-r from-[#15f5b9] to-[#3F00FF] text-white disabled:opacity-30"
          >
            <ChevronLeft size={20} />
          </button>
          <span className="font-semibold text-gray-300">
            {current + 1}/{items.length}
          </span>
          <button
            onClick={() => goToSlide(current + 1)}
            disabled={current === items.length - 1}
            className="transition-all px-3 py-2 rounded-full bg-gradient-to-r from-[#15f5b9] to-[#3F00FF] text-white disabled:opacity-30"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
