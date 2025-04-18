import React from 'react';
import Banner from './Banner/Banner';
import Whatweoffer from './Whatweoffer/Whatweoffer';
import placementImage from "../../assests/Images/Banner/Coes.png";
import WhyChoose from './WhyChoose/WhyChoose';
import TestimonialSection from './Testimonials/Testimonials';



const COE = () => {
    const offerHeading = "What We Do";
    const offerPoints = [
      "Set up CoEs with industry-standard tools & infra",
      "Curriculum design in sync with job roles",
      "Training by real-world practitioners",
      "Hands-on use cases & labs",
      "Global certifications & internship pathway",
    ];

    const highlights = "Key Highlights";
    const points = [
        "240+ Hours of expert-led training (Cybersecurity / AI)",
        "Real-world projects and industry case studies",
        "Certification, Badges, and international visits (optional)",
        "Access to exclusive Hackathons & Challenges",
        "Faculty Enablement Workshops",
    ];


  return (
    <div>
      <Banner
        badgeText="Campus to Corporate Services"
        title="Centre Of Excellence"
        subtitle="Turning Campuses into Innovation Hubs"
        description="Our Centre of Excellence (CoE) initiative is a strategic industry-academia collaboration where we empower colleges to build self-sustained, skill-driven learning environments in emerging domains like Cybersecurity & AI."
        primaryBtnText="Explore CoE"
        primaryBtnLink="#get-started"
        secondaryBtnText="Contact Us"
        secondaryBtnLink="#contact"
        image={placementImage} // ✅ pass image here
      />
       <Whatweoffer heading={offerHeading} points={offerPoints} />

       <WhyChoose
          heading="Why Infoziant CoEs?"
          description="We are committed to building a self-sustained CoE that not only meets the immediate needs of students but also prepares them for future challenges. Our approach is designed to ensure that your institution remains at the forefront of technological advancements."
          points={[
            "Designed by domain experts (Ex-Symantec, EMC, McAfee)",
            "Industry-mapped curriculum and tools",
            "Long-term academic partnership model",
            "Customizable delivery (hybrid/fully offline)",
            "Proven success across 30+ institutions",
          ]}
        />

            <Whatweoffer heading={highlights} points={points} />

        <TestimonialSection
          heading="What Our Clients Say About Us"
          description="Discover why businesses trust us to deliver exceptional results. Our clients' experiences speak for themselves."
          testimonials={[
            {
              name: "CSE HOD –  PSNA",
              role: "PSNA College of Engineering and Technology",
              quote: "The Centre of Excellence established in collaboration with Infoziant has been a game changer for our students. It provides them with exposure to real-world cybersecurity challenges and hands-on tools that are usually available only in top-tier companies. Our students are more confident and industry-ready than ever before.",
              image: "path/to/image1.jpg",
              color: "from-rose-500 to-pink-400"
            },
            {
              name: "Principal, Kalasalingam University",
              role: "Kalasalingam Academy of Research and Education",
              quote: "Partnering with Infoziant to set up a CoE in AI and Cybersecurity has significantly elevated our academic offerings. The customized labs, expert sessions, and project-based learning approach have bridged the gap between academia and industry. We truly value this partnership.",
              image: "path/to/image2.jpg",
              color: "from-violet-500 to-fuchsia-400"
            },
            
                      // Add more testimonials here
                    ]}
          />
    </div>
  );
};

export default COE;
