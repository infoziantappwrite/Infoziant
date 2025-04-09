import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, ChevronUp, Menu } from "lucide-react";

const Header = () => {
  const location = useLocation();
  const [showServices, setShowServices] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      title: "IT & Software Solutions",
      index: 0,
      items: [
        { name: "Cybersecurity Services", path: "/cybersecurity" },
        { name: "Web Development", path: "/web-development" },
        { name: "Testing", path: "/testing" },
      ],
    },
    {
      title: "Career Development & Industry Readiness",
      index: 1,
      items: [
        { name: "Placement", path: "/placement" },
        { name: "Internship", path: "/internship" },
        { name: "Training", path: "/training" },
      ],
    },
  ];

  const directLinks = [
    { title: "CoE", path: "/coe" },
    { title: "Edutech", path: "/edutech" },
    { title: "CodeChef", path: "/codechef" },
    { title: "Tech Talent Services", path: "/talent-services" },
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
        <div className="flex items-center text-2xl font-bold text-blue-900 gap-2">
          <Link to="/">
            <img src="/Logo.png" alt="Logo" className="h-11 -mt-1 mb-1" />
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu className="w-6 h-6 text-blue-900" />
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

            {showServices && (
              <div className="absolute top-full -left-10 mt-6 w-[320px] bg-white border border-gray-200 rounded-lg shadow-xl p-4 z-50">
                {dropdownMenu.map((menu) => (
                  <div
                    key={menu.index}
                    className="mb-3 border-b border-gray-300 pb-3"
                  >
                    <button
                      onClick={() => toggleCategory(menu.index)}
                      className="flex justify-between items-center w-full text-left font-semibold text-gray-800 hover:text-blue-900 text-base"
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
                              className="block text-[15px] text-gray-700 hover:text-blue-900 hover:underline transition text-left"
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

                <div className="space-y-2 pt-2">
                  {directLinks.map((link, idx) => (
                    <React.Fragment key={idx}>
                      <Link
                        to={link.path}
                        onClick={closeAllMenus}
                        className={`block text-base text-gray-800 hover:text-blue-900 hover:underline transition text-left ${
                          isActive(link.path)
                            ? "text-blue-900 font-semibold underline"
                            : ""
                        }`}
                      >
                        {link.title}
                      </Link>
                      {idx !== directLinks.length - 1 && (
                        <hr className="border-gray-300" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
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
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>

            {showServices && (
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

                <div className="space-y-2 mt-4">
                  {directLinks.map((link, idx) => (
                    <React.Fragment key={idx}>
                      <Link
                        to={link.path}
                        onClick={closeAllMenus}
                        className={`block text-base text-gray-800 hover:text-blue-900 hover:underline ${
                          isActive(link.path)
                            ? "text-blue-900 font-semibold underline"
                            : ""
                        }`}
                      >
                        {link.title}
                      </Link>
                      {idx !== directLinks.length - 1 && (
                        <hr className="border-gray-300" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}
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
