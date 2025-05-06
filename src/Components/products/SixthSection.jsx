import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import "./SixthSection.css";
import windowImage from '../../assests/productimages/window.png'; // Ensure this path is correct
import shapeImage from '../../assests/productimages/chooseus_shape.png';
import EmailForm from '../EmailForm';


const SixthSection = () => {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState('systemRequirements'); // Default to system requirements
  const [isemailFormOpen, setemailIsFormOpen] = useState(false);
  const toggleemailForm = () => {
    setemailIsFormOpen(!isemailFormOpen); // Toggle form visibility
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
    <section className="chooseus_section_6_unique" ref={sectionRef}>
      <div className="chooseus_section_6_content">
      <motion.h2
  className="section_title"
  initial={{ y: "100px", opacity: 0 }}
  animate={{ y: isVisible ? 0 : "50px", opacity: isVisible ? 1 : 0 }}
  transition={{ duration: 0.5, delay: 0.3 }}
  style={{
    fontSize: window.innerWidth <= 768 ? '1.5rem' : '2.3rem', // Reduce font size for mobile
    textAlign: 'center', // Centering the text
  }}
>
  Infoziant’s free version has garnered over 70,000 downloads worldwide.
</motion.h2>

        <motion.div 
          className="tabs" 
          initial={{ y: "100px", opacity: 0 }}
          animate={{ y: isVisible ? 0 : "50px", opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.5 }} 
        >
          <div
            className={`tab ${activeTab === 'systemRequirements' ? 'active' : ''}`}
            onClick={() => handleTabClick('systemRequirements')}
          >
            System Requirements
          </div>
          <div
            className={`tab ${activeTab === 'windows' ? 'active' : ''}`}
            onClick={() => handleTabClick('windows')}
          >
            Windows
          </div>
          <div
            className={`tab ${activeTab === 'linux' ? 'active' : ''}`}
            onClick={() => handleTabClick('linux')}
          >
            Linux
          </div>
        </motion.div>

        <div className="content_box">
          <motion.div 
            className="text_area" 
            initial={{ y: "100px", opacity: 0 }}
          animate={{ y: isVisible ? 0 : "50px", opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.5 }} 
        >
            {activeTab === 'systemRequirements' && (
              <div className="requirements">
                <h3 className="requirement_title">RAM Requirements</h3>
                <ul className="requirement_list">
                  <li><span className="requirement_bullet"></span> Minimum 4GB of RAM for scanning simple websites.</li>
                  <li><span className="requirement_bullet"></span> 16GB of RAM is necessary for scanning medium-sized websites.</li>
                  <li><span className="requirement_bullet"></span> For larger websites, 32GB of RAM is required.</li>
                </ul>
                <p className="requirement_storage"><strong>Storage:</strong> 10GB of available disk space</p>
                <p className="requirement_note">Note: Linux version is only available with the Pro plan.</p>
                <h3>Operating System</h3>
                <ul className="requirement_list">
                  <li><span className="requirement_bullet"></span> Windows (64bit)</li>
                  <li><span className="requirement_bullet"></span> Linux all distributions (64bit)</li>
                </ul>
              </div>
            )}
            {activeTab === 'windows' && (
              <div className="windows_content">
                <h3 className="os_title">Operating Systems</h3>
                <p className="os_description">Windows (64-bit)</p>
                <motion.button 
                  className="download_button" 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleemailForm}
                >
                  Download Windows
                </motion.button>
              </div>
            )}
            {activeTab === 'linux' && (
              <div className="linux_content">
                <h3 className="os_title">Operating Systems</h3>
                <p className="os_description">Linux (all distributions, 64-bit)</p>
                <motion.button 
                  className="download_button" 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleemailForm}
                >
                  Download Linux
                </motion.button>
              </div>
            )}
          </motion.div>
          
          <motion.div 
            className="image_area" 
            initial={{ y: "100px", opacity: 0 }}
          animate={{ y: isVisible ? 0 : "50px", opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.5 }} 
        >
            <img src={windowImage} alt="System Requirements" />
            <img src={shapeImage} alt="Shape Background" className="shape_image" />
          </motion.div>
        </div>
      </div>
      {isemailFormOpen && <EmailForm closeModal={toggleemailForm} />}
    </section>
  );
};

export default SixthSection;
