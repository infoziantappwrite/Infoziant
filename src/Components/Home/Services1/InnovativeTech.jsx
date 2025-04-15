import React from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ShieldCheck,
  MonitorSmartphone,
  BugPlay,
  UsersRound,
} from "lucide-react";
import { useRef } from "react";
import "./InnovativeTech.css";

const services = [
  {
    title: "Cybersecurity Services",
    description:
      "Protect your digital assets with our advanced Infoziant DAST – real-time vulnerability detection and security assessments.",
    icon: <ShieldCheck size={32} color="#15f5ba" />,
    link: "/services/cybersecurity",
  },
  {
    title: "Web & App Development",
    description:
      "Scalable, high-performance websites and apps using modern stacks like MERN, Django, Spring Boot, and more.",
    icon: <MonitorSmartphone size={32} color="#15f5ba" />,
    link: "/services/web-development",
  },
  {
    title: "Software Testing",
    description:
      "End-to-end testing solutions including Automation, Manual, API, and Performance testing with 100+ expert testers.",
    icon: <BugPlay size={32} color="#15f5ba" />,
    link: "/services/software-testing",
  },
  {
    title: "Tech Talent Hiring",
    description:
      "Flexible and cost-effective IT staffing services with access to 200,000+ professionals across GCC, USA, UK, and India.",
    icon: <UsersRound size={32} color="#15f5ba" />,
    link: "/services/tech-talent-hiring",
  },
];

const InnovativeTech = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="our-services ">
      {/* Left Section: Animated Text */}
      <motion.div
        className="services-left"
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h5>OUR CORE SERVICES</h5>
        <h2 className="heading_point">Innovative Tech & Business Services</h2>
        <p>
          We provide a full spectrum of tech services – from cybersecurity and
          development to testing and talent acquisition – empowering businesses
          to thrive in the digital age.
        </p>
      </motion.div>

      {/* Right Section: Cards */}
      <motion.div 
        className="services-right"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="icon">{service.icon}</div>
            <h3 className="text-xl font-medium mb-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
                {service.title.split(" ")[0]}
              </span>{" "}
              <span className="text-white">
                {service.title.split(" ").slice(1).join(" ")}
              </span>
            </h3>
            <p>{service.description}</p>
            <button
              className="learn-more-btn"
              onClick={() => navigate(service.link)}
            >
              Learn More →
            </button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default InnovativeTech;
