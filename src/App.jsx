/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home/Home';
import WebandApp from './Components/Services/Web&app development';
import Talent from './Components/Talent/Talent';
import Placement_Support from './Components/c2cservices/Placement_Support';
import Testing from './Components/Testing/Testing';
import PageNotFound from './Components/PageNotFound';


const Page = () => (
  <div className="w-screen h-full flex items-center justify-center bg-white">
    <img src="/Test.jpg" alt="Coming Soon" className="w-full h-full object-contain" />
  </div>
);

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<Page title="About Us" />} />
      <Route path="/product" element={<Page title="Product" />} />
      <Route path="/contact" element={<Page title="Contact Us" />} />
      <Route path="/awards" element={<Page title="Awards" />} />
      <Route path="/blog" element={<Page title="Blog" />} />  
      <Route path="/services/placement" element={<Placement_Support/>} />
      <Route path="/services/internship" element={<Page title="Internship" />} />
      <Route path="/services/training" element={<Page title="Training" />} />
      <Route path="/services/coe" element={<Page title="CoE" />} />
      <Route path="/services/edutech" element={<Page title="Edutech" />} />
      <Route path="/services/codechef" element={<Page title="CodeChef" />} />
      <Route path="/services/tech-talent" element={<Talent/>} />
      <Route path="/services/cybersecurity" element={<Page title="Cybersecurity" />} />
      <Route path="/services/web-app-development" element={<WebandApp />} />
      <Route path="/services/testing" element={<Testing />} />
      <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
