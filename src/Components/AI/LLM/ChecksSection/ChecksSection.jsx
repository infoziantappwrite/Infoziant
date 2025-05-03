import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import sampleGif1 from '../../../../assests/Images/Ourservice/GenAI/llmcheck1.png';
import sampleGif2 from '../../../../assests/Images/Ourservice/GenAI/LLMWeCheck/Image1.png';
import sampleGif3 from '../../../../assests/Images/Ourservice/GenAI/LLMWeCheck/Image2.png';
import sampleGif4 from '../../../../assests/Images/Ourservice/GenAI/LLMWeCheck/Image3.png';
import sampleGif5 from '../../../../assests/Images/Ourservice/GenAI/LLMWeCheck/Image4.png';
import sampleGif6 from '../../../../assests/Images/Ourservice/GenAI/LLMWeCheck/Image5.png';

const checks = [
  { title: 'Correctness', img: sampleGif2, borderColor: 'border-pink-400' },
  { title: 'Relevance', img: sampleGif3, borderColor: 'border-yellow-400' },
  { title: 'Performance', img: sampleGif4, borderColor: 'border-green-400' },
  { title: 'Robustness', img: sampleGif5, borderColor: 'border-blue-400' },
  { title: 'Responsible Metrics', img: sampleGif1, borderColor: 'border-purple-400' },
  { title: 'Security', img: sampleGif6, borderColor: 'border-red-400' },
];

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const ChecksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className="bg-gray-50 py-20 px-6 md:px-20"
    >
      <h2 className="text-center text-4xl font-bold mb-16">
        <span className="bg-gradient-to-r from-[#15f5b9] to-[#3F00FF] text-transparent bg-clip-text">
          What Do
        </span>{' '}
        <span className="text-gray-900">We Check?</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {checks.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            transition={{ duration: 0.6 }}
            className={`bg-white border-2 ${item.borderColor} rounded-2xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300`}
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-20 h-20 mb-6 object-contain"
            />
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[#3F00FF]">
              {item.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ChecksSection;
