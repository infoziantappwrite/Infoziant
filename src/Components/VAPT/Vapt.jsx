import React, { useRef } from "react";
import ConsultationForm from "./ConsultationForm";
import { Link } from "react-router-dom";
import "./Vapt.css";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

import { FaCloud, FaFileAlt, FaTachometerAlt, FaCheckCircle, FaCogs, FaShieldAlt } from 'react-icons/fa';

export default function Vapt() {

  const consultationFormRef = useRef(null);

  const scrollToConsultationForm = () => {
    consultationFormRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Cards hover section
  const features = [
    {
      title: "Experienced Security Experts",
      description:
        "Our qualified team excels in identifying weaknesses across diverse environments.",
    },
    {
      title: "Comprehensive Security Solutions",
      description:
        "We provide customized VAPT services for network, cloud, and application security.",
    },
    {
      title: "Proactive Threat Detection",
      description:
        "We use the latest tools to simulate cyberattacks and uncover hidden vulnerabilities.",
    },
    {
      title: "Actionable Insights",
      description:
        "Our reports provide actionable recommendations to fix vulnerabilities and improve security.",
    },
    {
      title: "24/7 Managed Security",
      description:
        "Our continuous monitoring services detect threats 24/7 to protect your business.",
    },
    {
      title: "Regulatory Compliance",
      description:
        "We ensure your systems comply with industry standards to minimize penalty risks.",
    },
    {
      title: "Client-Focused Approach",
      description:
        "Our solutions are tailored to your needs for a personalized and efficient experience.",
    },
    {
      title: "Proven Track Record",
      description:
        "Trusted by organizations across industries, we deliver reliable and effective security services.",
    },
    {
      title: "Tailored VAPT Services",
      description:
        "Offering tailored VAPT solutions to secure networks, web applications, and cloud infrastructure.",
    },
  ];

  const services = [
    {
      title: "Network Infrastructure",
      description:
        "We identify vulnerabilities in network devices through simulated attacks, strengthening defenses against real threats.",
      imgSrc: "/assets/service-image1.png",
      iconSrc: "/assets/service-icon1.png",
      link: "/network-infrastructure",
    },
    {
      title: "Web and Mobile App",
      description:
        "We assess your web and mobile applications for security risks like SQL injection and XSS to ensure user safety.",
      imgSrc: "/assets/service-image2.png",
      iconSrc: "/assets/service-icon2.png",
      link: "/web-and-mobile-app",
    },
    {
      title: "Cloud Infrastructure",
      description:
        "We assess your cloud infrastructure for vulnerabilities and implement safeguards to prevent misconfigurations.",
      imgSrc: "/assets/service-image3.png",
      iconSrc: "/assets/service-icon3.png",
      link: "/cloud-infrastructure",
    },
    {
      title: "API VAPT",
      description:
        "We identify vulnerabilities like broken authentication and data exposure in your APIs to ensure secure system transmission.",
      imgSrc: "/assets/service-image4.png",
      iconSrc: "/assets/service-icon4.png",
      link: "/api-vapt",
    },
    {
      title: "SIEM & Threat Intelligence",
      description:
        "We deliver proactive cybersecurity with SIEM and threat intelligence services, using cutting-edge technologies to prevent threats.",
      imgSrc: "/assets/service-image5.png",
      iconSrc: "/assets/service-icon5.png",
      link: "/siem",
    },
  ];

  const steps = [
    { step: 1, title: 'Discover & Crawl', icon: <FaCloud /> },
    { step: 2, title: 'Assess Risk', icon: <FaFileAlt /> },
    { step: 3, title: 'Detect', icon: <FaTachometerAlt /> },
    { step: 4, title: 'Resolve', icon: <FaCheckCircle /> },
    { step: 5, title: 'Integrate', icon: <FaCogs /> },
    { step: 6, title: 'Continuously Secure', icon: <FaShieldAlt /> }
  ];

  return (
    <div className="App-vapt">
      <Helmet>
        <title>Vulnerability Assessment & Penetration Testing Services</title>
        <meta
          name="description"
          content="Strengthen your security with Infoziant's VAPT services. We identify vulnerabilities in networks, apps, and cloud environments to protect your data assets."
        />
        <link rel="canonical" href="http://example.com" />
      </Helmet>

      <div className="Penetration-container">
        <motion.div
          className="Penetration-content"
          initial={{ opacity: 0, x: -20 }} // Reduced initial x shift
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.h4
            className="Penetration-title-small"
            initial={{ opacity: 0, y: -10 }} // Reduced y shift
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
          >
            Vulnerability Assessment / Penetration Testing (VAPT)
          </motion.h4>

          <motion.h1
            className="Penetration-title-large"
            initial={{ opacity: 0, y: -10 }} // Reduced y shift
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
          >
            Identify and Mitigate Security Risks
          </motion.h1>

          <motion.p
            className="Penetration-description"
            initial={{ opacity: 0, y: 10 }} // Reduced y shift
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
          >
            We provide vulnerability assessment and penetration testing that
            includes a deep-dive analysis of your technology architecture to improve
            component-level security while safeguarding critical data assets.
          </motion.p>

          <motion.div
            className="get-started-btn-container"
            initial={{ opacity: 0, scale: 0.95 }} // Reduce scale shift
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            onClick={scrollToConsultationForm}
          >
            <button className="get-started-btn">Talk to Us</button>
          </motion.div>
        </motion.div>

        <motion.div
          className="Penetration-image"
          initial={{ opacity: 0, x: 20 }} // Reduced x shift
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <img src="/assets/vapt.svg" alt="Penetration Services" />
        </motion.div>
      </div>

      {/* vapt cards */}
      <div className="services-container-cards">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            initial={{ opacity: 0, scale: 0.95, y: 10 }} // Reduced y shift and scale
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="image-container-cards">
              <img src={service.imgSrc} alt={service.title} className="service-image" />
            </div>
            <div className="service-content">
              <div className="icon-container">
                <img src={service.iconSrc} alt={service.title} className="service-icon" />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <Link to={service.link} className="service-link">
                Read More &gt;
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="feature-container">
        <div className="secure-steps-container">
          <div className="steps-diagram">
            {steps.map(({ step, title, icon }, index) => (
              <motion.div
                key={index}
                className="step-item"
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }} // Delay for staggered effect
              >
                <div className="step-icon">{icon}</div>
                <h3>Step {step}</h3>
                <p>{title}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="secure-message"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <p>Secure your Data with Infoziant</p>
          </motion.div>
        </div>
        <div className="feature-grid">
          {features.map((feature, index) => (
            <motion.div
              className="feature-card"
              key={index}
              initial={{ opacity: 0, y: 10 }} // Reduced y shift
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <div className="feature-content">
              <h3>{<strong>{feature.title}</strong>}</h3>

                <p>{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Consultation Form */}
      <div ref={consultationFormRef}>
        <ConsultationForm />
      </div>
    </div>

  );
}