import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import west from "../images/Frame 64.png";
import sony from "../images/Frame 65.png";
import microsoft from "../images/Frame 66.png";
import google from '../images/Frame 67.png';
import dell from "../images/Frame 68.png";
import zoho from "../images/Frame 69.png";
import fastmail from "../images/Frame 70.png";
import chalk from "../images/Frame 71.png";
import sap from "../images/Frame 72.png";
import blackberry from "../images/Frame 73.png";
import invison from "../images/Frame 74.png";
import issu from "../images/Frame 75.png";
import Who from "../images/Frame 76.png";

const companies = [
    { name: 'Western Union', logo: west },
    { name: 'Sony', logo: sony },
    { name: 'Microsoft', logo: microsoft },
    { name: 'Google', logo: google },
    { name: 'Dell', logo: dell },
    { name: 'Zoho', logo: zoho },
    { name: 'Fastmail', logo: fastmail },
    { name: 'Chalk', logo: chalk },
    { name: 'SAP', logo: sap },
    { name: 'BlackBerry', logo: blackberry },
    { name: 'InVision', logo: invison },
    { name: 'Issuu', logo: issu },
    { name: 'WHO', logo: Who },
  ];


  const AppreciatedBy = () => {
    const [isVisible, setIsVisible] = useState(false);
    const contentRef = useRef(null);
  
    const variants = {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 },
    };
  
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
      <section className='appreciated-by' ref={contentRef}>
        <h2>We are appreciated by</h2>
        <p>
          Infoziant: A Cybersecurity powerhouse, lauded by Fortune 500 giants,
          excelling globally with tailored solutions, earning 65+ accolades and
          setting the standard in cybersecurity excellence.
        </p>
        <div className='company-logos'>
          {companies.map((company, index) => (
            <motion.div
              key={index}
              className='company-logo'
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={variants}
              transition={{ duration: 0.8, delay: index * 0.2 }} // Staggered animation
            >
              <img src={company.logo} alt={company.name} />
            </motion.div>
          ))}
        </div>
      </section>
    );
  };
  
  export default AppreciatedBy;