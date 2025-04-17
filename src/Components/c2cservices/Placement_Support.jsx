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
            "57+ Partnered Colleges",
            "115+ Companies Hiring Per College",
            "750+ Placed Studets",
            "1.02Cr CTC Packages",
            "Expansive industry network for top-tier placements",
            "CTCs up to ₹1.02 Cr from leading companies",
            "Agile coordination for optimal placement timing",
            "Curated placement opportunities aligned with student skills"
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
                { id: 6, logo: "path/to/company6-logo.png" },
                { id: 7, logo: "path/to/company7-logo.png" },
                // Add more companies here
              ]}
            />


        <TestimonialSection
          heading="What Our Clients Say About Us"
          description="Discover why businesses trust us to deliver exceptional results. Our clients' experiences speak for themselves."
          testimonials={[
            {
              name: "Nirmal",
              role: "Placement Officer | Sri Shanmugha College of Engineering and Technology",
              quote: "Infoziant has been a great support for our students, both in training and placements...",
              image: "path/to/image1.jpg",
              color: "from-rose-500 to-pink-400"
            },
            {
              name: "Alavudeen A",
              role: "Director-Corporate Relations | Kalasalingam University",
              quote: "Infoziant’s training and their collaboration with CodeChef have been highly effective...",
              image: "path/to/image2.jpg",
              color: "from-violet-500 to-fuchsia-400"
            },
            
                      // Add more testimonials here
                    ]}
          />



        

    </div>
  );
};

export default Placement_Support;
