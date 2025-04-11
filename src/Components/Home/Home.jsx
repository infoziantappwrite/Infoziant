import React from 'react'
import Banner from './Banner/Banner';
import Ourservices from './Ourservices/Ourservices';
import AboutUsSection from './AboutSection/AboutUsSection';
import ServicesSection from './Services1/ServicesSection';
import InnovativeTech from './Services1/InnovativeTech';
import StatsScroller from './Stats/StatsScroller';
import CollegeClients from './Clients/CollegeClients';


const Home = () => {
  return (
    <>
        <Banner />
        <AboutUsSection />
      
        {/* <CounterSection /> */}
        {/* <Testimonials /> */}
        {/* <BlogSection /> */}
        {/* <ContactSection /> */}
        <Ourservices />
        <ServicesSection />
        <InnovativeTech />
        <StatsScroller />
        <CollegeClients />
        {/* <ContactSection /> */}
        {/* <Footer /> */}

  
      
    </>
  )
}

export default Home
