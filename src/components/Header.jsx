import React, { useState, useRef, useEffect } from "react";
import { Mail, Menu, Phone, Search, X, ChevronDown } from "lucide-react";

import logo1 from "../pics/Logo1.svg";
import logo2 from "../pics/Logo2.svg";
import { Link, NavLink } from "react-router-dom";

const Header = ({ language, toggleLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dropdownTimerRef = useRef(null);

  const navItems = [
    { label: language === "ar" ? "اللائحة التنفيذية" : "Home", href: "/" },
    {
      label: language === "ar" ? "الأهداف المتحققة" : "Achieved Goals",
      href: "/achieved-goals",
    },
    {
      label:
        language === "ar" ? "الأهداف الاستراتيجية" : "Strategic Objectives",
      href: "/strategic-objectives",
    },
    {
      label: language === "ar" ? "رئاسة الشبكة" : "Network Presidency",
      href: "/network-presidency",
    },
    { label: language === "ar" ? "أعضاء الشبكة" : "Members", href: "/members" },
  ];

  const dropdownItems = [
    {
      label: language === "ar" ? "اتصل بنا" : "Contact us",
      href: "/contact-us",
    },
    { label: language === "ar" ? "نموذج" : "Template", href: "/template" },
  ];

  const handleDropdownEnter = () => {
    clearTimeout(dropdownTimerRef.current);
    setIsDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimerRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 300);
  };

  useEffect(() => {
    return () => {
      if (dropdownTimerRef.current) {
        clearTimeout(dropdownTimerRef.current);
      }
    };
  }, []);

  return (
    <header className="w-full relative" dir={language === "ar" ? "rtl" : "ltr"}>
      <div className="max-w-[1400px] left-[50%] translate-x-[-50%] top-0 w-full mx-auto sm:px-4 px-1 py-2 absolute z-50">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="flex items-end sm:gap-2 gap-1 ">
              <img
                src={logo1}
                alt="Logo"
                className="sm:h-[83px] sm:w-[61px] h-[60px] w-[40px] object-contain object-center"
              />
              <div className="sm:block hidden sm:h-[70px] h-[60px] w-[2px] bg-white mb-[8px]" />
              <img
                src={logo2}
                alt="Logo"
                className="sm:h-[96px] sm:w-[109px] h-[70px] w-[70px] ml-[-10px]"
              />
            </div>
            <nav
              className="hidden xl:flex items-center gap-4"
              dir={language === "ar" && "ltr"}
            >
              {navItems.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.href}
                  className="text-white font-normal text-[19px] hover:text-gray-200 transition-colors duration-300"
                >
                  {item.label}
                </NavLink>
              ))}
              <div
                className="relative"
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
                ref={dropdownRef}
              >
                <button className="text-white font-normal text-[19px] flex items-center gap-[2px] hover:text-gray-200 transition-colors duration-300">
                  {language === "ar" ? "الرئيسية" : "Executive Reg."}
                  <ChevronDown
                    className={` mt-1 transform transition-transform duration-300 ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                    size={16}
                  />
                </button>
                <div
                  className={`absolute top-full left-0 bg-white rounded-md shadow-lg mt-1 overflow-hidden transition-all duration-300 ease-in-out w-full ${
                    isDropdownOpen
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                  }`}
                >
                  {dropdownItems.map((item, index) => (
                    <NavLink
                      key={index}
                      to={item.href}
                      className="block text-nowrap px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-200"
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            </nav>
          </div>
          <div className="flex items-center sm:space-x-4 sm:gap-0 gap-1">
            <div>
              <div className="flex items-center sm:gap-6 gap-1 border-b-[1px] border-b-[solid] border-b-[white] pb-[3px]">
                <div className="flex items-center gap-1 [&_*]:sm:text-[10px] [&_*]:text-[8px] text-white">
                  <Phone size={12} />
                  <Link to={"tel:+2035351900"}>+2035351900</Link>
                  <div className="h-[12px] w-[1px] bg-white" />
                  <Mail size={12} />
                  <Link to={"mailto:info@eca.org.eg"}>info@eca.org.eg</Link>
                </div>
                <div className="flex items-center [&_*]:sm:text-[10px] [&_*]:text-[8px] text-white">
                  <button
                    onClick={toggleLanguage}
                    className={`${language === "en" ? "" : ""}`}
                  >
                    EN
                  </button>
                  <div className="mx-[1px] h-[8px] w-[1px] bg-white" />
                  <button
                    onClick={toggleLanguage}
                    className={`${language === "ar" ? "" : ""}`}
                  >
                    AR
                  </button>
                </div>
              </div>
              <div className="flex justify-end items-center pt-2">
                <label className="relative w-fit">
                  <Search
                    size={16}
                    color="white"
                    className={`absolute top-[50%] translate-y-[-50%] ${
                      language === "ar" ? "right-3" : "left-3"
                    }`}
                  />
                  <input
                    type="search"
                    name="search"
                    id="search"
                    lang={language}
                    placeholder={`${language === "ar" ? "ابحث هنا" : "Search"}`}
                    className="border-white border-solid border-[1px] rounded-[30px] px-[2rem] h-[27px] max-w-[214px] w-full mx-auto py-[2px] focus:outline-none bg-transparent text-white placeholder:text-white text-[12px] font-normal leading-[13.8px]"
                  />
                </label>
              </div>
            </div>

            <button
              className="xl:hidden sm:px-4"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="xl:hidden absolute bg-white w-full mt-[7rem] z-40 drop-shadow-2xl ">
          <nav className="px-4 mt-2 pb-4 space-y-2">
            {navItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-black  font-bold text-[19px] transition-colors duration-200"
              >
                {item.label}
              </NavLink>
            ))}
            <div className="relative  ">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-between w-full px-3 py-2 rounded-md  text-black  font-bold text-[19px]  transition-colors duration-300"
              >
                {language === "ar" ? "الرئيسية" : "Executive Reg."}
                <ChevronDown
                  className={`ml-1 transform transition-transform duration-300 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  size={16}
                />
              </button>
              <div
                className={`pl-6 space-y-2 overflow-hidden transition-all duration-300 ease-in-out ${
                  isDropdownOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {dropdownItems.map((item, index) => (
                  <NavLink
                    key={index}
                    to={item.href}
                    onClick={() => {
                      setIsMenuOpen(false); // Close menu on dropdown link click
                      setIsDropdownOpen(false); // Optionally close dropdown as well
                    }}
                    className="block px-3 py-2 rounded-md  text-black   text-[19px] font-medium  hover:bg-gray-100 transition-colors duration-200"
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
