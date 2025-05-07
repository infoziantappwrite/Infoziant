import React from 'react';
import Banner from './Banner/Banner';
import Whatweoffer from './Whatweoffer/Whatweoffer';
import placementImage from "../../assests/Images/Banner/18-1.webp";
import WhyChoose from './WhyChoose/WhyChoose';
import TestimonialSection from './Testimonials/Testimonials';
import CollegeClients from './TrustedBy/TrustedBy';
import CompaniesEngaged from './Companies/Companies_Place';
import WhyChooseImage from "../../assests/Images/Banner/ChooseUsPic.png";
import WhatImage from "../../assests/Images/Banner/offer1.png";
import ConsultationFormForCo from '../Pages/ConsultationFormForCo';
import noprofile from "../../assests/noprofile.png";



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
        primaryBtnText="Explore Now"
        primaryBtnLink="#get-started"
        secondaryBtnText="Contact Us"
        secondaryBtnLink="#contact"
        image={placementImage} // ✅ pass image here
      />

      <div id="get-started">
        <Whatweoffer heading={offerHeading} points={offerPoints} image={WhatImage} />
      </div>


      <WhyChoose
        heading="Why Choose Infoziant"
        description="With our expansive industry network and agile coordination, we bring in companies offering CTCs up to ₹1.02 Cr and align them with your drive schedule. Your students gain access to curated placement opportunities that match their skillsets, while your institution stays ahead with a strong placement track record."
        points={[
          "Partnered with over 37+ leading colleges across the country.",
          "More than 115 reputed companies recruit from each partnered college.",
          "Successfully placed over 7510+ students in top organizations.",
          "CTC packages offered go as high as ₹1.02 Cr from premier companies.",
          "Built an expansive industry network to drive top-tier placements.",
          "Ensured agile coordination with institutions for timely placements.",
          "Curated opportunities that align with each student’s strengths and aspirations."
        ]}
        image={WhyChooseImage}
      />

      <CollegeClients
        heading="Our Educational Partners"
        description="We're proud to collaborate with leading educational institutions that trust our services to empower their digital presence."
      />

      <CompaniesEngaged
        heading="Our Engaged Companies"
        description="We collaborate with a wide range of top-tier companies across various industries."
      />


      <TestimonialSection
        heading="What Our Clients Say About Us"
        description="Discover why businesses trust us to deliver exceptional results. Our clients' experiences speak for themselves."
        testimonials={[
          {
            name: "Placement Officer",
            role: "EGS Pillay Engineering College",
            quote: "Infoziant’s placement team has been incredibly supportive. They not only connected us with reputed companies but ensured smooth coordination at every step. Our students gained great exposure!",
            image: noprofile,
            color: "from-rose-500 to-pink-400"
          },
          {
            name: "Training & Placement Head",
            role: "Dhanalakshmi College of Engineering",
            quote: "The placement drives coordinated by Infoziant helped us secure multiple offers across core and tech sectors. Their dedication and timely updates really stand out.",
            image: noprofile,
            color: "from-violet-500 to-fuchsia-400"
          },
          {
            name: "Placement Coordinator",
            role: "RP Sarathy Institute",
            quote: "With Infoziant, we’ve had access to top companies and structured hiring support. Their proactive follow-up and HR connect made a big difference",
            image: noprofile,
            color: "from-teal-500 to-teal-400"
          },
          {
            name: "TPO",
            role: "Kamaraj College of Engineering",
            quote: "Our students are grateful for the quality job opportunities brought in through Infoziant’s network. Their coordination and professionalism are commendable.",
            image: noprofile,
            color: "from-red-500 to-red-400"
          },
        ]}
      />


      <ConsultationFormForCo />




    </div>
  );
};

export default Placement_Support;
