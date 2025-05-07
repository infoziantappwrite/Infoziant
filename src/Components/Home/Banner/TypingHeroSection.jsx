import React, { useEffect, useState } from "react";
import { TrendingUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import cybersecurity from "./cyber.gif"
import webandapp from "./web-development.gif"
import aiml from "../ExpertiseSection/aiml.png";
import testing from "../ExpertiseSection/testing.png";
import codechef from "../ExpertiseSection/train.png";
import ctc from "../ExpertiseSection/image.png";

const contentData = [
    {
        title: "AI & Machine Learning",
        image: aiml,
    },
    {
        title: "Web & App Development",
        image: webandapp,
    },
    {
        title: "Testing & Automation",
        image: testing,
    },
    {
        title: "Cybersecurity Services",
        image: cybersecurity,
    },
    {
        title: "Campus-to-Corporate Services",
        image: ctc,
    },
    {
        title: "CodeChef Training",
        image: codechef,
    },
];

const TypingHeroSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [isAnimating, setIsAnimating] = useState(true);
    const staticText = "igital Solutions...";
    const [typedStaticText, setTypedStaticText] = useState("");
    const [isDeletingStatic, setIsDeletingStatic] = useState(false);



    const title = contentData[currentIndex].title;

    useEffect(() => {
        const typingSpeed = isDeleting ? 80 : 120;
        let timeout;

        if (!isDeleting && displayedText === title) {
            timeout = setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && displayedText === "") {
            timeout = setTimeout(() => {
                setIsDeleting(false);
                setCurrentIndex((prev) => (prev + 1) % contentData.length);
            }, 1000);
        } else {
            timeout = setTimeout(() => {
                const newText = isDeleting
                    ? title.slice(0, displayedText.length - 1)
                    : title.slice(0, displayedText.length + 1);
                setDisplayedText(newText);
            }, typingSpeed);
        }

        return () => clearTimeout(timeout);
    }, [displayedText, isDeleting, title]);



    useEffect(() => {
        setIsAnimating(true);
        const timeout = setTimeout(() => setIsAnimating(false), 100);
        return () => clearTimeout(timeout);
    }, [currentIndex]);

    useEffect(() => {
        const speed = isDeletingStatic ? 80 : 120;
        let timeout;

        if (!isDeletingStatic && typedStaticText === staticText) {
            // Pause before deleting
            timeout = setTimeout(() => setIsDeletingStatic(true), 2000);
        } else if (isDeletingStatic && typedStaticText === "") {
            // Pause before retyping
            timeout = setTimeout(() => setIsDeletingStatic(false), 1000);
        } else {
            // Typing or deleting character
            timeout = setTimeout(() => {
                const nextText = isDeletingStatic
                    ? staticText.slice(0, typedStaticText.length - 1)
                    : staticText.slice(0, typedStaticText.length + 1);
                setTypedStaticText(nextText);
            }, speed);
        }

        return () => clearTimeout(timeout);
    }, [typedStaticText, isDeletingStatic]);


    return (
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-8 max-w-7xl w-full mx-auto py-12">


            <div className="w-full md:w-2/3 text-center md:text-left">
                <h1
                    className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug transition-all duration-700 `}
                >
                    <span className="text-white block">Transforming Technology</span>
                    <span className="stroke-text text-transparent block mt-4">
                        with Next-Gen
                    </span>
                    <span className="bg-gradient-to-r from-cyan-300 via-teal-400 to-blue-500 bg-clip-text text-transparent block mt-4 pb-4">
                        D{typedStaticText}

                    </span>


                </h1>

                <div className="max-w-2xl w-full text-center md:text-left">
                    <div
                        className={`mt-4 flex items-center justify-center md:justify-start gap-2 text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 transition-all duration-700 delay-100`}
                    >
                        <span className="capitalize">We Deliver Impact at Every Step</span>
                        <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                </div>

                <div
                    className={`mt-6 sm:mt-8 transition-all duration-700 delay-200`}
                >
                    <button
                        className="px-5 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-cyan-400 via-teal-500 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300"
                        onClick={() => {
                            const section = document.getElementById("services-section");
                            if (section) section.scrollIntoView({ behavior: "smooth" });
                        }}
                    >
                        Discover More
                    </button>
                </div>
            </div>


            <div className="w-full md:w-1/3 flex flex-col items-center justify-center mt-12 md:mt-0">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] rounded-3xl overflow-hidden shadow-xl"
                    >
                        <img
                            src={contentData[currentIndex].image}
                            alt={title}
                            className="object-cover w-full h-full"
                        />
                    </motion.div>
                </AnimatePresence>

                <h2 className="mt-4 text-lg sm:text-xl md:text-2xl font-semibold text-white">
                    {displayedText}
                    <span className="border-r-2 border-white ml-1 animate-pulse" />
                </h2>
            </div>
        </div>
    );
};

export default TypingHeroSection;
