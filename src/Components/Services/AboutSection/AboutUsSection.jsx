import React from "react";
import { motion } from "framer-motion";
import { FiPhoneCall, FiSearch, FiShare2 } from "react-icons/fi";

// Assuming these image imports remain the same
import img1 from "../../../assests/Images/HomeAbout/1.png";
import img2 from "../../../assests/Images/HomeAbout/2.png";
import img3 from "../../../assests/Images/HomeAbout/3.png";

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

// Reusable Card Component
const TextCard = ({ icon: Icon, title, delay, color }) => (
  <motion.div 
    {...motionProps(delay)}
    className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden relative z-10 group h-full`}
  >
    <div className={`absolute -z-10 -bottom-6 -right-6 w-32 h-32 rounded-full bg-opacity-20 ${color} transition-all duration-300 group-hover:scale-150`}></div>
    <div className={`inline-flex items-center justify-center p-3 rounded-xl mb-5 ${color} bg-opacity-20`}>
      <Icon className={`text-2xl ${color.replace('bg-', 'text-')}`} />
    </div>
    <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
    <p className="text-gray-600 mb-5">Our specialized expertise helps businesses transform and thrive in today's digital landscape.</p>
    <a href="#" className={`inline-flex items-center font-medium ${color.replace('bg-', 'text-')} hover:underline`}>
      Learn more
      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
      </svg>
    </a>
  </motion.div>
);

// Reusable Image Card Component
const ImageCard = ({ image, title, delay }) => (
  <motion.div {...motionProps(delay)} className="rounded-2xl overflow-hidden shadow-lg group h-full">
    <div className="relative w-full h-full">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
        <div className="p-6">
          <h3 className="text-white font-bold text-xl">{title}</h3>
        </div>
      </div>
    </div>
  </motion.div>
);

const AboutUsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <motion.div {...motionProps(0.1)} className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-4">About Us</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">
            Welcome to Infoziant
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto"></div>
        </motion.div>

        {/* First Row - Images and Text Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Image Card 1 */}
          <div className="h-64 md:h-full">
            <ImageCard 
              image={img1}
              title="Innovation"
              delay={0.2}
            />
          </div>

          {/* Text Card */}
          <TextCard 
            icon={FiPhoneCall} 
            title="Expert Support" 
            delay={0.3}
            color="bg-gradient-to-r from-indigo-500 to-fuchsia-400" 
          />

          {/* Image Card 2 */}
          <div className="h-64 md:h-full">
            <ImageCard 
              image={img2}
              title="Technology"
              delay={0.4}
            />
          </div>
        </div>

        {/* Main Content */}
        <motion.div {...motionProps(0.5)} className="bg-white p-10 rounded-2xl shadow-xl mb-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-teal-400 to-blue-500"></div>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              At Infoziant, we specialize in developing innovative web and mobile applications that drive business growth.
              Our expertise spans custom web solutions, e-commerce platforms, enterprise applications, and mobile-friendly websites.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              We ensure every project meets the highest standards of security, performance, and user experience.
              From startups to large enterprises, we deliver solutions that enhance digital presence and operational efficiency.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              With a team of experienced developers, we ensure every project meets the highest quality, security,
              and performance standards to drive business success.
            </p>
          </div>
        </motion.div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Text Card 1 */}
          <TextCard 
            icon={FiSearch} 
            title="Research & Analysis" 
            delay={0.6}
            color="bg-gradient-to-r from-yellow-400 to-orange-500" 
          />

          {/* Image Card */}
          <div className="h-64 md:h-full">
            <ImageCard 
              image={img3}
              title="Connectivity"
              delay={0.7}
            />
          </div>

          {/* Text Card 2 */}
          <TextCard 
            icon={FiShare2} 
            title="Digital Marketing" 
            delay={0.8}
            color="bg-gradient-to-r from-green-400 to-emerald-600" 
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;