import React from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ShieldCheck,
  MonitorSmartphone,
  BugPlay,
  UsersRound,
  BrainCog
} from "lucide-react";
import { useRef } from "react";

const services = [
  {
    title: "Cybersecurity Services",
    description:
      "Protect your digital assets with our advanced Infoziant DAST – real-time vulnerability detection and security assessments.",
    icon: <ShieldCheck size={32} color="#15f5ba" />,
    link: "/services/cybersecurity",
  },
  {
    title: "Web & App Development",
    description:
      "Scalable, high-performance websites and apps using modern stacks like MERN, Django, Spring Boot, and more.",
    icon: <MonitorSmartphone size={32} color="#15f5ba" />,
    link: "/services/web-app-development",
  },
  {
    title: "Artificial Intelligence",
    description:
      "Next-gen AI solutions for automation, personalization, and smarter decisions using our GenAI services.",
    icon: <BrainCog size={32} color="#15f5ba" />,
    link: "/services/genai",
  },
  {
    title: "Software Testing",
    description:
      "End-to-end testing solutions including Automation, Manual, API, and Performance testing with 100+ expert testers.",
    icon: <BugPlay size={32} color="#15f5ba" />,
    link: "/services/testing",
  },
  {
    title: "Tech Talent Hiring",
    description:
      "Flexible and cost-effective IT staffing services with access to 200,000+ professionals across GCC, USA, UK, and India.",
    icon: <UsersRound size={32} color="#15f5ba" />,
    link: "/services/tech-talent",
  }
 
];

const InnovativeTech = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  return (
    <section
      id="tech-section"
      ref={ref}
      className="bg-black text-white py-16 px-4"
    >
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
        <h2 className="text-3xl md:text-4xl font-bold heading_point mb-4">
          Innovative Tech & Business Services
        </h2>
        <p className="text-gray-300">
          Comprehensive tech services to secure, build, test, and scale your business.
        </p>
      </motion.div>

      {/* First row (3 cards) */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {services.slice(0, 3).map((service, index) => (
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
      </div>

      {/* Second row (2 centered cards) */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
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
      </div>
    </section>
  );
};

export default InnovativeTech;
