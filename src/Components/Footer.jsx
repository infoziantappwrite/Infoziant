import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FiLinkedin, FiInstagram } from "react-icons/fi";
import { Link } from "react-router-dom";


import { useState } from "react";

export default function Footer() {
  const [openTech, setOpenTech] = useState(false);
  const [openCampus, setOpenCampus] = useState(false);
  const [openCybersecurity, setOpenCybersecurity] = useState(false); // 👈 New state
  const [openAI, setOpenAI] = useState(false);

  return (
    <footer className="bg-gray-800 text-white py-8 sm:py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 sm:gap-10">
          {/* Left: Company Info */}
          <div className="w-full md:w-[40%] space-y-4 md:ml-8 text-center md:text-left">
            <img src="/Logo.png" alt="Infoziant Logo" className="w-40 mx-auto sm:w-60 md:w-60 mx-auto md:mx-0" />
            <div className="flex items-start gap-2 justify-center md:justify-start text-xs sm:text-sm">
              <FaPhoneAlt className="mt-1" />
              <span>+1 (314) 732 0300, +91 96000 85988</span>
            </div>
            <div className="flex items-start gap-2 justify-center md:justify-start text-xs sm:text-sm">
              <FaEnvelope className="mt-1" />
              <span>support@infoziant.com</span>
            </div>
            <div className="flex items-start gap-2 justify-center md:justify-start text-xs sm:text-sm">
              <FaMapMarkerAlt className="mt-1" />
              <span>
                <strong>Chennai:</strong> Akshaya HQ, Rajiv Gandhi <br />
                Salai, Kazhipattur, <br />
                Tamil Nadu, Chennai - 603103, India
              </span>
            </div>
            <div className="flex items-start gap-2 justify-center md:justify-start text-xs sm:text-sm">
              <FaMapMarkerAlt className="mt-1" />
              <span>
                <strong>United States:</strong> 1401, 21st ST STE 6310,
                <br />Sacramento, CA 95811, USA
              </span>
            </div>
            <div className="flex gap-4 pt-4 justify-center md:justify-start">
              <a href="https://www.linkedin.com" target="_blank" className="text-white text-2xl hover:text-gray-300">
                <FiLinkedin />
              </a>
              <a href="https://www.instagram.com" target="_blank" className="text-white text-2xl hover:text-gray-300">
                <FiInstagram />
              </a>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block w-px bg-gray-600 mx-4 self-stretch"></div>

          {/* Right Side: Navigation & Services */}
          <div className="w-full md:w-[55%] md:mr-10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Navigation */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2 sm:gap-3">
              <h3 className="text-xl sm:text-2xl font-extrabold bg-gradient-to-br from-teal-400 to-blue-800 text-transparent bg-clip-text mb-4">
                Navigation
              </h3>
              <ul className="space-y-1 sm:space-y-2 md:ml-6 md:mb-2 -mt-2">
                {["Home", "About", "Product", "Awards", "Blogs", "Contact"].map((item) => (
                  <li
                    key={item}
                    className="cursor-pointer font-semibold text-teal-200 hover:text-blue-500 transition-colors duration-200 text-sm sm:text-base"
                  >
                    <Link to={item === "Home" ? "/" : item === "About" ? "/about" : `/${item.toLowerCase()}`}>{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left md:-ml-10 mt-6 sm:mt-8 lg:mt-0">
              <h3 className="text-xl sm:text-2xl font-extrabold bg-gradient-to-br from-teal-400 to-blue-800 text-transparent bg-clip-text mb-4">
                Services
              </h3>

              {/* Innovative Tech & Business Services */}
              <div className="w-full mb-2">
                <div
                  className="flex justify-center sm:justify-between items-center cursor-pointer text-teal-200 font-semibold text-sm sm:text-base"
                  onClick={() => setOpenTech(!openTech)}
                >
                  <span>TechEdge</span>
                  <span className="text-xl ml-1 font-medium">{openTech ? '-' : '+'}</span>
                </div>

                {openTech && (
                  <ul className="pl-4 text-xs sm:text-sm space-y-2 mt-2 text-gray-300">
                    {/* Cybersecurity with toggle */}
                    <li>
                      <div
                        className="flex justify-center sm:justify-between items-center cursor-pointer hover:text-teal-400 font-semibold"
                        onClick={() => setOpenCybersecurity(!openCybersecurity)}
                      >
                        <span>Cybersecurity Services</span>
                        <span className="text-md ml-1">{openCybersecurity ? '-' : '+'}</span>
                      </div>

                      {openCybersecurity && (
                        <ul className="pl-4 mt-2 space-y-1">
                          <li className="hover:text-teal-400 font-semibold">
                            <Link to="/services/cybersecurity">Cybersecurity Services</Link>
                          </li>
                          <li className="hover:text-teal-400 font-semibold">
                            <Link to="/services/cybersecurity/vapt">VAPT Services</Link>
                          </li>
                        </ul>
                      )}
                    </li>


                    {/* AI with toggle */}
                    <li>
                      <div
                        className="flex justify-center sm:justify-between items-center cursor-pointer hover:text-teal-400 font-semibold"
                        onClick={() => setOpenAI(!openAI)}
                      >
                        <span>AI Services</span>
                        <span className="text-md ml-1">{openAI ? '-' : '+'}</span>
                      </div>

                      {openAI && (
                        <ul className="pl-4 mt-2 space-y-1">
                          <li className="hover:text-teal-400 font-semibold">
                            <Link to="/services/genai">GenAI Servies</Link>
                          </li>
                          <li className="hover:text-teal-400 font-semibold">
                            <Link to="/services/llm">LLM Servies</Link>
                          </li>
                        </ul>
                      )}
                    </li>


                    {/* Other tech services */}
                    <li className="hover:text-teal-400 font-semibold">
                      <Link to="/services/web-app-development">Web & App Development</Link>
                    </li>
                    <li className="hover:text-teal-400 font-semibold">
                      <Link to="/services/testing">Software Testing</Link>
                    </li>
                    <li className="hover:text-teal-400 font-semibold">
                      <Link to="/talent-services">
                        Tech Talent Hiring (Staffing Services)
                      </Link>
                    </li>
                  </ul>
                )}
              </div>

              {/* Campus to Corporate Services */}
              <div className="w-full mb-2">
                <div
                  className="flex justify-center sm:justify-between items-center cursor-pointer text-teal-200 font-semibold text-sm sm:text-base"
                  onClick={() => setOpenCampus(!openCampus)}
                >
                  <span>EduConnect</span>
                  <span className="text-xl ml-1 font-medium">{openCampus ? '-' : '+'}</span>
                </div>
                {openCampus && (
                  <ul className="pl-4 text-xs sm:text-sm space-y-2 mt-2 text-gray-300">
                    <li className="hover:text-teal-400 font-semibold">
                      <Link to="/services/placement">Placement Support</Link>
                    </li>
                    <li className="hover:text-teal-400 font-semibold">
                      <Link to="/services/internship">Internship Programs</Link>
                    </li>
                    <li className="hover:text-teal-400 font-semibold">
                      <Link to="/services/training">Training & Upskilling</Link>
                    </li>
                    <li className="hover:text-teal-400 font-semibold">
                      <Link to="/coe">Industry-Academia Collaboration (CoE)</Link>
                    </li>
                    <li className="hover:text-teal-400 font-semibold">
                      <Link to="/codechef">CodeChef Training</Link>
                    </li>
                    <li className="hover:text-teal-400 font-semibold">
                      <Link to="/edutech">Edutech Solutions</Link>
                    </li>
                  </ul>
                )}
              </div>

              {/* Case Studies */}
              <div className="w-full mb-2">
                <Link
                  to="/"
                  state={{ scrollTo: 'portfolio' }}
                  className="block text-teal-200 hover:text-blue-500 font-semibold text-sm sm:text-base text-center sm:text-left"
                >
                  Case Studies
                </Link>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="text-center text-xs sm:text-sm text-gray-400 border-t border-gray-700 pt-4 mt-8 -mb-8">
          © 2025 Infoziant IT Solutions Inc. All rights reserved.
          A SOC 2 | ISO 27001:2022 Certified Company
        </div>
      </div>
    </footer>
  );
}
