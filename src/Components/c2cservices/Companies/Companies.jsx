import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CompaniesEngaged = ({ heading, description, companies = [] }) => {
  const [centerIndex, setCenterIndex] = useState(1);
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: "0px",
    arrows: false,
    cssEase: "ease-in-out",
    beforeChange: (current, next) =>
      setCenterIndex(next % (companies.length || 1)),
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, centerMode: true },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, centerMode: true },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, centerMode: true },
      },
    ],
  };

  const goToSlide = (index) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-r from-white via-gray-50 to-gray-100">
      {/* Subtle Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-yellow-300 opacity-10 blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-teal-200 opacity-10 blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-pink-300 opacity-10 blur-xl"></div>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundSize: "20px 20px",
            backgroundImage:
              "linear-gradient(to right, gray 1px, transparent 1px), linear-gradient(to bottom, gray 1px, transparent 1px)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-gray-200 text-gray-700 text-sm font-medium mb-4">
            Trusted By
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {heading}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-green-400 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Slider */}
          <Slider ref={sliderRef} {...settings} className="px-6">
            {companies.map((company, index) => (
              <div key={company.id} className="px-4 py-6">
                <div
                  className={`transition-all duration-700 transform rounded-2xl shadow-md border ${
                    index === centerIndex
                      ? "bg-white/80 backdrop-blur-md border-gray-200 scale-105 shadow-xl"
                      : "bg-white/60 border-transparent scale-95 opacity-80"
                  }`}
                >
                  <div className="flex items-center justify-center h-40 w-40 mx-auto p-3">
                    <img
                      src={company.logo}
                      alt={`Company logo ${index + 1}`}
                      className="h-full w-full object-contain transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          {/* Dots */}
          {companies.length > 0 && (
            <div className="flex justify-center mt-8 gap-2">
              {companies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === centerIndex
                      ? "bg-teal-500 w-6"
                      : "bg-gray-400 w-2 hover:bg-teal-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CompaniesEngaged;
