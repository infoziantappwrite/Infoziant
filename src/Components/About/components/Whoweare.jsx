/* eslint-disable jsx-a11y/img-redundant-alt */

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import logo from "../images/Infoziant Logo (6) 2.png";
import InquiryForm from "../../InquiryForm"


const Whoweare = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const sectionRef = useRef(null);
  const toggleForm = () => {
    setIsFormOpen(!isFormOpen); // Toggle form visibility
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="about-wwa-section" ref={sectionRef}>
      <div className="wwa-container">
        <motion.div
          className="wwa-left"
          initial={{ x: "-100vw" }}
          animate={{ x: isVisible ? 0 : "-100vw" }}
          transition={{ type: "spring", stiffness: 50, delay: 0.4 }}
        >
          <div className="wwa-images">
            <img src={img1} alt="Office Image" className="left-image" />
            <img src={img2} alt="People Discussing" className="right-image" />
            <div className="wwa-badge">
              <span>31+</span>
              <p>Security Researchers</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="wwa-right"
          initial={{ x: "-100vw" }}
          animate={{ x: isVisible ? 0 : "-100vw" }}
          transition={{ type: "spring", stiffness: 50, delay: 0.4 }}
        >
          <h3>About Us</h3>
          <h2>Who We Are</h2>
          <p>
            Founded in 2015 by security experts from Symantec, McAfee, and EMC, Infoziant Security focuses
            on building secure software for tech companies. With offices in the USA, UAE, and India,
            Infoziant serves clients across finance, healthcare, e-commerce, and job portals.
          </p>
          <ul className="wwa-details">
            <li>Recently saved up to 12.7 Million USD for a leading insurance solution provider.</li>
            <li>Awarded on vulnerability assessment from 45 out of the top 100 global Fortune companies.</li>
            <li>Following an agile methodology, with weekly progress reports, to keep you fully aware.</li>
          </ul>
          <motion.button
            className="get-started-btn1"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleForm}
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
      <motion.div
        className="background-icon"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <img src={logo} alt="Background Icon" />
      </motion.div>
      {isFormOpen && <InquiryForm closeModal={toggleForm} />}
    </section>
  );
};

export default Whoweare;

