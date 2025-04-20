import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { courseService, authService } from '../../services/appwrite';
import './Courses.css';

const MyCourses = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 4;

  useEffect(() => {
    const fetchEnrolledCourses = async () => {
      try {
        setLoading(true);
        // Check if user is logged in
        const user = await authService.getCurrentUser();
        
        if (!user) {
          setError('You need to be logged in to view your courses');
          return;
        }

        // Fetch user's enrollment document
        const userEnrollment = await courseService.getUserEnrollments(user.$id);
        setEnrolledCourses(userEnrollment.coursesCollection || []);
      } catch (err) {
        console.error('Error fetching enrolled courses:', err);
        setError('Failed to load your enrolled courses. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchEnrolledCourses();
  }, []);

  // Pagination handlers
  const nextPage = () => {
    if (currentPage < Math.ceil(enrolledCourses.length / coursesPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Get current courses
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = enrolledCourses.slice(indexOfFirstCourse, indexOfLastCourse);

  if (loading) {
    return (
      <div className="courses-container loading">
        <div className="spinner"></div>
        <p>Loading your courses...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="courses-container error">
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Try Again</button>
      </div>
    );
  }

  if (enrolledCourses.length === 0) {
    return (
      <div className="courses-container">
        <div className="courses-header">
          <h1>My Courses</h1>
          <p>Track your learning progress</p>
        </div>
        <div className="empty-state">
          <h3>You haven't enrolled in any courses yet</h3>
          <p>Explore our catalog and find courses that match your interests and career goals.</p>
          <Link to="/courses" className="empty-state-btn">Browse Courses</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="courses-container">
      <div className="courses-header">
        <h1>My Courses</h1>
        <p>Track your learning progress</p>
      </div>

      <div className="dashboard-stats">
        <div className="stat-card">
          <h3 id="enrolled-count">{enrolledCourses.length}</h3>
          <p>Enrolled Courses</p>
        </div>
        <div className="stat-card">
          <h3 id="completed-count">{Math.floor(enrolledCourses.length * 0.3)}</h3>
          <p>Completed Courses</p>
        </div>
        <div className="stat-card">
          <h3 id="hours-spent">{enrolledCourses.length * 5}</h3>
          <p>Hours Spent Learning</p>
        </div>
      </div>

      <div className="courses-grid">
        {currentCourses.map((course) => (
          <div key={course.$id} className="course-card">
            <div className="course-image">
              <img 
                src={course.thumbnail || '/public/assets/cloud-security-1.jpg'} 
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
              <div className="course-meta">
                <span><strong>Progress:</strong> {Math.floor(Math.random() * 100)}%</span>
                <span><strong>Duration:</strong> {course.duration}</span>
                <span><strong>Instructor:</strong> {course.instructor}</span>
              </div>
              <div className="course-actions">
                <Link to={`/courses/${course.$id}`} className="view-details-btn">
                  Continue Learning
                </Link>
                <Link to={`/courses/${course.$id}/certificate`} className="enroll-btn">
                  View Certificate
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {enrolledCourses.length > coursesPerPage && (
        <div className="pagination">
          <button 
            onClick={prevPage} 
            disabled={currentPage === 1}
            className={currentPage === 1 ? 'disabled' : ''}
          >
            Previous
          </button>
          <span>{currentPage} of {Math.ceil(enrolledCourses.length / coursesPerPage)}</span>
          <button 
            onClick={nextPage} 
            disabled={currentPage === Math.ceil(enrolledCourses.length / coursesPerPage)}
            className={currentPage === Math.ceil(enrolledCourses.length / coursesPerPage) ? 'disabled' : ''}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default MyCourses;