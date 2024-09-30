import React, { useState, useCallback } from "react";
import { toast } from "sonner";
import { APiFunctions } from "../API/AccountApiLayer";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";
import DOMPurify from "dompurify";

const ContactFormContent = ({ language }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

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
      const formDataWithToken = { ...sanitizedFormData, recaptchaToken: token };

      await APiFunctions.POSTContact(formDataWithToken)
        .then((res) => {
          setFormData({
            firstName: "",
            lastName: "",
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

  const translations = {
    en: {
      title: "Send Us A Message",
      firstName: "1. First Name",
      lastName: "2. Last Name",
      email: "3. Email Address",
      message: "4. Message",
      submit: "Submit",
      submitting: "Sending your message...",
      success: "Message sent successfully!",
      error: "Failed to send message. Please try again.",
    },
    ar: {
      title: "أرسل لنا رسالة",
      firstName: "١. الاسم الأول",
      lastName: "٢. اسم العائلة",
      email: "٣. عنوان البريد الإلكتروني",
      message: "٤. الرسالة",
      submit: "إرسال",
      submitting: "جاري إرسال رسالتك...",
      success: "تم إرسال الرسالة بنجاح!",
      error: "فشل في إرسال الرسالة. يرجى المحاولة مرة أخرى.",
    },
  };

  const t = translations[language] || translations.en;

  return (
    <div className=" xl:px-0 px-4  ">
      <div
        className={`bg-[#00567D] sm:px-8 px-4 xl:rounded-none rounded-[13px] shadow-lg w-full sm:py-12 py-8   my-16 ${
          language === "ar" ? "rtl" : "ltr"
        }`}
        dir={language === "ar" ? "rtl" : "ltr"}
      >
        <h2 className="sm:text-[50px] text-[26px] font-bold leading-[50px] text-center text-white sm:mb-16 mb-8 max-w-[1100px] mx-auto   ">
          {t.title}
        </h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 max-w-[1100px] mx-auto  "
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12  sm:gap-6 gap-4 ">
            <div>
              <label
                htmlFor="firstName"
                className="block text-white md:text-[31px] sm:text-[22px] text-[18px] font-bold leading-[31px]  sm:mb-4 mb-2 "
              >
                {t.firstName}
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                lang={language}
                onChange={handleChange}
                onPaste={handlePaste}
                onBlur={handleBlur}
                className="w-full px-6 py-3 bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-[white]   "
                required
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-white md:text-[31px] sm:text-[22px] text-[18px] font-bold leading-[31px]  sm:mb-4 mb-2 "
              >
                {t.lastName}
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                lang={language}
                value={formData.lastName}
                onChange={handleChange}
                onPaste={handlePaste}
                onBlur={handleBlur}
                className="w-full px-6 py-3 bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-[white]  "
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-white md:text-[31px] sm:text-[22px] text-[18px] font-bold leading-[31px]  sm:mb-4 mb-2 "
              >
                {t.email}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                lang={language}
                value={formData.email}
                onChange={handleChange}
                onPaste={handlePaste}
                onBlur={handleBlur}
                className="w-full px-6 py-3 bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-[white]  "
                required
              />
            </div>
          </div>
          <div className=" sm:pt-8 pt-2  ">
            <label
              htmlFor="message"
              className="block text-white md:text-[31px] sm:text-[22px] text-[18px] font-bold leading-[31px]  sm:mb-4 mb-2 "
            >
              {t.message}
            </label>
            <textarea
              id="message"
              name="message"
              lang={language}
              value={formData.message}
              onChange={handleChange}
              onPaste={handlePaste}
              onBlur={handleBlur}
              rows="6"
              className=" max-h-[350px] min-h-[180px]  w-full px-6 py-3 bg-white rounded-lg  focus:outline-none focus:ring-2 focus:ring-[white]  "
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              disabled={loading}
              className=" mt-6 w-full bg-white text-[#00567D]  font-bold py-2 px-4 rounded  transition duration-300 hover:bg-[#ffffffd2] active:scale-[0.97]  disabled:opacity-60 "
            >
              {loading ? t.submitting : t.submit}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const ContactForm = ({ language }) => {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
    >
      <ContactFormContent language={language} />
    </GoogleReCaptchaProvider>
  );
};

export default ContactForm;
