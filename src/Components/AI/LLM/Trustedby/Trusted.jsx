import React from 'react';

const logos = [
  'https://cdn-cekmh.nitrocdn.com/SlrtebQxNZbUBkfXeRIcTgUmxZsOSldb/assets/images/optimized/rev-ee81cca/codoid.com/wp-content/uploads/2023/03/Palo-Alto-Logo.webp',
  'https://cdn-cekmh.nitrocdn.com/SlrtebQxNZbUBkfXeRIcTgUmxZsOSldb/assets/images/optimized/rev-ee81cca/codoid.com/wp-content/uploads/2023/03/Ooredoo-Logo.webp',
  'https://cdn-cekmh.nitrocdn.com/SlrtebQxNZbUBkfXeRIcTgUmxZsOSldb/assets/images/optimized/rev-ee81cca/codoid.com/wp-content/uploads/2023/03/Polaris-Logo.webp',
  'https://cdn-cekmh.nitrocdn.com/SlrtebQxNZbUBkfXeRIcTgUmxZsOSldb/assets/images/optimized/rev-ee81cca/codoid.com/wp-content/uploads/2023/03/ABB-Logo.webp',
  'https://cdn-cekmh.nitrocdn.com/SlrtebQxNZbUBkfXeRIcTgUmxZsOSldb/assets/images/optimized/rev-ee81cca/codoid.com/wp-content/uploads/2023/03/Stryker-Logo.webp',
  'https://cdn-cekmh.nitrocdn.com/SlrtebQxNZbUBkfXeRIcTgUmxZsOSldb/assets/images/optimized/rev-ee81cca/codoid.com/wp-content/uploads/2023/03/Mobily-Logo.webp',
];

const Trusted = () => {
  return (
    <div className="py-14 bg-white overflow-hidden">
      <div className="container mx-auto text-center mb-10">
      <div className="relative inline-block mb-10">
  <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#15f5b9d0] to-[#002affc4]">
    Trusted By
  </h2>
  <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-[#15f5b9d0] to-[#002affc4] rounded"></span>
</div>

      </div>

      {/* Scrolling logos */}
      <div className="relative w-full">
        <div className="animate-scroll flex items-center gap-16 whitespace-nowrap">
          {logos.concat(logos).map((logo, idx) => (
            <img
              key={idx}
              src={logo}
              alt={`Company ${idx}`}
              className="w-32 h-20 object-contain"
            />
          ))}
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        .animate-scroll {
          display: flex;
          width: fit-content;
          animation: scroll 25s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Trusted;
