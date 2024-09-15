import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ServiceSection from "../components/ServiceSection";
import TeamSection from "../components/TeamSection";
import AboutSection from "../components/AboutSection";
import HeroSectionWithVideo from "../components/HeroSectionWithVideo";
import HeroSectionWithImg from "../components/HeroSectionWithImg";

const DynamicPage = ({ language, toggleLanguage }) => {
  const { slug } = useParams();
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/pages/${slug}`);
        setPageData(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch page data");
        setLoading(false);
      }
    };

    fetchPageData();
  }, [slug]);

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error)
    return <div className="text-center py-8 text-red-500">{error}</div>;
  if (!pageData) return <div className="text-center py-8">Page not found</div>;

  const renderComponent = (component) => {
    switch (component.type) {
      case "heroimg":
        return (
          <HeroSectionWithImg
            key={component.id}
            {...component.data}
            language={language}
          />
        );
      case "herovideo":
        return (
          <HeroSectionWithVideo
            key={component.id}
            {...component.data}
            language={language}
          />
        );
      case "services":
        return (
          <ServiceSection
            key={component.id}
            {...component.data}
            language={language}
          />
        );
      case "team":
        return (
          <TeamSection
            key={component.id}
            {...component.data}
            language={language}
          />
        );
      case "about":
        return (
          <AboutSection
            key={component.id}
            {...component.data}
            language={language}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center py-8">{pageData.title}</h1>
      {pageData.components.map(renderComponent)}
    </div>
  );
};

export default DynamicPage;
