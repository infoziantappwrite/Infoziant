import React from 'react';

const checks = [
  { title: 'Correctness', img: 'https://cdn-cekmh.nitrocdn.com/SlrtebQxNZbUBkfXeRIcTgUmxZsOSldb/assets/images/optimized/rev-ee81cca/codoid.com/wp-content/uploads/2024/08/Correctness-1.png' },
  { title: 'Relevance', img: 'https://cdn-cekmh.nitrocdn.com/SlrtebQxNZbUBkfXeRIcTgUmxZsOSldb/assets/images/optimized/rev-ee81cca/codoid.com/wp-content/uploads/2024/08/Relevance.png' },
  { title: 'Performance', img: 'https://cdn-cekmh.nitrocdn.com/SlrtebQxNZbUBkfXeRIcTgUmxZsOSldb/assets/images/optimized/rev-ee81cca/codoid.com/wp-content/uploads/2024/08/Performance-1.png' },
  { title: 'Robustness', img: 'https://cdn-cekmh.nitrocdn.com/SlrtebQxNZbUBkfXeRIcTgUmxZsOSldb/assets/images/optimized/rev-ee81cca/codoid.com/wp-content/uploads/2024/08/Robustness-1.png' },
  { title: 'Responsible Metrics', img: 'https://cdn-cekmh.nitrocdn.com/SlrtebQxNZbUBkfXeRIcTgUmxZsOSldb/assets/images/optimized/rev-ee81cca/codoid.com/wp-content/uploads/2024/08/Responsible-Metrics-1.png' },
  { title: 'Security', img: 'https://cdn-cekmh.nitrocdn.com/SlrtebQxNZbUBkfXeRIcTgUmxZsOSldb/assets/images/optimized/rev-ee81cca/codoid.com/wp-content/uploads/2024/08/Security-1.png' },
];

const ChecksSection = () => {
  return (
    <div className="bg-white py-20 px-6 md:px-20">
      {/* Title */}
      <h2 className="text-center text-4xl font-bold mb-16">
        <span className="bg-gradient-to-r from-[#15f5b9] to-[#3F00FF] text-transparent bg-clip-text">
          What Do
        </span>{' '}
        <span className="text-gray-900">We Check?</span>
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {checks.map((item, index) => (
          <div
            key={index}
            className="group bg-white border border-gray-200 hover:shadow-lg rounded-2xl p-6 flex items-center space-x-5 transition-all duration-300"
          >
            <div className="bg-gradient-to-br from-[#15f5b950] to-[#3F00FF33] p-2 rounded-full">
              <div className="bg-white p-2 rounded-full shadow-md">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-12 h-12 object-contain"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[#3F00FF] transition">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChecksSection;
