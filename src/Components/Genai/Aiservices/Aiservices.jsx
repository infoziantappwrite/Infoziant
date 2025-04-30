import React from "react";
import { motion } from "framer-motion";
import { FaBrain, FaProjectDiagram, FaRobot, FaChartLine, FaBook, FaCogs } from "react-icons/fa";

const services = [
  {
    title: "GenAI Development",
    description:
      "Tailored GenAI solutions crafted to meet your unique needs, leveraging the latest advancements in AI technology for optimal results.",
    icon: <FaBrain size={28} />,
    gradient: "from-pink-400 to-red-500",
  },
  {
    title: "AI / ML Strategy Consulting",
    description:
      "Strategic guidance to unlock the full potential of AI & machine learning to align technology with your business objectives for transformative outcomes.",
    icon: <FaProjectDiagram size={28} />,
    gradient: "from-blue-400 to-purple-500",
  },
  {
    title: "AI Integration",
    description:
      "Seamlessly integrate AI solutions into your existing infrastructure, maximizing efficiency and effectiveness across your organization.",
    icon: <FaRobot size={28} />,
    gradient: "from-green-400 to-emerald-500",
  },
  {
    title: "Predictive Modeling",
    description:
      "Harness the power of predictive analytics to anticipate trends, make informed decisions, and stay ahead in competitive markets.",
    icon: <FaChartLine size={28} />,
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    title: "Knowledge Assistants",
    description:
      "Intelligent assistants designed to streamline information retrieval, enhance productivity, and empower your workforce with instant access to valuable insights.",
    icon: <FaBook size={28} />,
    gradient: "from-indigo-400 to-blue-600",
  },
  {
    title: "Process Automation",
    description:
      "Automate repetitive tasks, streamline workflows, and optimize business processes with our AI-powered automation solutions, driving efficiency and cost savings.",
    icon: <FaCogs size={28} />,
    gradient: "from-rose-400 to-pink-500",
  },
];

const Aiservices = () => {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-8 lg:px-16 text-gray-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 text-transparent bg-clip-text text-center"
        >
          AI Services We Offer
        </motion.h2>

        <div className="w-20 h-1 bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500 rounded-full mx-auto my-6"></div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
              className={`group bg-white p-[1.5px] rounded-2xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out
              bg-gradient-to-br ${service.gradient}`}
            >
              <div className="bg-white rounded-2xl p-6 h-full flex flex-col justify-between transition-all duration-300">
                <div className="flex justify-end mb-6">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center text-white shadow-md bg-gradient-to-br ${service.gradient}`}
                  >
                    {service.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-gray-900 transition">{service.title}</h3>
                  <p className="text-gray-600 text-base leading-relaxed group-hover:text-gray-700 transition">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br from-teal-400/10 to-blue-500/10"></div>
        <div className="absolute -bottom-16 -left-16 w-40 h-40 rounded-full bg-gradient-to-br from-purple-400/10 to-pink-500/10"></div>
      </div>
    </section>
  );
};

export default Aiservices;
