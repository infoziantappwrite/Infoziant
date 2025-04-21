


import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import "../css/Services.css";

const serviceItems = [
    {
        id: 1,
        title: "Real-Time Dashboards and Analytics",
        image: "/assets/scroll-1.png",
        content:[
           "A user-friendly dashboard delivers real-time security insights, highlighting vulnerabilities and trends. Actionable analytics help track remediation efforts and prioritize critical fixes."],
        backgroundColor: "#85EBF9"
    },
    {
        id: 2,
        title: " Real-time Vulnerability Remediation",
        image: "/assets/scroll-2.jfif",
        content: [
           "Detects vulnerabilities in real-time and triggers instant alerts for critical issues. Provides detailed remediation guidance, enabling developers to fix flaws swiftly and efficiently." ],
        backgroundColor: "#FFCE83"
    },
    {
        id: 3,
        title: "Comprehensive Reporting ",
        image: "/assets/scroll-3.jfif",
        content: [
            "Generate detailed reports that summarize vulnerabilities, risk levels, and remediation actions. Stay aligned with industry standards like OWASP Top 10 and SANS Top 25, ensuring easy regulatory compliance."  ],
        backgroundColor: "#B8FE97"
    },
    {
        id: 4,
        title: "Advanced Vulnerability Detection",
        image: "/assets/scroll-5.jfif",
        content: [
            "The tool detects vulnerabilities, from simple misconfigurations to complex logic flaws, across Web 2.0 and Web 3.0 platforms. It automates checks for OWASP Top 10 vulnerabilities, ensuring strong security."],
        backgroundColor: "#FFC300"
    },
    {
        id: 5,
        title: "Scalability and Customizability ",
        image: "/assets/scroll-4.jfif",
        content: [
            "Infoziant DAST features a modular architecture, enabling users to customize scans for their application structure. It offers scalable performance, making it suitable for organizations of all sizes." ],
        backgroundColor: "#77E9F8"
    },
    
];

export default function Services() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isInView, setIsInView] = useState(false);
    const servicesRef = useRef(null);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex < serviceItems.length - 1 ? prevIndex + 1 : 0));
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : serviceItems.length - 1));
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
    const fontSize = window.innerWidth <= 768 ? '25px' : '50px';

    return (
        <>
            <motion.section
                ref={servicesRef}
                className="services-section"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
                <p className="highlight" style={{ fontSize: fontSize }}>iDAST</p>
                <h1>Empowering <span className="highlight">Smart Contract Security</span> with Cutting-Edge Features</h1>
                <p className="services-p">Our AI-powered tool is packed with a diverse set of robust features designed to cater to the unique requirements of Smart Contract Vulnerability Detection across organizations of all sizes in the web3 ecosystem.</p>
                <br />
                <div className="services-container">
                    <button className="arrow-btn left-btn" onClick={handlePrev}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>

                    <div className="content-wrapper">
                        <img
                            className="slide-img"
                            src={serviceItems[currentIndex].image}
                            alt={serviceItems[currentIndex].title}
                        />
                        <div className="vertical-line-service">
                            <span
                                className="item-id-servive"
                                style={{
                                    backgroundColor: serviceItems[currentIndex].backgroundColor,
                                }}
                            >
                                {serviceItems[currentIndex].id}
                            </span>
                        </div>

                        <motion.div
                            className="service-text"
                            key={serviceItems[currentIndex].id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                        >
                            <h3>{serviceItems[currentIndex].title}</h3>
                            <ul>
                                {serviceItems[currentIndex].content.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    <button className="arrow-btn right-btn" onClick={handleNext}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>
            </motion.section>
        </>
    );
}