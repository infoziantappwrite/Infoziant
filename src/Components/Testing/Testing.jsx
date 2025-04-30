import React from 'react';
import Banner from './Banner/Banner';
import AboutUs from './AboutUs/AboutUs';
import Services from './Services/Services';
import ManualTesting from './ManualTesting/ManualTesting';
import AccessibilityTesting from './AccessibilityTesting/AccessibilityTesting';
import Innovations from './Innovations/Innovations';
import Achievements from './Achievements/Achievements';
import ConsultationForm from '../Pages/ConsultationForm';

const TestingPage = () => {
  return (
    <div>
      <Banner />
      <AboutUs />
      <div id="get-started">
      <Services />
      </div>
      
      <ManualTesting />
      <AccessibilityTesting />
      <Innovations />
      <Achievements />
      <ConsultationForm />
    </div>
  );
};

export default TestingPage;
