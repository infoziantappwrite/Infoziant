import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CollegeClients = () => {
  const clients = [
    { id: 1, src:"https://th.bing.com/th/id/OIP.qd-fUr4ZzNMyrkpVINGFIAHaHa?rs=1&pid=ImgDetMain", name: "College A" },
    { id: 2, src: "https://th.bing.com/th/id/OIP.qd-fUr4ZzNMyrkpVINGFIAHaHa?rs=1&pid=ImgDetMain", name: "College B" },
    { id: 3, src: "https://th.bing.com/th/id/OIP.qd-fUr4ZzNMyrkpVINGFIAHaHa?rs=1&pid=ImgDetMain", name: "College C" },
    { id: 4, src: "https://th.bing.com/th/id/OIP.qd-fUr4ZzNMyrkpVINGFIAHaHa?rs=1&pid=ImgDetMain", name: "College D" },
    { id: 5, src: "https://th.bing.com/th/id/OIP.qd-fUr4ZzNMyrkpVINGFIAHaHa?rs=1&pid=ImgDetMain", name: "College E" },
  ];
  const [centerIndex, setCenterIndex] = useState(1); // Track center logo
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: "0px",
    arrows: false,
    beforeChange: (_, next) => setCenterIndex(next),
  };

  return (
    <div className="bg-[#010a13] p-10">
      <h2 className="text-center  bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-300 relative text-2xl font-bold mb-6">
        Our Clients
      </h2>
      <Slider {...settings} className="max-w-4xl mx-auto">
        {clients.map((client, index) => (
          <div key={client.id} className="flex justify-center">
            <img
              src={client.src}
              alt={client.name}
              className={`transition-all duration-700 ease-in-out  ${
                index === centerIndex
                  ? "scale-100 opacity-100" // Center image - bigger
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