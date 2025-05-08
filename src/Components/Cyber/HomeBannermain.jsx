import { motion } from "framer-motion";
import "../css/HomeBanner.css";
import { TrendingUp, Code2, Settings, BugPlay, ShieldCheck, ArrowDown, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import img1 from "./scan/Banner1.gif";
import img2 from "./scan/Banner21.gif";
import img3 from "./scan/Banners.gif";
import img4 from "./scan/Banner6.gif";
import img6 from "../../assests/Images/Cyber/ai-scan.png";
import img7 from "../../assests/Images/Cyber/seamless_integrations.png";
import img8 from "../../assests/Images/Cyber/vulnerability_detectors.png";
import img9 from "../../assests/Images/Cyber/audit_report.png";
import lock from "./scan/icons8-lock-14.png"




export default function HomeBanner() {

  const { ref: ref5, inView: inView5 } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };


  const words = ["Digital Solutions...", "Digital Solutions...", "Digital Solutions..."];
  const imgWords = ["1.Discover & Crawl", "2.Assess", "3.Detect Risk", "4.Resolve"];
  const steps = [
    { title: "Develop", icon: <Code2 className="w-5 h-5 text-white" /> },
    { title: "Automate", icon: <Settings className="w-5 h-5 text-white" /> },
    { title: "Test", icon: <BugPlay className="w-5 h-5 text-white" /> },
    { title: "Secure", icon: <ShieldCheck className="w-5 h-5 text-white" /> },
  ];
  const images = [img1, img2, img3, img4];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [scanningLine, setScanningLine] = useState(true);
  const [progressLoader, setProgressLoader] = useState(true);

  const [visibleSteps, setVisibleSteps] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (visibleSteps < steps.length) {
        setVisibleSteps((prev) => prev + 1); // Show next step
      } else {
        // Wait for 3 seconds, then reset to start over
        setTimeout(() => setVisibleSteps(1), 3000);
      }
    }, 1000); // 1 second delay for each step

    return () => clearTimeout(timer);
  }, [visibleSteps]);







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
  }, [displayedText, isDeleting, typingSpeed, currentWordIndex]);

  //  image scanning
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
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="cybarhomeBanner">

      <section className="homeBanner-main">

        <ul className="home-ul">
          {/* home banner intro */}
          <motion.li
            className="banner-intro"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >


            <motion.h1
              className="typing-anm"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
            >
              Transforming Technology <br />
              <span className="stroke-text text-transparent block mt-4">
                with Next-Gen
              </span>
              <div>
                <h3 className="highlight">
                  {displayedText}
                  <span className="span-highlight">|</span>
                </h3>
              </div>
            </motion.h1>
            <br />
            <div className="max-w-2xl w-full text-center md:text-left">
              <div
                className="mt-4 flex items-center justify-center md:justify-start gap-2 text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 transition-all duration-700 delay-100"
              >
                <span className="capitalize flex items-center gap-1 flex-wrap">
                  We Deliver Cyber{" "}
                  <span className="whitespace-nowrap flex items-center">
                    Pr
                    <img
                      src={lock}
                      alt="lock icon"
                      className="inline-block w-3 h-4 sm:w-4 sm:h-5"
                      style={{ marginTop: "-2px" }}
                    />
                    <span className="text-md" style={{ textTransform: "none" }}>
      tection
    </span>
                  </span>{" "}
                  at Every Step
                </span>

                <TrendingUp className="w-6 h-6 text-white" />
              </div>
            </div>

            <br />
            <div className="mt-6 sm:mt-8 flex flex-wrap justify-center md:justify-start items-center gap-3">
              {steps.slice(0, visibleSteps).map((step, index) => (
                <div key={index} className="flex items-center gap-2 animate-fade-in">
                  <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-600 rounded-lg text-white shadow-lg transition-all duration-500 w-fit">
                    {step.icon}
                    <span className="text-sm sm:text-base font-medium">{step.title}</span>
                  </div>
                  {index < visibleSteps - 1 && (
                    <ArrowRight className="w-4 h-4 text-white" />
                  )}
                </div>
              ))}
            </div>

          </motion.li>

          <li className="anm-img">
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
                  className={
                    scanningLine ? "scanning-line" : "hideScanningLine"
                  }
                  // className="scanning-line"
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

                <div className="container">
                  {/* First Box */}
                  <motion.div
                    className="box box1"
                    initial={{ y: -50 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.5 }}
                  >
                    {/* Second Box */}
                    <motion.div
                      className="box box2"
                      initial={{ y: -100 }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.8 }}
                    >
                      {/* Third Box */}
                      <motion.div
                        className="box box3"
                        initial={{ y: -150 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1 }}
                      >
                        {/* Animated Text */}
                        <img
                          className="scan-img"
                          src={images[currentIndex]}
                          alt={imgWords[currentIndex]}
                        />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                  {/* progress */}
                  <ul className="helo">

                    <li>
                      <div
                        className={
                          progressLoader
                            ? "loader-container"
                            : "stopProgressLoader"
                        }
                      >

                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </li>
          {/* image animation ends */}
        </ul>
        {/* functionalities starts */}
        <ul className="func" ref={ref5}>
          <motion.li
            initial="hidden"
            animate={inView5 ? "visible" : "hidden"}
            variants={itemVariants}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <img src={img6} alt="AI" className="func-img" /><br />
            <h3>AI Powered Scanning</h3>
          </motion.li>

          <motion.li
            initial="hidden"
            animate={inView5 ? "visible" : "hidden"}
            variants={itemVariants}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <img src={img7} alt="Seamless Integrations" className="func-img" /><br />
            <h3>Seamless Integrations</h3>
          </motion.li>

          <motion.li
            initial="hidden"
            animate={inView5 ? "visible" : "hidden"}
            variants={itemVariants}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <img src={img8} alt="274+" className="func-img" /><br />
            <h3>274+ Vulnerability Detectors</h3>
          </motion.li>

          <motion.li
            initial="hidden"
            animate={inView5 ? "visible" : "hidden"}
            variants={itemVariants}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <img src={img9} alt="GAR" className="func-img" /><br />
            <h3>Generate Audit Reports</h3>
          </motion.li>
        </ul>
        {/* functionalities ends */}
      </section>






    </div>
  );
}
