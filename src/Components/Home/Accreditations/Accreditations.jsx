import React from "react";
import { motion } from "framer-motion";
import soc2 from "./soc.png";
import iso from "./iso.png";

const Accreditations = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      className="relative bg-gradient-to-r from-[#0a192f] via-[#112240] to-[#1a365d] py-20 px-4 text-white text-center"
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-blue-500 opacity-5"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-teal-400 opacity-5"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-purple-500 opacity-5"></div>
       
      </div>
      <h2 className="text-3xl sm:text-4xl font-bold mb-6">
        Our{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-600">
          Accreditations
        </span>
      </h2>
      <p className="text-lg mb-16 max-w-2xl mx-auto">
        Proudly accredited to deliver trusted and certified security testing
        solutions for your digital assets.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-12">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-2xl p-6 shadow-xl"
        >
          <img src={soc2} alt="SOC 2 TYPE 2" className="w-44 sm:w-52" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-2xl p-6 shadow-xl"
        >
          <img src={iso} alt="ISO 27001 Certified" className="w-44 sm:w-52" />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Accreditations;
