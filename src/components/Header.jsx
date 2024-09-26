import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { Mail, Menu, Phone, Search, X, ChevronDown } from "lucide-react";

import logo1 from "../pics/Logo1.svg";
import logo2 from "../pics/Logo2.svg";
import { Link, NavLink } from "react-router-dom";
import { APiFunctions } from "../API/AccountApiLayer";
import { useQuery } from "react-query";

const Header = ({ language, toggleLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dropdownTimerRef = useRef(null);

  // const navItems = [
  //   { label: language === "ar" ? "اللائحة التنفيذية" : "Home", href: "/" },
  //   {
  //     label: language === "ar" ? "الأهداف المتحققة" : "Achieved Goals",
  //     href: "/achieved-goals",
  //   },
  //   {
  //     label:
  //       language === "ar" ? "الأهداف الاستراتيجية" : "Strategic Objectives",
  //     href: "/strategic-objectives",
  //   },
  //   {
  //     label: language === "ar" ? "رئاسة الشبكة" : "Network Presidency",
  //     href: "/network-presidency",
  //   },
  //   { label: language === "ar" ? "أعضاء الشبكة" : "Members", href: "/network-presidency" },
  // ];

  // const dropdownItems = [
  //   {
  //     label: language === "ar" ? "اتصل بنا" : "Contact us",
  //     href: "/contact-us",
  //   },
  //   { label: language === "ar" ? "نموذج" : "Template", href: "/template" },
  // ];

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

  const fetchNewsData = useCallback(
    () => APiFunctions.GETWithSlug("header"),
    []
  );

  const {
    data: homeData,
    isLoading,
    isError,
    error,
  } = useQuery("homeData", fetchNewsData, {
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
  });

  const memoizedHome = useMemo(() => {
    if (!homeData || !homeData?.data) return null;

    return homeData.data;
  }, [homeData]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <header className="w-full relative" dir={language === "ar" ? "rtl" : "ltr"}>
      <div
        className={`max-w-[1400px] left-[50%] translate-x-[-50%] top-0 w-full mx-auto sm:px-4 px-3 py-2 absolute z-50 ${
          isMenuOpen && " lg:bg-transparent bg-[#00567D]"
        } `}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link
              to={"/"}
              className="flex items-end sm:gap-2 gap-3 sm:min-w-[unset] min-w-[120px]  "
            >
              <img
                src={logo1}
                alt="Logo"
                className="sm:h-[88px] sm:w-[61px] h-[60px] w-[40px] object-contain object-center"
              />
              <div
                className={`sm:block hidden sm:h-[70px] h-[60px] w-[2px] bg-white mb-[8px] ${
                  language === "en" ? "mr-[2px] " : ""
                }  `}
              />
              <img
                src={logo2}
                alt="Logo"
                className={`sm:h-[96px] sm:w-[109px] h-[65px] w-[70px] 
                  
                  ${language === "en" ? " ml-[-8px]" : " mr-[-5px] "} 
                  `}
              />
            </Link>
            <nav
              className="hidden xl:flex items-center xl:gap-4 gap-2"
              // dir={language === "ar" && "ltr"}
            >
              {memoizedHome?.outsideDropdownLinks?.map((item, index) => (
                <NavLink
                  key={index}
                  to={
                    item?.slug
                      ? item?.slug === "home"
                        ? "/"
                        : item?.slug === "networkpresidency"
                        ? "/network-presidency"
                        : item?.slug === "contactus"
                        ? "contactus"
                        : `/page/${item?.slug}`
                      : item?.content?.en
                  }
                  className="text-white font-normal text-[19px] hover:text-gray-200 transition-colors duration-300"
                >
                  {item?.content[language]}
                </NavLink>
              ))}

              <div
                className="relative"
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
                ref={dropdownRef}
              >
                <button className="text-white font-normal text-[19px] flex items-center gap-[2px] hover:text-gray-200 transition-colors duration-300">
                  {language === "ar" ? "المزيد من الروابط" : "More Links"}
                  <ChevronDown
                    className={` mt-1 transform transition-transform duration-300 ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                    size={16}
                  />
                </button>
                <div
                  className={`absolute top-full right-0 bg-white rounded-md shadow-lg mt-1 overflow-hidden transition-all duration-300 ease-in-out w-full min-w-[180px] ${
                    isDropdownOpen
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                  }`}
                >
                  {memoizedHome?.insideDropdownLinks?.map((item, index) => (
                    <NavLink
                      key={index}
                      to={
                        item?.slug
                          ? item?.slug === "home"
                            ? "/"
                            : item?.slug === "networkpresidency"
                            ? "/network-presidency"
                            : item?.slug === "contactus"
                            ? "contactus"
                            : `/page/${item?.slug}`
                          : item?.content?.en
                      }
                      className="block text-nowrap px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-200"
                    >
                      {item?.content[language]}
                    </NavLink>
                  ))}
                </div>
              </div>
            </nav>
          </div>
          <div className="flex items-center sm:space-x-4 sm:gap-0 gap-1">
            <div className=" sm:block hidden w-fit ">
              <div className="flex items-center justify-between sm:gap-6 gap-1 border-b-[1px] border-b-[solid] border-b-[white] pb-[3px]">
                <div className="flex items-center gap-1 [&_*]:sm:text-[10px] [&_*]:text-[9px] text-white">
                  <Link
                    className=" flex items-center gap-1 "
                    to={"tel:+2035351900"}
                  >
                    <Phone size={12} />
                    <span className=" ">+2035351900</span>
                  </Link>
                  <div className="h-[12px] w-[1px] bg-white" />
                  <Link
                    className=" flex items-center gap-1 "
                    to={"mailto:info@eca.org.eg"}
                  >
                    <Mail size={12} />
                    <span className=" ">info@eca.org.eg</span>
                  </Link>
                </div>
                <div className="flex items-center [&_*]:sm:text-[10px] [&_*]:text-[9px] text-white">
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
                <label className="relative w-full">
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
                    className="border-white border-solid border-[1px] rounded-[30px] px-[2rem] h-[27px] max-w-[214px] w-full mx-auto py-[2px] focus:outline-none focus:ring-0   bg-transparent text-white placeholder:text-white text-[12px] font-normal leading-[13.8px]"
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
        <div className="xl:hidden absolute bg-[#00567D] w-full sm:pt-[7rem] pt-[6rem] z-40 drop-shadow-2xl ">
          <div className=" sm:hidden block px-6  ">
            <div className=" w-full ">
              <div className="flex justify-end items-center pt-2">
                <label className="relative w-full">
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
                    className="border-white border-solid border-[1px] rounded-[30px] px-[2rem] h-[34px] sm:max-w-[214px] w-full mx-auto py-[2px] focus:outline-none focus:ring-0   bg-transparent text-white placeholder:text-white text-[12px] font-normal leading-[13.8px]"
                  />
                </label>
              </div>
              <div className=" mt-3 pt-2 flex items-center justify-between sm:gap-6 gap-1 border-t-[1px] border-t-[solid] border-t-[white] pb-[2px]">
                <div className="flex items-center gap-1 [&_*]:text-[13px] text-white">
                  <Link
                    className=" flex items-center gap-1 "
                    to={"tel:+2035351900"}
                  >
                    <Phone size={12} />
                    <span className=" ">+2035351900</span>
                  </Link>
                  <div className="h-[12px] w-[1px] bg-white" />
                  <Link
                    className=" flex items-center gap-1 "
                    to={"mailto:info@eca.org.eg"}
                  >
                    <Mail size={12} />
                    <span className=" ">info@eca.org.eg</span>
                  </Link>
                </div>
                <div className="flex items-center [&_*]:text-[13px] text-white">
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
            </div>
          </div>

          <nav className="px-4 mt-4 pb-4 space-y-2">
            {memoizedHome?.outsideDropdownLinks?.map((item, index) => (
              <NavLink
                key={index}
                to={
                  item?.slug
                    ? item?.slug === "home"
                      ? "/"
                      : item?.slug === "networkpresidency"
                      ? "/network-presidency"
                      : item?.slug === "contactus"
                      ? "contactus"
                      : `/page/${item?.slug}`
                    : item?.content?.en
                }
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-[4px] rounded-md text-white  text-[24px] font-normal leading-[24px]  transition-colors duration-200"
              >
                {item?.content[language]}
              </NavLink>
            ))}
            <div className="relative  ">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-between w-full px-3 py-[4px] rounded-md  text-white  text-[24px] font-normal leading-[24px]   transition-colors duration-300"
              >
                {language === "ar" ? "المزيد من الروابط" : "More Links"}
                <ChevronDown
                  className={`ml-1 transform transition-transform duration-300 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  size={16}
                />
              </button>
              <div
                className={`pl-2 mt-2 space-y-2 overflow-hidden transition-all duration-300 ease-in-out ${
                  isDropdownOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {memoizedHome?.insideDropdownLinks?.map((item, index) => (
                  <NavLink
                    key={index}
                    to={
                      item?.slug
                        ? item?.slug === "home"
                          ? "/"
                          : item?.slug === "networkpresidency"
                          ? "/network-presidency"
                          : item?.slug === "contactus"
                          ? "contactus"
                          : `/page/${item?.slug}`
                        : item?.content?.en
                    }
                    onClick={() => {
                      setIsMenuOpen(false); // Close menu on dropdown link click
                      setIsDropdownOpen(false); // Optionally close dropdown as well
                    }}
                    className="block px-3 py-[2px] rounded-md  text-white   text-[19px] font-medium   transition-colors duration-200"
                  >
                    {item?.content[language]}
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
