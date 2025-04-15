import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

// Using the same image reference from your original component
import Sample from "../../../assests/Images/Banner/Sample.png";

const industries = [
  { 
    title: "Healthcare", 
    image: Sample,
    description: "Transformative solutions for patient care and medical management systems."
  },
  { 
    title: "E-Commerce", 
    image: Sample,
    description: "Scalable platforms that drive conversions and enhance customer experience."
  },
  { 
    title: "Finance", 
    image: Sample,
    description: "Secure and innovative fintech solutions for modern banking needs."
  },
  { 
    title: "Education & E-Learning", 
    image: Sample,
    description: "Interactive platforms that revolutionize the learning experience."
  },
  { 
    title: "Sports & Fitness", 
    image: Sample,
    description: "Digital tools that enhance performance tracking and engagement."
  },
  { 
    title: "Hospitality & Travel", 
    image: Sample,
    description: "Seamless booking systems and guest experience enhancement."
  },
];

const IndustriesWeServe = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="bg-gradient-to-b from-slate-900 to-slate-950 py-20 px-4 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header section with animated underline */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-gray-200 tracking-wider uppercase">Expertise Across Sectors</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6 bg-gradient-to-r from-blue-400 via-teal-300 to-blue-500 bg-clip-text text-transparent">Industries We Serve</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-slate-300 mt-8 max-w-2xl mx-auto text-lg">
            We deliver tailored digital solutions that address the unique challenges and opportunities in each industry.
          </p>
        </div>
        
        {/* Industries grid with hover effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden bg-slate-800/50 backdrop-blur-sm border border-slate-700 h-80"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="absolute inset-0">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent"></div>
              </div>
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end transition-all duration-300">
                <div className={`transition-all duration-500 ${hoveredIndex === index ? 'transform -translate-y-4' : ''}`}>
                  <h3 className="text-2xl font-bold mb-3 text-white">
                    {industry.title}
                  </h3>
                  <p className={`text-slate-300 text-sm mb-4 transition-all duration-500 ${hoveredIndex === index ? 'opacity-100' : 'opacity-80'}`}>
                    {industry.description}
                  </p>
                  
                  <div className={`transition-all duration-500 flex items-center text-cyan-400 text-sm font-medium ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                    <span>Explore solutions</span>
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </div>
              
              {/* Accent border */}
              <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 ${hoveredIndex === index ? 'w-full' : 'w-16'}`}></div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-1">
            Discuss Your Industry Needs
          </button>
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;