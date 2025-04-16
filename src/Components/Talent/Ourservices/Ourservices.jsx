import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Layers,
  Globe,
  DollarSign,
  ChevronRight,
} from "lucide-react";
import SmilingTeam from "../../../assests/Images/Banner/staffing.gif";

const reasons = [
  {
    icon: Users,
    title: "Plug and Play Talent Solutions",
    desc: "We provide Bench Resources as a Plug & Play talent solution, enabling businesses to quickly scale their workforce with pre-vetted, project-ready IT professionals.",
    color: "bg-gradient-to-r from-sky-300 to-sky-400",
    hoverGradient: "from-sky-600 to-teal-500",
    iconColor: "text-sky-600",
  },
  {
    icon: Layers,
    title: "Vertically Versatile Skills",
    desc: "From legacy systems to the latest tech stacks, our team covers a vast range of talents across different industries and verticals.",
    color: "bg-gradient-to-r from-emerald-300 to-emerald-400",
    hoverGradient: "from-emerald-600 to-green-500",
    iconColor: "text-emerald-600",
  },
  {
    icon: Globe,
    title: "Tech-Savvy Recruitment Experts",
    desc: "Our global recruitment team specializes in onsite and offshore hiring, with access to a local database of 2+ Lakhs top-tier IT professionals.",
    color: "bg-gradient-to-r from-indigo-300 to-indigo-400",
    hoverGradient: "from-indigo-600 to-purple-600",
    iconColor: "text-indigo-600",
  },
  {
    icon: DollarSign,
    title: "Cost-Efficiency",
    desc: "We provide remote, onsite, and offshore solutions that help you reduce costs while accessing premium IT talent.",
    color: "bg-gradient-to-r from-amber-300 to-amber-400",
    hoverGradient: "from-amber-600 to-orange-500",
    iconColor: "text-amber-600",
  },
];

const WhyChoose = () => {
  return (
    <section className="bg-white text-gray-800 py-24 px-4 sm:px-6 lg:px-12 relative w-full" id="why-smi">

      <div className="relative z-10 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">
              Why Choose our Talent Tech?
            </span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Discover how we empower businesses with agile, tech-enabled staffing and scalable IT solutions.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center w-full">
          {/* Left: Cards */}
          <div className="grid grid-cols-1 gap-4 w-full">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative w-full"
            >
              <div
                className={`rounded-2xl p-6 shadow-md bg-gradient-to-br ${item.hoverGradient} transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1 relative overflow-hidden`}
              >
                {/* Translucent white overlay to soften the gradient but still vibrant */}
                <div className="absolute inset-0 bg-white/20 rounded-2xl pointer-events-none"></div>

                <div className="flex items-start space-x-4 relative z-10">
                  <div
                    className={`flex items-center justify-center w-12 h-12 rounded-xl bg-white shadow-md ${item.iconColor}`}
                  >
                    <item.icon size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="text-white/90 text-sm mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}

          </div>

          {/* Right: GIF */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mx-auto md:mx-0"
          >
            <img
              src={SmilingTeam}
              alt="Smiling team"
              className="object-cover w-full h-auto"
            />
          </motion.div>


        </div>

        {/* Bottom Text Bubble */}
        <motion.div
          className="text-center mt-16 text-gray-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="inline-block py-2 px-6 bg-gray-50 border border-gray-200 rounded-full shadow-sm">
            We connect you with the right talent powered by{" "}
            <span className="text-gray-900 font-medium">local expertise</span> and{" "}
            <span className="text-gray-900 font-medium">global reach</span>.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChoose;
