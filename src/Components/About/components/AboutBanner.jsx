import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const AboutBanner = () => {
  const [isVisible, setIsVisible] = useState({ content: false });
  const contentRef = useRef(null);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible({ content: true });
        }
      });
    });

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <section className="about-banner-section">
      <motion.div
        className="banner-content"
        ref={contentRef}
        initial="hidden"
        animate={isVisible.content ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.5 }} // Animation timing
      >
        <motion.h1
          initial="hidden"
          animate={isVisible.content ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5 }}
        >
          About Us
        </motion.h1>
        <motion.p
          initial="hidden"
          animate={isVisible.content ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5, delay: 0.2 }} // Add delay for paragraph
        >
          Infoziant empowers businesses with cutting-edge cybersecurity solutions, safeguarding your digital landscape. Trust us to protect what matters most, from cloud to core!
        </motion.p>
        <motion.div
          initial="hidden"
          animate={isVisible.content ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5, delay: 0.4 }} // Add delay for button
        >
          <Link
            to="about-wwa-section"
            smooth={true}
            duration={500}
            className="learn-more-btn"
            style={{ cursor: 'pointer' }} // Make it look like a button
          >
            Learn More
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutBanner;
