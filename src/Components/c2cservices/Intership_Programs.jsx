import React from 'react';
import Banner from './Banner/Banner';
import Whatweoffer from './Whatweoffer/Whatweoffer';
import placementImage from "../../assests/Images/Banner/workplace.png";
import WhyChoose from './WhyChoose/WhyChoose';
import CollegeClients from './TrustedBy/TrustedBy';
import CompaniesEngaged from './Companies/Companies';
import TestimonialSection from './Testimonials/Testimonials';

const Intership_Programs = () => {
    const offerHeading = "What We Offer";
    const offerPoints = [
      "Internship facilitation with top-tier & partner companies",
      "Access to domain-specific internships (IT, ECE, Mech, MBA, etc.)",
      "Industry-coordinated drives with structured timelines",
      "Certification & experience letters from host companies",
      "Support with internship readiness",
    ];

    const highlights = "Key Highlights";
    const points = [
        "Internships with startups, MNCs, and product-based firms",
        "Flexible models: On-site, Remote, Hybrid",
        "Integrated with college calendar",
        "Pathway to pre-placement offers (PPOs)",
    ]

  return (
    <div>
      <Banner
        badgeText="Campus to Corporate Services"
        title="Internship Programs"
        subtitle="Bridging Students with the Right Industry Opportunities"
        description="Infoziant connects colleges and students with top companies for real-world internships. Through our industry network, we bring corporate opportunities to your campus in tech, non-tech, engineering, and business roles, powered by renowned companies and mentors."
        primaryBtnText="Get Internship Support"
        primaryBtnLink="#get-started"
        secondaryBtnText="Contact Us"
        secondaryBtnLink="#contact"
        image={placementImage} // ✅ pass image here
      />
       <Whatweoffer heading={offerHeading} points={offerPoints} />

       <WhyChoose
          heading="Why Choose Infoziant"
          description="Internship Programs are a crucial part of a student's academic journey. We ensure that students gain practical experience and exposure to the industry, enhancing their employability and skill set."
          points={[
           "Pan-India partner company network",
            "Centralized internship management & coordination",
            "Internships aligned with student skillsets and academic backgrounds",
            "Track record of facilitating 6800+ internships across sectors",
            "Pre-Internship training (if needed) to ensure success",
          ]}
        />

        <Whatweoffer heading={highlights} points={points} />

        <CompaniesEngaged
              heading="Our Engaged Companies"
              description="We collaborate with a wide range of top-tier companies across various industries."
              companies={[
                { id: 1, logo: "path/to/company1-logo.png" },
                { id: 2, logo: "path/to/company2-logo.png" },
                { id: 3, logo: "path/to/company3-logo.png" },
                { id: 4, logo: "path/to/company4-logo.png" },
                { id: 5, logo: "path/to/company5-logo.png" },
                { id: 6, logo: "path/to/company4-logo.png" },
                { id: 7, logo: "path/to/company5-logo.png" },
                { id: 8, logo: "path/to/company4-logo.png" },
                { id: 9, logo: "path/to/company5-logo.png" },
                // Add more companies here
              ]}
            />

        <CollegeClients
              heading="Our Educational Partners"
              description="We're proud to collaborate with leading educational institutions that trust our services to empower their digital presence."
              clients={[
                { id: 1, image: "path/to/image1.jpg" },
                { id: 2, image: "path/to/image2.jpg" },
                { id: 3, image: "path/to/image3.jpg" },
                { id: 4, image: "path/to/image4.jpg" },
                { id: 5, image: "path/to/image5.jpg" },
                { id: 6, image: "path/to/image6.jpg" },
                { id: 7, image: "path/to/image7.jpg" },
                { id: 8, image: "path/to/image8.jpg" },
                { id: 9, image: "path/to/image9.jpg" },
                { id: 10, image: "path/to/image10.jpg" },
              ]}
            />

        <TestimonialSection
          heading="What Our Clients Say About Us"
          description="Discover why businesses trust us to deliver exceptional results. Our clients' experiences speak for themselves."
          testimonials={[
            {
              name: "Keerthana M., CSE - Final Yea",
              role: "Karpagam College of Engineering",
              quote: "My internship through Infoziant gave me real-time exposure to the IT industry. I got to work on practical projects that enhanced both my technical and problem-solving skills.",
              image: "path/to/image1.jpg",
              color: "from-rose-500 to-pink-400"
            },
            {
              name: "Sathish R., ECE - III Year",
              role: "Sri Shanmuga College of Engineering",
              quote: "I never expected to get an internship opportunity with a reputed company so early. Thanks to Infoziant, I was able to build confidence and gain hands-on experience before even graduating!",
              image: "path/to/image2.jpg",
              color: "from-violet-500 to-fuchsia-400"
            },
            {
                name: "Boopathi R., AI & DS - II Yearr",
                role: "RP Sarathy Institute of Technology",
                quote: "The internship I did through Infoziant helped me understand how things work in a real corporate environment. It was a great bridge between college learning and industry expectations",
                image: "path/to/image2.jpg",
                color: "from-teal-500 to-teal-400"
              },

              {
                name: "Priyanka S., UI/UX Intern – II Year, B.Tech",
                role: "AVS Engineering College",
                quote: "Being part of the internship program through Infoziant was a turning point. It helped me explore my skills and also made my resume stand out during placement interviews",
                image: "path/to/image2.jpg",
                color: "from-blue-500 to-blue-400"
              }
                    ]}
          />

    </div>
  );
};

export default Intership_Programs;
