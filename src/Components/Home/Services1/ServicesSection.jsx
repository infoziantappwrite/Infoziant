import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Code, BarChart, BookOpen, Building2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Placement Support",
    description: "Get expert career counseling, resume-building, and interview preparation. Unlock exclusive job opportunities with top recruiters.",
    features: ["Resume review & enhancement", "Mock interviews with experts", "Direct placement assistance"],
    icon: Briefcase,
    link: "/services/placement-support",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    title: "Internship Programs",
    description: "Gain real-world experience with live projects and expert mentorship. Build industry connections and enhance your skills.",
    features: ["Industry-led mentorship", "Hands-on project experience", "Networking opportunities"],
    icon: GraduationCap,
    link: "/services/internship-programs",
    gradient: "from-pink-500 to-purple-600",
  },
  {
    title: "Industry-Academia Collaboration",
    description: "Bridging education and industry through research and innovation. Engage with industry leaders and explore new opportunities.",
    features: ["Research-based learning", "Industry partnerships", "Innovation labs & CoEs"],
    icon: Building2,
    link: "/services/industry-academia",
    gradient: "from-teal-400 to-blue-500",
  },
  {
    title: "Training & Upskilling",
    description: "Master in-demand skills with expert-led courses and certifications. Stay ahead in your career with hands-on industry training.",
    features: ["Latest tech skill training", "Soft skills development", "Certification programs"],
    icon: BarChart,
    link: "/services/training-upskilling",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    title: "CodeChef Training",
    description: "Improve your coding skills with structured training and challenges. Learn problem-solving strategies and excel in competitions.",
    features: ["Competitive coding sessions", "Problem-solving strategies", "CodeChef challenges & hackathons"],
    icon: Code,
    link: "/services/codechef-training",
    gradient: "from-gray-700 to-black",
  },
  {
    title: "Edutech Solutions",
    description: "Transform learning with AI-driven tools and interactive platforms. Enhance engagement with digital assessments and analytics.",
    features: ["AI-based learning platforms", "Interactive educational tools", "Digital assessments & analytics"],
    icon: BookOpen,
    link: "/services/edutech",
    gradient: "from-green-400 to-teal-500",
  },
];

export default function ServicesSection() {
  const navigate = useNavigate();

  return (
    <div className="p-8 bg-gray-800 text-white" id="services-section">
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="container mx-auto px-1 sm:px-2 text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-300 relative"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Campus to Corporate Services
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-400 rounded-full mx-auto mt-2"></div>
        </motion.h2>

        <motion.p
          className="text-gray-300 max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Bridging the gap between academia and industry with tailored programs for career growth.
        </motion.p>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-12 ">
          {services.map((service, index) => (
            <motion.div
              key={index}
              onClick={() => navigate(service.link)}
              className="relative p-6 rounded-xl shadow-lg bg-white text-gray-900 flex flex-col items-start transition-transform hover:scale-105 cursor-pointer group overflow-visible"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Icon */}
              <div
                className={`absolute top-[-30px] left-1/2 transform -translate-x-1/2 w-24 h-20 flex items-center justify-center rounded-full bg-gradient-to-r ${service.gradient} border-4 border-white`}
              >
                <service.icon size={34} className="text-white" />
              </div>

              {/* Title */}
              <h3 className="mt-10 text-xl font-semibold text-gray-900 text-left">{service.title}</h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mt-2 text-left">{service.description}</p>

              {/* Features List */}
              <ul className="text-gray-700 text-sm mt-3 pl-0 space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className={`font-bold bg-clip-text text-transparent bg-gradient-to-r ${service.gradient}`}>
                      ✔
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className={`mt-6 w-full py-2 rounded-lg font-semibold text-white bg-gradient-to-r ${service.gradient} transition-all hover:opacity-90`}>
                Learn More
              </button>

              {/* Gradient Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-20 rounded-xl`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
    </div>
  );
}
