import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { courseService, authService } from '../../services/appwrite';
import './Dashboard.css';

const PurchasedCourses = () => {
  const navigate = useNavigate();
  const [userCourses, setUserCourses] = useState([]);
  const [courseDetails, setCourseDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Check if user is logged in
        const userData = await authService.getCurrentUser();
        
        if (!userData) {
          // Redirect to login if not authenticated
          navigate('/login', { state: { redirectTo: '/dashboard/courses' } });
          return;
        }
        
        setUser(userData);
        
        // Fetch user's purchased courses
        const userCoursesData = await courseService.getUserCourses(userData.$id);
        
        if (!userCoursesData || userCoursesData.length === 0) {
          setUserCourses([]);
          setLoading(false);
          return;
        }
        
        setUserCourses(userCoursesData);
        
        // Fetch details for each course
        const details = {};
        const fetchPromises = userCoursesData.map(async (userCourse) => {
          try {
            const courseData = await courseService.getCourseById(userCourse.courseId);
            details[userCourse.courseId] = courseData;
          } catch (err) {
            console.error(`Error fetching details for course ${userCourse.courseId}:`, err);
            // Store error information instead of null
            details[userCourse.courseId] = { 
              error: true, 
              message: 'Course details unavailable',
              $id: userCourse.courseId,
              title: 'Course Unavailable',
              description: 'The details for this course could not be loaded.'
            };
          }
        });
        
        // Wait for all course detail fetches to complete
        await Promise.all(fetchPromises);
        setCourseDetails(details);
      } catch (err) {
        console.error('Error fetching purchased courses:', err);
        setError('Failed to load your courses. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [navigate]);

  const updateProgress = async (userCourseId, newProgress) => {
    try {
      // Ensure progress is within valid range
      const validProgress = Math.max(0, Math.min(100, newProgress));
      
      // Update progress in database
      await courseService.updateCourseProgress(userCourseId, validProgress);
      
      // Update local state
      setUserCourses(prevCourses => 
        prevCourses.map(course => 
          course.$id === userCourseId ? { ...course, progress: validProgress } : course
        )
      );
    } catch (err) {
      console.error('Error updating progress:', err);
      alert('Failed to update progress. Please try again.');
    }
  };

  if (loading) {
    return (
      <div className="dashboard-container loading">
        <div className="spinner"></div>
        <p>Loading your courses...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="dashboard-container error">
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Try Again</button>
      </div>
    );
  }

  if (userCourses.length === 0) {
    return (
      <div className="dashboard-container empty">
        <h1>My Courses</h1>
        <div className="empty-courses">
          <p>You haven't purchased any courses yet.</p>
          <Link to="/courses" className="browse-courses-btn">Browse Courses</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <h1>My Courses</h1>
      
      <div className="purchased-courses">
        {userCourses.map((userCourse) => {
          const course = courseDetails[userCourse.courseId];
          if (!course) return null;
          
          // Determine if this is an error placeholder or actual course
          const isErrorPlaceholder = course.error === true;
          const thumbnailSrc = isErrorPlaceholder ? 
            '/public/assets/cloud-security-1.jpg' : 
            (course.thumbnail || '/public/assets/cloud-security-1.jpg');
          
          return (
            <div key={userCourse.$id} className={`purchased-course-card ${isErrorPlaceholder ? 'error-card' : ''}`}>
              <div className="course-image">
                <img 
                  src={thumbnailSrc} 
                  alt={course.title} 
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/public/assets/cloud-security-1.jpg';
                  }}
                />
              </div>
              <div className="course-content">
                <h3>{course.title}</h3>
                <p className="course-description">{course.description}</p>
                <div className="course-progress">
                  <div className="progress-label">
                    <span>Progress: {userCourse.progress}%</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${userCourse.progress}%` }}
                    ></div>
                  </div>
                </div>
                <div className="course-actions">
                  <Link 
                    to={`/courses/${course.$id}`} 
                    className="continue-btn"
                    aria-disabled={isErrorPlaceholder}
                    onClick={(e) => isErrorPlaceholder && e.preventDefault()}
                  >
                    {isErrorPlaceholder ? 'Unavailable' : 'Continue Learning'}
                  </Link>
                  {!isErrorPlaceholder && (
                    <div className="progress-buttons">
                      <button 
                        onClick={() => updateProgress(userCourse.$id, userCourse.progress - 10)}
                        disabled={userCourse.progress <= 0}
                      >
                        -10%
                      </button>
                      <button 
                        onClick={() => updateProgress(userCourse.$id, userCourse.progress + 10)}
                        disabled={userCourse.progress >= 100}
                      >
                        +10%
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PurchasedCourses;