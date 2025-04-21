import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; // Import icons from React Icons
import '../css/Contact.css';
import ConsultationForm from "./ConsultationForm";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <div >
       <Helmet>
        <title>Contact Us | Infoziant - Connect for Tailored Cybersecurity Solutions</title>
        <meta
          name="description"
          content="Reach out to Infoziant for innovative cybersecurity solutions. Contact us via phone or email, or fill out the form to get started!"
        />
      </Helmet>

      <div className='contact_page'>
      
      <div
        className="service-banner"
        style={{
          backgroundImage: "url(./assets/Contact-banner.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
       
 
        <div className="sb-intro">
          <h1>Contact us</h1>
          <br />
          <p>
          Connect with us to explore innovative solutions tailored to your business needs – we're here to help you succeed.
          </p>
        </div>
      </div>

     
    <div className="contact-container-section">
      <div className="contact-header">
        <h1>Our Contact Information</h1>
      </div>
      <div className="contact-content">
        <div className="contact-column">
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <div className="contact-info">
              <div className="contact-info-title">Location</div>
              <div className="contact-address">
                <div>
                <p> <strong>India Office: </strong>
                 Akshaya HQ, Rajiv Gandhi Salai, Kazhipattur, Tamil Nadu, Chennai - 603103.</p>
                </div>
                <div>
                <p> <strong>U.S. Office: </strong>
                  1401, 21st ST STE 6310, Sacramento, CA 95811, USA.</p>
                </div>
                <div>
                <p> <strong>Singapore Office: </strong>
                 60 Paya Lebar Road, #07-39, Paya Lebar Square, Singapore 409051.</p>
                </div>
                <div>
                <p><strong>Dubai Office: </strong>
                  Suite #724, Tamani Arts, Business Bay, Dubai, UAE.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Two-column layout for Phone and Email */}
        <div className="contact-row">
          <div className="contact-column">
            <div className="contact-item contact-phone">
              <FaPhoneAlt className="contact-icon" /> {/* Phone Icon */}
              <div className="contact-info">
                <div className="contact-info-title">Phone</div>
                <div className="contact-desc">+91 96000 85988</div>
                <div className="contact-desc">1 (314) 732 0300</div>
              </div>
            </div>
          </div>

          <div className="contact-column">
            <div className="contact-item contact-email">
              <FaEnvelope className="contact-icon " /> {/* Email Icon */}
              <div className="contact-info">
                <div className="contact-info-title">Email</div>
                <div className="contact-desc">support@infoziant.com</div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <ConsultationForm/>
     
    </div>
    </div>
  );
};

export default Contact;
