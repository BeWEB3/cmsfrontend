import React from "react";

const Footer = ({ language }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8 w-full  ">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">
              {language === "ar" ? "اسم الشركة" : "Company Name"}
            </h3>
            <p className="text-sm">
              {language === "ar"
                ? "وصف موجز للشركة وخدماتها"
                : "Brief description of the company and its services"}
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">
              {language === "ar" ? "روابط سريعة" : "Quick Links"}
            </h3>
            <ul>
              <li>
                <a href="/#" className="hover:text-blue-300">
                  {language === "ar" ? "الرئيسية" : "Home"}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-300">
                  {language === "ar" ? "الخدمات" : "Services"}
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-blue-300">
                  {language === "ar" ? "الفريق" : "Team"}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-300">
                  {language === "ar" ? "عن الشركة" : "About"}
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-4">
              {language === "ar" ? "اتصل بنا" : "Contact Us"}
            </h3>
            <p className="text-sm">
              {language === "ar"
                ? "العنوان: شارع الرئيسي، المدينة"
                : "Address: Main Street, City"}
            </p>
            <p className="text-sm">
              {language === "ar"
                ? "الهاتف: 123-456-7890"
                : "Phone: 123-456-7890"}
            </p>
            <p className="text-sm">
              {language === "ar"
                ? "البريد الإلكتروني: info@example.com"
                : "Email: info@example.com"}
            </p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>
            &copy; {currentYear}{" "}
            {language === "ar"
              ? "اسم الشركة. جميع الحقوق محفوظة"
              : "Company Name. All rights reserved"}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
