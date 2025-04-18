import React from 'react';
import { motion } from 'framer-motion';
import {
  Bug,
  ClipboardCheck,
  UserCheck,
  Eye,
  ShieldCheck,
  BarChart,
  Search,
  RotateCcw,
  CheckCircle,
} from 'lucide-react';

const steps = [
  { icon: <Search />, title: 'Test Planning', desc: 'Define goals, scope, and resources.' },
  { icon: <ClipboardCheck />, title: 'Test Case Design', desc: 'Write test cases based on requirements.' },
  { icon: <Bug />, title: 'Execution', desc: 'Manually run test cases, report bugs.' },
  { icon: <RotateCcw />, title: 'Re-Testing', desc: 'Verify resolved bugs and edge cases.' },
  { icon: <CheckCircle />, title: 'Sign Off', desc: 'Final approval for release readiness.' },
];

const features = [
  {
    icon: <UserCheck className="text-teal-400 w-8 h-8" />,
    title: 'Real-World Testing',
    desc: 'Validate under real conditions and devices.',
  },
  {
    icon: <Eye className="text-yellow-400 w-8 h-8" />,
    title: 'Exploratory Coverage',
    desc: 'Unscripted flows reveal hidden bugs.',
  },
  {
    icon: <ShieldCheck className="text-emerald-400 w-8 h-8" />,
    title: 'Security & Accessibility',
    desc: 'Focus on usability and compliance.',
  },
  {
    icon: <BarChart className="text-purple-400 w-8 h-8" />,
    title: 'Detailed Reporting',
    desc: 'Actionable insights with reports and dashboards.',
  },
];

const ManualTesting = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#020617] px-6 py-16 text-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
        className="max-w-7xl mx-auto text-center space-y-10"
      >
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
              Manual Testing Services
            </span>
        </motion.h2>
              
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="max-w-3xl mx-auto text-gray-300 text-md md:text-lg"
        >
          From exploratory and regression to usability testing — our seasoned testers ensure your apps are battle-ready for real-world users.
        </motion.p>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * i }}
              className="bg-[#1e293b] rounded-xl p-6 shadow-xl hover:scale-105 transform transition duration-300 border border-white/10"
            >
              <div className="mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold text-cyan-300 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-400">{f.desc}</p>
            </motion.div>
          ))}
        </div>

       {/* Enhanced Timeline */}
<div className="mt-16 relative">
  <h3 className="text-3xl font-bold text-center mb-12 text-teal-400">
    Our Manual Testing Process
  </h3>
  <div className="relative w-full max-w-5xl mx-auto">
    {/* Vertical Line */}
    <motion.div
      initial={{ scaleY: 0 }}
      whileInView={{ scaleY: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full origin-top"
    />

    {/* Timeline Cards */}
    {steps.map((step, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: i * 0.2 }}
        className={`relative mb-8 md:mb-6 flex flex-col md:flex-row items-center ${
          i % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
        }`}
      >
        {/* Connector Dot */}
        <div className="w-4 h-4 bg-cyan-400 border-4 border-white rounded-full z-10 absolute left-1/2 transform -translate-x-1/2" />

        {/* Card */}
        <div
          className={`w-full md:w-[46%] p-5 rounded-xl bg-[#111827] border border-white/10 shadow-lg hover:border-cyan-500 hover:shadow-cyan-500/20 transition-all duration-300 ${
            i % 2 === 0 ? 'md:ml-8' : 'md:mr-8'
          }`}
        >
          <div className="flex items-center gap-4 mb-2">
            <div className="bg-gradient-to-br from-cyan-600 to-blue-600 p-2 rounded-full">
              {step.icon}
            </div>
            <h4 className="text-lg font-semibold text-cyan-300">{step.title}</h4>
          </div>
          <p className="text-gray-400 text-sm leading-snug">{step.desc}</p>
        </div>
      </motion.div>
    ))}
  </div>
</div>


        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16"
        >
          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:opacity-90 hover:drop-shadow-xl transition duration-300">
            Book Your QA Session
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ManualTesting;
