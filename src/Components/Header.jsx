import React, { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, ChevronUp, ChevronLeft } from "lucide-react";

const DropdownContent = ({ menu, hoveredItem, setHoveredItem, closeAllMenus }) => {
  const timeoutRef = useRef(null);

  const handleMouseEnter = (itemName) => {
    clearTimeout(timeoutRef.current);
    setHoveredItem(itemName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredItem(null);
    }, 200); // Delay in milliseconds
  };

  return (
    <div className="absolute top-full left-0 mt-6 w-[320px] bg-white border border-gray-200 rounded-lg shadow-xl p-4 z-50">
      <div className="flex flex-col gap-2">
        {menu.items.map((item, idx) => (
          <div
            key={idx}
            className="relative group"
            onMouseEnter={() => handleMouseEnter(item.name)}
            onMouseLeave={handleMouseLeave}
          >
            {item.subItems ? (
              <>
               <Link
  to={item.path}
  onClick={closeAllMenus}
  className="flex items-center gap-2 text-left text-gray-800 hover:text-blue-900 text-base"
>
  <ChevronLeft className="w-4 h-4" />
  {item.name}
</Link>
                {hoveredItem === item.name && (
                  <div
                    className="absolute right-full top-0 ml-4 w-[200px] bg-white border border-gray-200 rounded-lg shadow-lg p-2 z-50 flex flex-col"
                    onMouseEnter={() => handleMouseEnter(item.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.subItems.map((subItem, subIdx) => (
                      <Link
                        key={subIdx}
                        to={subItem.path}
                        onClick={closeAllMenus}
                        className="block text-[16px] text-gray-700 mt-2 hover:text-blue-900 hover:underline"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link
                to={item.path}
                onClick={closeAllMenus}
                className="block text-[15px] text-gray-700 hover:text-blue-900 hover:underline"
              >
                {item.name}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const Header = () => {
  const location = useLocation();
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileItem, setExpandedMobileItem] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null); // "tech" or "edu"
  

  const closeAllMenus = () => {
    setHoveredItem(null);
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    setExpandedMobileItem(null);
  };

  const dropdownMenu = [

    {
      title: "Cybersecurity",
      key: "cyber",
      items: [
        {
          name: "VAPT",
          path: "/services/cybersecurity/vapt",
          subItems: [
            { name: "Network Infrastructure", path: "/services/cybersecurity/vapt/network-infrastructure" },
            { name: "Web and Mobile Application", path: "/services/cybersecurity/vapt/web-and-mobile-app" },
            { name: "Cloud Infrastructure", path: "/services/cybersecurity/vapt/cloud-infrastructure" },
            { name: "API VAPT", path: "/services/cybersecurity/vapt/api-vapt" },
            { name: "SIEM & Threat Intelligence", path: "/services/cybersecurity/vapt/siem" },
          ],
        },
        { name: "Cybersecurity Services", path: "/services/cybersecurity" },
        { name: "Prodcut", path: "/product" },
      ],
    },
    {
      title: "TechEdge",
      key: "tech",
      items: [
        {
          name: "AI&ML Services",
          subItems: [
            { name: "GenAI Services", path: "/services/genai" },
            { name: "LLM Services", path: "/services/llm" },
          ],
        },
        { name: "Web & App Development", path: "/services/web-app-development" },
        { name: "Software Testing", path: "/services/testing" },
        { name: "Tech Talent", path: "/services/tech-talent" },
      ],
    },
    {
      title: "EduConnect",
      key: "edu",
      items: [
        { name: "Placement Support", path: "/services/placement" },
        { name: "Internship Programs", path: "/services/internship" },
        { name: "Centre Of Excellence", path: "/services/coe" },
        { name: "Training & Upskilling", path: "https://aicl.infoziant.com/" },
        { name: "CodeChef Training", path: "/services/codechef" },
        { name: "Edutech Solutions", path: "/services/edutech" },
      ],
    },
  ];

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    // { title: "Product", path: "/product" },
    { title: "Awards", path: "/awards" },
    { title: "Blogs", path: "/blogs" },
    { title: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 px-6 py-4">
      <div className="flex justify-between items-center">
        <Link to="/">
          <img src="/Logo.png" alt="Logo" className="h-10 w-auto" />
        </Link>

        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="relative z-50 flex flex-col justify-center items-center w-6 h-6"
          >
            <span
              className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 transform mb-1 ${mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 mb-1 ${mobileMenuOpen ? "opacity-0" : ""
                }`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 transform ${mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
            />
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-gray-800 font-medium relative">
          {navLinks.slice(0, 2).map((link) => (
            <Link
              key={link.title}
              to={link.path}
              className={`hover:text-blue-900 hover:underline transition ${isActive(link.path) ? "text-blue-900 font-bold underline" : ""
                }`}
            >
              {link.title}
            </Link>
          ))}

          {dropdownMenu.map((menu) => (
            <div className="relative" key={menu.key}>
              <button
                onClick={() =>
                  setActiveDropdown(activeDropdown === menu.key ? null : menu.key)
                }
                className="flex items-center gap-1 hover:text-blue-900"
              >
                <span
                  className={`${activeDropdown === menu.key ? "text-blue-900 font-bold underline" : ""
                    }`}
                >
                  {menu.title}
                </span>
                {activeDropdown === menu.key ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>

              {activeDropdown === menu.key && (
                <DropdownContent
                  menu={menu}
                  hoveredItem={hoveredItem}
                  setHoveredItem={setHoveredItem}
                  closeAllMenus={closeAllMenus}
                />
              )}
            </div>
          ))}

          {navLinks.slice(2).map((link) => (
            <Link
              key={link.title}
              to={link.path}
              className={`hover:text-blue-900 hover:underline transition ${isActive(link.path) ? "text-blue-900 font-bold underline" : ""
                }`}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t pt-4 space-y-4 z-40 md:hidden shadow-lg">
          {/* Render first two navLinks */}
          {navLinks.slice(0, 2).map((link) => (
            <Link
              key={link.title}
              to={link.path}
              onClick={closeAllMenus}
              className={`block px-4 py-2 text-gray-800 hover:text-blue-900 hover:underline transition ${isActive(link.path) ? "text-blue-900 font-bold underline" : ""
                }`}
            >
              {link.title}
            </Link>
          ))}

          {dropdownMenu.map((menu) => (
            <div key={menu.key} className="relative">
              <button
                onClick={() =>
                  setActiveDropdown(activeDropdown === menu.key ? null : menu.key)
                }
                className="block w-full text-left px-4 py-2 text-gray-800 hover:text-blue-900"
              >
                <span
                  className={`${activeDropdown === menu.key ? "text-blue-900 font-bold underline" : ""
                    }`}
                >
                  {menu.title}
                </span>
                {activeDropdown === menu.key ? (
                  <ChevronUp className="w-4 h-4 inline" />
                ) : (
                  <ChevronDown className="w-4 h-4 inline" />
                )}
              </button>

              {/* Render sub-menu if the dropdown is open */}
              {activeDropdown === menu.key && (
                <div className="absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-lg z-10">
                  <div className="flex flex-col">
                    {menu.items.map((item, idx) => (
                      <div key={idx}>
                        {item.subItems ? (
                          <>
                            <button className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-900">
                              {item.name}
                            </button>
                            <div className="pl-4">
                              {item.subItems.map((subItem, subIdx) => (
                                <Link
                                  key={subIdx}
                                  to={subItem.path}
                                  onClick={closeAllMenus}
                                  className="block px-4 py-2 text-gray-700 hover:text-blue-900"
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          </>
                        ) : (
                          <Link
                            to={item.path}
                            onClick={closeAllMenus}
                            className="block px-4 py-2 text-gray-700 hover:text-blue-900"
                          >
                            {item.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}




          {/* Render the rest of the navLinks */}
          {navLinks.slice(2).map((link) => (
            <Link
              key={link.title}
              to={link.path}
              onClick={closeAllMenus}
              className={`block px-4 py-2 text-gray-800 hover:text-blue-900 hover:underline transition ${isActive(link.path) ? "text-blue-900 font-bold underline" : ""
                }`}
            >
              {link.title}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
