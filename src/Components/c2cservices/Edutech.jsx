import React from 'react';
import Banner from './Banner/Banner';
import Whatweoffer from './Whatweoffer/Whatweoffer';
import edutechImage from '../../assests/Images/edutech/edutech.gif';
import WhatweImage from '../../assests/Images/edutech/whatWedo.jpg';
import { CheckCircle, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import InfoziantJourney from './InfoziantJourney/InfoziantJourney';
import WhatImage from "../../assests/Images/Banner/offer6.png";
import ConsultationFormForCo from '../Pages/ConsultationFormForCo';
import { FaUniversity, FaUserGraduate, FaHandshake, FaSearch } from "react-icons/fa";



const Edutech_Platform = () => {
    const offerHeading = "What We Offer";
    const offerPoints = [
        "AI-powered personalized learning journey",
        "Skill-building modules with real-time feedback",
        "Mock tests, coding assessments, and AI interviews",
        "Seamless transition from learning to hiring",
        "Recruiter access to verified candidate pool",
    ];

    const features = [
        "Personalized learning paths based on your skills, interests, and goals",
        "Explore curated courses in tech, business, communication & more",
        "Build verified profiles with real-world projects & certifications",
        "Discover job and internship opportunities tailored just for you",
        "Connect with industry experts and mentors for career guidance",
    ];

    const recruiterFeatures = [
        "Post jobs & internships and hire skill-matched candidates",
        "Access verified talent pools from partnered institutions",
        "Smart filters for faster and bias-free hiring decisions",
        "Track candidate performance & shortlist effortlessly",
    ];

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    };

    const slideInLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    };


    return (
        <div>
            <Banner
                badgeText="Smart Career Ecosystem"
                title="Edutech Solutions"
                subtitle="From Learning to Hiring — All in One Place"
                description="Infoziant’s Edutech platform is a smart, AI-powered career ecosystem designed to guide students from learning to landing their dream job. Whether you're a college student, fresher, or a recruiter, our platform connects skills, learning, and opportunities — seamlessly."
                primaryBtnText="Explore Platform"
                primaryBtnLink="#explore"
                secondaryBtnText="Get Started"
                secondaryBtnLink="#get-started"
                image={edutechImage}
            />

            <Whatweoffer heading={offerHeading} points={offerPoints} image={WhatImage}  />


            <section className="bg-[#0f172a] py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                <div className="max-w-5xl mx-auto text-center mb-10">
                    <motion.h2
                        className="text-3xl sm:text-4xl font-bold text-white mb-4"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                        variants={fadeInUp}
                    >
                        🏢 For Recruiters & Institutions
                    </motion.h2>
                    <motion.p
                        className="text-gray-400 text-lg"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        variants={fadeInUp}
                    >
                        Discover and connect with the right candidates using smart, bias-free tools.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {recruiterFeatures.map((feature, index) => (
                        <motion.div
                            key={index}
                            className={`relative rounded-2xl p-[2px] ${index === recruiterFeatures.length - 1 && recruiterFeatures.length % 2 !== 0
                                ? "sm:col-span-2 sm:mx-auto sm:w-1/2"
                                : ""
                                }`}
                            style={{
                                background: "linear-gradient(180deg, #06f, #15f5ba)", // Full box gradient
                            }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{
                                scale: 1.04,
                                transition: { type: "spring", stiffness: 300 },
                            }}
                        >
                            <div className="bg-[#0f172a] rounded-2xl shadow-md p-6 h-full flex items-start gap-4">
                                <Briefcase className="text-green-300 w-6 h-6 mt-1" />
                                <p className="text-gray-200 text-base">{feature}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto text-center mb-10">
                    <motion.h2
                        className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                        variants={fadeInUp}
                    >
                        👩‍🎓 For Students & Job Seekers
                    </motion.h2>
                    <motion.p
                        className="text-gray-600 text-lg"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        variants={fadeInUp}
                    >
                        Unlock your potential with tailored guidance and smart tools built just for you.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className={`relative rounded-2xl p-[2px] ${index === features.length - 1 && features.length % 2 !== 0
                                ? "sm:col-span-2 sm:mx-auto sm:w-1/2"
                                : ""
                                }`}
                            style={{
                                background: 'linear-gradient(180deg, #06f, #15f5ba)',
                            }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{
                                scale: 1.03,
                                transition: { type: "spring", stiffness: 300 },
                            }}
                        >
                            <div className="bg-white rounded-2xl shadow-md p-6 h-full flex items-start gap-4">
                                <CheckCircle className="text-green-500 w-6 h-6 mt-1" />
                                <p className="text-gray-800 text-base">{feature}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>



            <InfoziantJourney />


            <section className="bg-white py-16 px-6 md:px-20">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
    
    {/* Left Content with scroll-triggered fade-in */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
        🔍 Who Is It For?
      </h2>

      <div className="space-y-6 text-gray-700 text-lg">
  <div className="flex items-start gap-3">
    <FaUniversity className="text-2xl text-blue-500 mt-1" />
    <p>Colleges & Universities looking to elevate placement outcomes</p>
  </div>
  <div className="flex items-start gap-3">
    <FaUserGraduate className="text-2xl text-green-500 mt-1" />
    <p>Students preparing for their next big opportunity</p>
  </div>
  <div className="flex items-start gap-3">
    <FaHandshake className="text-2xl text-purple-500 mt-1" />
    <p>Recruiters seeking verified talent without the noise</p>
  </div>
      </div>
    </motion.div>

    {/* Right GIF Section with scroll-triggered fade-in */}
    <motion.div
      className="bg-white flex flex-col items-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <img
        src={WhatweImage}
        alt="Recruiters"
        className="w-full max-w-md h-auto"
      />
    </motion.div>

  </div>
</section>





<ConsultationFormForCo />

        </div>
    );
};

export default Edutech_Platform;
