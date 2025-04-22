import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import logo from "../images/Infoziant Logo (6) 2.png";
import profile1 from "../images/image 1.png"
import profile2 from "../images/Mask group 1.png"
import profile3 from "../images/Mask group-1 1.png"

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
      quote: 'Infoziant has been associated with Keenan &amp Associates for more than 5 years, and the security testing services provided by them make our application free from security threats. Tony and team are very supportive as they respond to us any time round the clock.',
      name: 'Mr. Bharat Saoji',
      position: 'Vice President IT, Keenan &amp Associates',
      profileImage: profile2 // import or pass the image URL here
    },
    {
      id: 2,
      stars: '⭐⭐⭐⭐⭐',
      quote: 'Infoziant security testing was crucial in finding the security flaws at Vasaits educational portal. The remediations provided by Infoziant were highly helpful for the development team to fix the security bugs.',
      name: 'Mr. Senthil Kumar',
      position: 'CEO, Vasa Infotech',
      profileImage: profile3
    },
    {
      id: 3,
      stars: '⭐⭐⭐⭐⭐',
      quote: 'Infoziant and Oasys is engaged for more than 3 years in various security testing projects, as Oasys we work on several government of India projects. Infoziant places a vital role in protecting them against cyber security threats. Tony and the team makes quick resolutions for the queries raised.',
      name: 'Mr. Ilanghovan K R',
      position: 'Managing Director, Oasys',
      profileImage: profile1
    }
  ];

  return (
    <section className="about-testimonials-section" ref={sectionRef}>
      <div className="testimonials-container">
        <h6>Testimonials</h6>
        <h2>What Our Clients Are Saying</h2>
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
