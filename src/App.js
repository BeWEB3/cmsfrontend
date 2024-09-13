import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage.jsx";
import DynamicPage from "./pages/DynamicPage";

const App = () => {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem("language");
    return savedLanguage || "ar";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "ar" ? "en" : "ar"));
  };

  return (
    <Router>
      <div
        className={` items-center flex flex-col min-h-screen${
          language === "ar" ? " !text-right" : " !text-left"
        }`}
      >
        <Header language={language} toggleLanguage={toggleLanguage} />
        <main className="flex-grow   ">
          <Routes>
            <Route path="/" element={<HomePage language={language} />} />
            <Route
              path="/:slug"
              element={
                <DynamicPage
                  language={language}
                  toggleLanguage={toggleLanguage}
                />
              }
            />
          </Routes>
        </main>
        <Footer language={language} />
      </div>
    </Router>
  );
};

export default App;
