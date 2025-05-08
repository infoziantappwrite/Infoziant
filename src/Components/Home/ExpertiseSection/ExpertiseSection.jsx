import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, CheckCircle, Laptop, Cpu, Award, Repeat, Sparkles, Trophy, Users, Globe, FileText, Banknote, Briefcase, Building2 } from "lucide-react";
import cybersecurity from "./cybersecurity.png"
import webandapp from "./webandapp.png"
import aiml from "./aiml.png";
import testing from "./testing.png";
import codechef from "./train.png";
import ctc from "./image.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const slides = [
    {
        title: "Cybersecurity Services",
        image: cybersecurity,
        keyHighlights: [
            "Vulnerability Assessments & Pen-Testing",
            "24×7 Monitoring & Incident Response",
            "Compliance (ISO 27001, GDPR)",
            "Reliable Audit Reports"
        ],
        achievements: [
            "$12.7 M Saved for an Insurance provider",
            "81+ Rewards and Recognition"
        ],
        tools: [
            "Appreciated by US Environmental Protection Agency",
            "Appreciated by Bureau of Indian Affairs"
        ],
        one: [
            "Appreciated by US Environmental Protection Agency",
            "Appreciated by Bureau of Indian Affairs"
        ]
    },
    {
        title: "Web & App Development",
        image: webandapp,
        keyHighlights: [
            "Responsive front-ends & API-first back-ends",
            "React Native & Flutter mobile apps",
            "Python services & scalable REST APIs",
            "Secure CMS & e-commerce portals"
        ],
        achievements: [
            "40+ Happy Clients",
            "70+ Web & Mobile Apps Delivered",
        ],
        tools: [
            "Highly skilled Developers",
            "Zero Defect Policy"
        ]

    },
    {
        title: "AI & Machine Learning",
        image: aiml,
        keyHighlights: [
            "GenAI: Tailored generative-AI solutions",
            "LLM Testing & Validation",
            "Computer Vision & NLP Chatbots",
            "AI Automation & Prediction Engines"
        ],
        achievements: [
            "50+ AI solutions deployed globally",
            "100+ LLMs tested & validated"
        ],
        tools: [
            "Expertise beyond measure",
            "Transformative AI Solutions"
        ]
    },
    {
        title: "Testing & Automation",
        image: testing,
        keyHighlights: [
            "Automation: Web, mobile, desktop & VR/AR",
            "Manual bug hunts beyond scripts",
            "Performance & Security Testing",
            "Specialized in e-learning & game testing"
        ],
        achievements: [
            "400+ Successful Projects",
            "650+ Apps Automated"
        ],
        tools: [
            "Zero Flaky Tests",
            "Accelerate Time to Market"
        ]
    },
    {
        title: "CodeChef Training",
        image: codechef,
        keyHighlights: [
            "Weekly Global Hackathons",
            "AI Feedback & Tutor Videos",
            "Mentorship & Walkthroughs",
            "Certificates & Leaderboards"
        ],
        achievements: [
            "10M+ Users",
            "150+ Countries"
        ],
        tools: [
            "In-demand programming languages",
            "Gain practical, job-ready skills."
        ]
    },
    {
        title: "Campus-to-Corporate Services",
        image: ctc,
        keyHighlights: [
            "Placement Drives & Internships",
            "Centers of Excellence in AI & Cybersec",
            "Soft Skills & Technical Training",
            "Industry-Academic Tie-ups"
        ],
        achievements: [
            "37+ Institutions",
            "7,510+ Students placed"
        ],
        tools: [
            "Companies offering CTCs up to ₹1.02 Cr",
            "18000+ Happy Students"
        ]
    }
];
const getAchievementIcon = (text) => {
    if (text.includes("Users")) return <Users size={28} className="text-white mb-2 drop-shadow-sm" />;
    if (text.includes("Countries")) return <Globe size={28} className="text-white mb-2 drop-shadow-sm" />;
    if (text.includes("Clients")) return <Briefcase size={28} className="text-white mb-2 drop-shadow-sm" />;
    if (text.includes("Students")) return <Users size={28} className="text-white mb-2 drop-shadow-sm" />;
    if (text.includes("Institutions")) return <Building2 size={28} className="text-white mb-2 drop-shadow-sm" />;
    if (text.includes("Projects")) return <Award size={28} className="text-white mb-2 drop-shadow-sm" />;
    if (text.includes("Insurance")) return <Banknote size={28} className="text-white mb-2 drop-shadow-sm" />;
    if (text.includes("Web")) return <Laptop size={28} className="text-white mb-2 drop-shadow-sm" />;
    if (text.includes("deployed")) return <Cpu size={28} className="text-white mb-2 drop-shadow-sm" />;
    if (text.includes("LLMs")) return <FileText size={28} className="text-white mb-2 drop-shadow-sm" />;
    if (text.includes("Automated")) return <Repeat size={28} className="text-white mb-2 drop-shadow-sm" />;
    return <Trophy size={28} className="text-white mb-2 drop-shadow-sm" />;
};
const PrevArrow = ({ onClick }) => (
    <div
        className="absolute left-2 top-1/3 -translate-y-1/2 z-10 cursor-pointer bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-500 p-2 rounded-full shadow-md hover:scale-110 transition"
        onClick={onClick}
    >
        <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
    </div>
);

const NextArrow = ({ onClick }) => (
    <div
        className="absolute right-2 top-1/3 -translate-y-1/2 z-10 cursor-pointer bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-500 p-2 rounded-full shadow-md hover:scale-110 transition"
        onClick={onClick}
    >
        <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
    </div>
);





const ExpertiseSection = () => {
    const [selected, setSelected] = useState(0);


    const prev = () => setSelected((prev) => (prev > 0 ? prev - 1 : slides.length - 1));
    const next = () => setSelected((prev) => (prev + 1) % slides.length);


    return (
        <section id="services-section" className="bg-white py-10 px-6 md:px-12">
            <div className="text-center md:mb-16 mb-4">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-500 text-transparent bg-clip-text">
                OUR CORE SERVICES
                </h2>
                <div className="w-16 h-1 mx-auto bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-500 rounded mt-2 mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Innovative Tech & Business Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Comprehensive tech services to secure, build, test, and scale your business.
          </p>
                {/* <p className="text-lg text-gray-600">Scaling Digital Growth Across Sectors</p> */}
            </div>
            <div className="flex flex-col md:flex-row gap-8 ">
                <div className="md:w-1/3 relative hidden md:block ">
                    <div
                        className="absolute hidden md:block left-4 top-5 w-0.5 bg-gradient-to-b from-cyan-400 via-teal-400 to-blue-500 z-0"
                        style={{ height: `${slides.length * 72 - 66}px` }}
                    />
                    <div className="relative z-10">

                        <div className="flex md:hidden gap-2 justify-center md:mb-4 mb-0">
                            {slides.map((_, index) => (
                                <div
                                    key={index}
                                    onClick={() => setSelected(index)}
                                    className={`w-10 h-10 flex items-center justify-center rounded-full border-2 text-sm font-semibold cursor-pointer transition ${selected === index
                                        ? "bg-blue-500 text-white border-blue-500"
                                        : "bg-white text-gray-700 border-gray-300 hover:bg-blue-100"
                                        }`}
                                >
                                    {index + 1}
                                </div>
                            ))}
                        </div>
                        <div className="space-y-4 hidden md:block">
                            {slides.map((slide, index) => (
                                <div
                                    key={index}
                                    onMouseEnter={() => setSelected(index)}
                                    className={`relative cursor-pointer transition-all p-3 pl-8 rounded-md border-l-4 ${selected === index
                                        ? "bg-gradient-to-r from-cyan-100 via-teal-100 to-blue-100 border-blue-500 text-blue-600 font-semibold"
                                        : "bg-gray-50 border-transparent text-gray-800 hover:bg-gray-100"
                                        }`}
                                >
                                    <div className="absolute left-2 top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full bg-white border-2 border-blue-500 z-20" />
                                    <div className="flex items-center gap-2">
                                        <span className="text-lg font-bold">{index + 1}.</span>
                                        <h3 className="text-base">{slide.title}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
                <div className="md:w-2/3 md:flex flex-col items-center rounded-sm gap-4 hidden">
                    <div className="relative w-full max-h-[100%]">
                        <div className="p-0.5 rounded-xl bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500 shadow-2xl">
                            <div className="bg-white rounded-xl ">
                                <div className="flex flex-col md:flex-row items-center justify-center bg-white rounded-xl overflow-hidden max-h-auto">
                                    <div className="w-full md:w-1/2 flex items-center justify-center bg-white h-[250px] lg:h-[400px] p-4">
                                        <img
                                            src={slides[selected].image}
                                            alt={slides[selected].title}
                                            className="h-[200px] lg:h-[300px] w-auto object-cover rounded-lg"
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2 p-4 md:p-5 overflow-y-auto space-y-4 max-h-[500px]">
                                        <h3 className="text-xl md:text-2xl font-bold text-blue-700">{slides[selected].title}</h3>
                                        <div>
                                            <ul className="space-y-2 pl-2 text-gray-700">
                                                {slides[selected].keyHighlights.map((point, i) => (
                                                    <li key={i} className="flex items-start gap-2">
                                                        <CheckCircle className="text-blue-500 mt-1" size={18} />
                                                        <span>{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center">
                                            {slides[selected].achievements.map((point, i) => (
                                                <div
                                                    key={i}
                                                    className="flex flex-row md:flex-col items-center justify-center text-center bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-500 text-white px-4 py-2 rounded-xl shadow-md text-sm font-semibold transition-transform duration-300 hover:scale-105 space-x-2 md:space-x-0 md:space-y-2"
                                                >
                                                    {getAchievementIcon(point)}
                                                    <span>{point}</span>
                                                </div>

                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center pb-4 hidden md:block">
                                    {slides[selected].tools && (
                                        <ul className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mt-4 px-2">
                                            {slides[selected].tools.map((tool, i) => (
                                                <li
                                                    key={i}
                                                    className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 text-white font-semibold text-sm sm:text-md shadow-lg hover:scale-105 transition-transform duration-300"
                                                >
                                                    {selected === 0 ? (
                                                        <Award size={18} className="text-white drop-shadow-sm sm:size-5" />
                                                    ) : (
                                                        <Sparkles size={18} className="text-white drop-shadow-sm sm:size-5" />
                                                    )}
                                                    {tool}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 mt-4">
                        <button
                            onClick={prev}
                            className="bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-500 text-white p-2 rounded-full hover:scale-105 transition"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <span className="text-sm font-medium text-gray-700">
                            {selected + 1} / {slides.length}
                        </span>
                        <button
                            onClick={next}
                            className="bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-500 text-white p-2 rounded-full hover:scale-105 transition"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
                <div className="md:w-2/3 flex flex-col items-center rounded-sm gap-4 md:hidden no-slick-padding">
                    <div className="relative w-full">
                        <Slider
                            dots={true}
                            infinite={true}
                            speed={500}
                            slidesToShow={1}
                            slidesToScroll={1}
                            arrows={true}
                            nextArrow={<NextArrow />}
                            prevArrow={<PrevArrow />}
                            appendDots={(dots) => (
                                <div className="pb-6">
                                    <ul className="flex justify-center space-x-2">{dots}</ul>
                                </div>
                            )}
                            customPaging={() => (
                                <div className="w-3 h-3 bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-500 rounded-full       group-hover:bg-gradient-to-l group-hover:from-cyan-500 group-hover:via-teal-500 group-hover:to-blue-500 transition" />
                            )}
                        >

                            {slides.map((slide, selected) => (
                                <div key={selected} className="bg-white rounded-xl p-0 m-0">
                                    <div className="bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-500 p-[2px] rounded-xl ">
                                        <div className="bg-white rounded-xl">
                                            <div className="flex flex-col items-center justify-center overflow-hidden p-4">
                                                <div className="w-full flex items-center justify-center h-[250px] lg:h-[400px]">
                                                    <img
                                                        src={slide.image}
                                                        alt={slide.title}
                                                        className="h-[200px] lg:h-[300px] w-auto object-cover rounded-lg"
                                                    />
                                                </div>
                                                <div className="w-full px-0 py-4 space-y-4 max-h-[500px] overflow-y-auto">
                                                    <h3 className="text-xl font-bold text-blue-700">
                                                        {slide.title}
                                                    </h3>
                                                    <ul className="space-y-2 pl-2 text-gray-700">
                                                        {slide.keyHighlights.map((point, i) => (
                                                            <li key={i} className="flex items-start gap-2">
                                                                <CheckCircle
                                                                    className="text-blue-500 mt-1"
                                                                    size={18}
                                                                />
                                                                <span>{point}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center">
                                                        {slide.achievements.map((point, i) => (
                                                            <div
                                                                key={i}
                                                                className="flex flex-row items-center justify-center text-center bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-500 text-white px-4 py-2 rounded-xl shadow-md text-sm font-semibold transition-transform duration-300 hover:scale-105 space-x-2"
                                                            >
                                                                {getAchievementIcon(point)}
                                                                <span>{point}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>


            </div>


        </section>
    );
};

export default ExpertiseSection;
