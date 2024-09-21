import { Check, X } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";

const ContactForm = ({ language }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulating API call
        if (Math.random() > 0.1) {
          // 90% success rate
          resolve();
        } else {
          reject();
        }
      }, 2000);
    });

    toast.promise(promise, {
      loading: translations[language].submitting,
      success: () => (
        <div className="flex items-center space-x-2">
          <Check className="text-green-500" size={18} />
          <span>{translations[language].success}</span>
        </div>
      ),
      error: () => (
        <div className="flex items-center space-x-2">
          <X className="text-red-500" size={18} />
          <span>{translations[language].error}</span>
        </div>
      ),
    });
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
        className={`bg-[#00567D] px-8 xl:rounded-none rounded-[13px] shadow-lg w-full py-12   my-16 ${
          language === "ar" ? "rtl" : "ltr"
        }`}
      >
        <h2 className="sm:text-[50px] text-[30px] font-bold leading-[50px] text-center text-white mb-16 max-w-[1100px] mx-auto   ">
          {t.title}
        </h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 max-w-[1100px] mx-auto  "
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12  gap-6 ">
            <div>
              <label
                htmlFor="firstName"
                className="block text-white sm:text-[31px] text-[22px] font-bold leading-[31px]  mb-4 "
              >
                {t.firstName}
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-6 py-3 bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-[white]   "
                required
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-white sm:text-[31px] text-[22px] font-bold leading-[31px]  mb-4 "
              >
                {t.lastName}
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-6 py-3 bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-[white]  "
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-white sm:text-[31px] text-[22px] font-bold leading-[31px]  mb-4 "
              >
                {t.email}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-6 py-3 bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-[white]  "
                required
              />
            </div>
          </div>
          <div className=" pt-8  ">
            <label
              htmlFor="message"
              className="block text-white sm:text-[31px] text-[22px] font-bold leading-[31px]  mb-4 "
            >
              {t.message}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              className=" max-h-[350px] min-h-[180px]  w-full px-6 py-3 bg-white rounded-lg  focus:outline-none focus:ring-2 focus:ring-[white]  "
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className=" mt-6 w-full bg-white text-[#00567D]  font-bold py-2 px-4 rounded  transition duration-300 hover:bg-[#ffffffd2] active:scale-[0.97]  "
            >
              {t.submit}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
