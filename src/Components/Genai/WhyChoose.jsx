import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import image1 from "../../assests/Images/Ourservice/GenAI/GenAIWhyChoose/whyImage1.png"
import image2 from "../../assests/Images/Ourservice/GenAI/GenAIWhyChoose/WhyImage2.png"


const items = [
  {
    title: 'Tailored Solutions',
    description:
      'We understand that every business is unique, which is why we take a tailored approach in our GenAI development service. Be it web-based solutions or offline applications, we have the proficiency to deliver top-notch results.',
    image: image1,
  },
  {
    title: 'Innovative Approach',
    description:
      'We understand that every business is unique, which is why we take a tailored approach in our GenAI development service. Be it web-based solutions or offline applications, we have the proficiency to deliver top-notch results.',
    image: image2,
  },
  {
    title: 'End-to-End Support',
    description:
      "Our commitment to excellence doesn't end with development. Thanks to our expertise in software testing and cloud computing, we ensure your AI solution works as per your expectations and enable seamless deployment.",
    image: 'https://cdn-cekmh.nitrocdn.com/SlrtebQxNZbUBkfXeRIcTgUmxZsOSldb/assets/images/source/rev-ee81cca/codoid.com/wp-content/uploads/2024/08/Adaptive-Stratergy.svg',
  },
  {
    title: 'Expertise Beyond Measure',
    description:
      'Our seasoned AI specialists have extensive real-world experience as they have handled numerous use cases across various domains and possess the skills and knowledge necessary to tackle even the most complex AI challenges.',
    image: 'https://cdn-cekmh.nitrocdn.com/SlrtebQxNZbUBkfXeRIcTgUmxZsOSldb/assets/images/source/rev-ee81cca/codoid.com/wp-content/uploads/2024/08/Pioneers-in-testing.svg',
  },
  {
    title: 'Collaborative Partnership',
    description:
      'We act as an extension of your team, working hand-in-hand with you in your GenAI development journey. With open communication, transparency, and dedication, we ensure that your vision is realized to its fullest potential.',
    image: 'https://cdn-cekmh.nitrocdn.com/SlrtebQxNZbUBkfXeRIcTgUmxZsOSldb/assets/images/source/rev-ee81cca/codoid.com/wp-content/uploads/2024/08/Actionable-Reporting.svg',
  },
];

const WhyChooseUs = () => {
  const [current, setCurrent] = useState(0);

  const goToSlide = (index) => {
    if (index >= 0 && index < items.length) setCurrent(index);
  };

  return (
    <section className="bg-white py-20 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-gray-900">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3F00FF] to-[#15f5b9]">Why</span>{' '}
        <span>Choose Us?</span>
      </h2>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
        <div className="relative w-full md:w-1/3">
          <div className="flex flex-col space-y-6 relative z-10">
            {items.map((item, index) => (
              <div
                key={index}
                onClick={() => goToSlide(index)}
                className={`flex items-center space-x-3 cursor-pointer transition-all ${
                  current === index
                    ? 'text-[#15f5b9] font-semibold scale-105'
                    : 'text-gray-900 hover:opacity-80'
                }`}
              >
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    current === index ? 'border-[#15f5b9]' : 'border-gray-300'
                  }`}>
                  {current === index && <div className="w-2 h-2 bg-[#15f5b9] rounded-full"></div>}
                </div>
                <span className="text-lg">{`0${index + 1}. ${item.title}`}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-2/3 bg-gray-100 rounded-3xl shadow-2xl p-8 transition-all">
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
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{items[current].title}</h3>
                <p className="text-gray-700 text-sm">{items[current].description}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="flex items-center justify-center gap-6 mt-8">
        <button
          onClick={() => goToSlide(current - 1)}
          disabled={current === 0}
          className="transition-all px-3 py-2 rounded-full bg-gradient-to-r from-[#3F00FF] to-[#15f5b9] text-white disabled:opacity-30"
        >
          <ChevronLeft size={20} />
        </button>
        <span className="font-semibold text-gray-900">
          {current + 1}/{items.length}
        </span>
        <button
          onClick={() => goToSlide(current + 1)}
          disabled={current === items.length - 1}
          className="transition-all px-3 py-2 rounded-full bg-gradient-to-r from-[#3F00FF] to-[#15f5b9] text-white disabled:opacity-30"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default WhyChooseUs;
