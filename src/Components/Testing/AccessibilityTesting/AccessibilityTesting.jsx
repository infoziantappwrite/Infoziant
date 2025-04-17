import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Eye, ShieldAlert, Target,
  Zap, MonitorCheck, CheckCircle2,
  AlertCircle, MessageCircle
} from 'lucide-react';

const AccessibilityTesting = () => {
  const [activeTab, setActiveTab] = useState('benefits');

  const data = {
    benefits: [
      { icon: <Eye className="text-white" size={24} />, title: "Inclusive Design", desc: "Ensure users of all abilities have equal access.", gradient: "from-emerald-500 to-teal-500" },
      { icon: <ShieldAlert className="text-white" size={24} />, title: "Legal Compliance", desc: "Meet WCAG and ADA requirements.", gradient: "from-rose-500 to-pink-600" },
      { icon: <Target className="text-white" size={24} />, title: "Wider Reach", desc: "Make your product usable by over 1 billion people.", gradient: "from-amber-400 to-orange-500" }
    ],
    tools: [
      { icon: <Zap className="text-white" size={24} />, title: "Axe Core", desc: "Fast automated scans for accessibility violations.", gradient: "from-blue-500 to-indigo-600" },
      { icon: <MonitorCheck className="text-white" size={24} />, title: "WAVE Tool", desc: "Real-time visual overlays and reports.", gradient: "from-sky-500 to-teal-400" },
      { icon: <CheckCircle2 className="text-white" size={24} />, title: "Lighthouse", desc: "Google's audit tool for performance and accessibility.", gradient: "from-orange-400 to-orange-500" }
    ],
    process: [
      { icon: <CheckCircle2 className="text-white" size={24} />, title: "Automated Testing", desc: "Initial scan with accessibility tools.", gradient: "from-emerald-500 to-teal-500" },
      { icon: <AlertCircle className="text-white" size={24} />, title: "Manual Review", desc: "Expert audits for issues automation can't detect.", gradient: "from-blue-500 to-indigo-600" },
      { icon: <MessageCircle className="text-white" size={24} />, title: "Actionable Reports", desc: "Clear remediation steps for improvements.", gradient: "from-rose-500 to-pink-600" }
    ]
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: 'easeOut'
      }
    })
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 px-4 sm:px-6 py-16 sm:py-24 min-h-screen flex items-center">
      <motion.div
        className="max-w-7xl mx-auto text-center space-y-16 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
        }}
      >
        {/* Header */}
        <motion.div
          className="space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
          }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-teal-500 via-teal-500 to-blue-600 bg-clip-text leading-tight py-2">
            Accessibility Testing Capabilities
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Ensuring your applications are accessible and inclusive for all users.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.6, delay: 0.3 } }
          }}
        >
          <div className="p-2 bg-white rounded-full shadow-lg flex flex-wrap gap-2 justify-center">
            {['benefits', 'tools', 'process'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-2 sm:px-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {data[activeTab].map((item, index) => (
            <motion.div
              key={index}
              className="relative rounded-3xl shadow-xl group overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              variants={cardVariants}
              custom={index}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-90`} />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              <div className="relative p-8 sm:p-10 z-10 flex flex-col items-center text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 mb-5 rounded-full bg-white bg-opacity-20 flex items-center justify-center shadow-inner">
                  {item.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white text-opacity-90 text-sm sm:text-base mb-6">{item.desc}</p>
                <motion.button
                  className="px-4 py-2 rounded-full bg-white bg-opacity-20 text-white text-sm font-medium hover:bg-opacity-30 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn more
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.6 } }
          }}
        >
          <p className="text-gray-500 text-sm sm:text-base">
            Start your journey towards digital inclusion today.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AccessibilityTesting;
