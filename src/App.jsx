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
import Blog from './Components/c2cservices/Blog/Blog';
import LLM from "./Components/AI/LLM/LLM.jsx";


// CSS imports
import './Components/css/Awards.css';
import './Components/css/BlogDetail.css';
import './Components/css/Blogs.css';
import './Components/css/ServicesList.css';
import Blog1Detail from './Components/c2cservices/Blog/Blog1Detail';
import Blog2Detail from './Components/c2cservices/Blog/Blog2Detail';
import Blog3Detail from './Components/c2cservices/Blog/Blog3Detail';
import Blog4Detail from './Components/c2cservices/Blog/Blog4Detail';
import Blog5Detail from './Components/c2cservices/Blog/Blog5Detail';
import Blog6Detail from './Components/c2cservices/Blog/Blog6Detail';
import About from './Components/About/About';
import Awards from './Components/Pages/Awards';
import Contact from './Components/Pages/Contact';
import Vapt from './Components/VAPT/Vapt';
import WebAndMobile from './Components/VAPTservices/WebAndMobile';
import NetworkInfrastructure from './Components/VAPTservices/NetworkInfrastructure';
import CloudInfrastructure from './Components/VAPTservices/CloudInfrastructure';
import ApiVapt from './Components/VAPTservices/ApiVapt';
import Siem from './Components/VAPTservices/Siem';
import GenAI from './Components/Genai/GenAI.jsx';
import RedirectAicl from './Components/RedirectAicl.jsx';
const Page = () => (
  <div className="w-screen h-full flex items-center justify-center bg-white">
    <img src="/Test.jpg" alt="Coming Soon" className="w-full h-full object-contain" />
  </div>
);

const App = () => {
  
  const fetchData = async () => {

    return new Promise((resolve) => {

      setTimeout(() => {
        resolve({ success: true });
      }, 1500);
    });
  };
  return (
    <Router>
       <ScrollToTop />
      <Loader fetchData={fetchData}>
      <Header />
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/product" element={<Products/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/awards" element={<Awards />} />
      <Route path="/services/placement" element={<Placement_Support/>} />
      <Route path="/services/internship" element={<Internship_Programs />} />
      <Route path="/services/training" element={< RedirectAicl />} />
      <Route path="/services/coe" element={<COE />} />
      <Route path="/services/edutech" element={<Edutech_Platform/>} />
      <Route path="/services/codechef" element={<CodeChef/>} />
      <Route path="/services/tech-talent" element={<Talent/>} />
      <Route path="/services/cybersecurity" element={<Layout />} />
      <Route path="/services/web-app-development" element={<WebandApp />} />
      <Route path="/services/testing" element={<Testing />} />
      <Route path="/blogs" element={<Blog />} /> 
      <Route path="/fortifying-mobile-app-security" element={<Blog1Detail />} />
      <Route path="/why-strong-passwords-matter-and-how-to-create" element={<Blog2Detail />} />
      <Route path="/phishing-beware-of-fake-emails-and-messages" element={<Blog3Detail />} />
      <Route path="/strengthening-your-digital-fortress" element={<Blog4Detail />} />
      <Route path="/elevating-security-with-firewalls" element={<Blog5Detail />} />
      <Route path="/top-5-effective-website-security-tips-for-2024" element={<Blog6Detail />} />
      <Route path="/services/cybersecurity/vapt" element={<Vapt />} />
      <Route path="/services/cybersecurity/vapt/network-infrastructure" element={<NetworkInfrastructure />}/>
      <Route path="/services/cybersecurity/vapt/web-and-mobile-app" element={<WebAndMobile />}/>
      <Route path="/services/cybersecurity/vapt/cloud-infrastructure" element={<CloudInfrastructure />}/>
      <Route path="/services/cybersecurity/vapt/api-vapt" element={<ApiVapt />}/>
      <Route path="/services/cybersecurity/vapt/siem" element={<Siem />}/>
      <Route path="/services/llm" element={<LLM />}/>
      <Route path="/services/genai" element={<GenAI />}/>
      <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
      </Loader>
    </Router>
  );
};

export default App;
