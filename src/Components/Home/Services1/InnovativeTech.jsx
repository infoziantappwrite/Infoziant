import React from "react";
import { FaArrowRight } from "react-icons/fa";

import {
    ShieldCheck,       // For Cybersecurity
    MonitorSmartphone, // For Web & App Development (replaces LaptopCode)
    BugPlay,           // For Software Testing
    UsersRound,        // For Tech Talent Hiring (stylized version of Users)
  } from "lucide-react";
  

import "./InnovativeTech.css";

const services = [
    {
      title: "Cybersecurity Services",
      description:
        "Protect your digital assets with our advanced Infoziant DAST – real-time vulnerability detection and security assessments.",
      icon: <ShieldCheck size={32} color="#15f5ba" />,
    },
    {
      title: "Web & App Development",
      description:
        "Scalable, high-performance websites and apps using modern stacks like MERN, Django, Spring Boot, and more.",
      icon: <MonitorSmartphone size={32} color="#15f5ba" />,
    },
    {
      title: "Software Testing",
      description:
        "End-to-end testing solutions including Automation, Manual, API, and Performance testing with 100+ expert testers.",
      icon: <BugPlay size={32} color="#15f5ba" />,
    },
    {
      title: "Tech Talent Hiring",
      description:
        "Flexible and cost-effective IT staffing services with access to 200,000+ professionals across GCC, USA, UK, and India.",
      icon: <UsersRound size={32} color="#15f5ba" />,
    },
  ];
  

const InnovativeTech = () => {
  return (
    <section className="our-services">
      <div className="services-left">
        <h5>OUR CORE SERVICES</h5>
        <h2 className="heading_point">
          Innovative Tech & <br /> Business Services
        </h2>
        <p>
          We provide a full spectrum of tech services – from cybersecurity and
          development to testing and talent acquisition – empowering businesses
          to thrive in the digital age.
        </p>
        <a className="gradient-btn" href="#">
          More Details <FaArrowRight style={{ marginLeft: "6px", marginTop: "5.5px" }} />
        </a>
      </div>
      <div className="services-right">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="icon">{service.icon}</div>
            <h3 className="text-lg font-medium mb-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
                {service.title.split(" ")[0]}
              </span>{" "}
              {service.title.split(" ").slice(1).join(" ")}
            </h3>
            <p>{service.description}</p>
            <a href="#">Learn More →</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InnovativeTech;
