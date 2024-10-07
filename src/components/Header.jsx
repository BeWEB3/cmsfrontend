import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { Mail, Menu, Phone, Search, X, ChevronDown } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { APiFunctions } from "../API/AccountApiLayer";
import logo1 from "../pics/Logo1.svg";
import logo2 from "../pics/Logo2.svg";

// Debounce hook
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

const Header = ({ language, toggleLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const dropdownRef = useRef(null);
  const dropdownTimerRef = useRef(null);
  const searchInputRef = useRef(null);
  const mobileSearchInputRef = useRef(null);
  const navigate = useNavigate();

  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm("");
      setSearchResults([]);
    }
  };

  const fetchSearchResults = useCallback(async () => {
    if (debouncedSearchTerm.trim()) {
      setIsSearching(true);
      try {
        const response = await APiFunctions.GETSearch(
          debouncedSearchTerm.trim()
        );
        console.log(response.data);

        setSearchResults(response.data || []);
      } catch (error) {
        console.error("Search error:", error);
        setSearchResults([]);
      } finally {
        setIsSearching(false);
      }
    } else {
      setSearchResults([]);
    }
  }, [debouncedSearchTerm]);

  useEffect(() => {
    fetchSearchResults();
  }, [fetchSearchResults]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target) &&
        mobileSearchInputRef.current &&
        !mobileSearchInputRef.current.contains(event.target)
      ) {
        setSearchResults([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
    staleTime: 5 * 60 * 1000,
    cacheTime: 10 * 60 * 1000,
  });

  const memoizedHome = useMemo(() => {
    if (!homeData || !homeData?.data) return null;
    return homeData.data;
  }, [homeData]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  const renderSearchInput = (isMobile = false) => (
    <form
      onSubmit={handleSearchSubmit}
      className="relative w-full"
      ref={isMobile ? mobileSearchInputRef : searchInputRef}
    >
      <Search
        size={16}
        color="white"
        className={`absolute top-[50%] translate-y-[-50%] ${
          language === "ar" ? "right-3" : "left-3"
        }`}
      />
      <input
        type="search"
        value={searchTerm}
        onChange={handleSearchChange}
        lang={language}
        placeholder={`${language === "ar" ? "ابحث هنا" : "Search"}`}
        className={`border-white border-solid border-[1px] rounded-[30px] px-[2rem] ${
          isMobile ? "h-[34px] w-full" : "h-[27px] max-w-[214px] w-full"
        } mx-auto py-[2px] focus:outline-none focus:ring-0 bg-transparent text-white placeholder:text-white text-[12px] font-normal leading-[13.8px]`}
      />
      {(searchResults.length > 0 || isSearching) && (
        <div className="absolute z-50 w-full sm:max-w-[230px] mt-1 bg-[#00567D] rounded-md shadow-lg max-h-60 overflow-y-auto overflow-x-hidden  ">
          {isSearching ? (
            <div className="p-2 text-white">Searching...</div>
          ) : (
            searchResults.map((result, index) => (
              <Link
                key={index}
                to={
                  result?.slug
                    ? result?.slug === "home"
                      ? "/"
                      : result?.slug === "networkpresidency"
                      ? "/network-presidency"
                      : result?.slug === "contactus"
                      ? "contactus"
                      : `/page/${result?.slug}`
                    : result?.content?.en
                }
                className="block px-4 py-2 text-sm text-white hover:bg-gray-100 hover:text-[#00567D]  "
                onClick={() => {
                  setSearchResults([]);
                  setIsMenuOpen(false);
                }}
              >
                {result[language]?.length >= 20 ? (
                  <>{result[language]?.substring(0, 20)}...</>
                ) : (
                  result[language]?.substring(0, 20)
                )}
              </Link>
            ))
          )}
        </div>
      )}
    </form>
  );

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
              className="flex items-end sm:gap-2 gap-3 sm:min-w-[unset] min-w-[120px]"
            >
              <img
                src={logo1}
                alt="Logo"
                className="sm:h-[88px] sm:w-[61px] h-[60px] w-[40px] object-contain object-center"
              />
              <div
                className={`sm:block hidden sm:h-[70px] h-[60px] w-[2px] bg-white mb-[8px] ${
                  language === "en" ? "mr-[2px] " : ""
                }`}
              />
              <img
                src={logo2}
                alt="Logo"
                className={`sm:h-[96px] sm:w-[109px] h-[65px] w-[70px] 
                  ${language === "en" ? " ml-[-8px]" : " mr-[-5px] "}`}
              />
            </Link>
            <nav className="hidden xl:flex items-center xl:gap-4 gap-2">
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
                  className={`absolute top-full right-0 bg-white rounded-md shadow-lg mt-1 overflow-hidden transition-all duration-300 ease-in-out w-full min-w-[400px] ${
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
            <div className="sm:block hidden w-fit">
              <div className="flex items-center justify-between sm:gap-6 gap-1 border-b-[1px] border-b-[solid] border-b-[white] pb-[3px]">
                <div className="flex items-center gap-1 [&_*]:sm:text-[10px] [&_*]:text-[9px] text-white">
                  <Link
                    className="flex items-center gap-1"
                    to={"tel:+2035351900"}
                  >
                    <Phone size={12} />
                    <span className="">+2035351900</span>
                  </Link>
                  <div className="h-[12px] w-[1px] bg-white" />
                  <Link
                    className="flex items-center gap-1"
                    to={"mailto:info@eca.org.eg"}
                  >
                    <Mail size={12} />
                    <span className="">info@eca.org.eg</span>
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
                {renderSearchInput()}
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
        <div className="xl:hidden absolute bg-[#00567D] w-full sm:pt-[7rem] pt-[6rem] z-40 drop-shadow-2xl">
          <div className="sm:hidden block px-6">
            <div className="w-full">
              <div className="flex justify-end items-center pt-2">
                {renderSearchInput(true)}
              </div>
              <div className="mt-3 pt-2 flex items-center justify-between sm:gap-6 gap-1 border-t-[1px] border-t-[solid] border-t-[white] pb-[2px]">
                <div className="flex items-center gap-1 [&_*]:text-[13px] text-white">
                  <Link
                    className="flex items-center gap-1"
                    to={"tel:+2035351900"}
                  >
                    <Phone size={12} />
                    <span className="">+2035351900</span>
                  </Link>
                  <div className="h-[12px] w-[1px] bg-white" />
                  <Link
                    className="flex items-center gap-1"
                    to={"mailto:info@eca.org.eg"}
                  >
                    <Mail size={12} />
                    <span className="">info@eca.org.eg</span>
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
                className="block px-3 py-[4px] rounded-md text-white  sm:text-[24px] text-[19px] font-normal leading-[24px]  transition-colors duration-200"
              >
                {item?.content[language]}
              </NavLink>
            ))}
            <div className="relative  ">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-between w-full px-3 py-[4px] rounded-md  text-white  sm:text-[24px] text-[19px] font-normal leading-[24px]   transition-colors duration-300"
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
                className={`pl-2 mt-2 space-y-2 overflow-y-auto  transition-all duration-300 ease-in-out ${
                  isDropdownOpen
                    ? "max-h-screen opacity-100"
                    : "max-h-0 opacity-0"
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
                    className="block px-3 py-[2px] rounded-md  text-white   sm:text-[19px] text-[16px] font-medium   transition-colors duration-200"
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
