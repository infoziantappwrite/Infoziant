import React from 'react'
import { useLocation } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import Banner from './Banner/Banner';
import SectionTwo from './InfoziantSection/InfoziantSection';
import TestimonialSection from './StudentTestimonials/Testimonials';
import Accreditation from './Accreditations/Accreditations';
import ExpertiseSection from './ExpertiseSection/ExpertiseSection';
import Partnership from '../Cyber/Partnership';
import Portfolio from "../Cyber/portfolio";
import WhyInfoziant from '../Cyber/WhyInfoziant';
import OurProducts from './OurProducts/OurProducts';
import HallofFames from '../Pages/HallofFames';
import HomeBanner from "../Cyber/HomeBannermain"



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
       
        <HomeBanner />
        <SectionTwo/>
        <ExpertiseSection />
        <WhyInfoziant />
        <Partnership />
        <Accreditation />
        <OurProducts />
        <div ref={portfolioRef}>
        <Portfolio />
        </div>
        <HallofFames />
        <TestimonialSection />
      
      
    </>
  )
}

export default Home
