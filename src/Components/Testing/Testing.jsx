import React from 'react';
import Banner from './Banner/Banner';
import AboutUs from './AboutUs/AboutUs';
import Services from './Services/Services';
import ManualTesting from './ManualTesting/ManualTesting';
import AccessibilityTesting from './AccessibilityTesting/AccessibilityTesting';
import Innovations from './Innovations/Innovations';
import Achievements from './Achievements/Achievements';

const TestingPage = () => {
  return (
    <div>
      <Banner />
      <AboutUs />
      <Services />
      <ManualTesting />
      <AccessibilityTesting />
      <Innovations />
      <Achievements />
    </div>
  );
};

export default TestingPage;
