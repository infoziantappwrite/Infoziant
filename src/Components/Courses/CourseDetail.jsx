import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { courseService, authService } from '../../services/appwrite';

import './CourseDetail.css';

const CourseDetail = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [isPurchased, setIsPurchased] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Check if user is logged in
        const userData = await authService.getCurrentUser();
        setUser(userData);
        
        // Fetch course details
        const courseData = await courseService.getCourseById(courseId);
        setCourse(courseData);
        
        // Check if user has purchased this course
        if (userData) {
          const userCourses = await courseService.getUserCourses(userData.$id);
          const hasPurchased = userCourses.some(uc => uc.courseId === courseId);
          setIsPurchased(hasPurchased);
        }
      } catch (err) {
        console.error('Error fetching course details:', err);
        setError('Failed to load course details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [courseId]);

  if (loading) {
    return (
      <div className="course-detail-container loading">
        <div className="spinner"></div>
        <p>Loading course details...</p>
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="course-detail-container error">
        <p>{error || 'Course not found'}</p>
        <button onClick={() => navigate('/courses')}>Back to Courses</button>
      </div>
    );
  }

  return (
    <div className="course-detail-container">
      <div className="course-header">
        <div className="course-header-content">
          <h1>{course.title}</h1>
          <p className="course-description">{course.description}</p>
          <div className="course-meta">
            <span><strong>Duration:</strong> {course.duration}</span>
            <span><strong>Level:</strong> {course.level}</span>
            <span><strong>Instructor:</strong> {course.instructor}</span>
          </div>
        </div>
        <div className="course-header-image">
          <img 
            src={course.thumbnail || '/public/assets/cloud-security-1.jpg'} 
            alt={course.title} 
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/public/assets/cloud-security-1.jpg';
            }}
          />
        </div>
      </div>
      
      <div className="course-tabs">
        <button 
          className={activeTab === 'overview' ? 'active' : ''}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button 
          className={activeTab === 'curriculum' ? 'active' : ''}
          onClick={() => setActiveTab('curriculum')}
        >
          Curriculum
        </button>
        <button 
          className={activeTab === 'preview' ? 'active' : ''}
          onClick={() => setActiveTab('preview')}
        >
          Preview
        </button>
      </div>
      
      <div className="course-content">
        {activeTab === 'overview' && (
          <div className="course-overview">
            <h2>Course Overview</h2>
            <p>{course.description}</p>
            <h3>What You'll Learn</h3>
            <ul>
              {course.curriculum && course.curriculum.map((item, index) => (
                <li key={index}>{item.title}</li>
              ))}
            </ul>
            <h3>Requirements</h3>
            <ul>
              <li>Basic understanding of {course.level === 'Advanced' ? 'intermediate' : 'basic'} concepts</li>
              <li>A computer with internet connection</li>
              <li>Dedication and willingness to learn</li>
            </ul>
          </div>
        )}
        
        {activeTab === 'curriculum' && (
          <div className="course-curriculum">
            <h2>Course Curriculum</h2>
            <div className="curriculum-list">
              {course.curriculum && course.curriculum.map((item, index) => (
                <div key={index} className="curriculum-item">
                  <div className="curriculum-item-header">
                    <h3>{item.title}</h3>
                    <span>{item.duration}</span>
                  </div>
                  {isPurchased && (
                    <div className="curriculum-item-content">
                      <p>Content available after purchase</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        
        {activeTab === 'preview' && (
          <div className="course-preview">
            <h2>Course Preview</h2>
            <div className="video-container">
              {course.preview_video ? (
                <iframe 
                  width="100%" 
                  height="500" 
                  src={course.preview_video} 
                  title="Course Preview" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="no-preview">
                  <p>No preview available for this course</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      
      <div className="course-sidebar">
        <div className="course-price-card">
          <div className="price-header">
            <h2>{course.price ? `₹${course.price.toLocaleString()}` : 'Free'}</h2>
          </div>
          <div className="price-features">
            <ul>
              <li>Full lifetime access</li>
              <li>Access on mobile and desktop</li>
              <li>Certificate of completion</li>
              <li>24/7 support</li>
            </ul>
          </div>
          <div className="price-action">
            {isPurchased ? (
              <button className="enrolled-btn" disabled>Already Enrolled</button>
            ) : (
              <button 
                className="purchase-btn" 
                onClick={() => navigate(`/order-summary/${course.$id}`)}
              >
                Enroll Now
              </button>
            )}
          </div>
          <div className="money-back">
            <p>30-Day Money-Back Guarantee</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;