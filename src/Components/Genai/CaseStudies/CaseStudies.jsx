import React from 'react';
import Image1 from '../../../assests/Images/Ourservice/GenAI/image1.jpg'; // Replace with actual paths
import Image2 from '../../../assests/Images/Ourservice/GenAI/image2.jpg';
import Image3 from '../../../assests/Images/Ourservice/GenAI/image3.jpg';

const caseStudies = [
  {
    title: 'Patient Discharge Summary Generator',
    image: Image1,
    link: '#',
  },
  {
    title: 'Investment Report Generator',
    image: Image2,
    link: '#',
  },
  {
    title: 'Dynamic Ranking Reporter',
    image: Image3,
    link: '#',
  },
];

const CaseStudies = () => {
  return (
    <section className="bg-black text-white py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-400 via-teal-300 to-blue-500 bg-clip-text text-transparent">
            Case Studies
          </span>
        </h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto mb-12 rounded-full"></div>

        <div className="grid gap-8 md:grid-cols-3">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden group border border-neutral-800 shadow-lg hover:shadow-xl transition duration-300"
            >
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
              />
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent px-5 py-4">
                <h3 className="text-lg font-semibold">{study.title}</h3>
                <a
                  href={study.link}
                  className="text-sm text-blue-400 hover:underline inline-flex items-center mt-1"
                >
                  Read More <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
