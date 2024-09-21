import React, { useCallback, useMemo } from "react";
import { Link } from "react-router-dom";

import logo1 from "../pics/Logo1.svg";
import logo2 from "../pics/Logo2.svg";

// import Facebook from "../pics/Facebook F.svg";
// import Youtube from "../pics/YouTube.svg";
// import TwitterX from "../pics/TwitterX.svg";
import { APiFunctions } from "../API/AccountApiLayer";
import { useQuery } from "react-query";
import { Facebook, Youtube } from "lucide-react";

const Footer = ({ language }) => {
  const fetchNewsData = useCallback(
    () => APiFunctions.GETWithSlug("footer"),
    []
  );

  const {
    data: footerData,
    isLoading,
    isError,
    error,
  } = useQuery("footerData", fetchNewsData, {
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
  });

  const memoizedSections = useMemo(() => {
    if (!footerData || !footerData?.data) return null;

    return footerData.data;
  }, [footerData]);

  const socialLinks = memoizedSections?.contentSections[0]?.contentItems;

  const getSocialData = (contentType) => {
    const linkItem = socialLinks?.find(
      (item) => item.contentType === `${contentType} Link`
    );
    const imageItem = socialLinks?.find(
      (item) => item.contentType === `${contentType} Image`
    );
    return { link: linkItem?.content?.en, image: imageItem?.url };
  };

  const twitter = getSocialData("Twitter");
  const facebook = getSocialData("Facebook");
  const youtube = getSocialData("Youtube");

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  const content = {
    ar: {
      title1: "روابط ذات صلة",
      links1: [
        { text: "اللائحة التنفيذية", href: "/executive-regulations-ar" },
        {
          text: "توصيات المجلس التنفيذي",
          href: "/executive-council-recommendations-ar",
        },
        { text: "ورش العمل", href: "/workshops-ar" },
      ],
      title2: "روابط ذات صلة",
      links2: [
        { text: "الرئيسية", href: "/home-ar" },
        { text: "رئاسة الشبكة ", href: "/network-presidency-ar" },
        { text: "الأهداف الاستراتيجية", href: "/strategic-objectives-ar" },
        { text: "الأهداف المتحققة", href: "/achieved-goals-ar" },
      ],
      copyright: "الهيئة العامة للمنافسة - جميع الحقوق محفوظة © 2024",
    },
    en: {
      title1: "Related links",
      links1: [
        { text: "Executive regulations", href: "/executive-regulations" },
        {
          text: "Executive Council recommendations",
          href: "/executive-council-recommendations",
        },
        { text: "Workshops", href: "/workshops" },
      ],
      title2: "Related links",
      links2: [
        { text: "Home", href: "/" },
        { text: "Network Presidency", href: "/network-presidency" },
        { text: "Strategic objectives", href: "/strategic-objectives" },
        { text: "Achieved Goals", href: "/achieved-goals" },
      ],
      copyright:
        "General Authority for Competition - All rights reserved © 2024",
    },
  };

  return (
    <footer
      className={`bg-[#00567D] w-full text-white p-8 ${
        language === "ar" ? "text-right" : "text-left"
      }`}
    >
      <div className="mx-auto max-w-[891px] w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8 gap-4 sm:px-6 py-12">
          <div className="order-2">
            <h3 className="text-[24px] font-bold leading-[46.05px] text-white sm:mb-4 mb-0">
              {content[language].title1}
            </h3>
            <ul>
              {content[language].links1.map((link, index) => (
                <li key={index} className="sm:mb-2 mb-0">
                  <Link
                    to={link.href}
                    className="hover:underline text-[16px] font-light leading-[30.7px]"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-3">
            <h3 className="text-[24px] font-bold leading-[46.05px] text-white sm:mb-4 mb-0">
              {content[language].title2}
            </h3>
            <ul>
              {content[language].links2.map((link, index) => (
                <li key={index} className="sm:mb-2 mb-0">
                  <Link
                    to={link.href}
                    className="hover:underline text-[16px] font-light leading-[30.7px]"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="sm:col-span-2 lg:order-3 order-1">
            <Link
              to={"/"}
              className="flex lg:justify-end justify-start items-end sm:gap-4 gap-2 "
            >
              <img
                src={logo1}
                alt="Logo"
                className="sm:h-[134px] sm:w-[99px] h-[100px] w-[70px]  "
              />
              <div className="sm:h-[100px] h-[80px] w-[2px] bg-white mb-[15px] mx-4" />
              <img
                src={logo2}
                alt="Logo"
                className={`sm:h-[155px] sm:w-[176px] h-[120px] w-[130px] ${
                  language === "ar" ? "mr-[-25px] ml-[-5px] " : "ml-[-15px]"
                }`}
              />
            </Link>
          </div>
        </div>
        <div className="w-full h-[2px] bg-white" />
        <div className="flex items-center justify-center my-10 gap-2 [&>a]:rounded-full [&>a]:w-[40px] [&>a]:h-[40px] [&>a]:border-white [&>a]:border-[1px] [&>a]:border-solid [&>a]:flex [&>a]:items-center [&>a]:justify-center">
          <Link
            target="_blank"
            to={twitter.link}
            className="hover:text-gray-300"
          >
            <i className="fa-brands fa-x-twitter"></i>
            {/* <img src={twitter.image} alt="Twitter" width="20px" height="20px" /> */}
          </Link>
          <Link
            target="_blank"
            to={facebook.link}
            className="hover:text-gray-300"
          >
            <Facebook />
            {/* <img
              src={facebook.image}
              alt="Facebook"
              width="20px"
              height="20px"
            /> */}
          </Link>
          <Link
            target="_blank"
            to={youtube.link}
            className="hover:text-gray-300"
          >
            <Youtube />
            {/* <img src={youtube.image} alt="YouTube" width="20px" height="20px" /> */}
          </Link>
        </div>
        <div className="mt-8 flex justify-center items-center">
          <p className="mb-4 md:mb-0">{content[language].copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
