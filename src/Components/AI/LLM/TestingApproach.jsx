import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const steps = [
  {
    title: 'Training Data Integrity',
    description:
      'Ensures that the data used to train the AI model is accurate, representative, and free from biases.',
  },
  {
    title: 'Model Verification',
    description:
      'Validates the functionality and correctness of the AI model against predefined requirements and expectations.',
  },
  {
    title: 'Performance Testing',
    description:
      'Evaluates the responsiveness, scalability, and efficiency of the AI model under different workloads and conditions.',
  },
  {
    title: 'Security Testing',
    description:
      'Identifies vulnerabilities and ensures the LLM application can securely handle sensitive data across various scenarios.',
  },
  {
    title: 'Adaptive Automation',
    description:
      'Implements automated testing processes that adapt to changes in the AI model, environment, or user behavior.',
  },
];

const stepVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const TestingApproach = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-100px' });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-50 py-16 px-4"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#15f5b9] to-[#3F00FF]">
          Testing
        </span>{' '}
        <span className="text-gray-900">Approach</span>
      </h2>

      <div className="relative max-w-7xl mx-auto">
        <div className="hidden md:block absolute top-7 left-1/2 -translate-x-1/2 w-[84%] h-0.5 bg-gray-200 z-0"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 relative z-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={stepVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="flex flex-col items-center text-center relative"
            >
              <div className="text-4xl md:text-6xl font-bold text-gray-300 relative mb-2">
                0{index + 1}
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-gradient-to-r from-[#15f5b9] to-[#3F00FF] z-10"></span>
              </div>

              <div className="mt-4 p-4 rounded-lg bg-white shadow-md w-full max-w-xs sm:max-w-none">
                <h4 className="text-md font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#15f5b9] to-[#3F00FF] mb-2">
                  {step.title}
                </h4>
                <p className="text-sm text-gray-700">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TestingApproach;
