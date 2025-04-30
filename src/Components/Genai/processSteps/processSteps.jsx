import React from 'react';
import { motion } from 'framer-motion';
import { Users, Cpu, Zap, CheckCircle, TrendingUp } from 'lucide-react';

const processSteps = [
  {
    title: 'Requirements Gathering',
    description:
      'Begin by understanding your business objectives, challenges, and requirements through collaborative workshops and discussions.',
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: 'Model Development & Training',
    description:
      'Develop custom AI algorithms and models tailored to your specific use case, utilizing machine learning, deep learning, and other techniques.',
    icon: <Cpu className="w-6 h-6" />,
  },
  {
    title: 'Free Proof of Concept',
    description:
      'Rapidly prototype AI solutions to validate concepts and demonstrate feasibility, allowing for early feedback and iteration.',
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: 'Testing & Deployment',
    description:
      'Deploy the solution after thoroughly testing the AI models with frameworks such as DeepEval & RAGAS to ensure real-world performance.',
    icon: <CheckCircle className="w-6 h-6" />,
  },
  {
    title: 'Monitoring & Optimization',
    description:
      'Closely monitor the deployed AI solutions to collect feedback and optimize them based on real-world usage and evolving requirements.',
    icon: <TrendingUp className="w-6 h-6" />,
  },
];

const OurProcess = () => {
  return (
    <section className="w-full bg-white text-gray-800 px-4 py-20 overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
        className="max-w-7xl mx-auto text-center space-y-8"
      >
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-blue-400 via-teal-300 to-blue-500 bg-clip-text text-transparent">
            Our Process
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="max-w-3xl mx-auto text-gray-600 text-md md:text-lg px-2"
        >
          Explore our structured approach to delivering effective AI solutions from concept to continuous improvement.
        </motion.p>

        {/* Timeline */}
        <div className="mt-12 md:mt-16 relative">
          <div className="relative w-full max-w-5xl mx-auto">
            {/* Vertical Line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-teal-300 to-blue-500 rounded-full origin-top md:transform md:-translate-x-1/2"
            />

            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className={`relative mb-6 md:mb-8 flex ${
                  i % 2 === 0
                    ? 'md:justify-start flex-row'
                    : 'md:justify-end flex-row md:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="w-4 h-4 bg-blue-500 border-4 border-white rounded-full z-10 absolute left-4 md:left-1/2 transform md:-translate-x-1/2 mt-4 md:mt-6" />

                {/* Card */}
                <div
                  className={`w-full md:w-[46%] p-4 md:p-5 rounded-xl bg-gray-50 border border-gray-200 shadow-md hover:border-blue-400 transition-all duration-300 ml-8 md:ml-0 ${
                    i % 2 === 0 ? 'md:mr-auto md:ml-4' : 'md:ml-auto md:mr-4'
                  }`}
                >
                  <div className="flex items-center gap-3 md:gap-4 mb-2">
                    <div className="bg-gradient-to-br from-blue-400 via-teal-300 to-blue-500 p-1.5 md:p-2 rounded-full text-white">
                      {step.icon}
                    </div>
                    <h4 className="text-base md:text-lg font-semibold text-gray-800">{step.title}</h4>
                  </div>
                  <p className="text-sm text-gray-600 leading-snug">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12 md:mt-16"
        >
        </motion.div>
      </motion.div>
    </section>
  );
};

export default OurProcess;
