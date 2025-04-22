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
      "Is your cloud ecosystem showing glaring vulnerabilities from the get-go?",
    content:
      "We’ll conduct through assessments pre, during, and post-migration and complement it by doing preemptive checks of the overall security posture as well. We’ll also perform deep-dive analytics and create gap analysis reports.",
    image: "./assets/s3-1.jpg",
    imageWidth: "900px",
  },
  {
    id: 2,
    title: "Are you not confident with your API’s security?",
    content:
      "We’ll help you optimize your API architecture to make it more amenable to your digital-first workflows. We’ll prevent serverless apps, shadow APIs, and API authentication concerns by ensuring continuous API discovery and maintaining deep security layers. Enjoy better distributed access, policy, and traffic controls. Reduce API vulnerabilities through auto-remediation. ",
    image: "./assets/s3-2.jpg",
  },
  {
    id: 3,
    title:
      "Are you having problems integrating Amazon Web Services (AWS) and Azure?",
    content:
      "When integrating AWS and Azure, we’ll help you attain a single point of security ownership by tightening security controls. Expect effective and efficient solutions to AWS/Azure security architecture, automation, and compliance.",
    image: "./assets/s3-3.jpg",
  },
];

const featuresData = [
  {
    id: 0,
    icon: <BsDatabaseLock size={50} />,
    title: "Data Security in Cloud Computing",
    description:
      "lends itself to smooth and efficient business processes and better overall outcomes.",
  },
  {
    id: 1,
    icon: <BsShieldLock size={50} />,
    title: "cloud security monitoring",
    description:
      "Helps identify security threats early to prevent workflow disruptions and losses.",
  },
  {
    id: 2,
    icon: <BsGraphUp size={50} />,
    title: "Cloud computing security",
    description:
      "to us, is all about guaranteeing full protection every step of the way.",
  },
  {
    id: 3,
    icon: <BsFillCheckCircleFill size={50} />,
    title: "Cloud Migration Support",
    description:
      "We offer comprehensive support throughout your cloud migration journey.",
  },
];

export default function CloudInfrastructure() {
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
        <title>Cloud Infrastructure | Infoziant</title>
        <meta
          name="description"
          content="Leading the Next Era in Cybersecurity"
        />
      </Helmet>
      <Navbar />
      <div
        className="service-banner"
        style={{
          backgroundImage: "url(./assets/cloud-sb.png)",
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
           Cloud Infrastructure
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
           We assess your cloud environment for vulnerabilities and provide
            measures to prevent misconfigurations.
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
              src="./assets/service-banner-3.png"
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
            <p className="tag-sl">Cloud Infrastructure</p>
            <br />
            <h1 className="bt-h1">
              Cloud Security Demands Proactive and Adaptive Measures
            </h1>
            <p className="bt-p">
              Our Cloud Security service offers continuous monitoring and
              assessments to ensure API security and effective testing. We help
              modernize IT workflows and create a robust cloud security roadmap,
              enhancing adaptability against emerging threats. Regular
              monitoring allows us to identify risks proactively, while our team
              provides support during migration to optimize API architecture and
              ensure compliance with AWS and Azure standards.
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
          <span className="highlight">Cloud Infrastructure</span> and how we
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
