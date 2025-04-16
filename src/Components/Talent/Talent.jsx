import React from 'react'
import Banner from './Banner/Banner';
import Ourservices from './Ourservices/Ourservices';
import ServicesSection from './Services1/ServicesSection';
import InnovativeTech from './Services1/InnovativeTech';
import TestimonialSection from './StudentTestimonials/Testimonials';
import StatsScroller from './Stats/StatsScroller';



const Home = () => {
  return (
    <>
        <Banner />
        {/* <AboutUsSection /> */}
      
        {/* <CounterSection /> */}
        {/* <Testimonials /> */}
        {/* <BlogSection /> */}
        {/* <ContactSection /> */}
        <Ourservices />
        <ServicesSection />
        <InnovativeTech />
       
        <StatsScroller />
        {/* <CollegeClients /> */}
        {/* <TestimonialSection /> */}
        {/* <ContactSection /> */}
        {/* <Footer /> */}
  
      
    </>
  )
}

export default Home
