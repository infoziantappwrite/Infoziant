import "../css/ConsultationForm.css";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { FaCircleCheck } from "react-icons/fa6";

export default function ConsultationFormForCo() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        services: "",
        message: "",
        college: "",
        location: "",
    });

    const [errors, setErrors] = useState({});  // State to track form field errors
    const [successMessage, setSuccessMessage] = useState("");  // Success message state

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Clear the error for the field when user starts typing
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

        // Return true if no errors
        return Object.keys(formErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            // Define email parameters for EmailJS
            const emailParams = {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,           // Optional (if used in your template)
                services: formData.services,
                message: formData.message,
                college: formData.college,
                location: formData.location,
                time: new Date().toLocaleString(), // Optional, if your template uses {{time}}
            };

            // Send email using EmailJS
            emailjs.send(
                process.env.REACT_APP_EMAILJS_COO_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_COO_TEMPLATE_ID,
                emailParams,
                process.env.REACT_APP_EMAILJS_USER_ID
            )

                .then((response) => {
                    if (response.status === 200) {
                        // Display success message
                        setSuccessMessage("Your request has been submitted successfully!");

                        // Clear input fields
                        setFormData({
                            name: "",
                            email: "",
                            phone: "",
                            services: "",
                            message: ""
                        });

                        // Hide the success message after 5 seconds
                        setTimeout(() => {
                            setSuccessMessage("");
                        }, 5000);
                    }
                })
                .catch((err) => {
                    console.error("Failed to send email. Error:", err);
                    alert("An error occurred while submitting your request. Please try again.");
                });
        }
    };

    return (
        <div className="consultation-section">
            <div className="consultation-container">
                <h1 className="form-title">Get A Quick Consultation</h1>
                <p className="form-desc">
                    Are you looking for a solution to a confusing security issue? Ask our customer service team for assistance right away.
                </p>

                {/* Success message display */}
                <div className="center-container">
                    {successMessage && <p className="success-message"><FaCircleCheck /> {successMessage}</p>}
                </div>

                <form onSubmit={handleSubmit} className="consultation-form">
                    <div className="form-row">
                        <div className="form-left">
                            <div className="input-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name*"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="cf-inp"
                                />

                                <input
                                    type="text"
                                    name="college"
                                    placeholder="College Name"
                                    value={formData.college}
                                    onChange={handleChange}
                                    className="cf-inp"
                                />

                                {errors.name && <p className="error-message">{errors.name}</p>}
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone Number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="cf-inp"
                                />


                            </div>
                        </div>
                        <div className="form-right">
                            <div className="input-group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email*"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="cf-inp"
                                />

                                <input
                                    type="text"
                                    name="location"
                                    placeholder="Location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    className="cf-inp"
                                />

                                {errors.email && <p className="error-message">{errors.email}</p>}
                                <input
                  type="text"

                  name="services"
                  value={formData.services}
                  placeholder="Services*"
                  onChange={handleChange}
                  required
                  className="cf-inp"
                />
                 
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
                        className="cf-inp"
                    />
                    {errors.message && <p className="error-message">{errors.message}</p>}
                    <button type="submit" className="submit-button">Submit the Request</button>
                </form>
            </div>
        </div>
    );
}
