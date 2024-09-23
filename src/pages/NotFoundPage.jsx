import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = ({ language }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const content = {
    en: {
      title: "Oops! Page Not Found",
      description:
        "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.",
      homeButton: "Go to Homepage",
      backButton: "Go Back",
      searchPlaceholder: "Search our site...",
      searchButton: "Search",
    },
    ar: {
      title: "عذراً! الصفحة غير موجودة",
      description:
        "الصفحة التي تبحث عنها قد تكون أزيلت أو تغير اسمها أو غير متاحة مؤقتاً.",
      homeButton: "الذهاب إلى الصفحة الرئيسية",
      backButton: "العودة",
      searchPlaceholder: "ابحث في موقعنا...",
      searchButton: "بحث",
    },
  };

  return (
    <div className="min-h-screen bg-[#00000088] flex flex-col pt-16">
      {/* Assume Header component is rendered here */}
      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 text-center">
          <div className="transition-opacity duration-500 ease-in-out opacity-0 transform translate-y-4 animate-fadeIn">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              {content[language].title}
            </h2>
            <p className="mt-2 text-center text-sm text-gray-800">
              {content[language].description}
            </p>
          </div>

          <div className="flex justify-center">
            <div className="w-32 h-32 border-8 border-gray-900 rounded-full flex items-center justify-center text-gray-900 text-5xl font-bold animate-spin-slow">
              404
            </div>
          </div>

          <div className="mt-8 space-y-6">
            <div className="transition-opacity duration-500 ease-in-out delay-300 opacity-0 animate-fadeIn">
              <Link
                to="/"
                className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#00567D] hover:bg-[#00557dd0] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00567D] transition-colors duration-300"
              >
                <Home className="mr-2" size={16} />
                {content[language].homeButton}
              </Link>
            </div>

            <div className="transition-opacity duration-500 ease-in-out delay-500 opacity-0 animate-fadeIn">
              <button
                onClick={() => window.history.back()}
                className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-[#00567D] bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2  transition-colors duration-300"
              >
                <ArrowLeft className="mr-2" size={16} />
                {content[language].backButton}
              </button>
            </div>
          </div>

          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 transition-opacity duration-1000 ease-in-out animate-fadeOut">
              <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
            </div>
          )}
        </div>
      </main>
      {/* Assume Footer component is rendered here */}
    </div>
  );
};

export default NotFound;
