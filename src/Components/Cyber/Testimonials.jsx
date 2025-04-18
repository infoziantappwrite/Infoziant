import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './css/Testimonials.css';
import { GrNext } from "react-icons/gr";

// Testimonial Data
const testimonials = [
  {
    name: "Mr. Senthil Kumar",
    title: "CEO , Vasa infotech",
    content: "Infoziant security testing was crucial in finding the security flaws at vasaits educational portal. There were several applications inside vasaits and Infoziant team organzised the metrics for security checks in stages. The remediations provided by infoziant is highly helpful for the development team to fix the security bugs.",
    image:"./testimonial-1.jpg"
  },
  {
    name: "Mr. Ilanghovan K R",
    title: "Managing Director, Oasys",
    content: "Infoziant and Oasys is engaged for more than 3 years in various security testing projects, as oasys we work on several government of India projects- Infoziant places a vital role in protecting them against cyber security threats. Tony and the team makes quick resolutions for the queries raised.",
    image:"./testimonial-2.jpg"  
  },
  {
    name: "Mr. Bharat Saoji",
    title: "Vice President IT, Keenan &amp; Associates",
    content: "Infoziant is been associated with Keenan &amp; Associates for more than 5 years and the security testing services provided by them makes our application free from security threats. Tony and team is very supportive as they respond to us any time round the clock",
    image:"./testimonial-3.jpg"  
  },
];

const TestimonialSlider = () => {
  const [page, setPage] = useState(0);

  // Function to navigate to the next testimonial
  const nextTestimonial = () => {
    setPage((prev) => (prev + 1) % testimonials.length); 
  };

  return (
    <motion.div 
      className="testimonial-container"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8, ease: "easeOut" }} 
      viewport={{ amount: 0.75, once: true }} 
    >
      {/* Section 1: Intro Content */}
      <motion.div 
        className="testimonial-intro"
        initial={{ opacity: 0, x: -50 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        viewport={{ amount: 0.75, once: true }} 
      >
        <h2>What Our <span className='highlight'>Clients</span> Say</h2>
        <p>
          We are honored to share some of the feedback from our esteemed clients.
          Their satisfaction is our top priority, and here are some of their thoughts.
        </p>
      </motion.div>
    
      {/* Section 2: Testimonial Slider */}
      <motion.div 
        className="testimonial-slider"
        initial={{ opacity: 0, x: 50 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        viewport={{ amount: 0.75, once: true }} 
      >
        <div className="testimonial-box">
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ x: 300, opacity: 0 }} 
              animate={{ x: 0, opacity: 1 }} 
              exit={{ x: -300, opacity: 0 }}
              transition={{
                duration: 0.6, 
                ease: "easeInOut",
              }}
              className="testimonial-content-box"
            >
              <p className="testimonial-content">"{testimonials[page].content}"</p>
              <img className="testimonial-img" src={testimonials[page].image} alt={testimonials[page].name}/>
              <h3 className="testimonial-name">{testimonials[page].name}</h3>
              <p className="testimonial-title">{testimonials[page].title}</p>
            </motion.div>
          </AnimatePresence>
          <button onClick={nextTestimonial} className="next-button">
            <GrNext />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TestimonialSlider;
