import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from "../../../assests/Images/Colleges/1 (1).jpg";
import image2 from "../../../assests/Images/Colleges/1 (2).jpg";
import image3 from "../../../assests/Images/Colleges/1 (3).jpg";
import image4 from "../../../assests/Images/Colleges/1 (4).jpg";
import image5 from "../../../assests/Images/Colleges/1 (5).jpg";
import image6 from "../../../assests/Images/Colleges/1 (6).jpg";
import image7 from "../../../assests/Images/Colleges/1 (7).jpg";
import image8 from "../../../assests/Images/Colleges/1 (8).jpg";
import image9 from "../../../assests/Images/Colleges/1 (9).jpg";

const CompaniesEngaged = ({ heading, description }) => {
  const [centerIndex, setCenterIndex] = useState(1);
  const sliderRef = useRef(null);

  const companies = [
    { id: 1, src: image1 },
    { id: 2, src: image2 },
    { id: 3, src: image3 },
    { id: 4, src: image4 },
    { id: 5, src: image5 },
    { id: 6, src: image6 },
    { id: 7, src: image7 },
    { id: 8, src: image8 },
    { id: 9, src: image9 },
  ];

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
      setCenterIndex(next % companies.length),
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
          <Slider ref={sliderRef} {...settings} className="px-6">
            {companies.map((company, index) => (
              <div key={company.id} className="px-4 py-6">
                <div
                  className={`relative overflow-hidden rounded-xl transition-all duration-700 ${
                    index === centerIndex
                      ? "bg-white/90 shadow-lg transform scale-110"
                      : "bg-white/50 transform scale-95 opacity-70"
                  }`}
                  style={{
                    width: "150px",
                    height: "150px",
                  }}
                >
                  <div
                    className="relative overflow-hidden rounded-xl border border-gray-200 p-[3px] bg-white"
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div className="w-full h-full overflow-hidden flex items-center justify-center rounded-lg bg-gray-100">
                      <img
                        src={company.src}
                        alt={`Company logo ${index + 1}`}
                        className={`h-full w-full object-cover transition-all duration-700 ${
                          index === centerIndex ? "scale-110" : "scale-100"
                        }`}
                      />
                    </div>
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
