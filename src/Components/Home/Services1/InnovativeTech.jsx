import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ShieldCheck,
  MonitorSmartphone,
  BugPlay,
  UsersRound,
  BrainCog,
  Check,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  Circle,
  Sparkles,
  BadgeCheck
} from "lucide-react";
import Images1 from "./Images/cybersecurity.jpg";
import Images2 from "./Images/webApp.jpg";
import Images3 from "./Images/AiML.webp";
import Images4 from "./Images/Testing.webp";
import Images5 from "./Images/CodeChef1.jpg";
import Images6 from "./Images/trainin.jpg";

const services = [
  {
    title: "Cybersecurity",
    highlights: [
      "24×7 Monitoring & Incident Response",
      "Reliable Audit Reports"
    ],
    icon: <ShieldCheck size={32} color="#4ee4e4" />,
    link: "/services/cybersecurity",
    image: Images1
  },
  {
    title: "Web & App Development",
    highlights: [
      "Highly skilled Developers",
      "Zero Defect Policy"
    ],
    icon: <MonitorSmartphone size={32} color="#4ee4e4" />,
    link: "/services/web-app-development",
    image: Images2
  },
  {
    title: "AI & Machine Learning",
    highlights: [
      "Expertise beyond measure",
      "Transformative AI Solutions"
    ],
    icon: <BrainCog size={32} color="#4ee4e4" />,
    link: "/services/genai",
    image: Images3
  },
  {
    title: "Testing & Automation",
    highlights: [
      "Zero Flaky Tests",
      "Accelerate Time to Market"
    ],
    icon: <BugPlay size={32} color="#4ee4e4" />,
    link: "/services/testing",
    image: Images4
  },
  {
    title: "CodeChef",
    highlights: [
      "In-demand programming languages",
      "Global level Hackathons"
    ],
    icon: <BadgeCheck size={32} color="#4ee4e4" />,
    link: "/services/codechef",
    image: Images5
  },
  {
    title: "Training & Placement",
    highlights: [
      "Latest Tech Skill Training",
      "Curated Drives with Top Recruiters"
    ],
    icon: <UsersRound size={32} color="#4ee4e4" />,
    link: "/services/placement",
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
      className="relative bg-gray-50 py-20 px-4 sm:px-6"
    >

<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-blue-500 opacity-5"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-teal-400 opacity-5"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-purple-500 opacity-5"></div>

         {/* Additional Bubbles */}
  <div className="absolute top-20 right-1/3 w-28 h-28 rounded-full bg-blue-500 opacity-5"></div>
  <div className="absolute bottom-20 left-1/5 w-36 h-36 rounded-full bg-blue-500 opacity-5"></div>
  <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full bg-blue-500 opacity-5"></div>
  <div className="absolute bottom-1/3 right-1/2 w-24 h-24 rounded-full bg-blue-500 opacity-5"></div>
       
      </div>
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          className="max-w-4xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-500 text-transparent bg-clip-text">
            <span className="highlight">Our Expertise</span> 
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Scaling Digital Growth Across Sectors
          </p> 
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {services.map((service, index) => (
    <motion.div
      key={index}
      className="relative group h-96 rounded-2xl overflow-hidden shadow-xl cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.03,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)"
      }}
    
    >
      {/* Background Image with Parallax Effect */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
         <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-100" />
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent group-hover:via-gray-900/20 transition-all duration-500" />

      {/* Content Container */}
<div className="absolute bottom-0 left-0 right-0 z-20 p-8 space-y-4 text-white transition-all duration-500 group-hover:bg-black/80">
  {/* Icon with Glow Effect */}
  <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm inline-flex group-hover:bg-teal-400/20 group-hover:shadow-[0_0_15px_rgba(78,228,228,0.5)] transition-all duration-300">
    {React.cloneElement(service.icon, { className: "w-6 h-6 text-teal-300" })}
  </div>

  {/* Title with Underline Animation */}
  <h3 className="text-2xl font-bold max-w-[90%]">
    <span className="relative inline-block px-1 transition-colors duration-300 rounded">
      <span className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-teal-300 after:transition-all after:duration-300 group-hover:after:w-full">
        {service.title}
      </span>
    </span>
  </h3>

  {/* Highlights List */}
  <ul className="space-y-3">
    {service.highlights.map((point, i) => (
      <motion.li
        key={i}
        className="flex items-start"
        whileHover={{ x: 5 }}
      >
        <Check className="w-5 h-5 text-teal-300 mr-2.5 flex-shrink-0" />
        <span className="text-base opacity-90 group-hover:opacity-100 transition-opacity">{point}</span>
      </motion.li>
    ))}
  </ul>

  {/* Learn More Button */}
  <motion.button
    className="mt-4 inline-flex items-center text-teal-300 font-medium group-hover:text-white transition-colors"
    whileHover={{ x: 5 }}
    onClick={() => navigate(service.link)}
  >
    Learn More
    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
  </motion.button>
</div>

    </motion.div>
  ))}
</div>


      </div>
    </section>
  );
};

export default InnovativeTech;
