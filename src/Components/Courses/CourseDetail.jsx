import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { courseService, authService } from '../../services/appwrite';
import './Courses.css';

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [enrollmentLoading, setEnrollmentLoading] = useState(false);
  const [notification, setNotification] = useState({ show: false, message: '', type: '' });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Fetch course details
        const courseData = await courseService.getCourse(id);
        setCourse(courseData);
        
        // Check if user is logged in
        const userData = await authService.getCurrentUser();
        setUser(userData);
        
        // Check if user is enrolled in this course
        if (userData) {
          const enrollments = await courseService.getUserEnrollments(userData.$id);
          const enrolled = enrollments.coursesCollection?.some(c => c.$id === id) || false;
          setIsEnrolled(enrolled);
        }
      } catch (err) {
        console.error('Error fetching course details:', err);
        setError('Failed to load course details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleEnroll = async () => {
    if (!user) {
      // Redirect to login page if not logged in
      navigate('/login', { state: { from: `/courses/${id}` } });
      return;
    }

    try {
      setEnrollmentLoading(true);
      await courseService.enrollInCourse(user.$id, course);
      setIsEnrolled(true);
      showNotification('Successfully enrolled in the course!', 'success');
    } catch (err) {
      console.error('Error enrolling in course:', err);
      showNotification('Failed to enroll in the course. Please try again.', 'error');
    } finally {
      setEnrollmentLoading(false);
    }
  };

  const showNotification = (message, type) => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification({ show: false, message: '', type: '' });
    }, 3000);
  };

  if (loading) {
    return (
      <div className="course-detail-container loading">
        <div className="spinner"></div>
        <p>Loading course details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="course-detail-container error">
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Try Again</button>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="course-detail-container error">
        <p>Course not found.</p>
        <Link to="/courses" className="back-btn">Back to Courses</Link>
      </div>
    );
  }

  return (
    <div className="course-detail-container">
      {notification.show && (
        <div className={`notification ${notification.type}`}>
          {notification.message}
        </div>
      )}
      
      <div className="course-detail-header">
        <Link to="/courses" className="back-btn">
          &larr; Back to Courses
        </Link>
        <h1>{course.title}</h1>
        <p className="course-subtitle">{course.subtitle}</p>
      </div>

      <div className="course-detail-content">
        <div className="course-detail-main">
          <div className="course-banner">
            <img 
              src={course.thumbnail || '/public/assets/cloud-security-1.jpg'} 
              alt={course.title} 
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/public/assets/cloud-security-1.jpg';
              }}
            />
          </div>

          <div className="course-description-full">
            <h2>About This Course</h2>
            <p>{course.description}</p>
          </div>

          <div className="course-curriculum">
            <h2>What You'll Learn</h2>
            <ul>
              {course.learningOutcomes?.map((outcome, index) => (
                <li key={index}>{outcome}</li>
              )) || (
                <>
                  <li>Understand core concepts and principles</li>
                  <li>Apply practical skills in real-world scenarios</li>
                  <li>Master advanced techniques and methodologies</li>
                  <li>Develop problem-solving abilities in the field</li>
                </>
              )}
            </ul>
          </div>

          <div className="course-requirements">
            <h2>Requirements</h2>
            <ul>
              {course.requirements?.map((req, index) => (
                <li key={index}>{req}</li>
              )) || (
                <>
                  <li>Basic understanding of the subject</li>
                  <li>Computer with internet connection</li>
                  <li>Dedication to complete all course materials</li>
                </>
              )}
            </ul>
          </div>
        </div>

        <div className="course-detail-sidebar">
          <div className="course-info-card">
            <div className="course-price-large">
              {course.price ? `₹${course.price.toLocaleString()}` : 'Free'}
            </div>
            
            <div className="course-meta-large">
              <div className="meta-item">
                <span className="meta-label">Duration</span>
                <span className="meta-value">{course.duration}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Level</span>
                <span className="meta-value">{course.level}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Instructor</span>
                <span className="meta-value">{course.instructor}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Language</span>
                <span className="meta-value">{course.language || 'English'}</span>
              </div>
            </div>

            {isEnrolled ? (
              <Link to={`/my-courses`} className="enrolled-btn">
                Go to My Learning
              </Link>
            ) : (
              <button 
                className="enroll-now-btn" 
                onClick={handleEnroll}
                disabled={enrollmentLoading}
              >
                {enrollmentLoading ? 'Processing...' : 'Enroll Now'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;