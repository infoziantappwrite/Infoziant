import { useState } from "react";
import emailjs from '@emailjs/browser';
import { FaCircleCheck} from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import "./css/InquiryForm.css";

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    services: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [submitConfirmation, setSubmitConfirmation] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  // Validate form fields
  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required.";
    if (!formData.email) formErrors.email = "Email is required.";
    if (!formData.services) formErrors.services = "Please select a service.";
    if (!formData.message) formErrors.message = "Message is required.";
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitConfirmation(true)
    if (validateForm()) {
      const emailParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone_number: formData.phone,
        selected_service: formData.services,
        message: formData.message,
      };

      emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        emailParams,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then((response) => {
        if (response.status === 200) {
            setSubmitConfirmation(false)
          setSuccessMessage("Your request has been submitted successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            services: "",
            message: ""
          });
          setTimeout(() => {
            setSuccessMessage("");
          }, 5000);
        }
      })
      .catch((err) => {
        setSubmitConfirmation(false)
        console.error("Failed to send email. Error:", err);
        alert("An error occurred while submitting your request. Please try again.");
      });
    }
  };

  // Logic to close the form
  const closeForm = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="consultation-section-i">
      <div className="consultation-container-i">
        <button className="close-button-i" onClick={closeForm}>
          <FaTimes />
        </button>
        <h1 className="form-title-i">Get Started with your Inquiry</h1>
        <p className="form-desc-i">
          Are you looking for a solution to a confusing security issue? Ask our customer service team for assistance right away.
        </p>

        {/* Success message display */}
        <div className="center-container-i">
          {successMessage && <p className="success-message-i"><FaCircleCheck /> {successMessage}</p>}
        </div>

        <form onSubmit={handleSubmit} className="consultation-form-i">
          <div className="form-row-i">
            <div className="form-left-i">
              <div className="input-group-i">
                <input
                  type="text"
                  name="name"
                  placeholder="Name*"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="input-field-i"
                />
                {errors.name && <p className="error-message-i">{errors.name}</p>}
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="input-field-i"
                />
              </div>
            </div>
            <div className="form-right-i">
              <div className="input-group-i">
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="input-field-i"
                />
                {errors.email && <p className="error-message-i">{errors.email}</p>}
                <select
                  name="services"
                  value={formData.services}
                  onChange={handleChange}
                  required
                  className="input-field-i"
                >
                  <option value="" disabled>Select Services</option>
                  <option value="Managed Security Services">Managed Security Services</option>
                  <option value="Vulnerability Assessment / Penetration testing">Vulnerability Assessment / Penetration testing</option>
                  <option value="Cloud Security">Cloud Security</option>
                  <option value="Infrastructure Security Assessment">Infrastructure Security Assessment</option>
                  <option value="Mobile Security Assessment">Mobile Security Assessment</option>
                  <option value="Auditing">Auditing</option>
                  <option value="Security Incident, Event Management and Threat Intelligence">Security Incident, Event Management and Threat Intelligence</option>
                  <option value="Email Protection System">Email Protection System</option>
                  <option value="Application Security">Application Security</option>
                </select>
                {errors.services && <p className="error-message-i">{errors.services}</p>}
              </div>
            </div>
          </div>
          <textarea
            name="message"
            placeholder="Enter message*"
            required
            value={formData.message}
            onChange={handleChange}
            className="input-field-i"
          />
          {errors.message && <p className="error-message-i">{errors.message}</p>}
          <button type="submit" className="submit-button-i">{submitConfirmation ? "Submitting..." : "Submit"}</button>
        </form>
      </div>
    </div>
  );
}
