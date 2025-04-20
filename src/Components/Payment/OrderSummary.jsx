import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { courseService, authService } from '../../services/appwrite';
import './Payment.css';

const OrderSummary = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  
  const [course, setCourse] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Check if user is logged in
        const userData = await authService.getCurrentUser();
        if (!userData) {
          // Redirect to login if user is not authenticated
          navigate('/login', { state: { redirectTo: `/order-summary/${courseId}` } });
          return;
        }
        
        setUser(userData);
        
        // Fetch course details
        const courseData = await courseService.getCourseById(courseId);
        setCourse(courseData);
      } catch (err) {
        console.error('Error fetching order data:', err);
        setError('Failed to load order data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [courseId, navigate]);

  const proceedToCheckout = () => {
    navigate(`/checkout/${courseId}`);
  };

  if (loading) {
    return (
      <div className="order-summary-container loading">
        <div className="spinner"></div>
        <p>Loading order summary...</p>
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="order-summary-container error">
        <p>{error || 'Course not found'}</p>
        <button onClick={() => navigate('/courses')}>Back to Courses</button>
      </div>
    );
  }

  return (
    <div className="order-summary-container">
      <div className="order-summary-header">
        <h1>Order Summary</h1>
      </div>
      
      <div className="order-summary-content">
        <div className="course-info">
          <img 
            src={course.thumbnail || '/public/assets/cloud-security-1.jpg'} 
            alt={course.title} 
            className="course-thumbnail"
          />
          <div className="course-details">
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <div className="course-meta">
              <span><strong>Duration:</strong> {course.duration}</span>
              <span><strong>Level:</strong> {course.level}</span>
              <span><strong>Instructor:</strong> {course.instructor}</span>
            </div>
          </div>
        </div>
        
        <div className="price-details">
          <h2>Price Details</h2>
          <div className="price-row">
            <span>Course Price</span>
            <span>₹{course.price.toLocaleString()}</span>
          </div>
          <div className="price-row discount">
            <span>Discount</span>
            <span>₹0</span>
          </div>
          <div className="price-row total">
            <span>Total</span>
            <span>₹{course.price.toLocaleString()}</span>
          </div>
        </div>
        
        <div className="order-actions">
          <button className="proceed-button" onClick={proceedToCheckout}>Proceed to Checkout</button>
          <Link to={`/courses/${courseId}`} className="back-button">Back to Course</Link>
        </div>
        
        <div className="order-notes">
          <h3>What you'll get:</h3>
          <ul>
            <li>Full lifetime access to the course</li>
            <li>Access on mobile and desktop</li>
            <li>Certificate of completion</li>
            <li>24/7 support</li>
          </ul>
          <p className="guarantee">30-Day Money-Back Guarantee</p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;