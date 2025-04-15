import React, { useEffect, useState } from "react";
import "./Banner.css";
import collaborationImage from "../../../assests/Images/Banner/banner1.jpeg";
import itsolutionImage from "../../../assests/Images/Banner/banner2.jpg";

const slides = [
  {
    heading: "Innovative Tech & Business Services",
    text: "Empowering growth through innovative tech solutions and digital acceleration services tailored for modern businesses.",
    image: collaborationImage,
  },
  {
    heading: "Campus to Corporate Services",
    text: "Bridging the gap between academia and industry with tailored programs that prepare students for corporate success.",
    image: itsolutionImage,
  },
];

const Banner = () => {
  const [index, setIndex] = useState(0);

  const splitHeading = (text) => {
    const words = text.split(" ");
    const middle = Math.ceil(words.length / 2);
    return {
      firstHalf: words.slice(0, middle).join(" "),
      secondHalf: words.slice(middle).join(" "),
    };
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000); // 5 seconds per slide
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="home-banner">
      {slides.map((slide, i) => {
        const { firstHalf, secondHalf } = splitHeading(slide.heading);
        return (
          <div
            key={i}
            className={`fade-slide ${index === i ? "active" : ""}`}
          >
            <img src={slide.image} alt={`Slide ${i}`} className="slide-image" />
            <div className="home-banner-content">
              <h1>{firstHalf}</h1>
              <h2>{secondHalf}</h2>
              <p>{slide.text}</p>
              <a href="#">Discover More →</a>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Banner;
