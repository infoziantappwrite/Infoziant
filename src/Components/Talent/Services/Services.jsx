import React, { useState } from "react";
import { FaCode, FaShieldAlt, FaUsers, FaGraduationCap, FaFlask } from "react-icons/fa";

const servicesData = {
  tech: {
    title: "Innovative Tech & Business Services",
    description: "Empowering growth through cutting-edge technology and digital solutions.",
    services: [
      { name: "Cybersecurity Services", icon: <FaShieldAlt /> },
      { name: "Web & App Development", icon: <FaCode /> },
      { name: "Software Testing", icon: <FaFlask /> },
      { name: "Tech Talent Hiring", icon: <FaUsers /> },
    ],
  },
  campus: {
    title: "Campus to Corporate Services",
    description: "Bridging academia and industry through training, internships, and CoEs.",
    services: [
      { name: "Placement Support", icon: <FaUsers /> },
      { name: "Internship Programs", icon: <FaGraduationCap /> },
      { name: "Industry-Academia Collaboration", icon: <FaFlask /> },
      { name: "Training & Upskilling", icon: <FaCode /> },
      { name: "CodeChef", icon: <FaCode /> },
      { name: "Edutech", icon: <FaGraduationCap /> },
    ],
  },
};

const Services = () => {
  const [activeTab, setActiveTab] = useState("tech");

  const { title, description, services } = servicesData[activeTab];

  return (
    <section className="w-full bg-gray-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
        {/* Left Panel */}
        <div>
          <h2 className="text-4xl font-bold mb-4 text-[#15f5ba]">{title}</h2>
          <p className="text-gray-300 mb-6">{description}</p>
          <div className="flex gap-4">
            <button
              onClick={() => setActiveTab("tech")}
              className={`px-5 py-2 rounded-full font-medium ${
                activeTab === "tech"
                  ? "bg-[#15f5ba] text-black"
                  : "bg-gray-800 hover:bg-gray-700"
              }`}
            >
              Tech Services
            </button>
            <button
              onClick={() => setActiveTab("campus")}
              className={`px-5 py-2 rounded-full font-medium ${
                activeTab === "campus"
                  ? "bg-[#15f5ba] text-black"
                  : "bg-gray-800 hover:bg-gray-700"
              }`}
            >
              Campus Services
            </button>
          </div>
        </div>

        {/* Right Panel - Services */}
        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 p-5 rounded-2xl flex items-center space-x-4 hover:shadow-xl transition-all duration-300 hover:bg-[#15f5ba] hover:text-black"
            >
              <div className="text-2xl">{item.icon}</div>
              <h4 className="text-lg font-semibold">{item.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
