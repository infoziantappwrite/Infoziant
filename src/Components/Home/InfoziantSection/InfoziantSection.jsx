import React from "react";
import { motion } from "framer-motion";
import image from "./bg1.png"

const InfoziantSection = () => {
  return (
    <section id="services-section" className="relative w-full flex items-center justify-center text-center px-4 py-16 overflow-hidden md:px-6 md:py-24">
      <img
        src={image}
        alt="City Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-teal-500 to-blue-500 opacity-100 z-100 mix-blend-multiply" />

      <motion.div
        className="relative z-20 w-full max-w-7xl px-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-2xl font-bold text-white mb-4 md:text-3xl lg:text-5xl md:mb-6"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
         Driven by Quality. Defined by Impact.
        </motion.h2>
        
        <motion.p
          className=" text-white text-base leading-relaxed mt-4 md:text-lg lg:text-xl hidden sm:block"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
        >
           At Infoziant, we build secure tech solutions and nurture future-ready talent — where every product excels and every learner thrives. Infoziant is a trusted tech powerhouse, Delivering cutting-edge Cybersecurity, Software Development, AI, and quality testing services to global clients. Founded by industry veterans, We combine innovation with deep technical expertise to build secure, scalable solutions. Alongside our core IT services, we also empower academic institutions with Placement support, Training, and Career-enabling programs nurturing talent and bridging the gap between campus and corporate. 
        </motion.p>

        <motion.p 
          className="text-white text-base leading-relaxed block sm:hidden md:text-lg lg:text-xl md:mt-6"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
           At Infoziant, we build secure tech solutions and nurture future-ready talent — where every product excels and every learner thrives. Infoziant is a trusted tech powerhouse, Delivering cutting-edge Cybersecurity, Software Development, AI, and quality testing services to global clients. 
        </motion.p>
      </motion.div>
    </section>
  );
};

export default InfoziantSection;
