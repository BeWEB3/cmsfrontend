import React from "react";

import logo1 from "../pics/Logo1.svg";
import logo2 from "../pics/Logo2.svg";
import { Link } from "react-router-dom";

const translations = {
  en: {
    title: "Event Registration",
    firstName: "First Name",
    lastName: "Last Name",
    phoneNumber: "Phone Number",
    emailAddress: "Email Address",
    additionalComments: "How can we help you?",
    submit: "Send",
    registerNow: "Register Now",
  },
  ar: {
    title: "تسجيل معنا الآن",
    firstName: "الاسم",
    lastName: "اسم العائلة",
    phoneNumber: "رقم الهاتف",
    emailAddress: "البريد الإلكتروني",
    additionalComments: "كيف يمكننا مساعدتك؟",
    submit: "إرسال",
    registerNow: "سجل الآن",
  },
};

const EventForm = ({ language }) => {
  const t = translations[language];

  const handleSubmit = (e) => {
    // Handle form submission here
    e.preventDefault();
  };

  return (
    <div
      className={`bg-[#00567D] text-white md:px-12 px-6 py-16 rounded-lg shadow-lg max-w-[820px] mx-auto my-[4rem] ${
        language === "ar" ? "text-right" : "text-left"
      }`}
      dir={language === "en" ? "ltr" : "rtl"}
    >
      <div className="flex justify-between flex-col items-center mb-4">
        <h2 className="md:text-[64px] text-[34px] font-bold leading-[60.41px] text-center">
          {t.title}
        </h2>
        <div className="bg-white w-[40%] h-[4px] rounded-md my-4 " />
      </div>
      <form className="space-y-8" onClick={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-4">
          <label className=" flex flex-col gap-1 md:text-[42px] text-[26px] font-bold md:leading-[52.08px] leading-[32px] ">
            {t.firstName}
            <input type="text" className="p-2 rounded text-black w-full " />
          </label>
          <label className=" flex flex-col gap-1 md:text-[42px] text-[26px] font-bold md:leading-[52.08px] leading-[32px] ">
            {t.lastName}
            <input type="text" className="p-2 rounded text-black w-full " />
          </label>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <label className=" flex flex-col gap-1 md:text-[42px] text-[26px] font-bold md:leading-[52.08px] leading-[32px] ">
            {t.phoneNumber}
            <input
              type="tel"
              className="w-full p-2 rounded text-black"
              dir={language === "en" ? "ltr" : "rtl"}
            />
          </label>
          <label className=" flex flex-col gap-1 md:text-[42px] text-[26px] font-bold md:leading-[52.08px] leading-[32px] ">
            {t.emailAddress}
            <input type="email" className="w-full p-2 rounded text-black" />
          </label>
        </div>
        <label className=" flex flex-col gap-1 md:text-[42px] text-[26px] font-bold md:leading-[52.08px] leading-[32px] ">
          {t.additionalComments}
          <textarea
            rows="4"
            className="w-full p-2 rounded text-black"
          ></textarea>
        </label>
        <button
          type="submit"
          className=" bg-[#00567D] text-white border-solid border-[1px] border-white py-2 px-8  text-[28px] font-bold leading-[34.72px] rounded-lg  "
        >
          {t.submit}
        </button>
      </form>
      <Link
        to={"/"}
        className="flex items-end sm:gap-2 gap-3 sm:min-w-[unset] min-w-[120px] my-4"
      >
        <img
          src={logo1}
          alt="Logo"
          className="h-[88px] w-[61px]  object-contain object-center"
        />
        <div
          className={`block  h-[70px]  w-[2px] bg-white mb-[8px] ${
            language === "en" ? "mr-[2px] " : ""
          }`}
        />
        <img
          src={logo2}
          alt="Logo"
          className={`h-[96px] w-[109px]  
                  ${language === "en" ? " ml-[-8px]" : " mr-[-5px] "}`}
        />
      </Link>
    </div>
  );
};

export default EventForm;
