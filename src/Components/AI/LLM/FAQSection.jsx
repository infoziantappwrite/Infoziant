import React, { useState, useRef, useEffect } from 'react'; // Ensure useEffect is imported
import { ChevronDown } from 'lucide-react';
import { AnimatePresence, motion, useInView } from 'framer-motion';

const faqs = [
  {
    question: "Why is LLM Software Testing needed?",
    answer:
      "It is essential to ensure that your model performs accurately and reliably in real-world applications. Testing also helps identify and address issues such as inaccurate responses, contextual misunderstandings, and biases.",
  },
  {
    question: "How is LLM Testing different from Regular Testing?",
    answer:
      "LLM testing differs from regular testing due to the unpredictable nature of AI-generated responses. LLMs generate varied outputs based on learned patterns in training and user provided context, making their behavior complex and hard to evaluate.",
  },
  {
    question: "What kind of methodologies do you use?",
    answer:
      "We have expertise in methodologies such as RAGAS, GLUE, DeepEval, BLEU, BERT, ROGUE, etc to go beyond surface-level assessments and addressing deeper issues.",
  },
  {
    question: "What kind of support do you offer after testing is complete?",
    answer:
      "After testing is complete, we offer ongoing support that includes detailed reports, recommendations for improvements, and assistance with implementing any necessary changes.",
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
