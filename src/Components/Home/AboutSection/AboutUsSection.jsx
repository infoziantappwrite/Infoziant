import React from "react";
import { motion } from "framer-motion";
import "./AboutUsSection.css";
import image from "../../../assests/Images/image.png"

const AboutUsSection = () => {
  return (
    <section className="about-us-section">
      <div className="about-us-container">
        {/* Left Side - Image */}
        <div className="about-us-image">
          <img src={image} alt="About Infoziant" />
        </div>

        {/* Right Side - Text Content */}
        <div className="about-us-text">
          <motion.h2
            className="gradient-title"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
             <span className="underline">About</span> Infoziant
          </motion.h2>
          <p className="about-description">
            Established in <strong>2015</strong>, Infoziant provides 
            <strong> Cybersecurity, IT solutions, and Staffing services</strong>,
            safeguarding digital landscapes worldwide.
          </p>

          {/* Bullet Points */}
          <ul className="about-points">
            <li>🌍 Operations across <strong>APAC, EMEA, LATAM</strong>.</li>
            <li>🔍 <strong>51+ global clients</strong>, identified <strong>47,400+</strong> vulnerabilities.</li>
            <li>💰 Saved up to <strong>$12.7M</strong> for leading organizations.</li>
            <li>👨‍💻 <strong>400+ domain experts</strong> & successful staffing solutions.</li>
            <li>⚡ Expertise across <strong>11+ locations</strong> worldwide.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};


export default AboutUsSection;
