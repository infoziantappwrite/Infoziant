
// import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import "./css/Services.css";

// const serviceItems = [
//     { id: 1, title: "Vulnerability Assessment & Penetration Testing", image: "./assets/scroll-1.png", content: "We provide vulnerability assessment and penetration testing that includes a deep-dive analysis of your technology architecture to improve component-level security while safeguarding critical data assets.", backgroundColor: "#85EBF9" },
//     { id: 2, title: "Network Infrastructure", image: "./assets/scroll-2.jfif", content: "In today's interconnected world, secure network infrastructure is crucial. Our solutions help identify and address vulnerabilities in network devices, enhancing protection against potential threats. By simulating real-world risks, we fortify your network’s resilience. Using cutting-edge technology and best practices, we ensure your infrastructure is equipped to combat emerging cyber threats.", backgroundColor: "#FFCE83" },
//     { id: 3, title: "Cloud Infrastructure", image: "./assets/scroll-3.jfif", content: "This service takes care of all of that for you through active assessments and monitoring of cloud environments, maintaining API security, and smart testing of various important facets, among others. This way, you can modernize your enterprise’s IT, enjoy smarter workflow, and build an overall solid cloud security roadmap that gives you more control and adaptability to future threats.", backgroundColor: "#B8FE97" },
//     { id: 4, title: "API VAPT", image: "./assets/scroll-4.jfif", content: "API security is essential in today’s digital landscape, as weaknesses can result in data breaches and unauthorized access. Our VAPT services identify potential vulnerabilities early, allowing you to prevent threats and uphold system integrity. We thoroughly test for authentication flaws, sensitive data exposure, and API misuse to ensure compliance with industry standards. With our proactive approach, we help safeguard your APIs and protect your operations from breaches.", backgroundColor: "#77E9F8" },
//     { id: 5, title: "SIEM", image: "./assets/scroll-5.jfif", content: "Maintaining and accelerating your business uptime is interlinked to your Level of Security Incident and Event Management (SIEM) approach. We enable you to monitor your infrastructure, including all systems and applications, to protect against existing and potential threats.", backgroundColor: "#FFC300" },
// ];

// export default function Services() {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [isInView, setIsInView] = useState(false);
//     const servicesRef = useRef(null);

//     const handleScroll = (event) => {
//         if (!isInView) return;

//         if (event.deltaY > 0) {
//             // Scroll down
//             if (currentIndex < serviceItems.length - 1) {
//                 event.preventDefault();
//                 setCurrentIndex(prevIndex => Math.min(prevIndex + 1, serviceItems.length - 1));
//             }
//         } else {
//             // Scroll up
//             if (currentIndex > 0) {
//                 event.preventDefault();
//                 setCurrentIndex(prevIndex => Math.max(prevIndex - 1, 0));
//             }
//         }
//     };

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 setIsInView(entries[0].isIntersecting);
//             },
//             { threshold: 0.7 }
//         );

//         if (servicesRef.current) {
//             observer.observe(servicesRef.current);
//         }

//         return () => {
//             if (servicesRef.current) {
//                 observer.unobserve(servicesRef.current);
//             }
//         };
//     }, []);

//     useEffect(() => {
//         if (isInView) {
//             window.addEventListener("wheel", handleScroll, { passive: false });
//         } else {
//             window.removeEventListener("wheel", handleScroll);
//         }

//         return () => {
//             window.removeEventListener("wheel", handleScroll);
//         };
//     }, [isInView, currentIndex]);

//     return (
//         <>
//             <section
//                 ref={servicesRef}
//                 className="services-section"
//             >
//                 <h1>Empowering <span className="highlight">Smart Contract Security</span> with Cutting-Edge Features</h1>
//                 <p className="services-p">Our AI powered tool is packed with a diverse set of robust features designed to cater the unique requirements of Smart Contract Vulnerability Detection across organizations of all sizes in the web3 ecosystem.</p>
//                 <br />
//                 <div className="services-container">
//                     <motion.img
//                         className="slide-img"
//                         src={serviceItems[currentIndex].image}
//                         alt={serviceItems[currentIndex].title}
//                         initial={{ opacity: 0, scale: 0.9 }} // Initial state for image
//                         animate={{ opacity: 1, scale: 1 }} // Animate to this state when in view
//                         exit={{ opacity: 0, scale: 0.9 }} // Exit state for image
//                         transition={{ duration: 0.5 }}
//                     />

//                     <div className="vertical-line">
//                         <span
//                             className="item-id"
//                             style={{
//                                 backgroundColor: serviceItems[currentIndex].backgroundColor,
//                             }}
//                         >
//                             {serviceItems[currentIndex].id}
//                         </span>
//                     </div>

//                     <motion.div
//                         className="service-text"
//                         key={serviceItems[currentIndex].id}
//                         initial={{ opacity: 0, y: 50 }} // Initial state for text
//                         animate={{ opacity: 1, y: 0 }} // Animate to this state when in view
//                         exit={{ opacity: 0, y: -50 }} // Exit state for text
//                         transition={{ duration: 0.8, ease: "easeInOut" }}
//                     >
//                         <h3>{serviceItems[currentIndex].title}</h3>
//                         <p>{serviceItems[currentIndex].content}</p>
//                     </motion.div>
//                 </div>
//             </section>

//             {/* services mobile view */}
//             <section className="services-section-mobile">
//                 <motion.h1
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.8, ease: "easeInOut" }}
//                     viewport={{ once: false }}
//                 >
//                     Empowering <span className="highlight">Smart Contract Security</span> with Cutting-Edge Features
//                 </motion.h1>

//                 <motion.p
//                     className="services-p"
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
//                     viewport={{ once: false }}
//                 >
//                     Our AI powered tool is packed with a diverse set of robust features designed to cater the unique requirements of Smart Contract Vulnerability Detection across organizations of all sizes in the web3 ecosystem.
//                 </motion.p>

//                 <br />

//                 <ul>
//                     {serviceItems.map((service, index) => (
//                         <motion.li
//                             key={service.id}
//                             className="service-li-m"
//                             initial={{ opacity: 0, scale: 0.8 }} // Initial state for mobile items
//                             whileInView={{ opacity: 1, scale: 1 }} // Animate to this state when in view
//                             transition={{ duration: 0.8, ease: "easeInOut", delay: index * 0.2 }} // Delay for a cascading effect
//                             viewport={{ once: false }}
//                         >
//                             <img className="service-img-m" src={service.image} alt={service.id} />
//                             <br />
//                             <h1>{service.title}</h1>
//                             <p>{service.content}</p>
//                         </motion.li>
//                     ))}
//                 </ul>
//             </section>
//         </>
//     );
// }


import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import "./css/Services.css";


const serviceItems = [
    {
        id: 1,
        title: "Real-Time Dashboards and Analytics",
        image: "./assets/scroll-1.png",
        content:[
           "A user-friendly dashboard delivers real-time security insights, highlighting vulnerabilities and trends. Actionable analytics help track remediation efforts and prioritize critical fixes."],
        backgroundColor: "#85EBF9"
    },
    {
        id: 2,
        title: " Real-time Vulnerability Remediation",
        image: "./assets/scroll-2.jfif",
        content: [
           "Detects vulnerabilities in real-time and triggers instant alerts for critical issues. Provides detailed remediation guidance, enabling developers to fix flaws swiftly and efficiently." ],
        backgroundColor: "#FFCE83"
    },
    {
        id: 3,
        title: "Comprehensive Reporting ",
        image: "./assets/scroll-3.jfif",
        content: [
            "Generate detailed reports that summarize vulnerabilities, risk levels, and remediation actions. Stay aligned with industry standards like OWASP Top 10 and SANS Top 25, ensuring easy regulatory compliance."  ],
        backgroundColor: "#B8FE97"
    },
    {
        id: 4,
        title: "Advanced Vulnerability Detection",
        image: "./assets/scroll-5.jfif",
        content: [
            "The tool detects vulnerabilities, from simple misconfigurations to complex logic flaws, across Web 2.0 and Web 3.0 platforms. It automates checks for OWASP Top 10 vulnerabilities, ensuring strong security."],
        backgroundColor: "#FFC300"
    },
    {
        id: 5,
        title: "Scalability and Customizability ",
        image: "./assets/scroll-4.jfif",
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

    return (
        <>
            <motion.section
                ref={servicesRef}
                className="services-section"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
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