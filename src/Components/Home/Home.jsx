import React from 'react'
import Banner from './Banner/Banner';
import Ourservices from './Ourservices/Ourservices';
import SectionTwo from './InfoziantSection/InfoziantSection';
import ServicesSection from './Services1/ServicesSection';
import InnovativeTech from './Services1/InnovativeTech';
import TestimonialSection from './StudentTestimonials/Testimonials';
import StatsScroller from './Stats/StatsScrollerdark';
import CollegeClients from './Clients/CollegeClients';
import Accreditation from './Accreditations/Accreditations';
import ExpertiseSection from './ExpertiseSection/ExpertiseSection';
import Partnership from '../Cyber/Partnership';
import Portfolio from "../Cyber/portfolio";
import WhyInfoziant from '../Cyber/WhyInfoziant';



const Home = () => {
  return (
    <>
        <Banner />
        <SectionTwo/>
        <ExpertiseSection />
        <WhyInfoziant />
        <Partnership />
        <Accreditation />
        <Portfolio />
        <CollegeClients />
        <TestimonialSection />
      
      
    </>
  )
}

export default Home
