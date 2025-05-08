import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ShieldCheck,
  MonitorSmartphone,
  BugPlay,
  UsersRound,
  BrainCog
} from "lucide-react";
import Images1 from "./Images/cybersecurity.jpg"
import Images2 from "./Images/webApp.jpg"
import Images3 from "./Images/AiML.webp"
import Images4 from "./Images/Testing.webp"
import Images5 from "./Images/CodeChef1.jpg"
import Images6 from "./Images/CTC.jpg"


const services = [
  {
    title: "Cybersecurity Services",
    highlights: [
      "24×7 Monitoring & Incident Response",
      "Reliable Audit Reports"
    ],
    icon: <ShieldCheck size={32} color="#15f5ba" />,
    link: "/services/cybersecurity",
    image: Images1
  },
  {
    title: "Web & App Development",
    highlights: [
      "Highly skilled Developers",
      "Zero Defect Policy"
    ],
    icon: <MonitorSmartphone size={32} color="#15f5ba" />,
    link: "/services/web-app-development",
    image: Images2
  },
  {
    title: "AI & Machine Learning",
    highlights: [
      "Expertise beyond measure",
      "Transformative AI Solutions"
    ],
    icon: <BrainCog size={32} color="#15f5ba" />,
    link: "/services/genai",
    image: Images3
  },
  {
    title: "Testing & Automation",
    highlights: [
      "Zero Flaky Tests",
      "Accelerate Time to Market"
    ],
    icon: <BugPlay size={32} color="#15f5ba" />,
    link: "/services/testing",
    image: Images4
  },
  {
    title: "CodeChef Training",
    highlights: [
      "In-demand programming languages",
      "Gain practical, job-ready skills."
    ],
    icon: <UsersRound size={32} color="#15f5ba" />,
    link: "/services/codechef-training",
    image: Images5
  },
  {
    title: "Campus-to-Corporate Services",
    highlights: [
      "Companies offering CTCs up to ₹1.02 Cr",
      "18000+ Happy Students"
    ],
    icon: <UsersRound size={32} color="#15f5ba" />,
    link: "/services/tech-talent",
    image: Images6
  }
];

const InnovativeTech = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  return (
    <section
      id="services-section"
      ref={ref}
     className="relative bg-gradient-to-r from-[#0a192f] via-[#112240] to-[#1a365d] text-white py-20 px-4"
    >
       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
    <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-blue-500 opacity-5"></div>
    <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-teal-400 opacity-5"></div>
    <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-purple-500 opacity-5"></div>
  </div>
      {/* Heading */}
      <motion.div
        className="max-w-4xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h5 className="text-teal-400 font-semibold text-lg mb-2">
          OUR CORE SERVICES
        </h5>
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent drop-shadow-sm mb-4">
          Innovative Tech & Business Services
        </h2>
        <p className="text-gray-300">
          Comprehensive tech services to secure, build, test, and scale your business.
        </p>
      </motion.div>

      {/* Service Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div 
            key={index}
            className="group relative overflow-hidden rounded-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.03 }}
          >
            {/* Enhanced Glow Effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500 to-teal-400 opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300" />
            
            {/* Main Card with Increased Shadow */}
            <div className="relative h-full rounded-xl shadow-[0_10px_30px_-5px_rgba(21,245,186,0.5)] group-hover:shadow-[0_15px_40px_-5px_rgba(21,245,186,0.4)] transition-all duration-300">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.image})` }}
              >
                <div className="absolute inset-0 bg-black/75 group-hover:bg-black/40 transition-all duration-100" />
              </div>
              
              {/* Content */}
              <div className="relative z-10 h-full p-6 flex flex-col">
                <div className="mb-4 p-3 bg-black/30 rounded-full w-14 h-14 flex items-center justify-center backdrop-blur-sm">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white">
                  {service.title}
                </h3>
                
                <div className="mb-4 space-y-2">
                  {service.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start">
                      <span className="text-teal-400 mr-2 mt-1">✓</span>
                      <span className="text-gray-200 text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
                
                <button
                  onClick={() => navigate(service.link)}
                  className="mt-auto inline-flex items-center text-teal-400 hover:text-teal-300 font-medium text-sm transition-colors"
                >
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default InnovativeTech;

  {/* Second row (2 centered cards) */}
      {/* <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.slice(3).map((service, index) => (
          <motion.div
          key={index}
          className="p-[2px] rounded-xl bg-gradient-to-r from-blue-500 to-teal-400 shadow-[0_0_20px_rgba(13,148,136,0.7)]"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="bg-[#000000] p-6 rounded-[10px] h-full">
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-2xl font-medium mb-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
                {service.title.split(" ")[0]}
              </span>{" "}
              <span className="text-white">
                {service.title.split(" ").slice(1).join(" ")}
              </span>
            </h3>
            <p className="text-gray-400 mb-4">{service.description}</p>
            <button
              onClick={() => navigate(service.link)}
              className="text-teal-400 hover:underline"
            >
              Learn More →
            </button>
          </div>
        </motion.div>
        
        ))}
      </div> */}
