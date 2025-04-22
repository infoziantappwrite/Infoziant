import "./css/ServicesList.css";
import {
  BsDatabaseLock,
  BsShieldLock,
  BsGraphUp,
  BsFillCheckCircleFill,
} from "react-icons/bs";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BsFillOctagonFill } from "react-icons/bs";
import ConsultationForm from "./ConsultationForm";
import ServiceCards from "./ServiceCards";
import { Helmet } from "react-helmet";

const serviceListData = [
  {
    id: 1,
    title:
      "Are your web apps being plagued by security issues and other vulnerabilities?",
    content:
      "Our Application Vulnerability Testing Service pinpoints security errors that automated tools may overlook, guided by the OWASP ASVS testing framework. We conduct black-box, white-box, and grey-box testing to eliminate all types of vulnerabilities in your app. Additionally, we simulate real-world attacks to thoroughly assess overall security quality, ensuring your application is well-protected against potential threats",
    image: "./assets/s1-1.jpg",
  },
  {
    id: 2,
    title: "Are your APIs vulnerable to hackers?",
    content:
      "We’re here to perform in-depth security checks to help your app meet OWASP security standards. Our team conducts thorough analyses of your data, examining it both at rest and in transit. Additionally, we create detailed reports that identify all vulnerabilities along with their associated risk ratings, ensuring you have a clear understanding of your security posture.",
    image: "./assets/s1-2.jpg",
  },
  {
    id: 3,
    title: "Do you think your chatbots’ at risk?",
    content:
      "We’ll help clear any lingering doubts by implementing two-factor or biometric authentication for added security. Our approach includes securing user IDs and passwords in real time, ensuring sensitive information is protected. Additionally, we trigger authentication timeouts to minimize the risk of unauthorized access, enhancing the overall security of your chatbot system.",
    image: "./assets/s1-3.jpg",
  },
];

const featuresData = [
  {
    id: 0,
    icon: <BsDatabaseLock size={50} />,
    title: "Identifying Network Vulnerabilities",
    description:
      "We find and fix weak points in your network before they're exploited",
  },
  {
    id: 1,
    icon: <BsShieldLock size={50} />,
    title: "Simulating Real-World Threats",
    description:
      "We test your network's defense through realistic threat scenarios.",
  },
  {
    id: 2,
    icon: <BsGraphUp size={50} />,
    title: "Tailored Security Solutions",
    description: "Customized strategies keep your infrastructure protected.",
  },
  {
    id: 3,
    icon: <BsFillCheckCircleFill size={50} />,
    title: "Continuous Monitoring and Support",
    description: "We provide ongoing support to address evolving threats.",
  },
];

export default function NetworkInfrastructure() {
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
        <title>Network Infrastructure | Infoziant</title>
        <meta
          name="description"
          content="Leading the Next Era in Cybersecurity"
        />
      </Helmet>
      
      <Navbar />
      <div
        className="service-banner"
        style={{
          backgroundImage: "url(./assets/network-sb.png)",
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
            Network Infrastructure
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
            We identify vulnerabilities in network devices through simulated
            attacks, strengthening defenses against real threats.
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
              src="./assets/service-banner-1.png"
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
            <p className="tag-sl">Network Infrastructure</p>
            <br />
            <h1 className="bt-h1">
              Strengthening Network Infrastructure for Enhanced Security
            </h1>
            <p className="bt-p">
              In today's interconnected world, secure network infrastructure is
              crucial. Our solutions help identify and address vulnerabilities
              in network devices, enhancing protection against potential
              threats. By simulating real-world risks, we fortify your network’s
              resilience. Using cutting-edge technology and best practices, we
              ensure your infrastructure is equipped to combat emerging cyber
              threats.
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
          <span className="highlight">Network Infrastructure</span> and how we
          address them:
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
              className="image-container-s"
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
