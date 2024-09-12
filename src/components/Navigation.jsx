import React from "react";

const Navigation = ({ language }) => {
  const navItems = [
    { label: language === "ar" ? "الرئيسية" : "Home", href: "#" },
    { label: language === "ar" ? "الخدمات" : "Services", href: "#services" },
    { label: language === "ar" ? "الفريق" : "Team", href: "#team" },
    { label: language === "ar" ? "عن الشركة" : "About", href: "#about" },
    { label: language === "ar" ? "اتصل بنا" : "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-gray-100">
      <div className="container mx-auto px-4">
        <ul className="flex justify-center space-x-6 rtl:space-x-reverse">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="py-4 px-2 inline-block hover:text-blue-500"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
