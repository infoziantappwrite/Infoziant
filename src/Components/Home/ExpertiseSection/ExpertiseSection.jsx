import React, { useState } from "react";
import { ChevronLeft, ChevronRight, CheckCircle, CirclePlay, Star, Award, FileBadge2, Sparkles, Trophy } from "lucide-react";
import cybersecurity from "./cybersecurity.png"
import webandapp from "./webandapp.png"
import aiml from "./aiml.png";
import testing from "./testing.png";
import codechef from "./train.png";
import ctc from "./image.png";

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



const ExpertiseSection = () => {
    const [selected, setSelected] = useState(0);
    const isOne = 0;

    const prev = () => setSelected((prev) => (prev > 0 ? prev - 1 : slides.length - 1));
    const next = () => setSelected((prev) => (prev + 1) % slides.length);

    return (
        <section className="bg-white py-10 px-6 md:px-12">
            {/* Header */}
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-500 text-transparent bg-clip-text">
                    Our Expertise
                </h2>
                <div className="w-16 h-1 mx-auto bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-500 rounded mt-2 mb-4" />
                <p className="text-lg text-gray-600">Scaling Digital Growth Across Sectors</p>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Left Sidebar */}
                <div className="md:w-1/3 relative">
                    {/* Vertical Line (excluding below last item) */}
                    <div
                        className="absolute left-4 top-5 w-0.5 bg-gradient-to-b from-cyan-400 via-teal-400 to-blue-500 z-0"
                        style={{ height: `${slides.length * 72 - 66}px` }} // assuming ~72px/item, minus half item height
                    />

                    <div className="space-y-4 relative z-10">
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                onClick={() => setSelected(index)}
                                className={`relative cursor-pointer transition-all p-3 pl-8 rounded-md border-l-4 ${selected === index
                                    ? "bg-gradient-to-r from-cyan-100 via-teal-100 to-blue-100 border-blue-500 text-blue-600 font-semibold"
                                    : "bg-gray-50 border-transparent text-gray-800 hover:bg-gray-100"
                                    }`}
                            >
                                {/* Circle Indicator */}
                                <div className="absolute left-2 top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full bg-white border-2 border-blue-500 z-20" />

                                <div className="flex items-center gap-2">
                                    <span className="text-lg font-bold">{index + 1}.</span>
                                    <h3 className="text-base">{slide.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="md:w-2/3 flex flex-col items-center rounded-sm gap-4">
                    <div className="relative w-full max-h-[100%]">
                        <div className="p-0.5 rounded-xl bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500 shadow-2xl">
                            <div className="bg-white rounded-xl ">
                                <div className="flex flex-col md:flex-row items-center justify-center bg-white rounded-xl overflow-hidden max-h-auto">


                                    <div className="w-full md:w-1/2 flex items-center justify-center bg-white h-[300px] lg:h-[400px] p-4">
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
                                                                                        className="flex flex-col items-center text-center bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-500 text-white px-4 py-5 rounded-xl shadow-md text-sm font-semibold transition-transform duration-300 hover:scale-105"
                                                                                    >
                                                                                        <Trophy size={28} className="text-white mb-2 drop-shadow-sm" />
                                                                                        <span>{point}</span>
                                                                                    </div>
                                                                                ))}
                                                                            </div>



                                                                        </div>

                                                                    </div>

                                                                    <div className="text-center pb-4">
                                                                        {slides[selected].tools && (
                                                                            <ul className="flex flex-wrap justify-center gap-4 mt-4">
                                                                                {slides[selected].tools.map((tool, i) => (
                                                                                    <li
                                                                                        key={i}
                                                                                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 text-white font-semibold text-md  shadow-lg hover:scale-105 transition-transform duration-300"
                                                                                    >
                                                                                        {selected === 0 ? <Award size={24} className="text-white drop-shadow-sm" /> : <Sparkles size={24} className="text-white drop-shadow-sm" />}

                                                                                        {tool}
                                                                                    </li>
                                                                                ))}
                                                                            </ul>
                                                                        )}
                                                                    </div>

                                                                   
                                                                </div>

                                                            </div>
                                                        </div>



                                                                        

                                                        {/* Arrow Navigation */}
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

            </div>

        </section>
    );
};

export default ExpertiseSection;
