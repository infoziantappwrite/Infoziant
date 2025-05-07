/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import "./About.css"
import { Helmet } from 'react-helmet';
import Testimonials from './components/Testimonials';
import AboutBanner from './components/AboutBanner';
import Achievements from './components/Achievements';
import AboutUsSection from '../Home/AboutSection/AboutUsSection';
import AppreciatedBy from './components/AppreciatedBydark';
import InnovativeTech from '../Home/Services1/InnovativeTech';
import ServicesSection from "../Home/Services1/ServicesSection";
import StatsScroller from "../Home/Stats/StatsScroller";
import Testimonials1 from './components/Testimonialsc2c';
import CollegeClients from '../Home/Clients/CollegeClients';
import ExpertiseSection from '../Home/ExpertiseSection/ExpertiseSection.jsx';




const About = () => {
  return (
    <>
    
      <Helmet>
        <title>About Infoziant: Your Trusted Cybersecurity Partner</title>
        <meta name="description" content="Founded by industry experts, Infoziant offers cutting-edge cybersecurity solutions to safeguard your business. Trusted by Fortune 500 companies globally." />
      </Helmet>
      <div className='about-page'>
        
        <AboutBanner></AboutBanner>
        
        <AboutUsSection></AboutUsSection>
        <Achievements></Achievements>
        <ExpertiseSection />
        {/* <InnovativeTech></InnovativeTech> */}
    
        
        <AppreciatedBy></AppreciatedBy>
        <Testimonials></Testimonials>
        <ServicesSection></ServicesSection>   
        <StatsScroller></StatsScroller>
        <CollegeClients></CollegeClients>
        <Testimonials1></Testimonials1>
       
       

        
       
        
        
        
      </div>

    </>
  )
};


export default About;