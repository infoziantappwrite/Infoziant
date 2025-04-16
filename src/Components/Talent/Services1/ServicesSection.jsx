import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Calendar,
  Clock,
  Globe,
  Building,
  Users2,
} from "lucide-react";

const services = [
  {
    title: "IT Staffing Services",
    items: [
      {
        subtitle: "Project Ramp-ups",
        description: "Ensuring smooth ramp-up and project start according to plan, with defined SLAs, dedicated SPOC, and weekly reviews.",
        icon: Calendar,
        color: "bg-sky-500",
        gradient: "from-sky-500 to-teal-400",
        iconColor: "text-sky-400",
      },
      {
        subtitle: "Permanent Placement",
        description: "Identify and place full-time, high-performing professionals aligned with your company's goals and culture.",
        icon: Users,
        color: "bg-orange-500",
        gradient: "from-orange-400 to-orange-500",
        iconColor: "text-orange-400",
      },
      {
        subtitle: "GIG Model Contracts / ON Call Basis",
        description: "Utilise resources on flexible models for Hourly / Weekly / Monthly for short term and long term contracts based on-demand.",
        icon: Clock,
        color: "bg-rose-500",
        gradient: "from-rose-500 to-pink-600",
        iconColor: "text-rose-400",
      },
      {
        subtitle: "Reliable RPO",
        description: "End to end Managed Outsourcing involving long-term partnership with ongoing management, monitoring and optimization.",
        icon: Globe,
        color: "bg-blue-600",
        gradient: "from-blue-500 to-indigo-600",
        iconColor: "text-blue-400",
      },
    ]
  },
  {
    title: "Offshore Development Centres (ODC)",
    items: [
      {
        subtitle: "Secondment and Payroll Services",
        description: "Utilize SMI's Mobility Visa Services to mobilize internal resources efficiently for projects in the GCC or other global locations.",
        icon: Building,
        color: "bg-amber-500",
        gradient: "from-amber-400 to-orange-500",
        iconColor: "text-amber-400",
      },
      {
        subtitle: "Managed Offshore Workforce",
        description: "With our ODC's allocated in Chennai, Madurai and Coimbatore, access scalable talent pools seamlessly with aligned PMO / Project Manager.",
        icon: Users2,
        color: "bg-emerald-500",
        gradient: "from-emerald-500 to-teal-500",
        iconColor: "text-emerald-400",
      }
    ]
  }
];

const CoreServicesSection = () => {
  return (
      <section className="bg-gradient-to-b from-[#0a192f] via-[#0e223f] to-[#102e56] text-white py-24 px-4 sm:px-6 lg:px-8" id="services">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
                Our Core Services
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="flex flex-col space-y-20">
            {services.map((serviceCategory, categoryIndex) => (
              <div key={categoryIndex}>
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-xl font-bold text-gray-100 mb-6 text-center"
                >
                  {serviceCategory.title}
                </motion.h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {serviceCategory.items.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-start space-x-4 group"
                      >
                        {/* Icon circle */}
                        <div className={`flex-shrink-0 w-16 h-16 rounded-full ${item.iconColor} bg-gray-900/80 shadow-lg flex items-center justify-center border border-gray-700 group-hover:scale-110 transition-transform duration-300`}>
                          <Icon size={28} />
                        </div>

                        {/* Content capsule */}
                        <div className="flex-1 bg-gray-900/40 backdrop-blur-lg rounded-xl px-6 py-4 shadow-sm border border-gray-800 group-hover:shadow-lg hover:ring-1 hover:ring-offset-2 hover:ring-offset-[#0a192f] hover:ring-[rgba(255,255,255,0.1)] transition-all duration-300 relative overflow-hidden">
                          {/* Gradient side stripe */}
                          <div className={`absolute top-0 bottom-0 right-0 w-2 rounded-r-lg bg-gradient-to-b ${item.gradient}`}></div>

                          <h4 className="font-semibold text-white mb-1">{item.subtitle}</h4>
                          <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>

                          {/* Gradient glow on hover */}
                          <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`} />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

  );
};

export default CoreServicesSection;