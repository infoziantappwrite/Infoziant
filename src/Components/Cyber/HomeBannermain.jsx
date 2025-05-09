import { motion } from "framer-motion";
import "../css/HomeBanner.css";
import { TrendingUp, Code2, Settings, BugPlay, ShieldCheck, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import img1 from "./scan/Banner1.gif";
import img2 from "./scan/Bannerrobo.gif";
import img3 from "./scan/Bannertest1.gif";
import img4 from "./scan/Banner6.gif";
import img5 from "../../assests/Images/Cyber/scan-gif-2.gif";
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
  const imgWords = ["1.CodeChef", "2.Training & Upskilling", "3.Placement & Internship", "4.Edutech ", "5.Cyber Security"];
  // const steps = [
  //   { title: "Develop", icon: <Code2 className="w-5 h-5 text-white" /> },
  //   { title: "Automate", icon: <Settings className="w-5 h-5 text-white" /> },
  //   { title: "Test", icon: <BugPlay className="w-5 h-5 text-white" /> },
  //   { title: "Secure", icon: <ShieldCheck className="w-5 h-5 text-white" /> },
  // ];
  const images = [img1, img2, img3, img5,img4];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [scanningLine, setScanningLine] = useState(true);
  const [progressLoader, setProgressLoader] = useState(true);









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
              className="typing-anm "
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
            >
              Transforming Technology <br />
              <span className="stroke-text text-transparent block mt-1">
                with Next-Gen
              </span>
              <div>
                <h3 className="highlight text-3xl lg:text-6xl pb-4 mt-2">
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
            {/* <div className="mt-6 sm:mt-8 flex flex-wrap justify-center md:justify-start items-center gap-3">
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
            </div> */}

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
        
      </section>






    </div>
  );
}
