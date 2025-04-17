import React from "react";
import {
  FaLaptopCode,
  FaRobot,
  FaMobileAlt,
  FaTools,
  FaRocket,
  FaUsers,
} from "react-icons/fa";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import achievementImg from "./achieve.gif";

const achievements = [
  {
    title: "Frameworks",
    desc: "Developed across multiple domains.",
    icon: <FaLaptopCode />,
    count: 90,
    color: "from-pink-500 to-pink-700",
  },
  {
    title: "Test Scripts",
    desc: "Increased velocity & eliminated errors.",
    icon: <FaRobot />,
    count: 10000,
    color: "from-yellow-400 to-yellow-600",
  },
  {
    title: "Desktop Automation",
    desc: "Handled complex enterprise software.",
    icon: <FaTools />,
    count: 50,
    color: "from-green-400 to-green-600",
  },
  {
    title: "Fortune 500 Clients",
    desc: "Proven trust and long-term collaboration.",
    icon: <FaUsers />,
    count: 10,
    color: "from-blue-400 to-blue-600",
  },
  {
    title: "Devices Tested",
    desc: "Real mobile QA across devices.",
    icon: <FaMobileAlt />,
    count: 110,
    color: "from-indigo-400 to-indigo-600",
  },
  {
    title: "Freeware Tools",
    desc: "Fillo, VisGrid, Robotil & more.",
    icon: <FaRocket />,
    count: 5,
    color: "from-purple-400 to-purple-600",
  },
];

const Achievements = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 px-4 sm:px-6 py-16 overflow-hidden">
       <span className="text-5xl flex text-center justify-center font-bold bg-gradient-to-r from-teal-400 to-blue-600 bg-clip-text text-transparent">
            Our Achievements
          </span>

      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-y-6 lg:gap-y-0 lg:gap-x-14 max-w-[1500px] mx-auto">
        {/* Image Section - stays on left always */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={achievementImg}
            alt="Achievements Visual"
            className="w-full max-w-[400px] object-contain"
          />
        </div>

        {/* Cards Section - always on right */}
        <div className="relative w-full lg:w-1/2">
          {/* Desktop View - Stair layout */}
          <div className="hidden lg:block relative h-[600px] overflow-visible">
            {achievements.map((item, index) => {
              const totalSteps = achievements.length - 1;
              const maxOffset = 400;
              const stepOffset = (maxOffset / totalSteps) * index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="absolute group"
                  style={{
                    bottom: `${stepOffset}px`,
                    left: `${stepOffset - 170}px`, 
                    zIndex: achievements.length - index,
                  }}
                >
                  <div
                    className={`flex items-center gap-4 w-[clamp(240px,28vw,320px)] h-[72px] rounded-xl shadow-lg px-5 py-3 bg-gradient-to-r ${item.color} transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl`}
                  >
                    <div className="text-white text-2xl">{item.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-base font-bold text-white">{item.title}</h3>
                      <p className="text-xs text-white/90">{item.desc}</p>
                    </div>
                    <div className="text-white text-sm font-bold bg-white/20 px-3 py-1 rounded-md shadow-inner">
                      <CountUp end={item.count} duration={2} suffix="+" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>


          {/* Mobile View - Vertical List */}
          <div className="flex flex-col gap-4 lg:hidden">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                className="group"
              >
                <div
                  className={`flex items-center gap-4 w-full rounded-xl shadow-lg px-5 py-3 bg-gradient-to-r ${item.color} transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl`}
                >
                  <div className="text-white text-2xl">{item.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-white">{item.title}</h3>
                    <p className="text-xs text-white/90">{item.desc}</p>
                  </div>
                  <div className="text-white text-sm font-bold bg-white/20 px-3 py-1 rounded-md shadow-inner">
                    <CountUp end={item.count} duration={2} suffix="+" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
