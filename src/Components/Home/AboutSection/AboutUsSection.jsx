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
        {/* img2: Hidden on mobile */}
        <motion.div
          className="image-box-abtNew large-abtNew hidden md:block"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <img src={img2} alt="Client 1" loading="lazy" />
        </motion.div>

        {/* img1: Visible on all */}
        <motion.div className="image-box-abtNew4 small-abtNew hidden md:block" {...motionProps(0.1)}>
          <img src={img1} alt="Client 2" loading="lazy" />
        </motion.div>

        {/* img3: Hidden on mobile */}
        <motion.div className="image-box-abtNew medium-abtNew hidden md:block" {...motionProps(0.2)}>
          <img src={img3} alt="Client 3" loading="lazy" />
        </motion.div>

        {/* Content: Visible on all */}
        <motion.div {...motionProps(0.3)} className="card-abtNew-sec md:col-span-2">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-center bg-gradient-to-r from-blue-600 via-teal-500 to-teal-400 bg-clip-text text-transparent tracking-tight">
            Welcome to Infoziant
          </h2>
          <p className="text-base sm:text-lg text-gray-700">
            Where <span className="text-gray-900 font-medium">skilling meets innovation</span>, and{" "}
            <span className="text-gray-900 font-medium">education transforms into opportunity</span>. Founded by seasoned tech leaders from top global firms,{" "}
            <span className="text-gray-900 font-medium">Infoziant</span> has evolved into a trusted partner for institutions and industries — empowering students, enabling careers, and delivering impactful digital solutions. From shaping college campuses into career-ready ecosystems to supporting{" "}
            <span className="text-gray-900 font-medium">Fortune 100 companies</span> we{" "}
            <span className="text-gray-900 font-medium">build</span>,{" "}
            <span className="text-gray-900 font-medium">train</span>,{" "}
            <span className="text-gray-900 font-medium">connect</span>, and{" "}
            <span className="text-gray-900 font-medium">elevate</span>. With end-to-end solutions in{" "}
            <span className="text-gray-900 font-medium">education, tech, and talent</span>, we collaborate to nurture future professionals — all under one roof.
          </p>
        </motion.div>

        {/* img4: Hidden on mobile */}
        <motion.div className="image-box-abtNew4 small-abtNew hidden md:block" {...motionProps(0.4)}>
          <img src={img4} alt="Client 4" loading="lazy" />
        </motion.div>

        {/* img5: Visible on all */}
        <motion.div className="image-box-abtNew medium-abtNew block" {...motionProps(0.5)}>
          <img src={img5} alt="Client 5" loading="lazy" />
        </motion.div>

        {/* img6: Hidden on mobile */}
        <motion.div className="image-box-abtNew4 small-abtNew hidden md:block" {...motionProps(0.6)}>
          <img src={img6} alt="Client 6" loading="lazy" />
        </motion.div>

        {/* img7: Hidden on mobile */}
        <motion.div className="image-box-abtNew large-abtNew hidden md:block" {...motionProps(0.7)}>
          <img src={img7} alt="Client 7" loading="lazy" />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection;
