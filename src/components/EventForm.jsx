import React, { useCallback, useState } from "react";

import logo1 from "../pics/Logo1.svg";
import logo2 from "../pics/Logo2.svg";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import DOMPurify from "dompurify";
import { APiFunctions } from "../API/AccountApiLayer";

const translations = {
  en: {
    title: "Event Registration",
    firstName: "First Name",
    lastName: "Last Name",
    phonenumber: "Phone Number",
    email: "Email Address",
    message: "How can we help you?",
    submit: "Send",
    submitting: "Sending your message...",
    success: "Message sent successfully!",
    error: "Failed to send message. Please try again.",
    registerNow: "Register Now",
  },
  ar: {
    title: "تسجيل معنا الآن",
    firstName: "الاسم",
    lastName: "اسم العائلة",
    phonenumber: "رقم الهاتف",
    email: "البريد الإلكتروني",
    message: "كيف يمكننا مساعدتك؟",
    submit: "إرسال",
    registerNow: "سجل الآن",
    submitting: "جاري إرسال رسالتك...",
    success: "تم إرسال الرسالة بنجاح!",
    error: "فشل في إرسال الرسالة. يرجى المحاولة مرة أخرى.",
  },
};

const EventForm = ({ language, eventuid }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phonenumber: "",
    message: "",
    eventuid: "",
  });
  const t = translations[language];

  const [loading, setLoading] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const sanitizeInput = (input, fieldName) => {
    let sanitized = DOMPurify.sanitize(input);

    sanitized = sanitized.replace(/[^\x20-\x7E]/g, " ");

    switch (fieldName) {
      case "firstName":
      case "lastName":
        sanitized = sanitized.replace(/[^a-zA-Z\s-]/g, " ");
        break;
      case "phonenumber":
        sanitized = sanitized.toLowerCase();
        break;
      case "email":
        sanitized = sanitized.toLowerCase();
        break;
      case "message":
        sanitized = sanitized.trim().replace(/\s{2,}/g, " ");
        if (sanitized.length > 1000) {
          sanitized = sanitized.slice(0, 1000);
          toast.warning("Message truncated to 1000 characters.");
        }
        break;
      default:
        break;
    }

    return sanitized.trim();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePaste = useCallback((e) => {
    e.preventDefault();
    toast.error("Pasting is not allowed. Please type your input.");
  }, []);

  const handleBlur = useCallback((e) => {
    if (e.target.name === "email") {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value)) {
        toast.error("Please enter a valid email address.");
      }
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!executeRecaptcha) {
      console.error("Execute recaptcha not available");
      toast.error(t.error);
      return;
    }

    const sanitizedFormData = {
      firstName: sanitizeInput(formData.firstName, "firstName"),
      lastName: sanitizeInput(formData.lastName, "lastName"),
      phonenumber: sanitizeInput(formData.phonenumber, "phonenumber"),
      email: sanitizeInput(formData.email, "email"),
      message: sanitizeInput(formData.message, "message"),
    };

    setLoading(true);

    try {
      const token = await executeRecaptcha("submit_contact_form");

      if (!token) {
        toast.error("Failed to generate reCAPTCHA token. Please try again.");
        return;
      }
      const formDataWithToken = {
        ...sanitizedFormData,
        recaptchaToken: token,
        eventuid,
      };

      console.log(formDataWithToken);

      await APiFunctions.POSTRegister(formDataWithToken)
        .then((res) => {
          setFormData({
            firstName: "",
            lastName: "",
            phonenumber: "",
            email: "",
            message: "",
          });
          toast.success(res.data.message);
        })
        .catch((err) => {
          console.error(err);
          toast.error(t.error);
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (error) {
      console.error(error);
      toast.error(t.error);
      setLoading(false);
    }
  };

  return (
    <div
      className={`bg-[#00567D] text-white md:px-12 sm:px-6 px-4 py-16 rounded-lg shadow-lg max-w-[820px] mx-auto my-[4rem] ${
        language === "ar" ? "text-right" : "text-left"
      }`}
      dir={language === "en" ? "ltr" : "rtl"}
    >
      <div className="flex justify-between flex-col items-center mb-4">
        <h2 className="md:text-[64px] text-[30px] font-bold leading-[60.41px] text-center">
          {t.title}
        </h2>
        <div className="bg-white w-[40%] h-[4px] rounded-md md:my-4 mb-4 " />
      </div>
      <form className="space-y-8" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-4">
          <label
            className=" flex flex-col gap-1 md:text-[42px] text-[22px] font-bold md:leading-[52.08px] leading-[32px] "
            htmlFor="firstName"
          >
            {t.firstName}
            <input
              type="text"
              className="p-2 rounded text-black w-full mt-2 md:text-[31px] sm:text-[22px] text-[18px] font-bold leading-[31px]  "
              onChange={handleChange}
              onPaste={handlePaste}
              onBlur={handleBlur}
              id="firstName"
              name="firstName"
            />
          </label>
          <label
            className=" flex flex-col gap-1 md:text-[42px] text-[22px] font-bold md:leading-[52.08px] leading-[32px] "
            htmlFor="lastName"
          >
            {t.lastName}
            <input
              type="text"
              className="p-2 rounded text-black w-full mt-2 md:text-[31px] sm:text-[22px] text-[18px] font-bold leading-[31px]  "
              onChange={handleChange}
              onPaste={handlePaste}
              onBlur={handleBlur}
              id="lastName"
              name="lastName"
            />
          </label>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <label
            className=" flex flex-col gap-1 md:text-[42px] text-[22px] font-bold md:leading-[52.08px] leading-[32px] "
            htmlFor="phonenumber"
          >
            {t.phonenumber}
            <input
              type="tel"
              className="w-full p-2 rounded text-black mt-2 md:text-[31px] sm:text-[22px] text-[18px] font-bold leading-[31px] "
              dir={language === "en" ? "ltr" : "rtl"}
              onChange={handleChange}
              onPaste={handlePaste}
              onBlur={handleBlur}
              id="phonenumber"
              name="phonenumber"
            />
          </label>
          <label
            className=" flex flex-col gap-1 md:text-[42px] text-[22px] font-bold md:leading-[52.08px] leading-[32px] "
            htmlFor="email"
          >
            {t.email}
            <input
              type="email"
              className="w-full p-2 rounded text-black mt-2 md:text-[31px] sm:text-[22px] text-[18px] font-bold leading-[31px]  "
              onChange={handleChange}
              onPaste={handlePaste}
              onBlur={handleBlur}
              id="email"
              name="email"
            />
          </label>
        </div>
        <label
          className=" flex flex-col gap-1 md:text-[42px] text-[22px] font-bold md:leading-[52.08px] leading-[32px] "
          htmlFor="message"
        >
          {t.message}
          <textarea
            rows="4"
            className="w-full p-2 rounded text-black mt-2 md:text-[31px] sm:text-[22px] text-[18px] font-bold leading-[31px] "
            onChange={handleChange}
            onPaste={handlePaste}
            onBlur={handleBlur}
            id="message"
            name="message"
          ></textarea>
        </label>
        <button
          type="submit"
          className=" bg-[#00567D] text-white border-solid border-[1px] border-white py-2 px-8  text-[28px] font-bold leading-[34.72px] rounded-lg  transition duration-300 hover:bg-[#00557db0] active:scale-[0.97]  disabled:opacity-60 "
        >
          {loading ? t.submitting : t.submit}
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
