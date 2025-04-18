/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home/Home';
import WebandApp from './Components/Services/Web&app development';
import Talent from './Components/Talent/Talent';
import Placement_Support from './Components/c2cservices/Placement_Support';
import Internship_Programs from './Components/c2cservices/Intership_Programs';
import COE from './Components/c2cservices/COE';
import Testing from './Components/Testing/Testing';
import CodeChef from './Components/c2cservices/CodeChef';
import PageNotFound from './Components/PageNotFound';
import ScrollToTop from './Components/ScrollToTop';
import Loader from './Components/Loader';
import Layout from './Components/Cyber/Layout';
import Products from './Components/products/Product';
import Edutech_Platform from './Components/c2cservices/Edutech';
import Awards from './Components/Pages/Awards';
import Contact from './Components/Pages/Contact';

const Page = () => (
  <div className="w-screen h-full flex items-center justify-center bg-white">
    <img src="/Test.jpg" alt="Coming Soon" className="w-full h-full object-contain" />
  </div>
);

const App = () => {
  
  const fetchData = async () => {
    // Replace with your actual data fetching logic (e.g., API call)
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };
  return (
    <Router>
       <ScrollToTop />
       <Loader fetchData={fetchData}>
      <Header />
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<Page title="About Us" />} />
      <Route path="/product" element={<Products/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/awards" element={<Awards />} />
      <Route path="/blog" element={<Page title="Blog" />} />  
      <Route path="/services/placement" element={<Placement_Support/>} />
      <Route path="/services/internship" element={<Internship_Programs />} />
      <Route path="/services/training" element={<Page title="Training" />} />
      <Route path="/services/coe" element={<COE />} />
      <Route path="/services/edutech" element={<Edutech_Platform/>} />
      <Route path="/services/codechef" element={<CodeChef/>} />
      <Route path="/services/tech-talent" element={<Talent/>} />
      <Route path="/services/cybersecurity" element={<Layout />} />
      <Route path="/services/web-app-development" element={<WebandApp />} />
      <Route path="/services/testing" element={<Testing />} />
      <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
      </Loader>
    </Router>
  );
};

export default App;
