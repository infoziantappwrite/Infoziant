import React from 'react'
import { useLocation } from 'react-router-dom';
import { useRef, useEffect } from 'react';
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
import OurProducts from './OurProducts/OurProducts';



const Home = () => {
  const portfolioRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === 'portfolio' && portfolioRef.current) {
      portfolioRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);
  return (
    <>
        <Banner />
        <SectionTwo/>
        <ExpertiseSection />
        <WhyInfoziant />
        <Partnership />
        <Accreditation />
        <div ref={portfolioRef}>
        <Portfolio />
      </div>
        <OurProducts />
        <CollegeClients />
        <TestimonialSection />
      
      
    </>
  )
}

export default Home
