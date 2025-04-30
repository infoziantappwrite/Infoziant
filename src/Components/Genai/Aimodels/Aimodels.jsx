import React from "react";
import { motion } from "framer-motion";
import {
  FaBrain,
  FaRobot,
  FaGoogle,
  FaPalette,
  FaMicrophoneAlt,
  FaMagic,
  FaShapes,
  FaCloud,
  FaComments,
  FaFlask,
} from "react-icons/fa";

const aiModels = [
  { name: "GPT-4", icon: <FaBrain /> },
  { name: "Llama-2", icon: <FaRobot /> },
  { name: "Google Gemini", icon: <FaGoogle /> },
  { name: "Mistral", icon: <FaMagic /> },
  { name: "Whisper", icon: <FaMicrophoneAlt /> },
  { name: "DALL·E", icon: <FaPalette /> },
  { name: "Stable Diffusion", icon: <FaShapes /> },
  { name: "PaLM-2", icon: <FaCloud /> },
  { name: "Claude", icon: <FaComments /> },
  { name: "Phi-2", icon: <FaFlask /> },
];

const Aimodels = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-r from-[#0a192f] via-[#112240] to-[#1a365d]">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-blue-500 opacity-5"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-teal-400 opacity-5"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-purple-500 opacity-5"></div>
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent opacity-[0.03]"
          style={{
            backgroundSize: "20px 20px",
            backgroundImage:
              "linear-gradient(to right, gray 1px, transparent 1px), linear-gradient(to bottom, gray 1px, transparent 1px)",
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-teal-300 to-blue-500 bg-clip-text text-transparent">
            AI Models
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {aiModels.map((model, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06, duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-md rounded-xl border border-transparent hover:border-teal-400 transition duration-300 shadow-md hover:shadow-xl p-6 flex flex-col items-center justify-center text-white group"
            >
              <div className="text-3xl md:text-4xl mb-4 group-hover:text-teal-300 transition duration-300">
                {model.icon}
              </div>
              <h3 className="text-md md:text-lg font-semibold text-center">{model.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Aimodels;
