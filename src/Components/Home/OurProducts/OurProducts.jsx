import React from 'react';
import Slider from 'react-slick';
import image1 from './11.png';
import image2 from './12.png';
import image3 from './13.png';
import image4 from './14.png';
import image5 from './15.png';


import image6 from './1.png';
import image7 from './2.png';
import image8 from './3.png';
import image9 from './4.png';
import { ShieldCheck, Target } from "lucide-react";

const OurProducts = () => {
  const partners1 = [
    { id: 1, src: image1 },
    { id: 2, src: image2 },
    { id: 3, src: image3 },
    { id: 4, src: image4 },
    { id: 5, src: image5},
  ];
  const partners2 = [
    { id: 1, src: image6 },
    { id: 2, src: image7 },
    { id: 3, src: image8 },
    { id: 4, src: image9 },


  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    padding: 0,

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


    <div className='w-full'>
      {/* 🚀 Our Innovations Header */}


      {/* Section 1 - iDAST */}
      <section className="relative pt-10 pb-20 overflow-hidden mx-auto ">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-black">Our </span>
            <span className="bg-gradient-to-r from-blue-500 to-teal-400 text-transparent bg-clip-text">Innovations</span>
          </h2>


          <p className="mt-2 text-lg text-blue-600">Smart Solutions. Real Impact.</p>
          <div className="mt-2  mb-8 mx-auto h-1 w-24 bg-gradient-to-r from-blue-400 via-teal-400 to-blue-700 rounded-full"></div>



        </div>

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-blue-500 opacity-10 blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-52 h-52 rounded-full bg-teal-400 opacity-10 blur-2xl"></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-purple-500 opacity-10 blur-2xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 grid md:grid-cols-5 lg:grid-cols-5 gap-4 items-center">
          <div className="overflow-hidden animate-fadeIn lg:col-span-3 col-span-5">
            <Slider {...sliderSettings}>
              {partners1.map((client) => (
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
          <div className="text-left animate-fadeIn col-span-5 lg:col-span-2">
            <div className="flex items-center gap-2 text-blue-600 mb-4">
              <ShieldCheck className="w-6 h-6" />
              <span className="text-sm font-medium">Scan. Secure. Scale.</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-blue-500 to-teal-400 text-transparent bg-clip-text">i</span>
            <span className="text-black">Dast</span>
           
          </h2>


            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mb-6"></div>
            <p className="text-gray-600 text-lg">
              Our in-house vulnerability assessment tool helps businesses uncover security flaws, generate instant audit reports,
              and stay ahead of cyber threats. Built for precision, trusted by professionals, and crafted by experts who’ve
              safeguarded Fortune 100 systems.
            </p>
          </div>


        </div>
      </section>


      <section className="relative bg-gradient-to-r from-[#0a192f] via-[#112240] to-[#1a365d] py-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-blue-400 opacity-10 blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-52 h-52 rounded-full bg-teal-400 opacity-10 blur-2xl"></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-purple-400 opacity-10 blur-2xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-5 gap-10 items-center">
          <div className="col-span-5 lg:col-span-2 animate-fadeIn">
            <div className="flex items-center gap-2 text-blue-400 mb-4">
              <Target className="w-6 h-6" />
              <span className="text-sm font-medium">From Learning to Earning</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-blue-500 to-teal-400 text-transparent bg-clip-text">Edu</span>
            <span className="text-white">ziant</span>
           
          </h2>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
             
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mb-6"></div>
            <p className="text-gray-300 text-lg">
              An AI-powered career enablement platform designed for students and institutions. Personalized learning paths, practical
              upskilling, and curated job opportunities—everything under one roof to transform learners into job-ready professionals.
            </p>
          </div>
          <div className="overflow-hidden animate-fadeIn col-span-5 lg:col-span-3">
            <Slider {...sliderSettings}>
              {partners2.map((client) => (
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
    </div>

  );
};

export default OurProducts;
