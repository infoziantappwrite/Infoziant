import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import logo from "../images/Infoziant Logo (6) 2.png";
import image1 from "../../../assests/Images/Testimonials/Nirmal-Sathyaraj-R.jpeg";
import image2 from "../../../assests/Images/Testimonials/Alavudeen.png";
import image3 from "../../../assests/Images/Testimonials/Sundar.jpg";



const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const testimonials = [
    {
      id: 1,
      stars: '⭐⭐⭐⭐⭐',
      quote: 'Infoziant has been a great support for our students in training and placements. Their sessions are practical, engaging, and the team is approachable. We’ve seen real results and are happy to keep working with them.',
      name: 'Nirmal',
      position: 'Placement Officer  | Sri Shanmugha College of Engineering and Technology',
      profileImage: image1
    },
    {
      id: 2,
      stars: '⭐⭐⭐⭐⭐',
      quote: 'Infoziant’s training and their collaboration with CodeChef have been highly effective. The sessions are industry-focused and impactful. We appreciate their support in placements and training. It’s been a smooth, professional journey with excellent results for our students.',
      name: 'Dr Alavudeen A',
      position: 'Director-Corporate Relations | Kalasalingam University Srivilliputtur',
      profileImage: image2
    },
    {
      id: 3,
      stars: '⭐⭐⭐⭐⭐',
      quote: 'CodeChef played a crucial role in my placement journey! The structured learning, coding challenges, and mock contests helped me sharpen my problem-solving skills. Thanks to CodeChef, I secured placements at Tech Mahindra and CTS.',
      name: 'Sundar Karthik',
      position: 'Student  | Panimalar Engineering College',
      profileImage: image3
    }
  ];
  

  return (
    <section className="about-testimonials-section" ref={sectionRef}>
      <div className="testimonials-container">
        <h6>Testimonials</h6>
        <h2>Voices of Our Valued Partners</h2>
        <div className="testimonials-wrapper">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="testimonial-item"
              initial={{ y: "100px", opacity: 0 }}
              animate={{ y: isVisible ? 0 : "50px", opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.1 * testimonial.id }} // Staggered delay for each testimonial
            >
              <div className="testimonial-content">
                <div className="stars">{testimonial.stars}</div>
                <p>{testimonial.quote}</p>
              </div>
              <div className="testimonial-author">
                <img src={testimonial.profileImage} alt={`Client ${testimonial.id}`} />
                <div className="author-details">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="background-icon">
        <img src={logo} alt="Background Icon" />
      </div>
    </section>
  );
};

export default Testimonials;
