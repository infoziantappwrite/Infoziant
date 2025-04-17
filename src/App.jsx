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
      <Route path="/placement" element={<Placement_Support/>} />
      <Route path="/internship" element={<Page title="Internship" />} />
      <Route path="/training" element={<Page title="Training" />} />
      <Route path="/coe" element={<Page title="CoE" />} />
      <Route path="/edutech" element={<Page title="Edutech" />} />
      <Route path="/codechef" element={<Page title="CodeChef" />} />
      <Route path="/tech-talent" element={<Talent/>} />
      <Route path="/cybersecurity" element={<Page title="Cybersecurity" />} />
      <Route path="/web-app-development" element={<WebandApp />} />
      <Route path="/testing" element={<Testing />} />
      <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
