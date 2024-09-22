import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useParams } from "react-router-dom";
// import ServiceSection from "../components/ServiceSection";
// import TeamSection from "../components/TeamSection";
import AboutSection from "../components/AboutSection";
// import HeroSectionWithVideo from "../components/HeroSectionWithVideo";
import HeroSectionWithImg from "../components/HeroSectionWithImg";
import { APiFunctions } from "../API/AccountApiLayer";
import { useQuery } from "react-query";
import PageLoader from "./PageLoader";
import TempleteContentSection from "../components/TempleteContentSection";

const DynamicPage = ({ language, toggleLanguage }) => {
  const { slug } = useParams();

  const fetchPageData = useCallback(
    () => APiFunctions.GETWithSlug(`${slug}`),
    [slug]
  );

  const {
    data: pageData,
    isLoading,
    isError,
    error,
  } = useQuery("pageData", fetchPageData, {
    staleTime: 5 * 60 * 1000,
    cacheTime: 10 * 60 * 1000,
  });

  const memoizedSections = useMemo(() => {
    if (!pageData || !pageData.data) return null;
    return pageData.data?.contentSections;
  }, [pageData]);

  // console.log(memoizedSections);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
          return 100;
        }
        return Math.min(oldProgress + 10, 100);
      });
    }, 500);

    return () => clearInterval(timer);
  }, []);

  if (isError) return <div>Error: {error.message}</div>;

  const renderSection = (section) => {
    switch (section?.sectionName) {
      case "Hero Section":
        return (
          <HeroSectionWithImg
            key={section?.sectionID}
            Title={
              section?.contentItems.find(
                (item) => item?.contentType === "Headline"
              )?.content
            }
            backgroundImg={
              section?.contentItems.find(
                (item) => item?.contentType === "Background Image"
              )?.url
            }
            language={language}
          />
        );
      case "Paragraph":
        return (
          <TempleteContentSection
            key={section?.sectionID}
            data={section}
            language={language}
          />
        );
      // Add more cases for other section types as needed
      default:
        return null;
    }
  };

  return (
    <PageLoader isLoading={isLoading} progress={progress}>
      {memoizedSections && memoizedSections?.map(renderSection)}
    </PageLoader>
  );
};

export default DynamicPage;
