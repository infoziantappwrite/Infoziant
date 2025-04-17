import React from 'react';
import Banner from './Banner/Banner';
import Whatweoffer from './Whatweoffer/Whatweoffer';
import placementImage from "../../assests/Images/Ourservice/placement/placement.gif";


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
    </div>
  );
};

export default Placement_Support;
