import "../css/Honors.css";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
const logosPerSlide = 20;


const logos = [
  '/Honor_logos/dell.png', '/Honor_logos/mic.png', '/Honor_logos/google.png', '/Honor_logos/sony.png', '/Honor_logos/zoho.png',
  '/Honor_logos/fastmail.png', '/Honor_logos/bugcrowd.png', '/Honor_logos/sap.png', '/Honor_logos/invision.png', '/Honor_logos/issuu.png',
  '/Honor_logos/netgear.png', '/Honor_logos/apple.png', '/Honor_logos/wu.png', '/Honor_logos/erasmus.png', '/Honor_logos/who.png',
  '/Honor_logos/NCIIPC.png', '/Honor_logos/blackberry.png', '/Honor_logos/24sessions.png', '/Honor_logos/geniebelt.png', '/Honor_logos/hp.png',
  '/Honor_logos/isc2.png', '/Honor_logos/mcafee.png', '/Honor_logos/sophos.png', '/Honor_logos/Zivame.jpg', '/Honor_logos/nasa.jpg',
  '/Honor_logos/Arpa.jpg', '/Honor_logos/sheffield.jpeg', '/Honor_logos/chillforce.jpg', '/Honor_logos/knaw.png', '/Honor_logos/deltion.png',
  '/Honor_logos/Telekom.jpg', '/Honor_logos/basf.jpg', '/Honor_logos/Protecht.jpg', '/Honor_logos/Indian government.png', '/Honor_logos/nokia.jpg',
  '/Honor_logos/bayer.jpg', '/Honor_logos/htc.jpg', '/Honor_logos/inflectra.png', '/Honor_logos/bbc.png', '/Honor_logos/Wageningen.jpeg',
  '/Honor_logos/hackerrank.png', '/Honor_logos/mediatek.jpg', '/Honor_logos/codechef.jpg', '/Honor_logos/Bournemouth.jpg', '/Honor_logos/hackerearth.png',
  '/Honor_logos/nestforms.png', '/Honor_logos/cyfe.jpg', '/Honor_logos/dutch.jpg', '/Honor_logos/avans.png', '/Honor_logos/Iom.png',
  '/Honor_logos/plantart.png', '/Honor_logos/scottish-gov.png', '/Honor_logos/Euro-union.jpg', '/Honor_logos/mfiles.jpg', '/Honor_logos/Lenovo.png',
  '/Honor_logos/comodo.jpeg', '/Honor_logos/Transloadit.jpg', '/Honor_logos/techworm.jpg', '/Honor_logos/chalk.jpg',  '/Honor_logos/oasys.png'
  // '/Honor_logos/Telekom.jpg', '/Honor_logos/basf.jpg', '/Honor_logos/chalk.png', '/Honor_logos/chalk.png', '/Honor_logos/chalk.png'
];

export default function Honors() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Split logos into slides
  const slides = [];
  for (let i = 0; i < logos.length; i += logosPerSlide) {
    slides.push(logos.slice(i, i + logosPerSlide));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="Award-Container-section">
      <h1>Honors and Recognitions</h1>
   <p>Honored by Top Companies for Our Commitment to Innovation and Quality</p>
    <div className="slideshow-container-honors">
      <motion.div
        className="slide-honors"
        key={currentSlide}
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '-100%' }}
        transition={{ duration: 0.5 }}
      >
  
        <div className="logos-honors">
   
          {slides[currentSlide].map((logo, index) => (
            <div className="logo-item-honors" key={index}>
              <img src={logo} alt={`Logo ${index + 1}`} className="logo-image-honors" />
            </div>
          ))}
        </div>
      </motion.div>
      <button className="button-honors prev-honors" onClick={prevSlide}><GrPrevious size={30} className="arrow-honors"/></button>
      <button className="button-honors next-honors" onClick={nextSlide}><GrNext size={30} className="arrow-honors"/></button>
    </div>
    </div>
  );
}

      