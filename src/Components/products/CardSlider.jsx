import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import "./CardSlider.scss";
import img1 from "../../assests/productimages/img1.jpg";
import img2 from "../../assests/productimages/img2.jpeg";
import img3 from "../../assests/productimages/img3.jpg";
import img4 from "../../assests/productimages/img4.jpg";
import img5 from "../../assests/productimages/img5.png";
import img6 from "../../assests/productimages/img6.jpg";
import img7 from "../../assests/productimages/img7.png";
import img8 from "../../assests/productimages/img8.jpg";
import img9 from "../../assests/productimages/img9.jpg";

const cardsData = [
    { image: img1, text: 'Real-time Vulnerability Detection' },
    { image: img2, text: 'Interactive Testing' },
    { image: img3, text: 'Runtime Issue Detection' },
    { image: img4, text: 'Comprehensive Vulnerability Reporting' },
    { image: img5, text: 'Modular and Customizable Scanning' },
    { image: img6, text: 'OWASP Top 10 and Industry-standard Coverage' },
    { image: img7, text: 'Automation and Scheduling' },
    { image: img8, text: 'API Security Testing' },
    { image: img9, text: 'Remediation Recommendations' },
];

const CardSlider = () => {
    const [countState, setCountState] = useState(3); // Default to desktop

    // Update countState based on window size
    const updateCountState = () => {
        const width = window.innerWidth;
        if (width <= 768) {
            setCountState(1); // Mobile
        } else if (width <= 1024) {
            setCountState(2); // Tablet
        } else {
            setCountState(3); // Desktop
        }
    };

    // Set event listener on mount and clean up on unmount
    useEffect(() => {
        updateCountState(); // Set initial state
        window.addEventListener('resize', updateCountState);
        return () => {
            window.removeEventListener('resize', updateCountState);
        };
    }, []);

    // Slider settings for customization
    const settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: countState, // Use countState here
        slidesToScroll: 1,
        autoplay: true, // Enable auto-scrolling
        autoplaySpeed: 3000, // Set the speed for auto-scrolling (in milliseconds)
        nextArrow: <SampleNextArrow />, // Custom arrow components
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <section className="slider-section">
            <h1>Infoziant DAST Features</h1>
            <Slider {...settings}>
                {cardsData.map((card, index) => (
                    <div key={index} className="card">
                        <img src={card.image} alt={card.text} className="card-image" />
                        <p className="card-text">{card.text}</p>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

// Custom Next Arrow
const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', background: '', borderRadius: '50%' }}
            onClick={onClick}
        />
    );
};

// Custom Prev Arrow
const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', background: 'black', borderRadius: '50%' }}
            onClick={onClick}
        />
    );
};

export default CardSlider;
