import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import sampleGif1 from '../../../../assests/Images/Ourservice/GenAI/LLMTesting.jpg';
import sampleGif2 from '../../../../assests/Images/Ourservice/GenAI/llmourinsi.jpg';

const insights = [
  {
    title: 'Comprehensive LLM Software Testing Guide',
    description:
      'Unsure of how to do LLM Software Testing? Here’s a complete guide that will help you get started on testing AI and LLM solutions.',
    image: sampleGif1,
    link: '#',
  },
  {
    title: 'AI Testing Tutorial : The Best Strategies to Use',
    description:
      'New to AI testing? Fear not, in this AI Testing Tutorial we explore how to build on your existing knowledge to become an expert in no time.',
    image: sampleGif2,
    link: '#',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
    },
  }),
};

const InsightsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-100px' });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-[#e6ecf5] py-16 px-4"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#15f5b9] to-[#3F00FF]">Our</span>{' '}
        <span className="text-gray-900">Insights</span>
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        {insights.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full md:w-1/3 object-cover h-48 md:h-auto"
            />
            <div className="flex flex-col justify-between p-6 md:w-2/3">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-700 mt-2">{item.description}</p>
              </div>
              <div className="mt-4">
                <a
                  href={item.link}
                  className="inline-block px-4 py-2 text-white text-sm font-medium rounded bg-gradient-to-r from-[#3F00FF] to-[#15f5b9]"
                >
                  Read More
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default InsightsSection;
