import { motion } from "framer-motion";
import "../css/HomeBanner.css";
import "../css/ServicesList.css";
import { useInView } from "react-intersection-observer";
import { GrThreats } from "react-icons/gr";
import { MdOutlineSecurity } from "react-icons/md";
import { AiOutlineSolution } from "react-icons/ai";
import {Link} from "react-router-dom"

export default function ServiceCards(){
    const { ref: ref1, inView: inView1 } = useInView({
        triggerOnce: false,
        threshold: 0.2,
      });
      const { ref: ref2, inView: inView2 } = useInView({
        triggerOnce: false,
        threshold: 0.2,
      });
      const { ref: ref3, inView: inView3 } = useInView({
        triggerOnce: false,
        threshold: 0.2,
      });
    
    const { ref: ref4, inView: inView4 } = useInView({
        triggerOnce: true,
        threshold: 0.2,
      });
    return(
        <div className="cybarhomeBanner">

        {/* feature starts */}
      <ul className="feature-ul-1">
        <motion.li
          className="feature-li-1"
          ref={ref4}
          initial={{ opacity: 0, y: 50 }}
          animate={inView4 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <h2>
            You Focus on Growth, <br />
            We Handle <span className="highlight">Security.</span>
          </h2>
          <br />
          <p>
            With our robust security solutions, Infoziant ensures your business
            remains protected from cyber threats, allowing you to focus on
            growth and innovation. We provide comprehensive cybersecurity
            services tailored to safeguard your data and infrastructure.
          </p>
          <br />
          <Link to="/contact">
          <motion.button
            className="gs-btn"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
          >
            Get Started
          </motion.button>
          </Link>
          
        </motion.li>

        <li className="feature-li-2">
          <motion.div
            className="fcard-1"
            ref={ref1}
            initial={{ rotate: 0, opacity: 0, y: 50 }}
            animate={inView1 ? { rotate: -10, opacity: 1, y: 0 } : {}}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
            whileHover={{
              rotate: 0,
              scale: 1.1,
              zIndex: 10,
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
          >
            <p>
              <GrThreats size={20} color="black" /> Advanced Threat Detection
            </p>
            <ul>
              <li> AI-based threat detection</li>
              <li>Monitors network activity</li>
              <li>Real-time alerts</li>
            </ul>
          </motion.div>

          <motion.div
            className="fcard-2"
            ref={ref2}
            initial={{ rotate: 0, opacity: 0, y: 50 }}
            animate={inView2 ? { rotate: 10, opacity: 1, y: 0 } : {}}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
            whileHover={{
              rotate: 0,
              scale: 1.1,
              zIndex: 10,
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
          >
            <p>
              <MdOutlineSecurity size={20} color="black" />
              Uncompromised Security
            </p>
            <ul>
              <li>Strong data encryption</li>
              <li>Global security standards</li>
              <li>Regular security audits</li>
            </ul>
          </motion.div>

          <motion.div
            className="fcard-3"
            ref={ref3}
            initial={{ y: 50, opacity: 0 }}
            animate={inView3 ? { y: 0, opacity: 1 } : {}}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
            whileHover={{
              rotate: 0,
              scale: 1.1,
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
          >
            <p>
              <AiOutlineSolution size={20} color="white" /> Comprehensive
              Solutions
            </p>
            <ul>
              <li>Tailored vulnerability checks</li>
              <li>Full penetration testing</li>
              <li>Ongoing security support</li>
            </ul>
          </motion.div>
        </li>
      </ul>
      {/* feature ends */}
        
        </div>
    )
}