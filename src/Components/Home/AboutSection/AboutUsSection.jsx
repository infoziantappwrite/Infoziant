import React from "react";
import { motion } from "framer-motion";
import "./AboutUsSection.css";

import img1 from "../../../assests/Images/HomeAbout/1.png";
import img2 from "../../../assests/Images/HomeAbout/2.png";
import img3 from "../../../assests/Images/HomeAbout/3.png";
import img4 from "../../../assests/Images/HomeAbout/9.png";
import img5 from "../../../assests/Images/HomeAbout/5.png";
import img6 from "../../../assests/Images/HomeAbout/6.png";
import img7 from "../../../assests/Images/HomeAbout/7.png";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const motionProps = (delay = 0) => ({
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.2 },
  variants: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay },
    },
  },
});

const AboutUsSection = () => {
  return (
    <section className="about-abtNew">
      <div className="grid-abtNew">
        <motion.div
          className="image-box-abtNew large-abtNew"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <img src={img2} alt="Client 1" loading="lazy" />
        </motion.div>

        <motion.div className="image-box-abtNew small-abtNew" {...motionProps(0.1)}>
          <img src={img1} alt="Client 2" loading="lazy" />
        </motion.div>

        <motion.div className="image-box-abtNew medium-abtNew md:block" {...motionProps(0.2)}>
          <img src={img3} alt="Client 3" loading="lazy" />
        </motion.div>

        {/* ✅ Replaced Intro Text with Tailwind-based Design */}
        <motion.div
          {...motionProps(0.3)}
          className="md:col-span-2 relative p-[1px] rounded-2xl bg-gradient-to-r from-[#15f5ba] to-[#06f] shadow-xl"
        >
          <div className="bg-white/90 backdrop-blur-xl rounded-2xl px-6 sm:px-10 py-8 sm:py-12 text-center md:text-left font-sans text-gray-800">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-6 bg-gradient-to-r from-blue-600 via-teal-500 to-teal-400 bg-clip-text text-transparent tracking-tight">
              Welcome to Infoziant
            </h2>

            <ul className="space-y-4 text-base sm:text-lg leading-relaxed">
              <li>
                <span className="mr-2 text-teal-500">➤</span>
                Where <span className="text-gray-900 font-medium">skilling meets innovation</span> and{" "}
                <span className="text-gray-900 font-medium">education transforms into opportunity</span>.
              </li>
              <li>
                <span className="mr-2 text-teal-500">➤</span>
                Founded by seasoned tech leaders from global firms, <span className="text-gray-900 font-medium">Infoziant</span>{" "}
                <em className="italic text-gray-700">empowers students, enables careers, and delivers impactful digital solutions</em>.
              </li>
              <li>
                <span className="mr-2 text-teal-500">➤</span>
                From <span className="text-gray-900 font-medium">career-ready campuses</span> to{" "}
                <span className="text-gray-900 font-medium">Fortune 100 companies</span>, we{" "}
                <span className="text-gray-900 font-medium">build, train, connect, and elevate</span>.
              </li>
              <li>
                <span className="mr-2 text-teal-500">➤</span>
                Integrated expertise across <span className="text-gray-900 font-medium">education, technology, and talent</span>—{" "}
                <em className="italic text-gray-700">all under one roof</em>.
              </li>
            </ul>
          </div>
        </motion.div>



        <motion.div className="image-box-abtNew4 small-abtNew" {...motionProps(0.4)}>
          <img src={img4} alt="Client 4" loading="lazy" />
        </motion.div>

        <motion.div className="image-box-abtNew medium-abtNew hidden md:block" {...motionProps(0.5)}>
          <img src={img5} alt="Client 5" loading="lazy" />
        </motion.div>

        <motion.div className="image-box-abtNew large-abtNew" {...motionProps(0.6)}>
          <img src={img6} alt="Client 6" loading="lazy" />
        </motion.div>

        <motion.div className="image-box-abtNew large-abtNew" {...motionProps(0.7)}>
          <img src={img7} alt="Client 7" loading="lazy" />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection;
