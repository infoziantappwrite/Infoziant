import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  '/assets/partner-1.png',
  '/assets/partner-2.png',
  '/assets/partner-3.png',
  '/assets/partner-4.png',
  '/assets/partner-5.png',
  '/assets/partner-6.png',
  '/assets/partner-7.png',
  '/assets/partner-8.png',
  '/assets/partner-9.jpg',
  '/assets/partner-10.png',
  '/assets/partner-11.png',
  '/assets/partner-12.png',
  '/assets/partner-13.png',
  '/assets/partner-14.png',
  '/assets/partner-15.png',
  '/assets/partner-16.png',
  '/assets/partner-17.png',
  '/assets/partner-18.png',
  '/assets/partner-19.png',
  '/assets/partner-20.png',
  '/assets/partner-21.png',
  '/assets/partner-22.png',
  '/assets/partner-23.png',
  '/assets/partner-24.png',
  '/assets/partner-25.png',
  '/assets/partner-26.png',
  '/assets/partner-27.png',
];

const chunkArray = (arr, size) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

const CompaniesEngaged = ({ heading, description }) => {
  const sliderRef = useRef(null);
  const logoChunks = chunkArray(images, 9);

  const settings = {
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    pauseOnHover: false,
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-gray-200 text-gray-700 text-sm font-medium mb-4">
            Trusted By
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">{heading}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-green-400 mx-auto rounded-full mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">{description}</p>
        </div>

        <Slider ref={sliderRef} {...settings}>
          {logoChunks.map((chunk, i) => (
            <div key={i} className="p-4 flex justify-center">
              <div className="bg-white rounded-2xl shadow-xl p-6 max-w-4xl w-full min-h-[400px]">
                <div className="grid grid-cols-3 grid-rows-3 border border-gray-300 rounded-xl overflow-hidden">
                  {chunk.map((src, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-center p-4 bg-white 
                        ${
                          (index + 1) % 3 !== 0 ? 'border-r' : ''
                        } 
                        ${index < 6 ? 'border-b' : ''}
                        border-gray-200`}
                    >
                      <img
                        src={src}
                        alt={`Partner ${i * 9 + index + 1}`}
                        className="max-h-20 max-w-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CompaniesEngaged;
