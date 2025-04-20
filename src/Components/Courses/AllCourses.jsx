import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { courseService, authService } from '../../services/appwrite';
import './Courses.css';

const AllCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [enrolledCourseIds, setEnrolledCourseIds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const coursesPerPage = 8;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Fetch all courses
        const allCourses = await courseService.getAllCourses();
        setCourses(allCourses);
        
        // Check if user is logged in
        const userData = await authService.getCurrentUser();
        setUser(userData);
        
        // If user is logged in, fetch their enrolled courses
        if (userData) {
          const enrollments = await courseService.getUserEnrollments(userData.$id);
          const enrolledIds = enrollments.coursesCollection?.map(course => course.$id) || [];
          setEnrolledCourseIds(enrolledIds);
        }
      } catch (err) {
        console.error('Error fetching courses:', err);
        setError('Failed to load courses. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filter courses based on search term and category
  const filteredCourses = courses.filter(course => {
    const matchesSearch = 
      (course.title?.toLowerCase() || '').includes(searchTerm.toLowerCase()) || 
      (course.description?.toLowerCase() || '').includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Get unique categories from courses
  const categories = ['all', ...new Set(courses.map(course => course.category).filter(Boolean))];

  // Pagination handlers
  const nextPage = () => {
    if (currentPage < Math.ceil(filteredCourses.length / coursesPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Get current courses for pagination
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);

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

  return (
    <div className="courses-container">
      <div className="courses-header">
        <h1>Explore Our Courses</h1>
        <p>Discover the perfect course to advance your skills and career</p>
      </div>

      <div className="courses-filters">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1); // Reset to first page on search
            }}
          />
        </div>

        <div className="category-filter">
          <select 
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setCurrentPage(1); // Reset to first page on category change
            }}
          >
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category === 'all' ? 'All Categories' : category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {filteredCourses.length === 0 ? (
        <div className="empty-state">
          <h3>No courses found</h3>
          <p>Try adjusting your search or filter criteria.</p>
          <button 
            className="empty-state-btn" 
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
            }}
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <>
          <div className="courses-grid">
            {currentCourses.map((course) => {
              const isEnrolled = enrolledCourseIds.includes(course.$id);
              
              return (
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
                    {course.featured && <span className="featured-badge">Featured</span>}
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
                      {course.price ? `₹${course.price.toLocaleString()}` : 'Free'}
                    </div>
                    <div className="course-actions">
                      <Link to={`/courses/${course.$id}`} className="view-details-btn">
                        View Details
                      </Link>
                      {isEnrolled ? (
                        <Link to="/my-courses" className="enrolled-btn">
                          Already Enrolled
                        </Link>
                      ) : (
                        <Link to={`/courses/${course.$id}`} className="enroll-btn">
                          Enroll Now
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredCourses.length > coursesPerPage && (
            <div className="pagination">
              <button 
                onClick={prevPage} 
                disabled={currentPage === 1}
                className={currentPage === 1 ? 'disabled' : ''}
              >
                Previous
              </button>
              <span>{currentPage} of {Math.ceil(filteredCourses.length / coursesPerPage)}</span>
              <button 
                onClick={nextPage} 
                disabled={currentPage === Math.ceil(filteredCourses.length / coursesPerPage)}
                className={currentPage === Math.ceil(filteredCourses.length / coursesPerPage) ? 'disabled' : ''}
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AllCourses;