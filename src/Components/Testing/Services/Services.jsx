import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import TestingGIF from "../../../assests/Images/Banner/SoftTests.gif"; // Replace with actual path

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const controls = useAnimation();

  const services = [
    {
      title: "Automated Testing",
      description: "Leverage the power of AI to automate your testing workflows, improving speed, accuracy, and scalability.",
      gradient: "from-emerald-500 to-teal-500",
      ringColor: "ring-teal-600",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: "Manual Testing",
      description: "Our expert testers manually verify each feature to ensure high-quality software with zero defects.",
      gradient: "from-blue-500 to-indigo-600",
      ringColor: "ring-indigo-600",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      title: "Performance Testing",
      description: "Ensure your application performs under load with our stress, load, and scalability testing services.",
      gradient: "from-amber-400 to-orange-500",
      ringColor: "ring-orange-500",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Security Testing",
      description: "Protect your users and data with our comprehensive vulnerability assessments and penetration testing.",
      gradient: "from-rose-500 to-pink-600",
      ringColor: "ring-pink-600",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: "API Testing",
      description: "Ensure reliable communication between systems with our specialized API testing methodologies.",
      gradient: "from-sky-500 to-teal-400",
      ringColor: "ring-sky-600",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.1 },
    }),
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
      }}
      className="bg-[#e4e4e4a3] py-20 px-4 sm:px-6 lg:px-16 overflow-hidden"
      id="services"
    >
      {/* Header */}
      <motion.div
        variants={fadeInUp}
        custom={0}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">
            Our Testing Services
          </span>
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Explore our wide range of manual and automated testing services that empower your applications to be flawless and secure.
        </p>
      </motion.div>

      {/* Image + Services */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left - GIF + Detail Panel */}
        <motion.div
          variants={fadeInUp}
          custom={1}
          className="mx-auto md:mx-0 rounded-2xl overflow-hidden shadow-xl"
        >
          <div className="p-12">
          <img
            src={TestingGIF}
            alt="Testing Solutions"
            className="w-full h-auto object-cover"
          />


          </div>
         

          {/* Service Detail */}
          <motion.div 
            key={activeService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`p-6 bg-gradient-to-br ${services[activeService].gradient} text-white`}
          >
            <div className="flex items-center mb-4">
              <div className="bg-white bg-opacity-20 p-2 rounded-lg mr-4">
                {services[activeService].icon}
              </div>
              <h3 className="text-2xl font-bold">{services[activeService].title}</h3>
            </div>
            <p className="mb-4">{services[activeService].description}</p>
            <button className="bg-white text-gray-800 px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300 flex items-center">
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>
        </motion.div>

        {/* Right - Cards */}
        <div className="space-y-5">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index + 2}
              variants={fadeInUp}
              onClick={() => setActiveService(index)}
              className={`relative bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 
                ${
                  activeService === index
                    ? `bg-gray-50 scale-[1.02] ring-2 ${service.ringColor} shadow-2xl`
                    : "hover:translate-x-1 hover:shadow-xl"
                }`}
            >
              {/* Selected Badge */}
              {activeService === index && (
              <div
                className="absolute top-0 right-0 text-xs font-semibold px-2 py-1 rounded-bl-lg z-10"
                style={{
                  background: `linear-gradient(to right, ${services[index].gradient})`,
                  WebkitBackgroundClip: 'text', // Ensures the text is clipped to the gradient
                  color: 'transparent', // Makes the text transparent so the gradient shows
                }}
              >
                Selected
              </div>
            )}



              {/* Card Content */}
              <div className="flex items-center p-5">
                <div className={`w-12 h-12 flex-shrink-0 rounded-lg bg-gradient-to-br ${service.gradient} p-2 mr-4 flex items-center justify-center text-white`}>
                  {service.icon}
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
                </div>
              </div>

              <div className={`h-1 bg-gradient-to-r ${service.gradient}`}></div>
            </motion.div>
          ))}

          {/* CTA */}
          <motion.div
            variants={fadeInUp}
            custom={services.length + 2}
            className="mt-8 bg-gradient-to-br from-pink-500 to-teal-400 rounded-xl p-6 text-white shadow-lg"
          >
            <h3 className="text-xl font-bold mb-2">Ready to elevate your testing?</h3>
            <p className="mb-4">Schedule a consultation with our experts today.</p>
            <button className="bg-white text-gray-800 px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300">
              Get Started
            </button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
