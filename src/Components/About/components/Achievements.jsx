import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faTrophy, faGlobe, faBriefcase } from '@fortawesome/free-solid-svg-icons';

const Achievements = () => {
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

  const achievementsData = [
    {
      id: 1,
      icon: faShieldAlt,
      stat: '47,400+',
      label: 'Vulnerabilities Identified',
    },
    {
      id: 2,
      icon: faTrophy,
      stat: '81+',
      label: 'Rewards and Recognition',
    },
    {
      id: 3,
      icon: faGlobe,
      stat: '51+',
      label: 'Clients Globally',
    },
    {
      id: 4,
      icon: faBriefcase,
      stat: '11+',
      label: 'Business Domains',
    },
  ];

  return (
    <section className="about-achievements-section">
      <motion.div
        ref={contentRef}
        initial="hidden"
        animate={isVisible.content ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 2 }} // Animation timing for the whole section
      >
        <h6 className='h6'>Our Statistics</h6>
        <h2 className="section-title">Some of Our Achievements</h2>
        <div className="achievements-wrapper">
          {achievementsData.map((achievement) => (
            <motion.div
              key={achievement.id}
              className="achievement"
              initial={{ opacity: 0, scale: 0.8 }} // Initial state for each achievement
              animate={isVisible.content ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: achievement.id * 0.2 }} // Staggered delay
            >
              <FontAwesomeIcon icon={achievement.icon} className="achievement-icon" />
              <div className="achievement-stat">{achievement.stat}</div>
              <div className="achievement-label">{achievement.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Achievements;
