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
    <section className="bg-gradient-to-r from-[#0a192f] via-[#112240] to-[#1a365d] text-white py-16 px-4 text-center">
      <motion.div
        ref={contentRef}
        initial="hidden"
        animate={isVisible.content ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 2 }}
      >
        <h6 className="text-lg font-semibold text-[#00C9FF] uppercase tracking-wide mb-2">
          Our Statistics
        </h6>
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-teal-300 to-blue-500 bg-clip-text text-transparent mb-12 drop-shadow-md">
          Some of Our Achievements
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 justify-center">
          {achievementsData.map((achievement) => (
            <motion.div
              key={achievement.id}
              className="bg-gray-900 rounded-2xl p-6 shadow-xl hover:scale-105 transform transition-transform duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible.content ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: achievement.id * 0.2 }}
            >
              <div
                className="text-white text-3xl p-5 rounded-full inline-block mb-4 shadow-md"
                style={{ background: 'linear-gradient(150deg, #00C9FF, #0049B7)' }}
              >
                <FontAwesomeIcon icon={achievement.icon} />
              </div>
              <div className="text-2xl font-bold text-[#00C9FF]">{achievement.stat}</div>
              <div className="text-md text-gray-400 mt-1">{achievement.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Achievements;
