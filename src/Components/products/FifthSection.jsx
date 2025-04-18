import React from 'react';
import { motion } from 'framer-motion';
import './FifthSection.css';

const FifthSection = () => {
  // Define animation variants
  const columnVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 }, // Scale down for hidden state
    visible: { opacity: 1, y: 0, scale: 1 },  // Scale to normal size when visible
  };

  return (
    <section className="fifth-section">
      <h1>Infoziant DAST Pro and Free Versions</h1>
      <div className="comparison-table">
        {/* Free Version Column */}
        <motion.div
          className="comparison-column free"
          initial="hidden"
          animate="visible"
          variants={columnVariants}
          transition={{ duration: 0.5 }}
        >
          <h2><i className="fas fa-gift free-icon"></i> Free</h2>
          <ul>
            <li><span className="checkmark">✔</span> Basic Vulnerability Detection</li>
            <li><span className="checkmark">✔</span> Top 500 CVEs</li>
            <li><span className="checkmark">✔</span> Basic Cloud Security</li>
            <li><span className="checkmark">✔</span> 3 scans limit</li>
            <li><span className="checkmark">✔</span> OWASP, SANS</li>
            <li><span className="checkmark">✔</span> Windows Only</li>
            <li><span className="crossmark">✘</span> Business Logic Testing</li>
            <li><span className="crossmark">✘</span> 24/7 Support</li>
          </ul>
        </motion.div>

        {/* Premium Version Column */}
        <motion.div
          className="comparison-column premium"
          initial="hidden"
          animate="visible"
          variants={columnVariants}
          transition={{ duration: 0.5, delay: 0.2 }} // Slight delay for the premium column
        >
          <h2><i className="fas fa-crown premium-icon"></i> PREMIUM</h2>
          <ul>
            <li><span className="checkmark">✔</span> Comprehensive (17,000+)</li>
            <li><span className="checkmark">✔</span> 2,500+ CVEs</li>
            <li><span className="checkmark">✔</span> No advertisements</li>
            <li><span className="checkmark">✔</span> Unlimited Scans</li>
            <li><span className="checkmark">✔</span> OWASP, HIPAA, GDPR</li>
            <li><span className="checkmark">✔</span> Windows & Linux</li>
            <li><span className="checkmark">✔</span> Business Logic Testing</li>
            <li><span className="checkmark">✔</span> 24/7 Support</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default FifthSection;
