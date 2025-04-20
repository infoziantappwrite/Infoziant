import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { courseService, authService } from '../../services/appwrite';
import './Courses.css';

const CoursesList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Fetch courses
        const coursesData = await courseService.getAllCourses();
        setCourses(coursesData);
        
        // Check if user is logged in
        const userData = await authService.getCurrentUser();
        setUser(userData);
      } catch (err) {
        console.error('Error fetching courses:', err);
        setError('Failed to load courses. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="courses-container loading">
        <div className="spinner"></div>
        <p>Loading courses...</p>
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

  if (courses.length === 0) {
    return (
      <div className="courses-container empty">
        <div className="courses-header">
          <h1>Professional Courses</h1>
          <p>Enhance your skills with our expert-led professional courses</p>
        </div>
        <p>No courses available at the moment. Please check back later.</p>
      </div>
    );
  }

  return (
    <div className="courses-container">
      <div className="courses-header">
        <h1>Professional Courses</h1>
        <p>Enhance your skills with our expert-led professional courses</p>
      </div>

      <div className="courses-grid">
        {courses.map((course) => (
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
                <span><strong>Duration:</strong> {course.duration}</span>
                <span><strong>Level:</strong> {course.level}</span>
                <span><strong>Instructor:</strong> {course.instructor}</span>
              </div>
              <div className="course-price">
                <span>{course.price ? `₹${course.price.toLocaleString()}` : 'Free'}</span>
              </div>
              <div className="course-actions">
                <Link to={`/courses/${course.$id}`} className="view-details-btn">
                  View Details
                </Link>
                <Link to={`/courses/${course.$id}`} className="enroll-btn">
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesList;