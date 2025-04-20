import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Payment.css';

const PaymentStatus = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [status, setStatus] = useState(null);
  
  useEffect(() => {
    // Get payment status from location state
    const paymentStatus = location.state?.paymentStatus;
    
    if (!paymentStatus) {
      // If no payment status in state, redirect to courses
      navigate('/courses');
      return;
    }
    
    setStatus(paymentStatus);
    
    // If payment was successful, redirect to dashboard after 5 seconds
    if (paymentStatus.success) {
      const timer = setTimeout(() => {
        navigate('/dashboard/courses');
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [location.state, navigate]);
  
  if (!status) {
    return (
      <div className="payment-status-container loading">
        <div className="spinner"></div>
        <p>Processing...</p>
      </div>
    );
  }
  
  return (
    <div className="payment-status-container">
      <div className={`payment-status-card ${status.success ? 'success' : 'failure'}`}>
        <div className="status-icon">
          {status.success ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="15" y1="9" x2="9" y2="15"></line>
              <line x1="9" y1="9" x2="15" y2="15"></line>
            </svg>
          )}
        </div>
        
        <h2>{status.success ? 'Payment Successful!' : 'Payment Failed'}</h2>
        
        <div className="status-message">
          {status.success ? (
            <p>Your payment has been processed successfully. You now have access to the course.</p>
          ) : (
            <p>There was an issue processing your payment. {status.error?.description || 'Please try again.'}</p>
          )}
        </div>
        
        {status.success && (
          <div className="payment-details">
            <p><strong>Payment ID:</strong> {status.payment_id}</p>
            <p><strong>Order ID:</strong> {status.order_id}</p>
            <p><strong>Amount:</strong> ₹{status.amount?.toLocaleString() || 'N/A'}</p>
          </div>
        )}
        
        <div className="status-actions">
          {status.success ? (
            <>
              <p>Redirecting to your dashboard in 5 seconds...</p>
              <Link to="/dashboard/courses" className="action-button primary">Go to My Courses</Link>
            </>
          ) : (
            <>
              <Link to={`/courses/${status.courseId}`} className="action-button secondary">Try Again</Link>
              <Link to="/courses" className="action-button primary">Browse Courses</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentStatus;