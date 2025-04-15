import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, ChevronUp, ChevronLeft } from "lucide-react";

const Header = () => {
  const location = useLocation();
  const [showServices, setShowServices] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  const toggleCategory = (index) => {
    setExpandedCategory((prev) => (prev === index ? null : index));
  };

  const closeAllMenus = () => {
    setShowServices(false);
    setExpandedCategory(null);
    setMobileMenuOpen(false);
  };

  const dropdownMenu = [
    {
      title: "Innovative Tech & Business Services",
      index: 0,
      items: [
        { name: "Cybersecurity Services", path: "/cybersecurity" },
        { name: "Web & App Development", path: "/web-app-development" },
        { name: "Software Testing", path: "/testing" },
        { name: "Tech Talent Hiring (Staffing Services)", path: "/talent-services" },
      ],
    },
    {
      title: "Campus to Corporate Services",
      index: 1,
      items: [
        { name: "Placement Support", path: "/placement" },
        { name: "Internship Programs", path: "/internship" },
        { name: "Industry-Academia Collaboration (CoE)", path: "/coe" },
        { name: "Training & Upskilling", path: "/training" },
        { name: "CodeChef Training", path: "/codechef" },
        { name: "Edutech Solutions", path: "/edutech" },
      ],
    },
  ];
  
  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Services", path: "/services" },
    { title: "Product", path: "/product" },
    { title: "Awards", path: "/awards" },
    { title: "Blog", path: "/blog" },
    { title: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white shadow-[0_0_15px_rgba(255,255,255,0.7)] sticky top-0 z-50 px-6 py-4">
      <div className="flex justify-between items-center">
      <div>
        <Link to="/">
          <img 
            src="/Logo.png" 
            alt="Logo" 
            className="h-9 w-auto -mt-1 mb-1 sm:h-8 sm:w-auto md:h-10 lg:h-11" 
          />
        </Link>
      </div>

        <div className="md:hidden">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="relative z-50 flex flex-col justify-center items-center w-6 h-6 md:hidden"
        >
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 transform mb-1 ${
              mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 mb-1 ${
              mobileMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 transform ${
              mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-gray-800 font-medium relative">
          {navLinks.slice(0, 2).map((link, index) => (
            <div key={index}>
              <Link
                to={link.path}
                className={`hover:text-blue-900 hover:underline transition ${
                  isActive(link.path)
                    ? "underline decoration-2 underline-offset-4 text-blue-900 font-bold"
                    : ""
                }`}
              >
                {link.title}
              </Link>
            </div>
          ))}

          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowServices(!showServices)}
              className="flex items-center gap-1 hover:text-blue-900"
            >
              <span
                className={`${
                  showServices ? "text-blue-900 font-bold underline" : ""
                }`}
              >
                Services
              </span>
              {showServices ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>

            {/* Services Dropdown (Desktop Only) */}
            {showServices && (
              <div className="absolute top-full left-0 mt-6 w-[320px] bg-white border border-gray-200 rounded-lg shadow-xl p-4 z-50">
                {dropdownMenu.map((menu) => (
                  <div
                  key={menu.index}
                  className={`mb-3 relative group ${
                    menu.index === 0 ? "border-b border-gray-300 pb-3" : ""
                  }`}
                  onMouseEnter={() => {
                    if (hoverTimeout) clearTimeout(hoverTimeout);
                    setExpandedCategory(menu.index);
                  }}
                  onMouseLeave={() => {
                    const timeout = setTimeout(() => {
                      setExpandedCategory(null);
                    }, 300); 
                    setHoverTimeout(timeout);
                  }}
                >
                
                    <button
                      onClick={() =>
                        setExpandedCategory((prev) =>
                          prev === menu.index ? null : menu.index
                        )
                      }
                      
                      className="flex items-center gap-2 text-left font-semibold text-gray-800 hover:text-blue-900 text-base"
                    >  
                      <ChevronLeft className="w-4 h-4" />
                      {menu.title}
                    </button>

                    {/* Subcategories Panel */}
                    {expandedCategory === menu.index && (
                      <div className="absolute top-0 -left-[340px] w-[320px] bg-white border border-gray-200 rounded-lg shadow-xl p-4 z-50">
                        {menu.items.map((item, idx) => (
                          <React.Fragment key={idx}>
                            <Link
                              to={item.path}
                              onClick={closeAllMenus}
                              className="block text-[15px] text-gray-700 hover:text-blue-900 hover:underline transition"
                            >
                              {item.name}
                            </Link>
                            {idx !== menu.items.length - 1 && (
                              <hr className="my-2 border-gray-300" />
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

          </div>

          {/* Remaining nav links */}
          {navLinks.slice(3).map((link, index) => (
            <div key={index}>
              <Link
                to={link.path}
                className={`hover:text-blue-900 hover:underline transition ${
                  isActive(link.path)
                    ? "underline decoration-2 underline-offset-4 text-blue-900 font-bold"
                    : ""
                }`}
              >
                {link.title}
              </Link>
            </div>
          ))}
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t pt-4 space-y-4 z-40 md:hidden shadow-lg">
          {navLinks.slice(0, 2).map((link, index) => (
            <React.Fragment key={index}>
              <Link
                to={link.path}
                onClick={closeAllMenus}
                className={`block px-4 py-2 text-gray-800 hover:text-blue-900 hover:underline ${
                  isActive(link.path)
                    ? "text-blue-900 font-bold underline"
                    : ""
                }`}
              >
                {link.title}
              </Link>
              <hr className="border-gray-300" />
            </React.Fragment>
          ))}

          {/* Services Dropdown */}
          <div className="px-4">
            <button
              onClick={() => setShowServices(!showServices)}
              className="flex justify-between w-full items-center text-left font-medium text-gray-800 hover:text-blue-900"
            >
              Services
              {showServices ? (
                <ChevronUp className="w-4 h-4 transition-transform duration-300" />
              ) : (
                <ChevronDown className="w-4 h-4 transition-transform duration-300" />
              )}
            </button>

            <div
              className={`${
                showServices ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              } transition-all duration-500 overflow-hidden`}
            >
              <div className="mt-2 space-y-4 ml-2 sm:-ml-4">
                {dropdownMenu.map((menu) => (
                  <div key={menu.index}>
                    <button
                      onClick={() => toggleCategory(menu.index)}
                      className="flex justify-between w-full text-left font-semibold text-gray-800 hover:text-blue-900 text-base"
                    >
                      {menu.title}
                      {expandedCategory === menu.index ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>

                    {expandedCategory === menu.index && (
                      <div className="ml-4 mt-2 space-y-2">
                        {menu.items.map((item, idx) => (
                          <React.Fragment key={idx}>
                            <Link
                              to={item.path}
                              onClick={closeAllMenus}
                              className="block text-[15px] text-gray-700 hover:text-blue-900 hover:underline"
                            >
                              {item.name}
                            </Link>
                            {idx !== menu.items.length - 1 && (
                              <hr className="border-gray-300" />
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <hr className="my-2 border-gray-300" />

          {navLinks.slice(3).map((link, index) => (
            <React.Fragment key={index}>
              <Link
                to={link.path}
                onClick={closeAllMenus}
                className={`block px-4 py-2 text-gray-800 hover:text-blue-900 hover:underline ${
                  isActive(link.path)
                    ? "text-blue-900 font-bold underline"
                    : ""
                }`}
              >
                {link.title}
              </Link>
              <hr className="border-gray-300" />
            </React.Fragment>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
