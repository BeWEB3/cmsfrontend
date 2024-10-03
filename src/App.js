import React, { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./hooks/ScrollToTop.jsx";
import NotFound from "./pages/NotFoundPage.jsx";

// Lazy load the pages
const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const NewsPage = lazy(() => import("./pages/NewsPage.jsx"));
const SubNewsPage = lazy(() => import("./pages/SubNewsPage.jsx"));
const AllEvents = lazy(() => import("./pages/AllEvents.jsx"));
const Event = lazy(() => import("./pages/Event.jsx"));
const WorkShops = lazy(() => import("./pages/WorkShops.jsx"));
const ContactUsPage = lazy(() => import("./pages/ContactUsPage.jsx"));
const MembersPage = lazy(() => import("./pages/MembersPage.jsx"));
const DynamicPage = lazy(() => import("./pages/DynamicPage.jsx"));

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
      <ScrollToTop />
      <div
        className={` items-center flex flex-col min-h-screen${
          language === "ar" ? " !text-right" : " !text-left"
        }`}
      >
        <Header language={language} toggleLanguage={toggleLanguage} />

        <main className="flex-grow w-full   ">
          <Suspense fallback={<></>}>
            <Routes>
              <Route path="/" element={<HomePage language={language} />} />
              <Route path="/news" element={<NewsPage language={language} />} />
              <Route
                path="/news/:uid"
                element={<SubNewsPage language={language} />}
              />
              <Route
                path="/events"
                element={<AllEvents language={language} />}
              />
              <Route
                path="/event/:uid"
                element={<Event language={language} />}
              />
              <Route
                path="/workshops"
                element={<WorkShops language={language} />}
              />
              <Route
                path="/contactus"
                element={<ContactUsPage language={language} />}
              />
              <Route
                path="/network-presidency"
                element={<MembersPage language={language} />}
              />

              <Route
                path="page/:slug"
                element={<DynamicPage language={language} />}
              />
              <Route path="*" element={<NotFound language={language} />} />
            </Routes>
          </Suspense>
        </main>
        <Footer language={language} />
      </div>
    </Router>
  );
};

export default App;
