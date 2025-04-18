import React, { useState } from 'react';
import './css/Emailform.css'; // Import the separated CSS

const EmailForm = ({ closeModal }) => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Notify user about form submission
        alert('Email submitted successfully!');

        // Log the submitted email (In practice, you would send this to a server)
        console.log('Submitted Email:', email);

        // Close the modal after submission
        closeModal();
    };

    return (
        <div className="overlay">
            <div className="form-container">
                {/* Close button */}
                <button className="close-button" onClick={closeModal}>X</button>
                <h2>DAST Tool Free Version</h2>
                <p>Want this for free? Enter the email address we should send it to below.</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default EmailForm;
