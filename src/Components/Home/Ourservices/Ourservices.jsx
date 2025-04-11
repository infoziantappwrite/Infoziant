import React from "react";
import { motion } from "framer-motion";
import "./Ourservices.css";
import image from "../../../assests/Images/Ourservice/communication-flat-icon.png";

const OurServices = () => {
  // Function to scroll smoothly to ServicesSection
  const handleScroll = () => {
    document.getElementById("services-section").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="our-services-section">
      <div className="our-services-container">
        {/* Left Section: Text & Button */}
        <motion.div
          className="our-services-text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="our-services-title">
            Our Services – Connecting Talent with Opportunities
          </h2>
          <p>
            We offer a diverse range of services to support students, professionals, 
            and businesses in achieving their goals. From placements and internships 
            to cybersecurity and web development, we provide the skills and 
            opportunities needed to thrive in the tech industry.
          </p>

          {/* Button: Scrolls to ServicesSection */}
          <motion.button
            className="explore-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleScroll}
          >
            <p>Explore Our Services</p>
            <svg width="32px" height="32px" viewBox="-13.76 -13.76 59.52 59.52" xmlns="http://www.w3.org/2000/svg" fill="#ffffff">
              <g id="SVGRepo_iconCarrier">
                <g id="Group_8" data-name="Group 8">
                  <path id="Path_33" d="M20.587,14.613,18,17.246V9.98A1.979,1.979,0,0,0,16.02,8h-.04A1.979,1.979,0,0,0,14,9.98v6.963l-.26-.042-2.248-2.227a2.091,2.091,0,0,0-2.657-.293A1.973,1.973,0,0,0,8.58,17.4l6.074,6.016a2.017,2.017,0,0,0,2.833,0l5.934-6a1.97,1.97,0,0,0,0-2.806A2.016,2.016,0,0,0,20.587,14.613Z" fill="#ffffff"/>
                  <path id="Path_34" d="M16,0A16,16,0,1,0,32,16,16,16,0,0,0,16,0Zm0,28A12,12,0,1,1,28,16,12.013,12.013,0,0,1,16,28Z" fill="#ffffff"/>
                </g>
              </g>
            </svg>
          </motion.button>
        </motion.div>

        {/* Right Section: Image */}
        <motion.div
          className="our-services-image"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src={image} alt="Our Services" />
        </motion.div>
      </div>
    </section>
  );
};

export default OurServices;
