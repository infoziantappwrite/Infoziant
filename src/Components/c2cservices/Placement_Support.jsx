import React from 'react';
import Banner from './Banner/Banner';
import Whatweoffer from './Whatweoffer/Whatweoffer';
import placementImage from "../../assests/Images/Ourservice/placement/placement.gif";
import WhyChoose from './WhyChoose/WhyChoose';
import TestimonialSection from './Testimonials/Testimonials';
import CollegeClients from './TrustedBy/TrustedBy';
import CompaniesEngaged from './Companies/Companies';


const Placement_Support = () => {
    const offerHeading = "What We Offer";
    const offerPoints = [
      "End-to-end drive coordination",
      "Company sourcing based on college requirement",
      "Direct HR outreach & scheduling",
      "Opportunities from top-tier, service-based & product-based companies",
    ];
  return (
    <div>
      <Banner
        badgeText="Campus to Corporate Services"
        title="Placement Support"
        subtitle="Bridging Institutions & Industry"
        description="We bridge the gap between institutions and industry by enabling seamless placement opportunities tailored to your students' career goals."
        primaryBtnText="Get Placement Support"
        primaryBtnLink="#get-started"
        secondaryBtnText="Contact Us"
        secondaryBtnLink="#contact"
        image={placementImage} // ✅ pass image here
      />
       <Whatweoffer heading={offerHeading} points={offerPoints} />

       <WhyChoose
  heading="Why Choose Infoziant"
  description="With our expansive industry network and agile coordination, we bring in companies offering CTCs up to ₹1.02 Cr and align them with your drive schedule. Your students gain access to curated placement opportunities that match their skillsets, while your institution stays ahead with a strong placement track record."
  points={[
   "Infoziant partners with 57+ colleges for better placements.",
  "Each partner college gets 115+ hiring companies every year.",
  "We’ve helped over 750 students land high-value job offers.",
  "Our network ensures top-tier placement access for students.",
  "Top recruiters offer CTCs reaching up to ₹1.02 Cr annually.",
  "We align drive schedules with perfect timing and planning.",
  "We provide curated roles that match each student’s skill set."
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
                // Add more companies here
              ]}
            />


        <TestimonialSection
          heading="What Our Clients Say About Us"
          description="Discover why businesses trust us to deliver exceptional results. Our clients' experiences speak for themselves."
          testimonials={[
            {
              name: "Name1",
              role: "Placement Officer, EGS Pillay Engineering College",
              quote: "Infoziant’s placement team has been incredibly supportive. They not only connected us with reputed companies but ensured smooth coordination at every step. Our students gained great exposure!",
              image: "path/to/image1.jpg",
              color: "from-rose-500 to-pink-400"
            },
            {
              name: "Name2",
              role: "Training & Placement Head, Dhanalakshmi College of Engineering",
              quote: "The placement drives coordinated by Infoziant helped us secure multiple offers across core and tech sectors. Their dedication and timely updates really stand out.",
              image: "path/to/image2.jpg",
              color: "from-violet-500 to-fuchsia-400"
            },
            {
              name: "Name3",
              role: "Placement Coordinator, RP Sarathy Institute",
              quote: "With Infoziant, we’ve had access to top companies and structured hiring support. Their proactive follow-up and HR connect made a big difference.",
              image: "path/to/image2.jpg",
              color: "from-cyan-500 to-sky-400"
            },
            {
              name: "Name4",
              role: "TPO, Kamaraj College of Engineering",
              quote: "Our students are grateful for the quality job opportunities brought in through Infoziant’s network. Their coordination and professionalism are commendable.",
              image: "path/to/image2.jpg",
              color: "from-emerald-500 to-lime-400"
            },
            
                      // Add more testimonials here
                    ]}
          />



        

    </div>
  );
};

export default Placement_Support;
