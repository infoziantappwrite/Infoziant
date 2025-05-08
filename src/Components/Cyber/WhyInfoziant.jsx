import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import "../css/WhyInfoziant.css";

const data = [
  { id: 1, count: '47,400', title: "Vulnerabilities Identified" },
  { id: 2, count: 81, title: "Rewards and Recognition" },
  { id: 3, count: 51, title: "Clients Globally" },
  { id: 4, count: 11, title: "Business Domains" },
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

  const hoverAnimation = {
    scale: 1.1,
    rotate: 0,
    transition: { type: "spring", stiffness: 300, damping: 10 },
  };

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <motion.section
      className="whyInfz"
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionAnimation}
    >
      <h1 className="text-3xl sm:text-4xl font-bold mb-12 text-white">
        Why <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">Infoziant</span>
      </h1>

      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={sectionAnimation}
        className="info-div"
      >
        {data.map((item, index) => (
          <motion.div
            key={item.id}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            whileHover={hoverAnimation}
            variants={cardAnimation}
                className="infoCard"
          >
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
              {item.count}+
            </h1>
            <h2 className="text-xl font-semibold text-white">
              {item.title}
            </h2>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}