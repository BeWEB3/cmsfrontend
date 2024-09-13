import React from "react";
import { Link } from "react-router-dom";

import logo1 from "../pics/Logo1.svg";
import logo2 from "../pics/Logo2.svg";

import Facebook from "../pics/Facebook F.svg";
import Youtube from "../pics/YouTube.svg";
import TwitterX from "../pics/TwitterX.svg";

const Footer = ({ language }) => {
  const content = {
    ar: {
      title1: "روابط ذات صلة",
      links1: ["اللائحة التنفيذية", "توصيات المجلس التنفيذي", "ورش العمل"],
      title2: "روابط ذات صلة",
      links2: [
        "الرئيسية",
        "رئاسة الشبكة ",
        "الأهداف الاستراتيجية",
        "الأهداف المتحققة",
      ],
      copyright: "الهيئة العامة للمنافسة - جميع الحقوق محفوظة © 2024",
    },
    en: {
      title1: "Related links",
      links1: [
        "Executive regulations",
        "Executive Council recommendations",
        "Workshops",
      ],
      title2: "Related links",
      links2: [
        "Home",
        "Network Presidency",
        "Strategic objectives",
        "Achieved Goals",
      ],
      copyright:
        "General Authority for Competition - All rights reserved © 2024",
    },
  };

  return (
    <footer
      className={`bg-[#00567D] w-full text-white p-8 ${
        language === "ar" ? "text-right" : "text-left"
      }`}
    >
      <div className=" mx-auto max-w-[891px] w-full   ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 py-12 ">
          <div className=" order-2  ">
            <h3 className="text-[24px] font-bold leading-[46.05px] text-left text-white mb-4">
              {content[language].title1}
            </h3>
            <ul>
              {content[language].links1.map((link, index) => (
                <li key={index} className="mb-2">
                  <Link
                    href="#"
                    className="hover:underline text-[16px] font-light leading-[30.7px] text-left  "
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className=" order-3  ">
            <h3 className="text-[24px] font-bold leading-[46.05px] text-left text-white mb-4">
              {content[language].title2}
            </h3>
            <ul>
              {content[language].links2.map((link, index) => (
                <li key={index} className="mb-2">
                  <Link
                    href="#"
                    className="hover:underline text-[16px] font-light leading-[30.7px] text-left  "
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2 lg:order-3 order-1  ">
            <div className="flex lg:justify-end justify-start  items-end gap-4 ">
              <img src={logo1} alt="Logo" className="h-[134px] w-[99px]" />
              <div className=" h-[110px] w-[2px] bg-white mb-[15px] mx-4 " />
              <img
                src={logo2}
                alt="Logo"
                className={`h-[155px] w-[176px]  ${
                  language === "ar" ? "mr-[-25px]" : "ml-[-25px]"
                }   `}
              />
            </div>
          </div>
        </div>
        <div className="  w-full h-[2px] bg-white " />
        <div className="flex items-center justify-center my-10 gap-2 [&>a]:rounded-full [&>a]:w-[40px] [&>a]:h-[40px] [&>a]:border-white [&>a]:border-[1px] [&>a]:border-solid [&>a]:flex [&>a]:items-center [&>a]:justify-center  ">
          <Link href="#" className="hover:text-gray-300">
            <img src={TwitterX} alt="" width={"20px"} height={"20px"} />
          </Link>
          <Link href="#" className="hover:text-gray-300">
            <img src={Facebook} alt="" width={"20px"} height={"20px"} />
          </Link>
          <Link href="#" className="hover:text-gray-300">
            <img src={Youtube} alt="" width={"20px"} height={"20px"} />
          </Link>
        </div>
        <div className="mt-8 flex  justify-center items-center">
          <p className="mb-4 md:mb-0">{content[language].copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
