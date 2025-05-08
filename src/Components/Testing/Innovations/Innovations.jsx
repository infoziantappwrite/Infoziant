import React from "react";
import { motion } from "framer-motion";
import { 
  ChevronRight,
  FileSpreadsheet,
  Network,
  Bot,
  Settings,
  MessageSquare,
  LayoutDashboard
} from "lucide-react";

const innovations = [
  {
    name: "Fillo",
    desc: "Excel utility for dynamic test data handling.",
    icon: <FileSpreadsheet size={28} />,
    color: "bg-gradient-to-r from-purple-500 to-pink-600",
    hoverGradient: "from-purple-600 to-pink-700",
    iconColor: "text-purple-500",
    borderColor: "border-purple-100",
  },
  {
    name: "VisGrid",
    desc: "Visual no-code test flow builder.",
    icon: <Network size={28} />,
    color: "bg-gradient-to-r from-indigo-500 to-blue-600",
    hoverGradient: "from-indigo-600 to-blue-700",
    iconColor: "text-indigo-500",
    borderColor: "border-indigo-100",
  },
  {
    name: "Robotil",
    desc: "RPA test support utility for robotic workflows.",
    icon: <Bot size={28} />,
    color: "bg-gradient-to-r from-emerald-500 to-teal-600",
    hoverGradient: "from-emerald-500 to-teal-600",
    iconColor: "text-emerald-500",
    borderColor: "border-emerald-100",
  },
  {
    name: "Weldree",
    desc: "Deployment config automation for test envs.",
    icon: <Settings size={28} />,
    color: "bg-gradient-to-r from-orange-500 to-yellow-600",
    hoverGradient: "from-orange-500 to-yellow-600",
    iconColor: "text-orange-500",
    borderColor: "border-orange-100",
  },
  {
    name: "Gyra",
    desc: "Slack-integrated test reporting bot.",
    icon: <MessageSquare size={28} />,
    color: "bg-gradient-to-r from-cyan-500 to-blue-600",
    hoverGradient: "from-cyan-500 to-blue-600",
    iconColor: "text-cyan-500",
    borderColor: "border-cyan-100",
  },
  {
    name: "Tester Companion",
    desc: "Interactive dashboards for QA insights.",
    icon: <LayoutDashboard size={28} />,
    color: "bg-gradient-to-r from-lime-500 to-emerald-600",
    hoverGradient: "from-lime-500 to-emerald-600",
    iconColor: "text-lime-500",
    borderColor: "border-lime-100",
  },
];

const OurInnovationsPage = () => {
  return (
    <section className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#020617] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-5xl font-bold bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">
            Our Innovations
          </span>
          <p className="text-gray-400 mt-5 text-lg max-w-2xl mx-auto">
            Tools crafted in-house at Infoziant to elevate every phase of software testing — from data management to dashboarding and automation.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {innovations.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card */}
              <div className={`border ${item.borderColor} ${item.color} rounded-2xl p-6 shadow-sm transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 z-10 relative overflow-hidden h-full`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${item.hoverGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}></div>

                <div className="flex items-start space-x-5 relative z-10">
                  <div className={`w-14 h-14 bg-white rounded-xl shadow-inner flex items-center justify-center ${item.iconColor}`}>
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-white">
                      {item.name}
                    </h3>
                    <p className="text-gray-200 mt-2 leading-relaxed group-hover:text-white/90">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Line */}
              <div className={`h-1 ${item.color} w-1/6 group-hover:w-full transition-all duration-500 rounded-b-lg`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurInnovationsPage;