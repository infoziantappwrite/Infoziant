import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home/Home';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
// import ForgotPassword from './Components/Auth/ForgotPassword';
// import ResetPassword from './Components/Auth/ResetPassword';
import AllCourses from './Components/Courses/AllCourses';
import CourseDetail from './Components/Courses/CourseDetail';
import MyCourses from './Components/Courses/MyCourses';
import About from './Components/Pages/About'; // Import the About component
import Contact from './Components/Pages/Contact'; // Import the Contact component
import Dashboard from './Components/Dashboard/Dashboard'; // Import the Dashboard component
 import PageNotFound from './Components/PageNotFound';
 import ScrollToTop from './Components/ScrollToTop';
 import { authService } from './services/appwrite';
import Loader from './Components/Loader';
// import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const currentUser = await authService.getCurrentUser();
        setUser(currentUser);
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    checkUser();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <ScrollToTop />
      <Header user={user} setUser={setUser} />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} /> */}
          <Route path="/courses" element={<AllCourses />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
          <Route path="/my-courses" element={user ? <MyCourses /> : <Navigate to="/login" replace />} />
+          <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" replace />} /> {/* Add protected route for Dashboard */}
           <Route path="/about" element={<About />} /> {/* Add route for About page */}
           <Route path="/contact" element={<Contact />} /> {/* Add route for Contact page */}
           <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
