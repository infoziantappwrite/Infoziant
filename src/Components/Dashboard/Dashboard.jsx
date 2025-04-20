import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { authService, courseService } from '../../services/appwrite';
import './Dashboard.css'; // We'll create this CSS file next
import { FaBook, FaCheckCircle, FaClock, FaCertificate } from 'react-icons/fa';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [recommendedCourses, setRecommendedCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const currentUser = await authService.getCurrentUser();
        setUser(currentUser);

        if (currentUser) {
          // Fetch enrolled courses
          const userEnrollment = await courseService.getUserEnrollments(currentUser.$id);
          const enrolled = userEnrollment.coursesCollection || [];
          setEnrolledCourses(enrolled);

          // Fetch recommended courses (simple example: fetch all, exclude enrolled)
          const allCourses = await courseService.getAllCourses();
          const enrolledIds = enrolled.map(c => c.$id);
          const recommended = allCourses.filter(c => !enrolledIds.includes(c.$id)).slice(0, 3); // Show top 3 recommendations
          setRecommendedCourses(recommended);
        }
      } catch (err) {
        console.error('Error fetching dashboard data:', err);
        setError('Failed to load dashboard data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Calculate stats (simplified)
  const completedCount = Math.floor(enrolledCourses.length * 0.3); // Placeholder
  const hoursSpent = enrolledCourses.length * 5; // Placeholder
  const certificates = Math.floor(completedCount * 0.8); // Placeholder

  if (loading) {
    return (
      <div className="dashboard-container loading">
        <div className="spinner"></div>
        <p>Loading dashboard...</p>
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

  if (!user) {
    // This should ideally be handled by a protected route in App.jsx
    return <div className="dashboard-container error"><p>Please log in to view your dashboard.</p></div>;
  }

  const inProgressCourses = enrolledCourses.slice(0, 3); // Show top 3 in-progress

  return (
    <div className="dashboard-container">
      <div className="welcome-section">
        <h2>Welcome, {user.name || 'Student'}!</h2>
        <p>Here's an overview of your learning journey</p>
      </div>

      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-icon"><FaBook /></div>
          <div className="stat-info">
            <h3>{enrolledCourses.length}</h3>
            <p>Enrolled Courses</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon"><FaCheckCircle /></div>
          <div className="stat-info">
            <h3>{completedCount}</h3>
            <p>Completed Courses</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon"><FaClock /></div>
          <div className="stat-info">
            <h3>{hoursSpent}</h3>
            <p>Hours Spent</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon"><FaCertificate /></div>
          <div className="stat-info">
            <h3>{certificates}</h3>
            <p>Certificates</p>
          </div>
        </div>
      </div>

      <div className="dashboard-sections">
        <div className="section-row">
          <div className="dashboard-section-card">
            <div className="section-header">
              <h3>In Progress Courses</h3>
              <Link to="/my-courses" className="view-all">View All</Link>
            </div>
            <div className="section-content">
              {inProgressCourses.length > 0 ? (
                inProgressCourses.map(course => (
                  <div key={course.$id} className="dashboard-course-item">
                    <img src={course.thumbnail || '/public/assets/cloud-security-1.jpg'} alt={course.title} />
                    <div className="course-item-info">
                      <h4>{course.title}</h4>
                      <p>Progress: {Math.floor(Math.random() * 100)}%</p> {/* Placeholder */} 
                      <Link to={`/courses/${course.$id}`} className="continue-link">Continue</Link>
                    </div>
                  </div>
                ))
              ) : (
                <p>No courses in progress.</p>
              )}
            </div>
          </div>
          <div className="dashboard-section-card">
            <div className="section-header">
              <h3>Recommended Courses</h3>
              <Link to="/courses" className="view-all">Browse All</Link>
            </div>
            <div className="section-content">
              {recommendedCourses.length > 0 ? (
                recommendedCourses.map(course => (
                  <div key={course.$id} className="dashboard-course-item">
                    <img src={course.thumbnail || '/public/assets/cloud-security-1.jpg'} alt={course.title} />
                    <div className="course-item-info">
                      <h4>{course.title}</h4>
                      <p>{course.level} | {course.duration}</p>
                      <Link to={`/courses/${course.$id}`} className="view-details-link">View Details</Link>
                    </div>
                  </div>
                ))
              ) : (
                <p>No recommendations available right now.</p>
              )}
            </div>
          </div>
        </div>
        {/* Add other sections like Learning Progress, Achievements etc. based on dashboard.html */}
      </div>
    </div>
  );
};

export default Dashboard;