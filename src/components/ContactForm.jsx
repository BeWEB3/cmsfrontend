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
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email Address",
      message: "Message",
    },
    ar: {
      title: "أرسل لنا رسالة",
      firstName: "الاسم الأول",
      lastName: "اسم العائلة",
      email: "عنوان البريد الإلكتروني",
      message: "الرسالة",
    },
  };

  const t = translations[language] || translations.en;

  return (
    <div className=" lg:px-8 px-4  ">
      <div
        className={`bg-[#00567D] px-8 rounded-[13px] shadow-lg w-full py-12   my-16 ${
          language === "ar" ? "rtl" : "ltr"
        }`}
      >
        <h2 className="text-[50px] font-bold leading-[50px] text-center text-white mb-16 max-w-[1100px] mx-auto   ">
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
                className="block text-white text-[31px] font-bold leading-[31px]  mb-4 "
              >
                1. {t.firstName}
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
                className="block text-white text-[31px] font-bold leading-[31px]  mb-4 "
              >
                2. {t.lastName}
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
                className="block text-white text-[31px] font-bold leading-[31px]  mb-4 "
              >
                3. {t.email}
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
              className="block text-white text-[31px] font-bold leading-[31px]  mb-4 "
            >
              4. {t.message}
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
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
