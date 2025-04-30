import React from "react";
import { motion } from "framer-motion";
import { SiPython, SiRust } from "react-icons/si";

const approachData = [
  {
    name: "Python - Web Solutions",
    description:
      "Our expertise in Python allows us to seamlessly integrate AI capabilities into web applications, empowering businesses to leverage the full potential of machine learning, natural language processing, computer vision, and more.",
    icon: <SiPython />,
  },
  {
    name: "Rust - Offline Solutions",
    description:
      "Offline solutions are crucial in resource-constrained environments or industries with strict performance and security requirements. We harness the power of Rust to develop offline AI solutions that deliver unparalleled speed, efficiency, and robustness.",
    icon: <SiRust />,
  },
];

const OurApproach = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-r from-[#0a192f] via-[#112240] to-[#1a365d]">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-blue-500 opacity-5"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-teal-400 opacity-5"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-purple-500 opacity-5"></div>
        
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-teal-300 to-blue-500 bg-clip-text text-transparent">
            Our Approach
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto"></div>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {approachData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-transparent hover:border-teal-400 shadow-lg hover:shadow-teal-300/30 transition-all duration-300 text-white"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl text-white p-3 rounded-lg bg-gradient-to-br from-teal-400 to-blue-600 shadow-lg">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold">{item.name}</h3>
              </div>
              <p className="text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
