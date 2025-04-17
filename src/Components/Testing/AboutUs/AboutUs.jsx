import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  const containerVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.2,
        ease: "easeOut"
      }
    }),
  };

  const cards = [
    {
      title: "Industry-Specific Testing Expertise",
      description: "Our specialized teams bring deep domain knowledge across healthcare, e-commerce, and enterprise software sectors.",
      gradient: "from-red-500 to-pink-500"
    },
    {
      title: "AI-Enhanced Testing Intelligence",
      description: "Our proprietary testing platform learns from each test cycle, continuously improving test coverage and accuracy while eliminating redundant tests.",
      gradient: "from-sky-500 to-teal-400"
    },
    {
      title: "Continuous Testing Integration",
      description: "Seamlessly integrated into your CI/CD pipeline for continuous delivery, ensuring quality with every release.",
      gradient: "from-amber-400 to-orange-500"
    }
  ];

  return (
    <motion.section
      className="w-full bg-gray-50 py-24 px-6 md:px-8 text-black"
      initial="initial"
      whileInView="animate"
      viewport={{ once: false, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div className="max-w-6xl mx-auto space-y-12">
        {/* Heading Section */}
        <motion.div
          className="text-center space-y-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">
              About Us
            </span>
          </h2>
          <motion.p
            className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            At Infoziant, we are redefining the landscape of software testing by delivering high-quality, reliable, and scalable testing solutions. 
            We empower your applications to be flawless and secure through our seamless manual and AI-powered automation processes.
          </motion.p>
        </motion.div>

        {/* Key Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className={`relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group`}
              variants={cardVariants}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-90`}></div>
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

              <div className="relative p-8 h-full flex flex-col justify-between z-10">
                <div>
                  <div className="w-12 h-12 mb-6 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                  <p className="text-white text-opacity-90">
                    {card.description}
                  </p>
                </div>
                <div className="mt-6">
                  <span className="inline-flex items-center text-sm font-medium text-white mt-4 group-hover:translate-x-2 transition-transform duration-300">
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default AboutUs;
