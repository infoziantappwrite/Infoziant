import React, { useState } from "react";
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
import image10 from "../../../assests/Images/Colleges/1 (10).jpg";

const CollegeClients = () => {
  const clients = [
    { id: 1, src: image1, name: "College A" },
    { id: 2, src: image2, name: "College B" },
    { id: 3, src: image3, name: "College C" },
    { id: 4, src: image4, name: "College D" },
    { id: 5, src: image5, name: "College E" },
    { id: 6, src: image6, name: "College F" },
    { id: 7, src: image7, name: "College G" },
    { id: 8, src: image8, name: "College H" },
    { id: 9, src: image9, name: "College I" },
    { id: 10, src: image10, name: "College J" },
  ];
  const [centerIndex, setCenterIndex] = useState(1); // Track center logo
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: "0px",
    arrows: true,
    beforeChange: (_, next) => setCenterIndex(next),
    responsive: [
      {
        breakpoint: 1024, // For tablets and below
        settings: {
          slidesToShow: 3,
        },
      }
    ],
  };
  

  return (
    <div className="bg-[#010a13] p-10">
      <h2 className="text-center  bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-300 relative text-2xl font-bold mb-6">
        Our Partner Colleges
      </h2>
      <Slider {...settings} className="max-w-5xl mx-auto">
        {clients.map((client, index) => (
          <div key={client.id} className="flex justify-center ">
            <img
              src={client.src}
              alt={client.name}
              className={`transition-all duration-700 ease-in-out rounded-lg  ${
                index === centerIndex
                  ? "scale-90 opacity-100 shadow-md shadow-teal-300 " // Center image - bigger
                  : "scale-75 opacity-50" // Side images - smaller & faded
              }`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CollegeClients;