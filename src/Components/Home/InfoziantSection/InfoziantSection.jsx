import React from "react";
import { motion } from "framer-motion";
import image from "./bg1.png"

const InfoziantSection = () => {
  return (
    <section id="services-section" className="relative w-full flex items-center justify-center text-center px-6 py-24 overflow-hidden">
      <img
        src={image}
        alt="City Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-teal-500 to-blue-500 opacity-100 z-100 mix-blend-multiply" />

      <motion.div
        className="relative z-20 max-w-7xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Powering Innovation, Security & Talent for the Digital Age
        </motion.h2>

        <motion.p
          className="text-white text-lg sm:text-xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          Infoziant is a trusted tech powerhouse, delivering cutting-edge cybersecurity, software development, AI, and quality testing services to global clients. Founded by industry veterans, we combine innovation with deep technical expertise to build secure, scalable solutions. Alongside our core IT services, we also empower academic institutions with placement support, training, and career-enabling programs — nurturing talent and bridging the gap between campus and corporate.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default InfoziantSection;
