import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { courseService, authService } from '../../services/appwrite';
import { initRazorpay, paymentService } from '../../services/razorpay';
import './Payment.css';

const Checkout = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  
  const [course, setCourse] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Check if user is logged in
        const userData = await authService.getCurrentUser();
        if (!userData) {
          // Redirect to login if user is not authenticated
          navigate('/login', { state: { redirectTo: `/checkout/${courseId}` } });
          return;
        }
        
        setUser(userData);
        
        // Fetch course details
        const courseData = await courseService.getCourseById(courseId);
        setCourse(courseData);
      } catch (err) {
        console.error('Error fetching checkout data:', err);
        setError('Failed to load checkout data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [courseId, navigate]);
  
  const handlePayment = async () => {
    try {
      setPaymentProcessing(true);
      
      // Check if course is free
      if (!course.price) {
        // Handle free course enrollment directly
        try {
          await courseService.purchaseCourse(
            user.$id,
            course.$id,
            'free_enrollment',
            0
          );
          
          // Navigate to success page
          navigate('/payment/status', { 
            state: { 
              paymentStatus: {
                success: true,
                payment_id: 'free_enrollment',
                order_id: 'free_' + Date.now(),
                amount: 0,
                courseId: course.$id
              } 
            } 
          });
          return;
        } catch (enrollError) {
          console.error('Free enrollment error:', enrollError);
          throw new Error('Failed to enroll in free course');
        }
      }
      
      // Initialize Razorpay for paid courses
      const isRazorpayLoaded = await initRazorpay();
      
      if (!isRazorpayLoaded) {
        throw new Error('Razorpay SDK failed to load');
      }
      
      // Create order
      const orderData = await paymentService.createOrder(
        course.$id,
        course.price,
        user.$id,
        course.title
      );
      
      // Process payment using the centralized service
      const paymentResult = await paymentService.processPayment(orderData, user, course);
      
      // Navigate based on payment result
      if (paymentResult.success) {
        // Navigate to payment status page on success
        navigate('/payment/status', { 
          state: { 
            paymentStatus: {
              success: true,
              payment_id: paymentResult.payment_id,
              order_id: paymentResult.order_id,
              amount: course.price,
              courseId: course.$id
            } 
          } 
        });
      } else {
        // Navigate to payment status page on failure
        navigate('/payment/status', { 
          state: { 
            paymentStatus: {
              success: false,
              error: paymentResult.error,
              courseId: course.$id
            } 
          } 
        });
      }
    } catch (err) {
      console.error('Payment error:', err);
      setError('Failed to process payment. Please try again.');
      setPaymentProcessing(false);
    }
  };

  if (loading) {
    return (
      <div className="checkout-container loading">
        <div className="spinner"></div>
        <p>Loading checkout...</p>
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="checkout-container error">
        <p>{error || 'Course not found'}</p>
        <button onClick={() => navigate('/courses')}>Back to Courses</button>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <h1>Checkout</h1>
      </div>
      
      <div className="checkout-content">
        <div className="order-summary">
          <h2>Order Summary</h2>
          
          <div className="course-info">
            <img 
              src={course.thumbnail || '/public/assets/cloud-security-1.jpg'} 
              alt={course.title} 
              className="course-thumbnail"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/public/assets/cloud-security-1.jpg';
              }}
            />
            <div className="course-details">
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <div className="course-meta">
                <span><strong>Duration:</strong> {course.duration}</span>
                <span><strong>Level:</strong> {course.level}</span>
              </div>
            </div>
          </div>
          
          <div className="price-details">
            <div className="price-row">
              <span>Course Price</span>
              <span>{course.price ? `₹${course.price.toLocaleString()}` : 'Free'}</span>
            </div>
            <div className="price-row discount">
              <span>Discount</span>
              <span>₹0</span>
            </div>
            <div className="price-row total">
              <span>Total</span>
              <span>{course.price ? `₹${course.price.toLocaleString()}` : 'Free'}</span>
            </div>
          </div>
        </div>
        
        <div className="payment-section">
          <h2>Payment Method</h2>
          <p>Secure payment via Razorpay</p>
          
          <div className="payment-options">
            <div className="payment-option selected">
              <input type="radio" id="razorpay" name="payment" checked readOnly />
              <label htmlFor="razorpay">Credit/Debit Card, UPI, Netbanking</label>
            </div>
          </div>
          
          <button 
            className="payment-button" 
            onClick={handlePayment}
            disabled={paymentProcessing}
          >
            {paymentProcessing ? 'Processing...' : 'Pay Now'}
          </button>
          
          <div className="secure-payment-note">
            <p>Your payment information is secure. We use industry-standard encryption to protect your data.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;