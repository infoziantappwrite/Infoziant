import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const faqs = [
  {
    question: "Can you integrate AI solutions with our existing systems and infrastructure?",
    answer:
      "Absolutely. Our team has extensive experience in integrating AI solutions with existing systems and infrastructure. Whether you're using legacy software, cloud-based platforms, or proprietary hardware, we can seamlessly integrate AI capabilities to enhance your existing workflows and processes.",
  },
  {
    question: "What level of support do you provide after the deployment of AI solutions?",
    answer:
      "We offer comprehensive support and maintenance services to ensure that your AI solutions continue to perform optimally over time. This includes troubleshooting issues, implementing updates, and providing ongoing assistance as needed.",
  },
  {
    question: "How do you ensure the accuracy and reliability of AI models?",
    answer:
      "Ensuring the accuracy and reliability of AI models is a top priority for us. We employ rigorous testing and validation processes, leveraging techniques such as cross-validation, model evaluation metrics, and real-world validation to ensure that our models deliver accurate and reliable predictions.",
  },
  {
    question: "Do you provide training and education on using AI solutions?",
    answer:
      "Our solutions are user-centric and will be very easy to use. Nonetheless, we will offer training and education services to empower your team to effectively utilize and maintain AI solutions if required.",
  },
  {
    question: "Can you develop custom AI algorithms and models tailored to our specific needs?",
    answer:
      "Absolutely. We specialize in developing custom AI algorithms and models tailored to the unique requirements of each project. Whether you need to solve a specific business problem, optimize a process, or extract insights from data, we have the expertise.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="relative py-20 px-4 bg-gradient-to-r from-[#0a192f] via-[#112240] to-[#1a365d]">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-blue-500 opacity-5"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-teal-400 opacity-5"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-purple-500 opacity-5"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-gray-900">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3F00FF] to-[#15f5b9]">FAQ'S</span>{' '}
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-gray-900 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left"
                >
                  <span className="font-semibold text-lg text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-300 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
                      }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && <AccordionContent answer={faq.answer} />}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const AccordionContent = ({ answer }) => {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.scrollHeight);
    }
  }, []);

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height, opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="overflow-hidden"
    >
      <div ref={ref} className="px-6 pb-4 text-sm text-gray-300">
        {answer}
      </div>
    </motion.div>
  );
};

export default FAQSection;
