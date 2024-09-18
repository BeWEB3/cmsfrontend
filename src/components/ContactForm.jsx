import React, { useState } from "react";

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
  };

  const translations = {
    en: {
      title: "Send Us A Message",
      firstName: "1. First Name",
      lastName: "2. Last Name",
      email: "3. Email Address",
      message: "4. Message",
      submit: "Submit",
    },
    ar: {
      title: "أرسل لنا رسالة",
      firstName: "الاسم الأول",
      lastName: "اسم العائلة",
      email: "عنوان البريد الإلكتروني",
      message: "الرسالة",
      submit: "إرسال",
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
                {language === "ar" && "١. "}
                {t.firstName}
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-6 py-3 bg-white rounded-full    "
                required
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-white sm:text-[31px] text-[22px] font-bold leading-[31px]  mb-4 "
              >
                {language === "ar" && "٢. "}

                {t.lastName}
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-6 py-3 bg-white rounded-full "
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-white sm:text-[31px] text-[22px] font-bold leading-[31px]  mb-4 "
              >
                {language === "ar" && "٣. "}

                {t.email}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-6 py-3 bg-white rounded-full "
                required
              />
            </div>
          </div>
          <div className=" pt-8  ">
            <label
              htmlFor="message"
              className="block text-white sm:text-[31px] text-[22px] font-bold leading-[31px]  mb-4 "
            >
              {language === "ar" && "٤. "}

              {t.message}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              className="w-full px-6 py-3 bg-white rounded-lg "
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-white text-[#00567D]  font-bold py-2 px-4 rounded  transition duration-300"
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
