import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import {
  GraduationCap,
  Briefcase,
  Users,
  BarChart,
  Code,
  BookOpen,
  Building2,
} from "lucide-react";

const stats = [
  { label: "Partnered Colleges", value: 57, suffix: "+", icon: GraduationCap, color: "from-purple-500 to-pink-500" },
  { label: "Companies Hiring per College", value: 115, suffix: "+", icon: Briefcase, color: "from-yellow-400 to-orange-500" },
  { label: "Students Placed", value: 7510, suffix: "+", icon: Users, color: "from-green-400 to-emerald-600" },
  { label: "CTC Packages up to", value: 1.02, suffix: " Cr", decimals: 2, icon: BarChart, color: "from-indigo-500 to-fuchsia-600" },
  { label: "Internships Facilitated", value: 6800, suffix: "+", icon: BookOpen, color: "from-cyan-400 to-blue-600" },
  { label: "Students Trained", value: 21000, suffix: "+", icon: Code, color: "from-rose-500 to-pink-600" },
  { label: "Industry Collaborations & CoEs", value: 53, suffix: "+", icon: Building2, color: "from-lime-400 to-green-500" },
];

export default function StatsScroller() {
  const [startCount, setStartCount] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      setStartCount(false); // Reset count
      setTimeout(() => setStartCount(true), 300); // Restart animation
    }
  }, [inView]);

  return (
    <motion.section
      ref={ref}
      className="bg-gray-100 py-16 px-4 sm:px-6 md:px-10 xl:px-16"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex flex-wrap justify-center gap-3 max-w-screen-xl mx-auto">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="group relative w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-0.75rem)] xl:w-[calc(25%-0.75rem)] overflow-hidden rounded-xl bg-white text-gray-800 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="relative p-3 sm:p-5 flex flex-col items-center text-center h-full">
              <div className={`relative mb-2 w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-gradient-to-br ${stat.color} shadow-md group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-110`}>
                <stat.icon size={18} className="text-white sm:size-[22px]" strokeWidth={2} />
              </div>
              <div className="mt-1">
                <div className={`text-xl sm:text-3xl font-bold mb-1 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}>
                  {startCount && (
                    <CountUp start={0} end={stat.value} duration={2.5} decimals={stat.decimals || 0} suffix={stat.suffix} />
                  )}
                </div>
                <p className="text-xs sm:text-base text-gray-600 font-medium">{stat.label}</p>
              </div>
              <motion.div className={`absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r ${stat.color}`} initial={{ scaleX: 0 }} whileHover={{ scaleX: 1 }} transition={{ duration: 0.3 }} />
            </div>
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
