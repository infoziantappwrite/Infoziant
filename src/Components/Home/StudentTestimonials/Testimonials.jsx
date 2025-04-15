import React, { useState, useEffect } from "react";
import "./Testimonials.css"; // Import the CSS file
import Azar from "../../../assests/Images/Testimonials/Azar.jpeg";

const testimonials = [
  {
    name: "Azar",
    role: "Placement Officer | Karpagam College of Engineering | Coimbatore",
    quote:
      "Infoziant has been a great support for our students, both in training and placements. Their sessions are practical and engaging, and the team is always approachable. We’ve seen real results, and we’re happy to keep working with them.",
    image: Azar,
    color: "pink",
  },
  {
    name: "Melten Karahan",
    role: "User Research | Nairobi",
    quote:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    color: "purple",
  },
  {
    name: "Zara Noor",
    role: "Design Lead | Dubai",
    quote:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    color: "blue",
  },
];

const TestimonialSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsToShow = 2;

  const handleNext = () => {
    if (startIndex + itemsToShow < testimonials.length) {
      setStartIndex(startIndex + 1);
    } else {
      // Loop back to start
      setStartIndex(0);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [startIndex]);

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        {/* Left Section */}
        <div className="testimonial-left">
          <h5 className="testimonial-label">Testimonial</h5>
          <h2 className="testimonial-heading">
            Don't Believe Me <br /> Check What Clients Think Of Us
          </h2>
          <div className="testimonial-buttons">
            <button
              onClick={handlePrev}
              className="testimonial-btn left"
              disabled={startIndex === 0}
            >
              &#60;
            </button>
            <button
              onClick={handleNext}
              className="testimonial-btn right"
              disabled={startIndex + itemsToShow >= testimonials.length}
            >
              &#62;
            </button>
          </div>
        </div>

        {/* Right Section - Testimonials */}
        <div className="testimonial-right">
          {testimonials
            .slice(startIndex, startIndex + itemsToShow)
            .map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-img-wrapper">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="testimonial-img"
                  />
                </div>
                <div className="testimonial-content">
                  <p className={`testimonial-quote quote-${testimonial.color}`}>
                    “
                  </p>
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  <p className="testimonial-role">{testimonial.role}</p>
                  <p className="testimonial-text">{testimonial.quote}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
