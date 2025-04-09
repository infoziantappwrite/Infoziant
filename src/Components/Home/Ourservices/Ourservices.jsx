

import React from "react";
import "./Ourservices.css";
import image from "../../../assests/Images/Ourservice/coworkers-planning-making-objective.png"


const OurServices = () => {
  return (
<section className="our-services-section animate-section">
      <div className="our-services-container">
        <div className="our-services-content">
          <div className="our-services-text animate-text">
            <h2 className="our-services-title gradient-title">Our Services – Connecting Talent with Opportunities</h2>
            <p className="animate-text">We offer a diverse range of services to support students, professionals, and businesses in achieving their goals. From placements and internships to cybersecurity and web development, we provide the skills and opportunities needed to thrive in the tech industry.</p>
            <button className="explore-button animate-text" onClick={() => window.location.href = "/services"}>
              
              <p>Explore Our Services</p>
              <svg width="32px" height="32px" viewBox="-13.76 -13.76 59.52 59.52" id="Lager_29" data-name="Lager 29" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff" stroke-width="0.00032"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Group_8" data-name="Group 8"> <path id="Path_33" data-name="Path 33" d="M20.587,14.613,18,17.246V9.98A1.979,1.979,0,0,0,16.02,8h-.04A1.979,1.979,0,0,0,14,9.98v6.963l-.26-.042-2.248-2.227a2.091,2.091,0,0,0-2.657-.293A1.973,1.973,0,0,0,8.58,17.4l6.074,6.016a2.017,2.017,0,0,0,2.833,0l5.934-6a1.97,1.97,0,0,0,0-2.806A2.016,2.016,0,0,0,20.587,14.613Z" fill="#ffffff"></path> <path id="Path_34" data-name="Path 34" d="M16,0A16,16,0,1,0,32,16,16,16,0,0,0,16,0Zm0,28A12,12,0,1,1,28,16,12.013,12.013,0,0,1,16,28Z" fill="#ffffff"></path> </g> </g></svg>
               </button>
          </div>
          <div className="our-services-image animate-image">
            <img src={image} alt="Our Services" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;


