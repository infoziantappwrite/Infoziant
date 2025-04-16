import React from "react";
import { motion } from "framer-motion";
import {
  FaMobileAlt,
  FaCloud,
  FaRobot,
  FaClipboardCheck,
  FaCogs,
  FaAppStore,
} from "react-icons/fa";

// Card data
const techExpertise = [
  {
    title: "ERP Solutions",
    icon: <FaCogs size={28} className="animate-pulse group-hover:animate-none" />,
    description:
      "Functional, Technical, Techno-Functional and Project Management expertise in SAP, MS Dynamics, Oracle.",
    color: "from-cyan-500 to-teal-400",
  },
  {
    title: "Mobile Development",
    icon: <FaMobileAlt size={28} className="animate-pulse group-hover:animate-none" />,
    description:
      "iOS, Android, React Native, Flutter, and Hybrid resources.",
    color: "from-pink-500 to-red-400",
  },
  {
    title: "Application Development",
    icon: <FaAppStore size={28} className="animate-pulse group-hover:animate-none" />,
    description: ".NET, Java, Python, PHP, Node.js, SharePoint.",
    color: "from-purple-500 to-indigo-500",
  },
  {
    title: "Cloud & DevOps",
    icon: <FaCloud size={28} className="animate-pulse group-hover:animate-none" />,
    description: "AWS, Google Cloud, Azure, and DevOps.",
    color: "from-blue-500 to-sky-400",
  },
  {
    title: "AI-Based Technologies",
    icon: <FaRobot size={28} className="animate-pulse group-hover:animate-none" />,
    description:
      "Machine Learning, NLP, Computer Vision, and LLM.",
    color: "from-yellow-400 to-orange-500",
  },
  {
    title: "QA & Testing",
    icon: <FaClipboardCheck size={28} className="animate-pulse group-hover:animate-none" />,
    description: "Manual and Automation testing.",
    color: "from-emerald-500 to-lime-400",
  },
];

const CoreTechnologyExpertise = () => {
  return (
    <section className="bg-gradient-to-b from-gray-950 to-black py-20 px-4 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-[3.0rem] font-bold mb-4 text-center bg-gradient-to-r from-blue-600 via-teal-400 to-teal-400 bg-clip-text text-transparent">
            Core Technology Expertise
          </h2>

          {/* <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 text-center bg-gradient-to-r from-blue-600 via-teal-400 to-teal-400 bg-clip-text text-transparent">
            Core Technology Expertise
          </h2> */}

          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {techExpertise.map((tech, index) => (
            <motion.div
              key={index}
              className="group relative rounded-2xl shadow-lg transition-shadow duration-300 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-950 p-[2px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative z-10 rounded-2xl bg-gray-900/80 backdrop-blur-md p-6 transition duration-300 group-hover:bg-gray-900/90 h-full flex flex-col justify-start">
                {/* Icon */}
                <div className={`flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-gradient-to-tr ${tech.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {tech.icon}
                </div>

                {/* Title */}
                <h3 className={`text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r ${tech.color} group-hover:opacity-100 transition-all duration-300`}>
                  {tech.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition duration-300">
                  {tech.description}
                </p>

                {/* Glow background on hover */}
                <div className={`absolute -inset-px z-0 rounded-2xl bg-gradient-to-tr ${tech.color} opacity-10 blur-2xl group-hover:opacity-20 transition duration-300`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreTechnologyExpertise;
