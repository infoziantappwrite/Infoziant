import React from "react";
import { motion } from "framer-motion";
import "./Ourservices.css";
import image from "../../../assests/Images/Ourservice/communication-flat-icon.png";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.6 },
  }),
};

const OurServices = () => {
  // Smooth scroll function
  const handleScroll = () => {
    document.getElementById("services-section").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="our-services-section">
      <div className="our-services-container">
        
        {/* Left Section: Text & Button */}
        <motion.div
          className="our-services-text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Animated Heading */}
          <h2 className="our-services-title">
            {"Our Services – Connecting Talent with Opportunities".split("").map((char, i) => (
              <motion.span key={i} variants={textVariants} initial="hidden" animate="visible" custom={i}>
                {char}
              </motion.span>
            ))}
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            We offer a diverse range of services to support students, professionals, 
            and businesses in achieving their goals. From placements and internships 
            to cybersecurity and web development, we provide the skills and 
            opportunities needed to thrive in the tech industry.
          </motion.p>

          {/* Button with Interaction */}
          <motion.button
            className="explore-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleScroll}
          >
            <p>Explore Our Services</p>
          </motion.button>
        </motion.div>

        {/* Right Section: Image */}
        <motion.div
          className="our-services-image"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src={image} alt="Our Services" />
        </motion.div>

      </div>
    </section>
  );
};

export default OurServices;
