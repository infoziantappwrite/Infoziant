import React, { useEffect, useRef } from "react";
import TypingHeroSection from "./TypingHeroSection";

 
const Banner = () => {

  const videoRef = useRef(null);



  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; 
    }
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover brightness-90 saturate-150"
      >
        <source
          src="https://cdn.pixabay.com/video/2024/02/23/201735-916310640_large.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>


      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80 z-0" />


      {/* <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 max-w-7xl w-full mx-auto">
        <h1
          className={`text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-snug  text-center transition-all duration-700 ${isAnimating ? "opacity-0 -translate-y-4" : "opacity-100 translate-y-0"
            }`}
        >
          <span className="text-white block">Transforming  Technology </span>

          <span className="stroke-text text-transparent block mt-4">
          with Next-Gen
          </span>

          <span className="bg-gradient-to-r from-cyan-300 via-teal-400 to-blue-500 bg-clip-text text-transparent block mt-4 pb-4">
            Digital Solutions
          </span>
        </h1>

        <div className="max-w-2xl w-full text-center">
  <div
    className={`mt-4 flex items-center justify-center gap-2 text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 transition-all duration-700 delay-100 ${
      isAnimating ? "opacity-0 -translate-y-4" : "opacity-100 translate-y-0"
    }`}
  >
    
    <span className="capitalize">We Deliver Impact at Every Step</span>
    <TrendingUp className="w-6 h-6 text-white" />
  </div>
</div>

        <div
          className={`mt-6 sm:mt-8 transition-all duration-700 delay-200 ${isAnimating ? "opacity-0 -translate-y-4" : "opacity-100 translate-y-0"
            }`}
        >
          <button
            className="px-5 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-cyan-400 via-teal-500 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300"
            onClick={() => {
              const section = document.getElementById("services-section");
              if (section) section.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Discover More
          </button>
        </div>
      </div> */}
      <TypingHeroSection/>

    </section>
  );
};

export default Banner;
