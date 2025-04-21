import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import './Product.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import videoimage from "../../assests/Images/videoimg.png";
import ThirdSection from "./CardSlider";
import FifthSection from "./FifthSection";
import SixthSection from './SixthSection';

import FirstSection from "./FirstSection"
import Loader from '../Loader';


const Product = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };
  const handleCloseVideo = () => {
    setIsVideoPlaying(false);
  };

  return (
    <>
    <Loader />
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Infoziant DAST: Elevating Your Web Application Security with real-time vulnerability detection and comprehensive assessments." />
        <meta name="keywords" content="Infoziant, DAST, security, web application, vulnerability detection, cyber threats" />
        <meta name="author" content="Your Name" />
        <meta property="og:title" content="Infoziant DAST: Elevating Your Web Application Security" />
        <meta property="og:description" content="Stay resilient and secure against evolving cyber threats with Infoziant DAST." />
        <meta property="og:image" content="URL_to_your_image" />
        <meta property="og:url" content="URL_of_your_product_page" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Infoziant DAST: Elevating Your Web Application Security" />
        <meta name="twitter:description" content="Stay resilient and secure against evolving cyber threats with Infoziant DAST." />
        <meta name="twitter:image" content="URL_to_your_image" />
        <title>Infoziant DAST</title>
      </Helmet>
      <div className="product-page">
        
        <FirstSection/>
        <section className="second-section">
          <h1>Infoziant DAST Tool</h1>

          <div className="you-tube-video">
            <div className="video-thumbnail" onClick={handlePlayVideo}>
              <img
                src={videoimage}
                alt="Infoziant DAST Tool"
                className="thumbnail-image"
              />
              <button className="play-button">
                <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="48" fill="url(#grad1)" style={{ stroke: 'none' }} />
                  <polygon points="40,30 70,50 40,70" fill="white" />
                  <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#15F5BA', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#0066ff', stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                </svg>
              </button>
            </div>
          </div>
          {isVideoPlaying && (
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/xK-QUTobeeg?autoplay=1"
                title="Infoziant DAST Tool"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <button className="close-button" onClick={handleCloseVideo}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#15F5BA', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#0066ff', stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                  <text x="12" y="12" fontSize="24" fontWeight="bolder" fill="url(#grad1)" textAnchor="middle" alignmentBaseline="middle">✕</text>
                </svg>
              </button>
            </div>
          )}
        </section>

         <ThirdSection />
        <FifthSection />
       <SixthSection /> 
        
      
      </div>
    </>
  );
};

export default Product;
