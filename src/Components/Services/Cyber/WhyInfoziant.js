import "./css/WhyInfoziant.css";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const data = [
  { id: 1, count: '47,400', title: "Vulnerabilities Identified", content: "Our team of experts has identified over 23400 vulnerabilities and reported to organizations and helped them mitigate the security threats, potential losses." },
  { id: 2, count: 81, title: "Rewards and Recognition", content: "Received awards and recognitions from global players for our vulnerability assessment programs which includes $11,900 reward from Apple iCloud." },
  { id: 3, count: 51, title: "Clients", content: "Identified vulnerabilities across top Fortune 200 companies and major organizations, including USA Department of Defense, Apple, Google, Facebook, Microsoft, Dell, CISCO and the WHO." },
  { id: 4, count: 11, title: "Business Domains", content: "Our clients are from vast business backgrounds which includes, BFSI, Healthcare, E-Commerce, E-Governance, Edu-tech, Travel & Logistics, CRMS and many more." },
 
];

export default function WhyInfoziant() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, threshold: 0.1 });

  const sectionAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  const cardAnimation = {
    hidden: { opacity: 0, x: -50, rotate: -3 },
    visible: { opacity: 1, x: 0, rotate: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.section
      className="whyInfz"
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionAnimation}
    >
      <h1>Why <span className="highlight">Infoziant</span></h1>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={sectionAnimation}
        className="info-div"
      >
        {data.map((item, index) => (
          <motion.div
            key={item.id}
            variants={cardAnimation}
            className="infoCard"
          >
            <h1>{item.count}+</h1>
            <h2>{item.title}</h2>
            {/* Removed the conditional rendering of content */}
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}