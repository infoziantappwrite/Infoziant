import React, { useState } from "react";
import { motion } from "framer-motion";
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
    gradient: "from-purple-500 to-pink-500"
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
    gradient: "from-green-400 to-emerald-600"
  }
];

const IndustriesWeServe = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-4 text-gray-800 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-gray-600 tracking-wider uppercase">
            Expertise Across Sectors
          </span>
          <h2 className="text-[3.0rem] font-bold mb-4 text-center bg-gradient-to-r from-blue-600 via-teal-500 to-teal-600 bg-clip-text text-transparent">
            Core Verticals Supported
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-8 max-w-2xl mx-auto text-lg">
            We deliver tailored digital solutions that address the unique
            challenges and opportunities in each industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative transition-all duration-300 ease-in-out"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg cursor-pointer overflow-hidden"
            >
              {/* Top Static Content */}
              <div className="p-6">
                <div className="flex justify-between items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r ${industry.gradient} text-white`}
                    >
                      {industry.icon}
                    </div>
                    <h3 className="font-semibold text-gray-800 text-lg">
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
          
              {/* Expanding section absolutely positioned inside card */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={
                  hoveredIndex === index
                    ? { height: "auto", opacity: 1 }
                    : { height: 0, opacity: 0 }
                }
                transition={{ duration: 0.3 }}
                className="px-6 pb-6 overflow-hidden"
              >
                <div className="text-gray-600 text-sm">
                  {industry.description}
                </div>
                <motion.div
                  className="mt-3 flex items-center text-sm font-medium"
                  style={{
                    background: `linear-gradient(to right, ${getGradientColors(
                      industry.gradient
                    )})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                  }}
                >
                  <span>Explore solutions</span>
                  <ArrowRight className="ml-2 w-4 h-4" />
                </motion.div>
              </motion.div>
          
              {/* Bottom Accent Line */}
              <motion.div
                className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${industry.gradient} transition-all duration-500`}
                animate={{
                  width: hoveredIndex === index ? "100%" : "25%"
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
          
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const getGradientColors = (gradientClass) => {
  const colorMap = {
    "from-indigo-500 to-fuchsia-600": "#6366f1, #c026d3",
    "from-purple-500 to-pink-500": "#a855f7, #ec4899",
    "from-cyan-400 to-blue-600": "#22d3ee, #2563eb",
    "from-rose-500 to-pink-600": "#f43f5e, #db2777",
    "from-yellow-400 to-orange-500": "#facc15, #f97316",
    "from-green-400 to-emerald-600": "#34d399, #059669"
  };

  return colorMap[gradientClass] || "#6366f1, #c026d3";
};

export default IndustriesWeServe;
