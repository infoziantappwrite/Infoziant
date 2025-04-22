import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const KeySolutions = () => {
  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef(null);

  const solutions = [
    { id: 1, title: 'AI', description: 'Artificial Intelligence based threat detection', icon: '🧠' },
    { id: 2, title: 'SIEM', description: 'Security Information and Event Management', icon: '🛡' },
    { id: 3, title: 'VAPT', description: 'Vulnerability Assessment and Penetration Testing', icon: '🔍' },
    { id: 4, title: 'INFRASTRUCTURE', description: 'Infrastructure Desktop Security Management', icon: '💻' },
    { id: 5, title: 'NETWORK', description: 'Network Security Configuration', icon: '🔗' }
  ];

  

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
    <section className="key-solutions" ref={contentRef}>
      <h2>Infoziant Security Key Solutions</h2>
      <div className="solutions-container">
        {solutions.map((solution) => (
          <motion.div
            key={solution.id}
            className="solution-item"
            initial={{ y: "0px", opacity: 0 }}
            animate={{ y: isVisible ? 0 : "50px", opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.8, delay: solution.id * 0.4 }} // Staggered animation
          >
            <div className="solution-icon">{solution.icon}</div>
            <h3>{solution.title}</h3>
            <p>{solution.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default KeySolutions;