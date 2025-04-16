import React, { useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  FaMobileAlt,
  FaCloud,
  FaRobot,
  FaClipboardCheck,
  FaCogs,
  FaAppStore,
} from "react-icons/fa";
import { useEffect } from "react";

// Card data (same as before)
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
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <motion.section
      ref={sectionRef}
      className="bg-gradient-to-b from-gray-950 to-black py-20 px-4 text-white font-sans"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
        >
          <h2 className="text-[3.0rem] font-bold mb-4 text-center bg-gradient-to-r from-blue-600 via-teal-400 to-teal-400 bg-clip-text text-transparent">
            Core Technology Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {techExpertise.map((tech, index) => (
            <motion.div
              key={index}
              className="group relative rounded-2xl shadow-lg transition-shadow duration-300 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-950 p-[2px]"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { delay: index * 0.1, duration: 0.6 } },
              }}
              initial="hidden"
              animate={controls}
            >
              <div className="relative z-10 rounded-2xl bg-gray-900/80 backdrop-blur-md p-6 transition duration-300 group-hover:bg-gray-900/90 h-full flex flex-col justify-start">
                <div className={`flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-gradient-to-tr ${tech.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {tech.icon}
                </div>

                <h3 className={`text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r ${tech.color} group-hover:opacity-100 transition-all duration-300`}>
                  {tech.title}
                </h3>

                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition duration-300">
                  {tech.description}
                </p>

                <div className={`absolute -inset-px z-0 rounded-2xl bg-gradient-to-tr ${tech.color} opacity-10 blur-2xl group-hover:opacity-20 transition duration-300`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default CoreTechnologyExpertise;
