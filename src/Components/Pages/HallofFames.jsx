import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import image1 from './images/1.png';
import image2 from './images/2.png';
import image3 from './images/3.png';
import { ChevronRight } from 'lucide-react';

const HallofFames = () => {
  const [centerIndex, setCenterIndex] = useState(1); // Track center logo
  const sliderRef = useRef(null);
  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-500 p-2 rounded-full shadow-md hover:scale-110 transition"
      onClick={onClick}
    >
      <svg
        className="w-4 h-4 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </div>
  );

  const NextArrow = ({ onClick }) => (
    <div
      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-500 p-2 rounded-full shadow-md hover:scale-110 transition"
      onClick={onClick}
    >
      <svg
        className="w-4 h-4 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
  const clients = [
    {
      title: 'Bureau of Indain Affairs',
      image: image1,
      link: 'https://bugcrowd.com/engagements/bia-vdp/hall_of_fames',
    },
    {
      title: 'US Environmental Protection Agency',
      image: image1,
      link: 'https://bugcrowd.com/engagements/epa-vdp/hall_of_fames',
    },
    {
      title: 'State of California VDP',
      image: image2,
      link: 'https://bugcrowd.com/engagements/cdt-vdp-pro/hall_of_fames',
    },
    {
      title: 'National Aeronautics and Space Administration (NASA) -VDP',
      image: image3,
      link: 'https://bugcrowd.com/engagements/nasa-vdp/hall_of_fames',
    },
  ];

  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    centerMode: true,
    centerPadding: '0px',
    dots: false,
    arrows: true,
    cssEase: 'ease-in-out',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setCenterIndex(next % clients.length),
    pauseOnHover: true,
    appendDots: dots => (
      <div className="p-0 m-0">
        <ul className="flex justify-center gap-1 p-0 m-0 list-none">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-2.5 h-2.5 bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-500 rounded-full transition group-hover:bg-gradient-to-l" />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '0px',
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '0px',
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '0px',
          slidesToScroll: 1,
        },
      },
    ],

  };


  const goToSlide = (index) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  return (
    <section className="relative pt-20 pb-10 overflow-hidden bg-gradient-to-r from-[#0a192f] via-[#112240] to-[#1a365d]">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-blue-500 opacity-5"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-teal-400 opacity-5"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-purple-500 opacity-5"></div>
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent opacity-[0.03]"
          style={{
            backgroundSize: '20px 20px',
            backgroundImage:
              'linear-gradient(to right, gray 1px, transparent 1px), linear-gradient(to bottom, gray 1px, transparent 1px)',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-teal-300 to-blue-500 bg-clip-text text-transparent">
            Latest Hall of Fames
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Slider ref={sliderRef} {...settings} className="client-slider px-6 mx-auto">
            {clients.map((client, index) => (
              <div key={client.id} className="px-2 py-6 flex justify-center items-center">
                <div className={`relative overflow-hidden rounded-xl transition-all duration-700 mx-auto ${index === centerIndex
                  ? ' transform scale-105'
                  : 'bg-blue-900/20 transform scale-95'
                  }`}>

                  <h1 className="text-center text-white font-bold text-xl sm:text-2xl mb-4">
                    {client.title}
                  </h1>

                  <div className={`flex flex-col items-center transition-all duration-700 ${index === centerIndex ? 'scale-100 opacity-100' : 'scale-90 opacity-70'}`}>
                    <div className="h-full w-full relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-800/50 to-teal-700/30 p-[3px]">
                      <div className="w-full h-full overflow-hidden flex items-center justify-center rounded-lg md:px-5  md:py-3 px-2 py-1">
                        <img
                          src={client.image}
                          alt={client.title}
                          className={`h-full w-full object-cover transition-all duration-700 rounded-lg ${index === centerIndex ? 'scale-105' : 'scale-100'}`}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="text-center m-4">
                    <a
                      href={client.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-2 bg-gradient-to-r from-blue-500 via-teal-400 to-blue-600 text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl gap-2"
                    >
                      Learn More
                      <ChevronRight className="w-5 h-5 ml-2 text-white transition-transform duration-300 transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          <div className="flex justify-center mt-0 gap-2 pb-4">
            {clients.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-500 ${index === centerIndex ? 'bg-teal-400 w-6' : 'bg-blue-600/40 hover:bg-blue-500/60 w-2'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>;

      </div>

      {/* Fade-in Animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease forwards;
        }
      `}</style>
    </section>
  );
};

export default HallofFames;
