import React from "react";

// Reuse background glow
const BackgroundGlow = () => (
  <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
    <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-teal-400 blur-3xl"></div>
    <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-indigo-500 blur-3xl"></div>
  </div>
);

const JoinCoEMovement = () => {
  return (
    <section className="relative w-full py-20 px-4 sm:px-6 bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#1a365d] text-white overflow-hidden">
      <BackgroundGlow />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-teal-300 via-teal-500 to-blue-600 bg-clip-text text-transparent mb-4">
          Join the CoE Movement
        </h2>

        {/* Divider */}
        <div className="w-20 h-1 bg-gradient-to-r from-teal-400 via-teal-400 to-blue-500 rounded-full mx-auto mb-6"></div>

        {/* Body Text */}
        <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-8">
          Let’s shape the future of tech education together. Whether you're an academic institution
          looking to empower your students, or a government/CSR partner aiming to make an impact —
           Infoziant CoEs are your gateway to
          scalable, sustainable, and skill-driven transformation.
        </p>

        {/* Optional CTA Button */}
        <div>
          <button className="bg-gradient-to-r from-teal-400 to-blue-600 hover:from-teal-500 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300 hover:scale-105">
            Get Involved
          </button>
        </div>
      </div>
    </section>
  );
};

export default JoinCoEMovement;
