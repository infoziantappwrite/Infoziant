import React, { useRef, useEffect } from "react";
import map from "../../../assests/Images/Ourservice/Techtalent/map.png";
import { motion, useInView, useAnimation } from "framer-motion";

const GlobalReachMap = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8 }
        }
      }}
      className="bg-gradient-to-b from-gray-50 to-white py-20 px-4 text-gray-800 font-sans"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6 }
            }
          }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold pb-4 bg-gradient-to-r from-blue-600 via-teal-500 to-teal-600 bg-clip-text text-transparent">
            Global Reach
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-8 max-w-4xl mx-auto text-lg">
            Delivering digital solutions and talent across borders – from the US to the Middle East and beyond.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, delay: 0.2 }
            }
          }}
          className="flex items-center justify-center"
        >
          <div className="max-w-3xl w-full overflow-hidden rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105">
            <img
              src={map}
              alt="Global Reach Map"
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default GlobalReachMap;
