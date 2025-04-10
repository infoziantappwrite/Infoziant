import { Briefcase, GraduationCap, Code, BarChart, BookOpen, Building2, ArrowRightCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Placement Support",
    description: "We assist students in transitioning to the corporate world with career counseling, resume-building workshops, and interview preparation. Gain access to top recruiters and exclusive job opportunities.",
    icon: <Briefcase size={30} />,
    link: "/services/placement-support",
  },
  {
    title: "Internship Programs",
    description: "Our internship programs provide hands-on industry experience, mentorship from experts, and live projects to help students apply their learning in real-world scenarios.",
    icon: <GraduationCap size={30} />,
    link: "/services/internship-programs",
  },
  {
    title: "Industry-Academia Collaboration",
    description: "We build bridges between education and industry through research partnerships, CoEs, and innovation-driven learning to prepare students for future challenges.",
    icon: <Building2 size={30} />,
    link: "/services/industry-academia",
  },
  {
    title: "Training & Upskilling",
    description: "Stay competitive in the job market with our technical and soft skills training. We offer customized programs for individuals and institutions, covering the latest industry trends.",
    icon: <BarChart size={30} />,
    link: "/services/training-upskilling",
  },
  {
    title: "CodeChef Training",
    description: "Boost your coding skills with our structured CodeChef training programs. Learn competitive programming, participate in challenges, and prepare for tech careers.",
    icon: <Code size={30} />,
    link: "/services/codechef-training",
  },
  {
    title: "Edutech Solutions",
    description: "Experience AI-driven assessments, interactive learning platforms, and digital education solutions designed to make learning more engaging and effective.",
    icon: <BookOpen size={30} />,
    link: "/services/edutech",
  },
];

export default function ServicesSection() {
  const navigate = useNavigate();

  return (
    <section className="py-12 bg-white max-w-7xl mx-auto animate-fade-in-up">
    <div className="container mx-auto px-6">
      
      {/* Heading Section */}
      <h2 className="text-3xl font-semibold mb-4 text-gray-900 text-left relative animate-fade-in-up">
        <span className="bg-gradient-to-r from-blue-600 to-teal-400 text-transparent bg-clip-text font-bold">
          Campus to Corporate
        </span> Services
        <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-teal-400 mt-2"></div>
      </h2>
  
      {/* Description */}
      <p className="text-left text-gray-600 max-w-4xl mb-5">
        Bridging the gap between academia and industry with tailored programs designed for career growth and skill development.
      </p>
  
      {/* Services Grid */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            onClick={() => navigate(service.link)}
            className="relative p-6 rounded-xl bg-gray-900 text-white shadow-lg flex flex-col items-start transition-all duration-500 cursor-pointer group border-2 border-transparent hover:border-blue-500"
          >
            {/* Icon */}
            <div className="mb-4 p-2 bg-white/20 rounded-full">{service.icon}</div>
  
            {/* Title */}
            <h3 className="text-lg font-medium mb-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
                {service.title.split(" ")[0]}
              </span>{" "}
              {service.title.split(" ").slice(1).join(" ")}
            </h3>
  
            {/* Description */}
            <p className="text-sm text-gray-300 text-left">{service.description}</p>
  
            {/* Right Arrow */}
            <div className="absolute bottom-4 right-4 text-teal-600 animate-pulse transition-transform group-hover:translate-x-3">
              <ArrowRightCircle size={24} />
            </div>
  
            {/* Gradient Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-500 opacity-0 transition-opacity duration-500 group-hover:opacity-80 rounded-xl"></div>
          </div>
        ))}
      </div>
    </div>
  </section>
  
  );
}
