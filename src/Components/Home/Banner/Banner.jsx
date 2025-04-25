import React, { useEffect, useState } from "react";
import Graphic1 from "../../../assests/Images/Banner/SE2.png";
import Graphic2 from "../../../assests/Images/Banner/T1.png";

const slides = [
  {
    heading: "Innovative Tech & Business Services",
    text: "Empowering growth through innovative tech solutions and digital acceleration services tailored for modern businesses.",
    image: Graphic1,
  },
  {
    heading: "Campus to Corporate Services",
    text: "Bridging the gap between academia and industry with tailored programs that prepare students for corporate success.",
    image: Graphic2,
  },
];

const Banner = () => {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [scrollToTech, setScrollToTech] = useState(false); // Toggle scroll

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setIndex((i) => (i + 1) % slides.length);
        setTimeout(() => {
          setIsAnimating(false);
        }, 100);
      }, 500);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const { heading, text } = slides[index];

  const handleScroll = () => {
    const targetId = scrollToTech ? "services-section" : "tech-section";
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn(`#${targetId} not found`);
    }
    setScrollToTech(!scrollToTech);
  };

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-[#0b1336] via-[#051026] to-[#020817] overflow-hidden flex items-center">
      {/* Background Particles & Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="particles-container">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/20"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                opacity: Math.random() * 0.7 + 0.3,
                animation: `float ${Math.random() * 15 + 10}s linear infinite`,
                animationDelay: `-${Math.random() * 20}s`,
              }}
            />
          ))}
        </div>
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-cyan-300/20 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-teal-500/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-blue-600/20 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Content */}
      <div className="mt-4 lg:mt-0 container mx-auto px-6 lg:px-20 z-10 flex flex-col lg:flex-row items-center gap-10">
        {/* Text Section */}
        <div className="lg:w-2/3 text-center lg:text-left space-y-6">
          <span className="hidden sm:inline-block bg-white/10 text-sm text-white px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm border border-white/10 shadow-lg transform hover:scale-105 transition-all">
            Our Services
          </span>

          <div className={`transform transition-all duration-700 ${isAnimating ? 'opacity-0 -translate-y-6' : 'opacity-100 translate-y-0'}`}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-2xl mx-auto lg:mx-0">
              {heading.split(" ").map((word, index) => {
                if (["Innovative", "Tech", "Campus", "to"].includes(word)) {
                  return (
                    <span key={index} className="bg-gradient-to-r from-cyan-300 via-teal-500 to-blue-600 bg-clip-text text-transparent">
                      {word}{" "}
                    </span>
                  );
                }
                return <span key={index}>{word} </span>;
              })}
            </h1>
          </div>

          <div className={`transform transition-all duration-700 delay-100 ${isAnimating ? 'opacity-0 -translate-y-6' : 'opacity-100 translate-y-0'}`}>
            <p className="text-gray-300 max-w-md mx-auto lg:mx-0 text-base sm:text-lg backdrop-blur-sm">
              {text}
            </p>
          </div>

          <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transform transition-all duration-700 delay-200 ${isAnimating ? 'opacity-0 -translate-y-6' : 'opacity-100 translate-y-0'}`}>
            <button
              onClick={handleScroll}
              className="group px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base bg-gradient-to-r from-cyan-300 via-teal-500 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-teal-500/50 transform hover:scale-105 transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10">Discover More</span>
              <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/3">
          <div className={`transform transition-all duration-1000 ${isAnimating ? 'opacity-0 translate-y-6' : 'opacity-100 translate-y-0'}`}>
            <img
              src={slides[index].image}
              alt="Slide illustration"
              className="w-full max-w-[250px] sm:max-w-sm md:max-w-md lg:max-w-lg h-auto mx-auto animate-float rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Dotted Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
            radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 10px 10px",
        }}
      />
    </section>
  );
};

export default Banner;
