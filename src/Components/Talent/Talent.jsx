import React from 'react'
import Banner from './Banner/Banner';
import Ourservices from './Ourservices/Ourservices';
import ServicesSection from './Services1/ServicesSection';
import InnovativeTech from './Services1/InnovativeTech';
import TestimonialSection from './StudentTestimonials/Testimonials';
import StatsScroller from './Stats/StatsScroller';
import ConsultationForm from '../Pages/ConsultationForm';



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
      <div id="get-started">
        <ServicesSection />
      </div>

      <InnovativeTech />

      <StatsScroller />
      {/* <CollegeClients /> */}
      <TestimonialSection />
      <ConsultationForm />
      {/* <ContactSection /> */}
      {/* <Footer /> */}


    </>
  )
}

export default Home
