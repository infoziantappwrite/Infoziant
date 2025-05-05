import React from 'react'
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
        <OurProducts />
        <HallofFames />
      
        <TestimonialSection />
      
      
    </>
  )
}

export default Home
