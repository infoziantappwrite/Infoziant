import React from 'react';
import Slider from 'react-slick';
import image1 from './1 (1).png';
import image2 from './1 (1).png';
import image3 from './1 (1).png';
import image4 from './1 (1).png';
import image5 from './1 (3).png';
import image6 from './1 (3).png';
import image7 from './1 (3).png';
import image8 from './1 (3).png';

const OurProducts = () => {
  const partners1 = [
    { id: 1, src: image1 },
    { id: 2, src: image2 },
    { id: 3, src: image3 },
    { id: 4, src: image4 },
  ];
  const partners2 = [
    { id: 1, src: image5 },
    { id: 2, src: image6 },
    { id: 3, src: image7 },
    { id: 4, src: image8 },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows:false,
    
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="relative py-20 overflow-hidden bg-gradient-to-r from-[#0a192f] via-[#112240] to-[#1a365d]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-blue-500 opacity-10 blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-52 h-52 rounded-full bg-teal-400 opacity-10 blur-2xl"></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-purple-500 opacity-10 blur-2xl"></div>
          
        </div>

        <div className="relative z-10 container mx-auto px-4 grid md:grid-cols-2 gap-4 items-center">
         
          <div className="text-left animate-fadeIn">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-4">
              Next Gen Security
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-200 mb-6">
              Empowering Institutions with Modern Cybersecurity Tools
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mb-6"></div>
            <p className="text-gray-400 text-lg">
              IDAST offers automated code reviews, threat modeling, and real-time vulnerability alerts to keep your systems secure and audit-ready.
            </p>
          </div>
          

          <div className="overflow-hidden animate-fadeIn">
            <Slider {...sliderSettings}>
              {partners1.map((client) => (
                <div key={client.id} className="p-0">
                  <div className="rounded-xl bg-gradient-to-br from-blue-800/40 to-teal-700/30 p-[4px]">
                    <div className="bg-blue-950 rounded-lg flex items-center justify-center">
                      <img
                        src={client.src}
                        alt={`Partner ${client.id}`}
                        className="w-full max-h-[600px] object-contain rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

     
      <section className="relative bg-white py-20 overflow-hidden">
       
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-blue-400 opacity-10 blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-52 h-52 rounded-full bg-teal-400 opacity-10 blur-2xl"></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-purple-400 opacity-10 blur-2xl"></div>
          
        </div>

        <div className="relative z-10 container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div className="overflow-hidden animate-fadeIn">
            <Slider {...sliderSettings}>
              {partners2.map((client) => (
                <div key={client.id} className="p-0">
                  <div className="rounded-xl bg-gradient-to-br from-gray-800/40 to-gray-700/30 p-[4px]">
                    <div className="bg-blue-950 rounded-lg flex items-center justify-center">
                      <img
                        src={client.src}
                        alt={`Partner ${client.id}`}
                        className="w-full max-h-[600px] object-contain rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <div>
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-4">
            Infoziant - Learn Without Limits
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your premier online learning platform with expert-led courses
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mb-6"></div>
          <p className="text-gray-700 text-lg">
            At Infoziant, we offer cutting-edge online learning with expert-led courses that help you achieve your career goals. Join us and experience limitless learning opportunities!
          </p>
        </div>
        </div>
      </section>

    
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
          animation: fadeIn 0.8s ease forwards;
        }
      `}</style>
    </>
  );
};

export default OurProducts;
