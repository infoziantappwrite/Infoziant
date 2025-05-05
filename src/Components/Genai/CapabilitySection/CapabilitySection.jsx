import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaRobot,
  FaMicrophoneAlt,
  FaCamera,
  FaLanguage,
  FaChartLine,
  FaProjectDiagram,
  FaBrain,
  FaCogs,
  FaChartPie,
  FaSmile,
  FaComments,
} from "react-icons/fa";

import Image1 from "../../../assests/Images/Ourservice/GenAI/GenAIOurAI/1.png"
import Image2 from "../../../assests/Images/Ourservice/GenAI/GenAIOurAI/GenaiOurAIImage2.jpg"
import Image3 from "../../../assests/Images/Ourservice/GenAI/GenAIOurAI/GenaiOurAIImage3.jpg"
import Image4 from "../../../assests/Images/Ourservice/GenAI/GenAIOurAI/GenaiOurAIImage4.png"
import Image5 from "../../../assests/Images/Ourservice/GenAI/GenAIOurAI/GenaiOurAIImage5.jpg"
import Image6 from "../../../assests/Images/Ourservice/GenAI/GenAIOurAI/GenaiOurAIImage6.jpg"
import Image7 from "../../../assests/Images/Ourservice/GenAI/GenAIOurAI/GenaiOurAIImage7.jpg"
import Image8 from "../../../assests/Images/Ourservice/GenAI/GenAIOurAI/2.png"
import Image9 from "../../../assests/Images/Ourservice/GenAI/GenAIOurAI/3.png"
import Image10 from "../../../assests/Images/Ourservice/GenAI/GenAIOurAI/4.png"
import Image11 from "../../../assests/Images/Ourservice/GenAI/GenAIOurAI/5.png"







const capabilities = [
  {
    label: "Process Automation",
    icon: <FaRobot />, 
    image: Image1
  },
  {
    label: "Speech Recognition",
    icon: <FaMicrophoneAlt />, 
    image: Image2
  },
  {
    label: "Image Recognition",
    icon: <FaCamera />, 
    image: Image3
  },
  {
    label: "Natural Language Processing",
    icon: <FaLanguage />, 
    image: Image4
  },
  {
    label: "Data Analytics",
    icon: <FaChartLine />, 
    image: Image5
  },
  {
    label: "Data Modeling",
    icon: <FaProjectDiagram />, 
    image: Image6
  },
  {
    label: "Deep Learning",
    icon: <FaBrain />, 
    image: Image7
  },
  {
    label: "Machine Learning",
    icon: <FaCogs />, 
    image: Image8
  },
  {
    label: "Business Intelligence",
    icon: <FaChartPie />, 
    image: Image9
  },
  {
    label: "Sentiment Analysis",
    icon: <FaSmile />, 
    image: Image10
  },
  {
    label: "Chatbots",
    icon: <FaComments />, 
    image: Image11
  },
];

const CapabilitySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full bg-white py-20 px-4 sm:px-8 lg:px-16 text-gray-800 relative overflow-hidden">
       <div className="max-w-7xl mx-auto">
         <motion.h2
                   initial={{ opacity: 0, y: -30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.6 }}
                   className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 text-transparent bg-clip-text text-center"
                 >
                  Our AI Capabilities
                 </motion.h2>
         
                 <div className="w-20 h-1 bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500 rounded-full mx-auto my-6"></div>
         
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-start">
        {/* Left Image */}
        <div className="w-full md:w-1/2 h-[400px] overflow-hidden rounded-xl shadow-xl">
          <motion.img
            key={capabilities[activeIndex].image}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            src={capabilities[activeIndex].image}
            alt={capabilities[activeIndex].label}
            className="object-cover w-full h-full rounded-xl"
          />
        </div>

        {/* Right Capabilities List */}
        <div className="w-full md:w-1/2 h-[400px] overflow-y-auto pr-2">
         

          <ul className="space-y-4">
            {capabilities.map((cap, i) => (
              <li key={i} className="relative">
                <button
                  onClick={() => setActiveIndex(i)}
                  className={`w-full flex items-center gap-3 text-left font-medium text-lg py-3 px-4 rounded-xl transition-all duration-300 border-2 ${
                    activeIndex === i
                      ? "border-transparent bg-gradient-to-r from-blue-50 via-teal-50 to-purple-50 shadow-md"
                      : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
                  }`}
                >
                  <div className="text-xl text-white p-2 rounded-full bg-gradient-to-br from-blue-400 via-teal-400 to-purple-500">
                    {cap.icon}
                  </div>
                  <span className="relative w-full">
                    <motion.span
                      initial={{ width: 0 }}
                      animate={{ width: activeIndex === i ? "100%" : "0%" }}
                      transition={{ duration: 0.4 }}
                      className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-blue-400 via-teal-400 to-purple-400 rounded-full"
                    />
                    {cap.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br from-teal-400/10 to-blue-500/10"></div>
        <div className="absolute -bottom-16 -left-16 w-40 h-40 rounded-full bg-gradient-to-br from-purple-400/10 to-pink-500/10"></div>
      </div>
    </section>
  );
};

export default CapabilitySection;