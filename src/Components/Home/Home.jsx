import React from 'react'
import Banner from './Banner/Banner';
import Ourservices from './Ourservices/Ourservices';
import AboutUsSection from './AboutSection/AboutUsSection';
import Services from './Services/Services';

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
        <Services />
      
    </>
  )
}

export default Home
