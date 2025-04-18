import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./css/HeroSection.css";

export default function HeroSection({ toggleForm }) {
  const words = ["Cybersecurity...", "Scanning...", "Vulnerabilities..."];
  const imgWords = ["1.Discover & Crawl", "2.Assess", "3.Detect Risk", "4.Resolve", "5.Continuously secure"];
  const images = [
    "./assets/scan-gif-1.gif",
    "./assets/scan-gif-2.gif",
    "./assets/scan-gif-3.gif",
    "./assets/scan-gif-4.gif",
    "./assets/scan-gif-5.gif"
  ];

  // Text typing animation states
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Image scanning animation states
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scanningLine, setScanningLine] = useState(true);
  const [progressLoader, setProgressLoader] = useState(true);

  // Typing animation effect
  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentWordIndex];
      const textLength = displayedText.length;

      if (!isDeleting && textLength === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 1000);
        return;
      }

      if (isDeleting && textLength === 0) {
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        return;
      }

      const nextText = isDeleting
        ? currentWord.slice(0, textLength - 1)
        : currentWord.slice(0, textLength + 1);

      setDisplayedText(nextText);
      setTypingSpeed(isDeleting ? 100 : 150);
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, typingSpeed, currentWordIndex, words]);

  // Image scanning effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % imgWords.length;

        if (newIndex === 4) {
          setScanningLine(false);
          setProgressLoader(false);
        } else {
          setScanningLine(true);
          setProgressLoader(true);
        }

        return newIndex;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [imgWords.length]);

  return (
    <ul className="home-ul">
      {/* Content section */}
      <motion.li
        className="banner-intro"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <PromotionBadge />
        <HeadingWithTypingEffect displayedText={displayedText} />
        <DescriptionText />
        <CallToActionButton toggleForm={toggleForm} />
      </motion.li>

      {/* Animation section */}
      <li className="anm-img">
        <ScanAnimationBox 
          currentIndex={currentIndex} 
          imgWords={imgWords} 
          images={images} 
          scanningLine={scanningLine} 
          progressLoader={progressLoader} 
        />
      </li>
    </ul>
  );
}

// Sub-components
function PromotionBadge() {
  return (
    <motion.p
      className="discount"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
    >
      <b>20%</b> Discount On VAPT Services for New Clients!
    </motion.p>
  );
}

function HeadingWithTypingEffect({ displayedText }) {
  return (
    <motion.h1
      className="typing-anm"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
    >
      Leading the Next Era in <br />
      <div>
        <h3 className="highlight">
          {displayedText}
          <span className="span-highlight">|</span>
        </h3>
      </div>
    </motion.h1>
  );
}

function DescriptionText() {
  return (
    <>
      <br />
      <motion.p
        className="banner-p"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
      >
        Our team of cybersecurity experts utilizes advanced methodologies
        to assess
        <br />
        and protect your digital assets, ensuring top-tier security
        against potential threats. Explore our <br />
        range of services, including VAPT, security testing, and more.
      </motion.p>
      <br />
    </>
  );
}

function CallToActionButton({ toggleForm }) {
  return (
    <motion.button
      className="gs-btn"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleForm}
    >
      Get Started
    </motion.button>
  );
}

function ScanAnimationBox({ currentIndex, imgWords, images, scanningLine, progressLoader }) {
  return (
    <motion.div
      className="img-animation"
      animate={{ y: [0, -5, 0] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    >
      <div className="border-container">
        {/* Scanning Line */}
        <motion.div
          className={scanningLine ? "scanning-line" : "hideScanningLine"}
          initial={{ y: -100 }}
          animate={scanningLine ? { y: 100 } : {}}
          transition={{
            delay: 1,
            duration: 1.5,
            repeat: scanningLine ? Infinity : 0,
            repeatType: "reverse",
            ease: "linear",
          }}
        />

        <div className="neon-corner top-left animate__animated animate__fadeInTopLeft animate__slow"></div>
        <div className="neon-corner top-right animate__animated animate__fadeInTopRight animate__slow"></div>
        <div className="neon-corner bottom-left animate__animated animate__fadeInBottomLeft animate__slow"></div>
        <div className="neon-corner bottom-right animate__animated animate__fadeInBottomRight animate__slow"></div>

        <AnimatedScanContainer 
          currentIndex={currentIndex} 
          images={images} 
          imgWords={imgWords} 
          progressLoader={progressLoader} 
        />
      </div>
    </motion.div>
  );
}

function AnimatedScanContainer({ currentIndex, images, imgWords, progressLoader }) {
  return (
    <div className="container">
      {/* Nested Animation Boxes */}
      <motion.div
        className="box box1"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          className="box box2"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="box box3"
            initial={{ y: -150 }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              className="scan-img"
              src={images[currentIndex]}
              alt={imgWords[currentIndex]}
            />
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Progress Information */}
      <ul className="helo">
        <li>{imgWords[currentIndex]}</li>
        <li>
          <div
            className={
              progressLoader ? "loader-container" : "stopProgressLoader"
            }
          ></div>
        </li>
      </ul>
    </div>
  );
}