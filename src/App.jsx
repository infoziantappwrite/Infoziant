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

// Course and Auth components
import CoursesList from './Components/Courses/CoursesList';
import CourseDetail from './Components/Courses/CourseDetail';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import PurchasedCourses from './Components/Dashboard/PurchasedCourses';
import OrderSummary from './Components/Payment/OrderSummary';
import Checkout from './Components/Payment/Checkout';
import PaymentStatus from './Components/Payment/PaymentStatus';


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


import Awards from './Components/Pages/Awards';
import Contact from './Components/Pages/Contact';
import { LogOut } from 'lucide-react';

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
      <Route path="/blog" element={<Blog />} /> 
      <Route path="/fortifying-mobile-app-security" element={<Blog1Detail />} />
      <Route path="/why-strong-passwords-matter-and-how-to-create" element={<Blog2Detail />} />
      <Route path="/phishing-beware-of-fake-emails-and-messages" element={<Blog3Detail />} />
      <Route path="/strengthening-your-digital-fortress" element={<Blog4Detail />} />
      <Route path="/elevating-security-with-firewalls" element={<Blog5Detail />} />
      <Route path="/top-5-effective-website-security-tips-for-2024" element={<Blog6Detail />} />
      
      {/* Course routes */}
      <Route path="/courses" element={<CoursesList />} />
      <Route path="/courses/:courseId" element={<CourseDetail />} />
      
      {/* Payment routes */}
      <Route path="/order-summary/:courseId" element={<OrderSummary />} />
      <Route path="/checkout/:courseId" element={<Checkout />} />
      <Route path="/payment/status" element={<PaymentStatus />} />
      
      {/* Authentication routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* <Route path="/logout" element={<Logout />} /> */}
      
      {/* Dashboard routes */}
      <Route path="/dashboard/courses" element={<PurchasedCourses />} />

      <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
      </Loader>
    </Router>
  );
};

export default App;
