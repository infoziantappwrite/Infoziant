import React from "react";
import { motion } from "framer-motion";
import {
  FaUniversity,
  FaBuilding,
  FaUserTie,
  FaNetworkWired,
  FaMoneyBillWave,
  FaCalendarCheck,
  FaClipboardCheck
} from "react-icons/fa";

const iconList = [
  <FaUniversity size={20} />,
  <FaBuilding size={20} />,
  <FaUserTie size={20} />,
  <FaNetworkWired size={20} />,
  <FaMoneyBillWave size={20} />,
  <FaCalendarCheck size={20} />,
  <FaClipboardCheck size={20} />
];

const iconColors = [
  "from-pink-400 to-red-500",
  "from-yellow-400 to-orange-500",
  "from-green-400 to-emerald-500",
  "from-sky-400 to-blue-500",
  "from-fuchsia-400 to-pink-500",
  "from-teal-400 to-cyan-500",
  "from-purple-400 to-indigo-500"
];

const WhyChooseInfoziant = ({ heading, points, description }) => {
  return (
    <section className="w-full bg-gray-50 py-20 px-4 sm:px-8 lg:px-16 text-gray-800 relative">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 text-transparent bg-clip-text"
        >
          {heading}
        </motion.h2>

        <div className="w-20 h-1 bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500 rounded-full mx-auto my-6"></div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-14"
        >
          {description}
        </motion.p>

        <div className="flex flex-wrap justify-center gap-8">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 w-64"
            >
              <div
                className={`text-white p-4 rounded-full bg-gradient-to-br ${
                  iconColors[index % iconColors.length]
                } transition-all duration-300 group-hover:scale-125 group-hover:shadow-lg mb-4`}
              >
                {iconList[index % iconList.length]}
              </div>

              <h4 className="text-base font-medium text-gray-800">{point}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseInfoziant;
