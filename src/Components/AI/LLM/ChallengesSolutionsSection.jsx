import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const challenges = [
  "Testing with Diverse Inputs",
  "Analyzing Quality of Responses",
  "Verify the Output’s ground truth",
  "Training Data Relevance",
  "Identifying Performance Bottlenecks",
  "Rapidly Evolving Technology"
];

const solutions = [
  "A combination of automated & manual testing",
  "Using RAG scores",
  "Using BLEU & BERT scores",
  "Identify Inaccuracies, Inconsistencies, and Biases",
  "Stress testing and Scalability Assessments",
  "Adaptive Strategies & Continuous Learning"
];

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.5 }
  }),
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ChallengesSolutionsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-100px' });

  return (
    <section
      ref={ref}
      className="relative py-20 overflow-hidden bg-gradient-to-r from-[#0a192f] via-[#112240] to-[#1a365d] text-gray-100"
    >
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
        <h2 className="text-center text-3xl font-bold mb-12">
          <span className="bg-gradient-to-r from-[#15f5b9] to-[#3F00FF] text-transparent bg-clip-text">
            Challenges
          </span>
          <span className="text-white"> and Solutions</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Challenges Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg overflow-hidden border border-white/10 hover:border-red-400 transition duration-300"
          >
            <div
              className="h-32 bg-cover bg-center relative flex items-end px-6 py-4 text-white"
              style={{
                backgroundImage:
                  "url('https://cdn-cekmh.nitrocdn.com/SlrtebQxNZbUBkfXeRIcTgUmxZsOSldb/assets/images/optimized/rev-ee81cca/codoid.com/wp-content/uploads/2024/08/Challenges-1.png')",
              }}
            >
              <div className="absolute inset-0 bg-black/50"></div>
              <h3 className="relative z-10 text-2xl font-semibold">Challenges</h3>
            </div>
            <ul className="p-6 space-y-4">
              {challenges.map((item, idx) => (
                <motion.li
                  key={idx}
                  custom={idx}
                  variants={listItemVariants}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  className="flex items-start space-x-2"
                >
                  <span className="w-3 h-3 mt-1 rounded-full bg-red-500 ring-2 ring-red-300"></span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Solutions Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg overflow-hidden border border-white/10 hover:border-teal-400 transition duration-300"
          >
            <div
              className="h-32 bg-cover bg-center relative flex items-end px-6 py-4 text-white"
              style={{
                backgroundImage:
                  "url('https://cdn-cekmh.nitrocdn.com/SlrtebQxNZbUBkfXeRIcTgUmxZsOSldb/assets/images/optimized/rev-ee81cca/codoid.com/wp-content/uploads/2024/08/Solution-1.png')",
              }}
            >
              <div className="absolute inset-0 bg-black/50"></div>
              <h3 className="relative z-10 text-2xl font-semibold">Our Solution</h3>
            </div>
            <ul className="p-6 space-y-4">
              {solutions.map((item, idx) => (
                <motion.li
                  key={idx}
                  custom={idx}
                  variants={listItemVariants}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  className="flex items-start space-x-2"
                >
                  <span className="w-3 h-3 mt-1 rounded-full bg-teal-400 ring-2 ring-teal-200"></span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSolutionsSection;
