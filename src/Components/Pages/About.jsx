import React from 'react';
import './Pages.css'; // Assuming a common CSS file for pages

const About = () => {
  return (
    <div className="page-container about-page">
      {/* Page Title Section - Adapt from original HTML if needed */}
      {/* <section className="page-title" style={{backgroundImage: "url(images/background/8.jpg)"}}> */}
      {/*   <div className="auto-container"> */}
      {/*     <div className="title-outer"> */}
      {/*       <h1>About Us</h1> */}
      {/*       <ul className="page-breadcrumb"> */}
      {/*         <li><a href="index.html">Home</a></li> */}
      {/*         <li>About Us</li> */}
      {/*       </ul> */}
      {/*     </div> */}
      {/*   </div> */}
      {/* </section> */}

      {/* About Section Three */}
      <section className="about-section-three">
        <div className="auto-container">
          {/* Image Grid */}
          <div className="images-box">
            <div className="row">
              <div className="column col-lg-3 col-md-6 col-sm-6">
                <figure className="image">
                  <img src="/assets/abt-1.png" alt="About VTA 1" />
                </figure>
              </div>
              <div className="column col-lg-3 col-md-6 col-sm-6">
                <figure className="image">
                  <img src="/assets/abt-2.png" alt="About VTA 2" />
                </figure>
                <figure className="image">
                  <img src="/assets/abt-3.png" alt="About VTA 3" />
                </figure>
              </div>
              <div className="column col-lg-3 col-md-6 col-sm-6">
                <figure className="image">
                  <img src="/assets/abt-4.png" alt="About VTA 4" />
                </figure>
                <figure className="image">
                  <img src="/assets/abt-5.png" alt="About VTA 5" />
                </figure>
              </div>
              <div className="column col-lg-3 col-md-6 col-sm-6">
                <figure className="image">
                  <img src="/assets/abt-6.png" alt="About VTA 6" />
                </figure>
              </div>
            </div>
          </div>

          {/* Fun Fact Section */}
          <div className="fun-fact-section">
            <div className="row">
              <div className="counter-column col-lg-4 col-md-4 col-sm-12">
                <div className="count-box">
                  <span className="count-text">3K+</span>
                </div>
                <h4 className="counter-title">Job Seekers</h4>
              </div>
              <div className="counter-column col-lg-4 col-md-4 col-sm-12">
                <div className="count-box">
                  <span className="count-text">100+</span>
                </div>
                <h4 className="counter-title">Courses</h4>
              </div>
              <div className="counter-column col-lg-4 col-md-4 col-sm-12">
                <div className="count-box">
                  <span className="count-text">1K+</span>
                </div>
                <h4 className="counter-title">Recruiters</h4>
              </div>
            </div>
          </div>

          <hr />

          {/* Text Box */}
          <div className="text-box">
            <h4>About VTA</h4>
            <p>
              VTA is at the forefront of transforming the Talent Acquisition
              and E-learning landscape by leveraging AI-driven, unbiased skill
              assessments. Our platform connects job seekers with opportunities
              based purely on merit and skills, fostering a fair and efficient
              hiring process.
            </p>
            <p>
              We offer a comprehensive suite of courses designed to upskill and
              reskill individuals, ensuring they remain competitive in the
              ever-evolving job market. Our mission is to bridge the gap
              between talent and opportunity, empowering both individuals and
              organizations to achieve their full potential.
            </p>
          </div>

          {/* Additional Sections from HTML (e.g., Team, Testimonials) can be added here */}
          {/* Remember to adapt HTML structure and classes to React/CSS conventions */}

        </div>
      </section>
    </div>
  );
};

export default About;