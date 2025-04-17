import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Whatweoffer = ({ heading, points }) => {
  return (
    <section className="w-full px-4 sm:px-6 md:px-10 lg:px-24 py-20 bg-gradient-to-b from-[#0a192f] via-[#0e223f] to-[#102e56] text-white font-sans">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-teal-300 via-blue-400 to-blue-600 bg-clip-text text-transparent">
          {heading}
        </h2>

        {/* Centered gradient underline */}
        <div className="mx-auto mt-4 mb-12 h-1 w-24 rounded-full bg-gradient-to-r from-teal-400 via-blue-400 to-blue-600" />

        {/* Offer Points */}
        <div className="grid gap-6 sm:grid-cols-2 mt-8">
          {points.map((point, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-5 bg-white/5 border border-white/10 hover:border-white/20 rounded-xl transition"
            >
              <FaCheckCircle className="text-teal-300 text-xl mt-1 shrink-0" />
              <span className="text-md sm:text-lg text-gray-100">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Whatweoffer;
