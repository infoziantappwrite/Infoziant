import "./css/ServicesList.css";
import { CiMoneyCheck1 } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa6";
import { FaBuromobelexperte } from "react-icons/fa6";
import { MdKeyboardOptionKey } from "react-icons/md";
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
    title: "How Do Our Vulnerability Assessments Improve Security?",
    content:
      "Our vulnerability assessments dive deep into your technology architecture to identify hidden weaknesses. By analyzing each component, we enhance security at every level of your infrastructure. This ensures that critical data assets are well-protected from potential threats. Our approach strengthens your overall security posture and mitigates risks effectively.",
    image: "./assets/s4-1.jpg",
  },
  {
    id: 2,
    title: "Why Is API Vulnerability Testing Crucial?",
    content:
      "APIs are often vulnerable entry points for attackers, leading to data breaches and unauthorized access if not properly secured. Our API Vulnerability Assessment and Penetration Testing (VAPT) services detect weaknesses early on, helping prevent threats before they impact your system. By proactively addressing risks, we ensure your APIs maintain their integrity and security. This enhances protection across your digital ecosystem",
    image: "./assets/s4-2.jpg",
  },
  {
    id: 3,
    title: "What Does Our API Security Testing Involve?",
    content:
      "Our comprehensive API security testing covers key areas such as broken authentication mechanisms, sensitive data exposure, and API misuse. We conduct in-depth assessments to identify these vulnerabilities and ensure compliance with industry security standards. With a proactive focus, we help secure your APIs from potential breaches, safeguarding your operations and preventing unauthorized access.",
    image: "./assets/s4-3.jpg",
  },
];

const featuresData = [
  {
    id: 0,
    icon: <CiMoneyCheck1 size={50} />,
    title: "Detecting Broken Authentication Mechanisms",
    description:
      "Identify and address weak authentication processes to enhance security",
  },
  {
    id: 1,
    icon: <FaRegClock size={50} />,
    title: "Exposing Sensitive Data Risks",
    description:
      "Detect potential risks related to sensitive data exposure in APIs.",
  },
  {
    id: 2,
    icon: <FaBuromobelexperte size={50} />,
    title: "Preventing API Misuse and Manipulation",
    description:
      "Implement measures to protect against unauthorized API access and misuse.",
  },
  {
    id: 3,
    icon: <MdKeyboardOptionKey size={50} />,
    title: "Ensuring Compliance with Security Standards",
    description:
      "Guarantee adherence to industry security standards for API protection.",
  },
];

export default function ApiVapt() {
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
        <title>API VAPT | Infoziant</title>
        <meta
          name="description"
          content="Leading the Next Era in Cybersecurity"
        />
      </Helmet>
      <Navbar />
      <div
        className="service-banner"
        style={{
          backgroundImage: "url(./assets/api-sb.png)",
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
           API VAPT
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
            We identify vulnerabilities like broken authentication and data
            exposure in your APIs to ensure secure system transmission.
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
              src="./assets/service-banner-4.png"
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
            <p className="tag-sl">API VAPT</p>
            <br />
            <h1 className="bt-h1">
              Ensuring Robust API Security Against Potential Vulnerabilities
            </h1>
            <p className="bt-p">
              API security is essential in today’s digital landscape, as
              weaknesses can result in data breaches and unauthorized access.
              Our VAPT services identify potential vulnerabilities early,
              allowing you to prevent threats and uphold system integrity. We
              thoroughly test for authentication flaws, sensitive data exposure,
              and API misuse to ensure compliance with industry standards. With
              our proactive approach, we help safeguard your APIs and protect
              your operations from breaches.
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
          Common Cyber Security in <span className="highlight">API VAPT</span>{" "}
          and how we address them:
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
      {/* <div className="stand-out-sl">
        <h1 className="sso-h1">What Makes Our Service Stand Out?</h1>
        <div className="sso-cards">
          <motion.div
            className="sso-card-1"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <h2>Cutting-Edge Security Integration</h2>
            <br />
            <p>
              We don’t hold back when it comes to securing enterprises. That's
              why we prioritize integrating next-gen Security Information and
              Event Management (SIEM) and threat intelligence services into our
              solutions. This ensures comprehensive protection tailored to meet
              the evolving challenges of cybersecurity.
            </p>
          </motion.div>

          <motion.div
            className="sso-card-2"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <h2>Advanced Threat Detection</h2>
            <br />
            <p>
              Our offerings include automation-based incident response,
              analytics-led threat detection, and log management reviews. These
              advanced features empower organizations to swiftly identify and
              respond to threats, enhancing overall security posture and
              minimizing potential risks.
            </p>
          </motion.div>
        </div>
      </div> */}

      <ConsultationForm />

      <Footer />
    </>
  );
}
