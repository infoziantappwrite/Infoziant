import React, { useState, useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import {
  MdAccountBalance,
  MdGavel,
  MdComputer,
  MdPhone,
  MdStore,
  MdFactory
} from "react-icons/md";

const industries = [
  {
    title: "Banking",
    icon: <MdAccountBalance size={24} />,
    description:
      "Secure financial solutions and digital banking platforms to streamline operations and enhance customer experience.",
    gradient: "from-indigo-500 to-fuchsia-600"
  },
  {
    title: "Government",
    icon: <MdGavel size={24} />,
    description:
      "Digital transformation solutions for public sector agencies to improve citizen services and operational efficiency.",
    gradient: "from-green-400 to-emerald-600"
  },
  {
    title: "IT",
    icon: <MdComputer size={24} />,
    description:
      "Advanced technology solutions including cloud services, cybersecurity, and enterprise software development.",
    gradient: "from-cyan-400 to-blue-600"
  },
  {
    title: "Telecom",
    icon: <MdPhone size={24} />,
    description:
      "Innovative communication infrastructure and customer management systems for telecommunications providers.",
    gradient: "from-rose-500 to-pink-600"
  },
  {
    title: "Retail",
    icon: <MdStore size={24} />,
    description:
      "Omnichannel commerce solutions that enhance customer engagement and streamline retail operations.",
    gradient: "from-yellow-400 to-orange-500"
  },
  {
    title: "Manufacturing",
    icon: <MdFactory size={24} />,
    description:
      "Smart manufacturing solutions to optimize production processes and supply chain management.",
   
     gradient: "from-purple-500 to-pink-500"
  }
];

const IndustriesWeServe = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.3, once: false });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const handleToggle = (index) => {
    setHoveredIndex((prev) => (prev === index ? null : index));
  };

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 60 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8 }
        }
      }}
      className="bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8 text-gray-800 font-sans"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-sm font-medium text-gray-600 tracking-wider uppercase">
            Expertise Across Sectors
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold pb-4 bg-gradient-to-r from-blue-600 via-teal-500 to-teal-600 bg-clip-text text-transparent">
            Core Verticals Supported
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto rounded-full" />
          <p className="text-gray-600 mt-6 sm:mt-8 max-w-2xl mx-auto text-base sm:text-lg">
            We deliver tailored digital solutions that address the unique
            challenges and opportunities in each industry.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              onMouseEnter={() => window.innerWidth > 768 && setHoveredIndex(index)}
              onMouseLeave={() => window.innerWidth > 768 && setHoveredIndex(null)}
              onClick={() => window.innerWidth <= 768 && handleToggle(index)}
              className="relative transition-all duration-300 ease-in-out"
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: index * 0.1, duration: 0.5 }
                  }
                }}
                initial="hidden"
                animate={controls}
                className="relative bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md cursor-pointer overflow-hidden"
              >
                <div className="p-5 sm:p-6">
                  <div className="flex justify-between items-center space-x-4">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r ${industry.gradient} text-white`}
                      >
                        {industry.icon}
                      </div>
                      <h3 className="font-semibold text-gray-800 text-base sm:text-lg">
                        {industry.title}
                      </h3>
                    </div>
                    <ChevronDown
                      size={22}
                      className={`transition-transform duration-300 transform ${
                        hoveredIndex === index ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </div>
                </div>

                {/* Expandable Description */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={
                    hoveredIndex === index
                      ? { height: "auto", opacity: 1 }
                      : { height: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.3 }}
                  className="px-5 sm:px-6 overflow-hidden"
                >
                  <div className="text-gray-600 text-sm pb-4">
                    {industry.description}
                  </div>
                </motion.div>

                {/* Bottom Line Glow */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${industry.gradient}`}
                  animate={{
                    width: hoveredIndex === index ? "100%" : "25%"
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default IndustriesWeServe;