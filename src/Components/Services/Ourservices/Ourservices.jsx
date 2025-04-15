import React from "react";
import { motion } from "framer-motion";
import {
  LayoutGrid,
  Smartphone,
  Code,
  Zap,
  Link2,
} from "lucide-react";

const services = [
  {
    icon: LayoutGrid,
    title: "Web Development",
    desc: "From static websites to dynamic applications, we build high-performance digital solutions.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Android & iOS applications built for seamless user experiences.",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: Code,
    title: "Full-Stack Development",
    desc: "MERN & Python-based solutions for powerful backend and engaging frontend.",
    color: "from-green-400 to-emerald-600",
  },
  {
    icon: Zap,
    title: "Progressive Web Apps",
    desc: "Lightweight, fast-loading applications for mobile and web users.",
    color: "from-indigo-500 to-fuchsia-600",
  },
  {
    icon: Link2,
    title: "API Development & Integration",
    desc: "Secure and efficient data exchange between applications.",
    color: "from-cyan-400 to-blue-600",
  },
];

const OurServices = () => {
  return (
    <section className="bg-gray-950 text-white py-20" id="services-section">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="text-[2.5rem] font-bold mb-4 text-center bg-gradient-to-r from-[#15f5ba] to-[#06f] bg-clip-text text-transparent inline-block">
            Our Web & App Development Services
          </h2>


          <p className="text-gray-400 max-w-2xl mx-auto">
            Delivering innovative, user-centric solutions for diverse industries and business needs using cutting-edge technology.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-10 md:grid-cols-2">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className={`
                group relative rounded-2xl shadow-lg transition-shadow duration-300
                bg-gradient-to-br from-gray-800 via-gray-900 to-gray-950 p-[2px]
                ${i === services.length - 1 && services.length % 2 !== 0
                  ? "md:col-span-2 md:max-w-md md:mx-auto"
                  : ""}
              `}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="
                relative z-10 rounded-2xl bg-gray-900/80 backdrop-blur-md p-6
                transition duration-300 group-hover:bg-gray-900/90
                h-full
                flex flex-col justify-start
              ">
                {/* Icon */}
                <div className={`
                  flex items-center justify-center w-14 h-14 mb-4 rounded-full
                  bg-gradient-to-tr ${service.color} text-white shadow-lg
                  group-hover:scale-110 transition-transform duration-300
                `}>
                  <service.icon size={28} className="animate-pulse group-hover:animate-none" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 group-hover:text-gray-300 transition duration-300">
                  {service.desc}
                </p>

                {/* Glow effect */}
                <div className={`
                  absolute -inset-px z-0 rounded-2xl bg-gradient-to-tr ${service.color}
                  opacity-10 blur-2xl group-hover:opacity-20 transition duration-300
                `} />
              </div>
            </motion.div>
          ))}
        </div>


        {/* Tech Stack Footer */}
        <motion.div
          className="text-center mt-16 text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          We use <span className="text-white font-medium">React</span>, <span className="text-white font-medium">React Native</span>, <span className="text-white font-medium">Flask</span>, <span className="text-white font-medium">Node.js</span>, and <span className="text-white font-medium">MongoDB</span> to build scalable, future-ready applications.
        </motion.div>
      </div>
    </section>
  );
};

export default OurServices;
