import React, { useState } from "react";
import { Mail, Menu, Phone, Search, X } from "lucide-react";

import logo1 from "../pics/Logo1.svg";
import logo2 from "../pics/Logo2.svg";
import { Link, NavLink } from "react-router-dom";

const Header = ({ language, toggleLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: language === "ar" ? "اللائحة التنفيذية" : "Home", href: "#" },
    {
      label: language === "ar" ? "الأهداف المتحققة" : "Achieved Goals",
      href: "#services",
    },
    {
      label:
        language === "ar" ? "الأهداف الاستراتيجية" : "Strategic Objectives",
      href: "#team",
    },
    {
      label: language === "ar" ? "رئاسة الشبكة" : "Network Presidency",
      href: "#about",
    },
    {
      label: language === "ar" ? "أعضاء الشبكة" : "Members",
      href: "#contact",
    },
    {
      label: language === "ar" ? "الرئيسية" : "Executive Reg.",
      href: "#contact",
    },
  ];

  return (
    <header
      className="w-full relative  "
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <div className=" max-w-[1400px]  left-[50%] translate-x-[-50%] top-0  w-full mx-auto sm:px-4 px-1 py-2 absolute  z-50 ">
        <div className="flex justify-between items-center  ">
          <div className="flex items-center gap-4">
            <div className="flex items-end gap-2 ">
              <img
                src={logo1}
                alt="Logo"
                className="    sm:h-[83px] sm:w-[61px]   h-[70px] w-[45px] object-contain object-center"
              />
              <div className=" sm:block hidden sm:h-[70px] h-[60px] w-[2px] bg-white mb-[8px]  " />
              <img
                src={logo2}
                alt="Logo"
                className="sm:h-[96px] sm:w-[109px] h-[80px] w-[80px] ml-[-10px]  "
              />
            </div>
            <nav className="hidden xl:flex items-center gap-4 ">
              {navItems.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.href}
                  className="text-white font-normal  text-[19px]  "
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
          <div className="flex items-center sm:space-x-4 sm:gap-0 gap-1  ">
            <div>
              <div className=" flex items-center sm:gap-6 gap-1 border-b-[1px] border-b-[solid] border-b-[white] pb-[3px]  ">
                <div className=" flex items-center gap-1 [&_*]:text-[10px] text-white  ">
                  <Phone size={12} />
                  <Link to={"tel:+2035351900"}>+2035351900</Link>
                  <div className=" h-[12px] w-[1px] bg-white   " />
                  <Mail size={12} />
                  <Link to={"mailto:info@eca.org.eg"}>info@eca.org.eg</Link>
                </div>
                <div className="flex items-center  [&_*]:text-[10px] text-white">
                  <button
                    onClick={toggleLanguage}
                    className={` ${language === "en" ? "   " : ""}  `}
                  >
                    EN
                  </button>
                  <div className=" mx-[1px] h-[8px] w-[1px] bg-white   " />
                  <button
                    onClick={toggleLanguage}
                    className={` ${language === "ar" ? "     " : ""}  `}
                  >
                    AR
                  </button>
                </div>
              </div>
              <div className="flex justify-end items-center pt-2">
                <label className="relative  w-fit ">
                  <Search
                    size={16}
                    color="white"
                    className={` absolute top-[50%] translate-y-[-50%] ${
                      language === "ar" ? "right-3" : "left-3 "
                    }  `}
                  />
                  <input
                    type="search"
                    name="search"
                    id="search"
                    lang={language}
                    placeholder={`${language === "ar" ? "ابحث هنا" : "Search"}`}
                    className=" border-white border-solid border-[1px] rounded-[30px] px-[2rem] h-[27px] max-w-[214px] w-full mx-auto py-[2px] focus:outline-none bg-transparent text-white placeholder:text-white  text-[12px] font-normal leading-[13.8px]   "
                  />
                </label>
              </div>
            </div>

            <button
              className="xl:hidden sm:px-4 "
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
        <div className="xl:hidden absolute bg-white w-full  mt-[7rem] z-40  ">
          <nav className="px-4 mt-2 pb-4 space-y-2">
            {navItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 "
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
