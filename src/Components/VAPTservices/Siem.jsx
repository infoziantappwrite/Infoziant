import "./css/ServicesList.css";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FcInspection } from "react-icons/fc";
import { GrSearchAdvanced } from "react-icons/gr";
import { SiSecurityscorecard } from "react-icons/si";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ConsultationForm from "./ConsultationForm";
import ServiceCards from "./ServiceCards";
import { Helmet } from "react-helmet";

const serviceListData = [
  {
    id: 1,
    title: "Network design",
    content:
      "We enhance your network's security efficiency through a priority-based risk-resolution approach. Our services include in-depth vulnerability and penetration assessments, allowing us to identify potential threats. We also leverage business impact analysis to understand the implications of these vulnerabilities on your operations. Additionally, we implement proactive detection monitoring architectures to ensure ongoing protection and rapid response to emerging risks.",
    image: "./assets/s5-1.jpg",
  },
  {
    id: 2,
    title: "Firewall Configuration",
    content:
      "We ensure the security of all firewalls, switches, and routers by thoroughly checking for vulnerabilities, administrative flaws, and non-compliance. Our process includes reviewing firewall rules and configurations to identify potential weaknesses. We remediate any security vulnerabilities and resolve misconfigurations to enhance overall protection. Additionally, we align our security measures with your enterprise's specific requirements to ensure compliance and optimal performance across your network.",
    image: "./assets/s5-2.jpg",
  },
  {
    id: 3,
    title: "Patch Management",
    content:
      "We empower you to automate security patch updates across your systems and applications, significantly reducing user efforts. Our approach includes scheduling regular vulnerability scans to identify potential risks and harnessing both active and passive scanning modes for comprehensive coverage. This proactive strategy bridges security gaps while ensuring the seamless use of critical applications, enabling your organization to operate securely and efficiently.",
    image: "./assets/s5-3.jpg",
  },
];

const featuresData = [
  {
    id: 0,
    icon: <MdOutlineSupportAgent size={50} />,
    title: "24/7 Infra & Response",
    description:
      "24/7 infrastructure management and governance, with fast response time",
  },
  {
    id: 1,
    icon: <FcInspection size={50} />,
    title: "Real-Time Monitoring",
    description:
      "Real-time network performance monitoring, with event correlation",
  },
  {
    id: 2,
    icon: <GrSearchAdvanced size={50} />,
    title: "Advanced SIEM monitoring",
    description:
      "Advanced SIEM monitoring (including IDS/IPS and AV) and reporting",
  },
  {
    id: 3,
    icon: <SiSecurityscorecard size={50} />,
    title: "Complete Infrastructure & Security",
    description:
      "24/7 management, real-time monitoring, and AI SIEM for rapid alerts.",
  },
];

export default function Siem() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const servicesRef = useRef(null);

  const handleScroll = (event) => {
    if (!isInView) return;

    if (event.deltaY > 0) {
      if (currentIndex < serviceListData.length - 1) {
        event.preventDefault();
        setCurrentIndex((prevIndex) =>
          Math.min(prevIndex + 1, serviceListData.length - 1)
        );
      }
    } else {
      if (currentIndex > 0) {
        event.preventDefault();
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
      }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      { threshold: 0.2 }
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => {
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      window.addEventListener("wheel", handleScroll, { passive: false });
    } else {
      window.removeEventListener("wheel", handleScroll);
    }

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [isInView, currentIndex]);

  return (
    <>
      <Helmet>
        <title>SIEM & Threat Intelligence | Infoziant</title>
        <meta
          name="description"
          content="Leading the Next Era in Cybersecurity"
        />
      </Helmet>
      <Navbar />
      <div
        className="service-banner"
        style={{
          backgroundImage: "url(./assets/siem-sb.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
       
        <div className="sb-intro">
        <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
           SIEM service
          </motion.h1>
          <br />
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.43, 0.13, 0.23, 0.96],
              delay: 0.2,
            }}
          >
           Your business uptime depends on a strong SIEM approach; we help
            monitor your infrastructure to protect against existing and
            potential threats.
          </motion.p>
        </div>
      </div>

      <section className="servicesList">
        <ul className="service-list-ul">
          <motion.li
            className="sl-li-1"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.img
              className="sl-title-img"
              src="./assets/service-banner-5.png"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </motion.li>

          <motion.li
            className="sl-li-2"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="tag-sl">
              Security Incident, Event Management and Threat Intelligence
            </p>
            <br />
            <h1 className="bt-h1">
              Enhancing Business Continuity with Advanced SIEM Solutions
            </h1>
            <p className="bt-p">
              Maintaining and accelerating your business uptime is interlinked
              to your Level of Security Incident and Event Management (SIEM)
              approach. We enable you to monitor your infrastructure, including
              all systems and applications, to protect against existing and
              potential threats.
            </p>

            <div className="sl-features-1">
              {featuresData.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  className="sl-points"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="sl-icon">{feature.icon} </div>
                  <div>
                    <h3 className="sl-points-title">{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.li>
        </ul>

        {/* slideshow features starts*/}
        <h1 className="head-1">
          Common Cyber Security in{" "}
          <span className="highlight">SIEM service</span> and how we address
          them:
        </h1>
        <br />

        <motion.section
          ref={servicesRef}
          className="services-section-sl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="services-container">
            {/* Sliding effect for text from bottom to top */}
            {serviceListData[currentIndex] && (
              <motion.div
                className="service-text-sl"
                key={serviceListData[currentIndex].id}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <h3>
                  {serviceListData[currentIndex].id}.{" "}
                  {serviceListData[currentIndex].title}
                </h3>
                <p>{serviceListData[currentIndex].content}</p>
              </motion.div>
            )}

            {/* Wrapping image inside motion.div to animate from bottom to top */}
            <motion.div
              className="image-container"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <img
                className="slide-img-sl"
                src={serviceListData[currentIndex].image}
                alt={serviceListData[currentIndex].title}
              />
            </motion.div>
          </div>
        </motion.section>

        {/* services mobile view */}
        <section className="services-section-mobile-sl">
          <motion.p
            className="services-p-sl"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
            viewport={{ once: false }}
          >
            Our AI powered tool is packed with a diverse set of robust features
            designed to cater the unique requirements of Smart Contract
            Vulnerability Detection across organizations of all sizes in the
            web3 ecosystem.
          </motion.p>

          <br />

          <ul className="sl-mv">
            {serviceListData.map((service, index) => (
              <motion.li
                key={service.id}
                className="service-li-m-sl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }} // Delay for a cascading effect
                viewport={{ once: false }}
              >
                <img
                  className="service-img-m-sl"
                  src={service.image}
                  alt={service.id}
                />
                <br />
                <h1>{service.title}</h1>
                <p>{service.content}</p>
              </motion.li>
            ))}
          </ul>
        </section>
        {/* slideshow feature ends */}
      </section>

      {/* service stands out */}
      <ServiceCards />

      <ConsultationForm />

      <Footer />
    </>
  );
}
