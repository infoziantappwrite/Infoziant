import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import productImage from '../../assests/Images/info-img-1.png';
import shieldIcon from '../../assests/SVG/shield-svgrepo-com.svg';
import lockIcon from '../../assests/SVG/lock-portrait-svgrepo-com.svg';
import qrScanIcon from '../../assests/SVG/qr-scan.svg';

const FirstSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
    <section className="first-section" ref={sectionRef}>
      <div className='contain'>
        <div className='text'>
          <motion.p
            className='desc'
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={textVariants}
            transition={{ duration: 0.5  }}
          >
            Infoziant’s Dynamic Application Security Testing <span className='hightlights'>(DAST)</span>
          </motion.p>

          <motion.p
            className='para-inside-desc'
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={textVariants}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            Scanner protects web applications with real-time vulnerability detection. Using advanced technology, it delivers comprehensive automated and manual assessments. Stay resilient and secure against evolving cyber threats with Infoziant DAST.
          </motion.p>

          <div className="animated_icons">
            <motion.img
              src={shieldIcon}
              alt="Security"
              className="animated-icon"
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={iconVariants}
              transition={{ duration: 0.5, delay: 0.5 }}
            />
            <motion.img
              src={lockIcon}
              alt="Lock"
              className="animated-icon"
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={iconVariants}
              transition={{ duration: 0.5, delay: 0.8 }}
            />
            <motion.img
              src={qrScanIcon}
              alt="Scanning"
              className="animated-icon"
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={iconVariants}
              transition={{ duration: 0.5, delay: 1.0 }}
            />
          </div>
        </div>

        <motion.div
          className="product-image-container"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={imageVariants}
          transition={{ duration: 0.7, delay: 1.2 }}
        >
          <img src={productImage} alt="Infoziant Shield" className="product-image shake-effect" />
        </motion.div>
      </div>
    </section>
  );
};

export default FirstSection;
