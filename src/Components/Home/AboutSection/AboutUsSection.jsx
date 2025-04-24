import React from "react";
import { motion } from "framer-motion";
import img1 from "../../../assests/Images/HomeAbout/1.png";
import img2 from "../../../assests/Images/HomeAbout/2.png";
import img3 from "../../../assests/Images/HomeAbout/3.png";
import img4 from "../../../assests/Images/HomeAbout/9.png";
import img5 from "../../../assests/Images/HomeAbout/5.png";
import img6 from "../../../assests/Images/HomeAbout/6.png";
import img7 from "../../../assests/Images/HomeAbout/7.png";

// Define image positions around the center content
const imagePositions = [
  { img: img1, classes: "top-4 right-[-3rem] md:-top-4 md:right-[-2rem] w-32 h-32 md:w-44 md:h-44 lg:w-72 lg:h-56" },
  { img: img2, classes: "top-4 lrgy-[-3rem] md:-top-10 md:left-[-2rem] w-36 h-36 md:w-48 md:h-48 lg:w-80 lg:h-64" },
  { img: img3, classes: "top-1/3 left-[-4rem] md:left-[-2.9rem] w-50 h-50 md:w-50 md:h-50 lg:w-72 lg:h-72" },
  { img: img4, classes: "top-1/3 right-[-4rem] md:right-[-2.8rem] w-50 h-50 md:w-50 md:h-50 lg:w-70 lg:h-72" },
  { img: img6, classes: "bottom-8 left-[-3rem] md:-bottom-20 md:left-[-2rem] w-32 h-32 md:w-44 md:h-44 lg:w-96 lg:h-56" },
  { img: img5, classes: "-bottom-20 right-[26rem] transform w-36 h-36 md:w-48 md:h-48 lg:w-96 lg:h-56" },
  { img: img7, classes: "bottom-8 right-[-3rem] md:-bottom-20 md:right-[-2rem] w-32 h-32 md:w-44 md:h-44 lg:w-96 lg:h-56" },
];

const fadeInScale = (delay = 0) => ({
  hidden: { opacity: 0, y: 30, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut", delay },
  },
});

const floatAnimation = {
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0, 10, 0],
    transition: {
      duration: 5,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
    },
  },
};

const AboutUsSection = () => (
  <section
    id="welcome-section"
    className="relative w-full py-24 px-6 md:px-12 bg-gradient-to-b from-white to-blue-50 overflow-hidden"
  >
    {/* Decorative background elements */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100 rounded-full opacity-30"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-teal-100 rounded-full opacity-30"></div>
    </div>

    <div className="relative max-w-7xl mx-auto min-h-[600px] md:min-h-[700px]">
      {/* Mobile: 3 full-width images above content */}
      <div className="md:hidden mb-6 flex flex-col gap-4">
        {imagePositions.slice(0, 3).map((item, idx) => (
          <motion.div
            key={idx}
            variants={fadeInScale(idx * 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="w-full rounded-lg overflow-hidden shadow-md"
          >
            <img
              src={item.img}
              alt={`Client ${idx + 1}`}
              className="w-full h-auto object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Center Content */}
      <motion.div
        variants={fadeInScale(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative mx-auto max-w-2xl flex flex-col justify-center items-center text-center bg-white bg-opacity-90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 z-20"
      >
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-blue-600 to-teal-400 rounded-full"></div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-teal-500 to-teal-400 bg-clip-text text-transparent mb-4">
          Welcome to Infoziant
        </h2>

        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent mb-6">
          Where Skilling Meets Innovation & Education Transforms into Opportunity
        </h3>

        <p className="text-gray-700 text-base md:text-lg max-w-3xl mb-8">
          Founded by seasoned tech leaders from global firms like{' '}
          <span className="text-blue-600 font-medium">Symantec, McAfee, and EMC</span>, we've grown
          into a trusted partner for institutions and industries empowering students, enabling
          careers, and delivering impactful digital solutions.
        </p>

        <p className="text-gray-700 text-base md:text-lg max-w-3xl mb-8">
          From shaping college campuses into career-ready ecosystems to supporting{' '}
          <span className="text-blue-600 font-medium">Fortune 100 companies</span>, we build, train, connect and elevate
          
        </p>

        <p className="text-gray-700 text-base md:text-lg max-w-3xl">
          With end-to-end solutions in{' '}
          <span className="text-blue-600 font-medium">education, tech, and talent</span>, we
          collaborate to nurture future professionals all under one roof.
        </p>

        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-teal-400 to-blue-600 rounded-full"></div>
      </motion.div>

      {/* Mobile: 3 full-width images below content */}
      <div className="md:hidden mt-6 flex flex-col gap-4">
        {imagePositions.slice(3, 6).map((item, idx) => (
          <motion.div
            key={idx + 3}
            variants={fadeInScale((idx + 3) * 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="w-full rounded-lg overflow-hidden shadow-md"
          >
            <img
              src={item.img}
              alt={`Client ${idx + 4}`}
              className="w-full h-auto object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Desktop: Absolute images around content */}
      {imagePositions.map((item, idx) => (
        <motion.div
          key={idx}
          variants={fadeInScale(idx * 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className={`absolute hidden md:block ${item.classes} z-10`}
        >
          <motion.div
            initial="initial"
            animate="animate"
            variants={floatAnimation}
            className="w-full h-full rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <img src={item.img} alt={`Client ${idx + 1}`} className="w-full h-full object-cover" />
          </motion.div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default AboutUsSection;
