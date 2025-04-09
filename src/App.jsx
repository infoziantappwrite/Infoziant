import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';

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
      <Route path="/" element={<Page title="Home" />} />
      <Route path="/about" element={<Page title="About Us" />} />
      <Route path="/product" element={<Page title="Product" />} />
      <Route path="/contact" element={<Page title="Contact Us" />} />
      <Route path="/awards" element={<Page title="Awards" />} />
      <Route path="/blog" element={<Page title="Blog" />} />  
      <Route path="/placement" element={<Page title="Placement" />} />
      <Route path="/internship" element={<Page title="Internship" />} />
      <Route path="/training" element={<Page title="Training" />} />
      <Route path="/coe" element={<Page title="CoE" />} />
      <Route path="/edutech" element={<Page title="Edutech" />} />
      <Route path="/codechef" element={<Page title="CodeChef" />} />
      <Route path="/talent-services" element={<Page title="Talent Services" />} />
      <Route path="/cybersecurity" element={<Page title="Cybersecurity" />} />
      <Route path="/web-development" element={<Page title="Web Development" />} />
      <Route path="/testing" element={<Page title="Testing" />} />
      </Routes>
    </Router>
  );
};

export default App;
