import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";




const Banner = ({slides}) => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[70vh] sm:h-[90vh] w-full overflow-hidden bg-black font-sans">
  {slides.map((slide, i) => (
    <div
      key={i}
      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
        index === i ? "opacity-100 z-10" : "opacity-0 z-0"
      }`}
    >
      <img
        src={slide.image}
        alt={`Slide ${i}`}
        className="w-full h-full object-cover absolute inset-0 blur-[1px] brightness-75"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-teal-800 to-blue-800  z-10" />
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 text-center text-white max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
          {slide.heading}
        </h1>
        <p className="text-base sm:text-lg md:text-2xl text-gray-200">
          {slide.text}
        </p>
        <div className="mt-6 sm:mt-8 flex gap-4">
          <a
            href="#get-started"
            className="px-5 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-teal-400 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:from-blue-600 hover:to-teal-400 transition-all duration-300"
          >
            Get Started
          </a>
          <a
            href="#contact"
            className="px-5 sm:px-6 py-2 sm:py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-gray-200 transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  ))}

  {/* Navigation Buttons */}
  <button
    onClick={prevSlide}
    className="absolute md:top-1/2 top-[59%] left-4 transform -translate-y-1/2 z-30  text-white p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
  >
    <ChevronLeft size={24} />
  </button>
  <button
    onClick={nextSlide}
    className="absolute md:top-1/2 top-[59%] right-4 transform -translate-y-1/2 z-30 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
  >
    <ChevronRight size={24} />
  </button>

  {/* Dots */}
  <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
    {slides.map((_, i) => (
      <button
        key={i}
        onClick={() => setIndex(i)}
        className={`h-2.5 w-2.5 rounded-full ${
          index === i ? "bg-gradient-to-r from-teal-400 to-blue-600" : "bg-gray-200"
        } transition-all duration-300`}
      ></button>
    ))}
  </div>
</section>

  );
};

export default Banner;
