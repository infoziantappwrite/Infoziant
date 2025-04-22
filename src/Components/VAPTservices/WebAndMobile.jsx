import "./css/ServicesList.css";
import { MdGroups } from "react-icons/md";
import { MdManageHistory } from "react-icons/md";
import { FiClipboard } from "react-icons/fi";
import { MdBusinessCenter } from "react-icons/md";
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
    title: "Want to better fortify your Android app?",
    content:
      "By collaborating with our specialized team of VAPT experts and utilizing cutting-edge tools, we enhance your mobile app security. We identify and eradicate vulnerability flaws, ensuring robust protection for your application. Additionally, we provide regular consolidated reports on potential risks, keeping you informed and prepared to tackle any security challenges.",
    image: "./assets/s2-1.jpg",
  },
  {
    id: 2,
    title:
      "Are you having doubts about your iOS app’s ability to address threats?",
    content:
      "Are you concerned about your iOS app's ability to address security threats? We will alleviate those doubts by identifying exploitable security issues and enabling the secure extension of business applications on iOS platforms. Our focus is on protecting the integrity and security of sensitive, business-critical data, ensuring your app remains robust against potential vulnerabilities.",
    image: "./assets/s2-2.jpg",
  },
  {
    id: 3,
    title:
      "Want to further reinforce your app’s security and enjoy broad-spectrum protection?",
    content:
      "Do you want to further enhance your app's security and benefit from broad-spectrum protection? With OS hardening, we will develop a secure path for software upgrades and patches while tightening security configuration settings. Additionally, we create reusable OS hardening templates, ensuring a consistent and robust defense against potential threats.",
    image: "./assets/s2-3.jpg",
  },
];

const featuresData = [
  {
    id: 0,
    icon: <MdGroups size={50} />,
    title: "Eliminate App Vulnerabilities",
    description:
      "We identify and address mobile app vulnerabilities to enhance security",
  },
  {
    id: 1,
    icon: <MdManageHistory size={50} />,
    title: "Regular Security Reports",
    description:
      "Consistent updates on potential security risks keep you informed.",
  },
  {
    id: 2,
    icon: <FiClipboard size={50} />,
    title: "Secure iOS Extensions",
    description:
      "We protect business-critical data with secure iOS app extensions",
  },
  {
    id: 3,
    icon: <MdBusinessCenter size={50} />,
    title: "OS Hardening",
    description:
      "We implement secure configurations to safeguard your applications",
  },
];

export default function WebAndMobile() {
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
        <title>Web and Mobile App | Infoziant</title>
        <meta
          name="description"
          content="Leading the Next Era in Cybersecurity"
        />
      </Helmet>
      <Navbar />
      <div
        className="service-banner"
        style={{
          backgroundImage: "url(./assets/web-sb.png)",
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
           Web and Mobile Application
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
           We assess your web and mobile applications for security risks like
            SQL injection and XSS to ensure user safety.
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
              src="./assets/service-banner-2.png"
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
            <p className="tag-sl">Web and Mobile Application</p>
            <br />
            <h1 className="bt-h1">
              Comprehensive Mobile Application Security for Maximum Protection
            </h1>
            <p className="bt-p">
              Infoziant’s mobile application security services safeguard against
              data theft and reverse engineering. We perform thorough testing
              for both iOS and Android, addressing vulnerabilities effectively.
              Our approach includes automated scans and manual assessments
              following OWASP ASVS standards. We ensure secure configurations to
              protect sensitive business data.
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
          <span className="highlight">Web and Mobile Application</span> and how
          we address them:
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

      {/* service stand out */}
      <ServiceCards />

      <ConsultationForm />

      <Footer />
    </>
  );
}
