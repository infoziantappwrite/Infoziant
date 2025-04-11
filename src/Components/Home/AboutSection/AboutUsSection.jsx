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
          <img src={img1} alt="Client 1" loading="lazy" />
        </motion.div>

        <motion.div className="image-box-abtNew small-abtNew" {...motionProps(0.1)}>
          <img src={img2} alt="Client 2" loading="lazy" />
        </motion.div>

        <motion.div className="image-box-abtNew medium-abtNew  md:block" {...motionProps(0.2)}>
          <img src={img3} alt="Client 3" loading="lazy" />
        </motion.div>

        <motion.div className="intro-box-abtNew" {...motionProps(0.3)}>
          <h2>Welcome to Infoziant</h2>
          <p>
  Where <strong>skilling meets innovation</strong>, and <strong>education transforms into opportunity</strong>.<br /><br />
  Founded by seasoned tech leaders from top global firms, <strong>Infoziant</strong> has evolved into a trusted partner for institutions and industries —<br />
  <em>empowering students, enabling careers, and delivering impactful digital solutions.</em><br /><br />
  From shaping college campuses into <strong>career-ready ecosystems</strong> to supporting <strong>Fortune 100 companies</strong> —<br />
  <strong>we build, we train, we connect, and we elevate.</strong><br /><br />
  With end-to-end solutions in <strong>education, tech, and talent</strong>,<br />
  we collaborate to nurture future professionals — <em>all under one roof.</em>
</p>

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

export default AboutUsSection;
