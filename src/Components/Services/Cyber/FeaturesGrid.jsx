import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./css/FeaturesGrid.css";

export default function FeaturesGrid() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const features = [
    {
      icon: "./ai-scan.png",
      title: "AI Powered Scanning",
      delay: 0.1,
    },
    {
      icon: "./seamless_integrations.png",
      title: "Seamless Integrations",
      delay: 0.3,
    },
    {
      icon: "./vulnerability_detectors.png",
      title: "274+ Vulnerability Detectors",
      delay: 0.5,
    },
    {
      icon: "./audit_report.png",
      title: "Generate Audit Reports",
      delay: 0.7,
    },
  ];

  return (
    <ul className="func" ref={ref}>
      {features.map((feature, index) => (
        <FeatureItem 
          key={index}
          icon={feature.icon}
          title={feature.title}
          delay={feature.delay}
          inView={inView}
        />
      ))}
    </ul>
  );
}

function FeatureItem({ icon, title, delay, inView }) {
  // Animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.li
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={itemVariants}
      transition={{ duration: 0.6, delay: delay }}
      className="feature-item"
    >
      <img src={icon} className="func-img" alt={title} /><br />
      <h3>{title}</h3>
    </motion.li>
  );
}