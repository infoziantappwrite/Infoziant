/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import "./About.css"
import { Helmet } from 'react-helmet';
import Whoweare from './components/Whoweare';
import Testimonials from './components/Testimonials';
import AboutBanner from './components/AboutBanner';
import Achievements from './components/Achievements';
import KeySolutions from './components/KeySolutions';
import AppreciatedBy from './components/AppreciatedBy';



const About = () => {
  return (
    <>
    
      <Helmet>
        <title>About Infoziant: Your Trusted Cybersecurity Partner</title>
        <meta name="description" content="Founded by industry experts, Infoziant offers cutting-edge cybersecurity solutions to safeguard your business. Trusted by Fortune 500 companies globally." />
      </Helmet>
      <div className='about-page'>
        
        <AboutBanner></AboutBanner>
        <Achievements></Achievements>
        <Whoweare></Whoweare>
        <Testimonials></Testimonials>
        <KeySolutions></KeySolutions>
        <AppreciatedBy></AppreciatedBy>
        
        
      </div>

    </>
  )
};


export default About;