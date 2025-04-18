import React from 'react';
import { ArrowRight } from 'lucide-react';

const HowItWorks = ({ steps }) => {
  const iconColors = [
    "from-pink-400 to-red-500",
    "from-yellow-400 to-orange-500",
    "from-green-400 to-emerald-500",
    "from-sky-400 to-blue-500",
    "from-fuchsia-400 to-pink-500",
    "from-teal-400 to-cyan-500",
    "from-purple-400 to-indigo-500"
  ];

  return (
    <section className="w-full py-24 bg-gradient-to-b from-gray-100 to-gray-200 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 text-white text-sm font-medium mb-4">
            Simple Process
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-teal-500 via text-teal-900 to-blue-500 bg-clip-text text-transparent mb-4">
            How It Works
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            Follow these simple steps to get started with our service
          </p>
        </div>

        {/* Step Cards with Connection Lines */}
        <div className="relative">
          {/* Connection Lines (hidden on mobile) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-500 -z-10" />
          
          {/* Step Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const colorClass = iconColors[index % iconColors.length];
              const textColorClass = {
                "from-pink-400 to-red-500": "text-red-500",
                "from-yellow-400 to-orange-500": "text-orange-500",
                "from-green-400 to-emerald-500": "text-emerald-500",
                "from-sky-400 to-blue-500": "text-blue-500",
                "from-fuchsia-400 to-pink-500": "text-pink-500",
                "from-teal-400 to-cyan-500": "text-cyan-500",
                "from-purple-400 to-indigo-500": "text-indigo-500"
              }[colorClass];
              
              const bgColorClass = {
                "from-pink-400 to-red-500": "bg-red-50",
                "from-yellow-400 to-orange-500": "bg-orange-50",
                "from-green-400 to-emerald-500": "bg-emerald-50",
                "from-sky-400 to-blue-500": "bg-sky-50",
                "from-fuchsia-400 to-pink-500": "bg-pink-50",
                "from-teal-400 to-cyan-500": "bg-cyan-50",
                "from-purple-400 to-indigo-500": "bg-indigo-50"
              }[colorClass];
              
              const hoverBgColorClass = {
                "from-pink-400 to-red-500": "group-hover:bg-red-100",
                "from-yellow-400 to-orange-500": "group-hover:bg-orange-100",
                "from-green-400 to-emerald-500": "group-hover:bg-emerald-100",
                "from-sky-400 to-blue-500": "group-hover:bg-sky-100",
                "from-fuchsia-400 to-pink-500": "group-hover:bg-pink-100",
                "from-teal-400 to-cyan-500": "group-hover:bg-cyan-100",
                "from-purple-400 to-indigo-500": "group-hover:bg-indigo-100"
              }[colorClass];
              
              return (
                <div key={index} className="relative flex flex-col h-full">
                  {/* Step Number Badge */}
                  <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r ${colorClass} text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-lg z-10`}>
                    {index + 1}
                  </div>

                  {/* Card */}
                  <div className={`flex flex-col h-full items-center rounded-xl shadow-lg p-6 pt-8 hover:shadow-xl hover:border-${textColorClass} transition-all duration-300 text-center group`}>
                    {/* Icon with background */}
                    <div className={`p-4 rounded-full ${bgColorClass} ${hoverBgColorClass} mb-6 transition-colors duration-300`}>
                      <div className={`text-4xl ${textColorClass}`}>
                        {step.icon}
                      </div>
                    </div>
                    
                    {/* Step Title */}
                    <h3 className={`text-xl font-bold ${textColorClass} mb-3`}>
                      {step.title}
                    </h3>
                    
                    {/* Step Description */}
                    <p className="text-gray-600 mb-4 flex-grow">
                      {step.description}
                    </p>
                    
                    {/* Learn More link */}
                    {step.learnMoreUrl && (
                      <a href={step.learnMoreUrl} className={`inline-flex items-center ${textColorClass} font-medium mt-2 hover:opacity-80`}>
                        Learn more <ArrowRight className="ml-1 w-4 h-4" />
                      </a>
                    )}
                  </div>
                  
                  {/* Arrow connector (hidden on mobile and last item) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-4 transform translate-y-1/2 text-gray-400">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Adjusted Section: Ready to Make Your Students Placement-Ready? */}
        <div className="mt-8 text-center bg-gradient-to-b from-gray-100 to-gray-200 py-8">
          <h3 className="text-3xl font-semibold text-gray-900 mb-4">
            Ready to Make Your Students Placement-Ready?
          </h3>
          <p className="text-xl text-gray-600 mb-6">
             Start from scratch. Build expertise. Win careers.
          </p>
          <a href="#enquiry-form" className="px-8 py-3 bg-gradient-to-r from-teal-400 to-blue-500 text-white font-medium rounded-lg shadow-md hover:opacity-90 hover:shadow-lg transition-all duration-300">
            Start Learning Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
