import React, { useState, useRef, useEffect } from 'react'; // Ensure useEffect is imported
import { ChevronDown } from 'lucide-react';
import { AnimatePresence, motion, useInView } from 'framer-motion';

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
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2, // delay based on the index
      duration: 0.6, // smooth animation
    },
  }),
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <motion.section className="bg-gray-100 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#3F00FF] to-[#15f5b9]">
          FAQ'S
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            return (
              <FAQItem
                key={index}
                index={index}
                faq={faq}
                openIndex={openIndex}
                toggle={toggle}
              />
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

// New component for individual FAQ items to use useRef and useInView
const FAQItem = ({ index, faq, openIndex, toggle }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-100px' });

  const isOpen = openIndex === index;

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className="bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-300"
      ref={ref}
    >
      <button
        onClick={() => toggle(index)}
        className="w-full flex justify-between items-center px-6 py-4 text-left"
      >
        <span className="font-semibold text-lg text-gray-800">
          {faq.question}
        </span>
        <ChevronDown
          className={`h-5 w-5 text-gray-600 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && <AccordionContent answer={faq.answer} />}
      </AnimatePresence>
    </motion.div>
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
      initial={{ height: 0, opacity: 0, y: -20 }}
      animate={{ height, opacity: 1, y: 0 }}
      exit={{ height: 0, opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="overflow-hidden"
    >
      <div ref={ref} className="px-6 pb-4 text-sm text-gray-600">
        {answer}
      </div>
    </motion.div>
  );
};

export default FAQSection;
