import React, { useState } from 'react';
import "./css/WhyChooseUs.css";
import { Images } from './Images';

const tabContent = {
  Banking: {
    title: "Banking Security",
    description: "Our security solutions for banking apps protect financial transactions, ensuring safe and seamless customer experiences with multi-layered protection.",
    features: [
      "Secure transaction encryption",
      "Regulatory compliance assured",
      "Fraud detection systems",
      "Multi-factor authentication"
    ]
  },
  Manufacturing: {
    title: "Manufacturing Security",
    description: "We fortify manufacturing applications with top-tier security protocols, ensuring the protection of critical data and infrastructure from cyber threats.",
    features: [
      "National security expertise",
      "Data encryption specialists",
      "Zero-day threat defense",
      "Compliance with regulations"
    ]
  },
  Healthcare: {
    title: "Hospital Advisory",
    description: "We secure hospital advisory platforms by protecting patient data and ensuring HIPAA compliance through comprehensive cybersecurity solutions.",
    features: [
      "HIPAA compliance assured",
      "Medical device security",
      "Patient data encryption",
      "24/7 threat monitoring"
    ]
  },
  CRMs: {
    title: "CRM Security",
    description: "We enhance the security of CRMs by safeguarding customer data, providing access control, and protecting against unauthorized access and breaches.",
    features: [
      "Customer data encryption",
      "Role-based access control",
      "Data breach prevention",
      "Custom security features"
    ]
  },
  Education: {
    title: "Education Portals",
    description: "We protect education portals by securing user data, learning content, and financial information, offering a reliable and safe environment for students and staff.",
    features: [
      "E-learning platform protection",
      "Cloud security integration",
      "Unauthorized access prevention",
      "Student data privacy"
    ]
  }
};

export default function WhyChooseUs({ toggleForm }) {
  const [activeTab, setActiveTab] = useState('Banking');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleDropdownChange = (event) => {
    setActiveTab(event.target.value);
  };

  const { title, description, features } = tabContent[activeTab];

  return (
    <section className="why-choose-us">
      <div className="content">
        <h2>Why Choose Us</h2>
        <div className="tabs">
          {Object.keys(tabContent).map((tab) => (
            <button
              key={tab}
              className={activeTab === tab ? 'active' : ''}
              onClick={() => handleTabClick(tab)}
              aria-selected={activeTab === tab}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="mobile-tabs-dropdown">
          <select value={activeTab} onChange={handleDropdownChange}>
            {Object.keys(tabContent).map((tab) => (
              <option key={tab} value={tab}>{tab}</option>
            ))}
          </select>
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
        <ul>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <button className="get-started-btn" onClick={toggleForm}>Get Started</button>
      </div>
      <img src={Images.chooseUsLogo} alt="Choose Us" className="static-image" />
    </section>
  );
}