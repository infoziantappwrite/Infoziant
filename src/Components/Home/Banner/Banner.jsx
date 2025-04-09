import React, { useEffect, useState } from "react";
import "./Banner.css";
import carrerImage from "../../../assests/Images/Banner/career.png";
import collaborationImage from "../../../assests/Images/Banner/Collaboration.png";
import edutechImage from "../../../assests/Images/Banner/edutech.png";
import codechefImage from "../../../assests/Images/Banner/codechef.png";
import techtalentImage from "../../../assests/Images/Banner/techtalent.png";
import itsolutionImage from "../../../assests/Images/Banner/it&solution.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    heading: "Career Development & Industry Readiness",
    text: "Career Development & Industry Readiness through expert training, internships, and top company placements.",
    image: carrerImage,
  },
  {
    heading: "Industry-Academia Collaboration (CoE)",
    text: "Bridging the gap between industry and academia.",
    image: collaborationImage,
  },
  {
    heading: "Edutech",
    text: "Technology-driven educational solutions.",
    image: edutechImage,
  },
  {
    heading: "CodeChef",
    text: "Competitive programming and coding challenges.",
    image: codechefImage,
  },
  {
    heading: "Tech Talent Services",
    text: "Connecting skilled tech talent with top firms.",
    image: techtalentImage,
  },
  {
    heading: "IT & Software Solutions",
    text: "IT & Software Solutions including cybersecurity, web development, and software testing for secure, high-quality digital experiences.",
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

  const { heading, text, image } = slides[index];
  const { firstHalf, secondHalf } = splitHeading(heading);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="home-banner">
      <img src={image} alt="Slide" className="home-banner-image" />
      <div className="home-banner-content">
        <h1>{firstHalf}</h1>
        <h2>{secondHalf}</h2>
        <p>{text}</p>
        <a href="#">Discover More →</a>
      </div>
      
    </section>
  );
};

export default Banner;
