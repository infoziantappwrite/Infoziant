import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Modal from 'react-modal';
import "./css/Portfolio.css";

const Portfolio = [
    { 
        image: "./assets/case-study-1.png", 
        title: 'Server/Application Security', 
        subtitle: 'Web and Mobile Application Security', 
        description: 'Year around Penetration Testing and Vulnerability Assessment of applications & Root cause analysis. INFOZIANT Security Services saved 12.7 Million USD. Black box, White box and grey box security assessment using automated testing tools and manual verification​.​',
        points: ['4 years under INFOZIANT Security Protection', '23 Application Tested', '3440 Vulnerabilities Found', '1403 Critical Vulnerabilities tested, Exploited and Fixed', 'Zero day protection and Vulnerability patch for all the applications'] 
    },
    { 
        image: "./assets/case-study-2.png", 
        title: 'Infrastructure & Application', 
        subtitle: 'Infrastructure, Malware and AI based security Monitoring​', 
        description: 'INFOZIANT Security Services saved 648,000 USD a year due to robust offshore managed security services.',
        points: ['1 Year Under INFOZIANT Security Protection', '1034 Incidents Analyzed', '630 Attack Metrics prevented.', 'Daily Reports outlining critical malware attacks and remediation.', 'Entire SOC setup is made and prevention policies with scripts are written on demand.'] 
    },
    { 
        image: "./assets/case-study-3.png", 
        title: 'IOT /Application Security', 
        subtitle: 'IOT Device Security, Server Application Security', 
        description: 'Reputation of Government devices protected - As 14 remote code executions on IOT devices were prevented.',
        points: [ "2 Years under INFOZIANT Security Protection",
            "8 Applications and 3 IOT Devices protected",
            "The devices were deployed in 8 states across 190 districts",
            "34 Root access exploits were detected",
            "Quick setup of the team within 8 days"] 
    },
    { 
        image: "./assets/case-study-4.png", 
        title: 'VAPT', 
        subtitle: 'Educational Portal Security Assessment', 
        description: 'Year around Penetration Testing and Vulnerability Assessment of web applications & Mobile educational portal.',
        points: ['1 year under INFOZIANT Security Protection','8 Web Application Portals Tested','145 Vulnerabilities Found','93 Critical Vulnerabilities tested Exploited and Fixed.','The testing report made them compliant with PCI DSS.']
    },
    { 
        image: "./assets/case-study-5.png", 
        title: 'VAPT', 
        subtitle: 'Web and Mobile Application Security', 
        description: 'Web application Portals and Mobile application, for their tobacco application.',
        points: ['6 months under Infoziant Security Protection', 'Multiple Web Application Portals and mobile application were tested','130 Vulnerabilities Found','32 Critical Vulnerabilities tested, Exploited and Fixed'] 
    },
];


Modal.setAppElement('#root'); // Set app element for accessibility

const CardSlider = () => {
    const [countState, setCountState] = useState(3);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentCard, setCurrentCard] = useState(null);

    const updateCountState = () => {
        const width = window.innerWidth;
        setCountState(width <= 768 ? 1 : width <= 1024 ? 2 : 3);
    };

    useEffect(() => {
        updateCountState();
        window.addEventListener('resize', updateCountState);
        return () => window.removeEventListener('resize', updateCountState);
    }, []);

    const openModal = (card) => {
        setCurrentCard(card);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentCard(null);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: countState,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <section className="portfolio-slider-section">
            <p className="portfolio">Portfolio</p>
            <h1 className="portfolio-title">Our Latest <span>Case Studies</span></h1>
            <Slider {...settings}>
                {Portfolio.map((card, index) => (
                    <div key={index} className="portfolio-card">
                        <img src={card.image} alt={card.subtitle} className="portfolio-card-image" />
                        <div className="portfolio-card-overlay">
                            <div className="portfolio-div1">
                                <p className="portfolio-card-title">{card.title}</p> 
                            </div>
                            <p className="portfolio-card-subtitle">{card.subtitle}</p>
                            <div className="portfolio-card-arrow" onClick={() => openModal(card)}>→</div>
                        </div>
                    </div>
                ))}
            </Slider>

            <Modal
    isOpen={isModalOpen}
    onRequestClose={closeModal}
    className="modal"
    overlayClassName="overlay"
>
    {currentCard && (
        <div className="modal-content">
            <img src={currentCard.image} alt={currentCard.subtitle} className="modal-image" />
            <div className="modal-text">
               
                <h3 className="popupbox-card-subtitle">{currentCard.subtitle}</h3>
                <p>{currentCard.description}</p>
                <ul>
                    {currentCard.points.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>
            </div>
            <div className="close-int-modal">
            <button className="modal-close" onClick={closeModal}>×</button>
            </div>
        </div>
    )}
</Modal>


        </section>
    );
};

const SampleNextArrow = ({ className, style, onClick }) => (
    <div
        className={className}
        style={{ ...style, display: 'block', background: '#15F5BA', borderRadius: '50%' }}
        onClick={onClick}
    />
);

const SamplePrevArrow = ({ className, style, onClick }) => (
    <div
        className={className}
        style={{ ...style, display: 'block', background: '#15F5BA', borderRadius: '50%' }}
        onClick={onClick}
    />
);

export default CardSlider;

