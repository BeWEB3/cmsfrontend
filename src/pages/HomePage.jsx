import React, { useEffect, useCallback, useMemo, useState } from "react";
import { useQuery } from "react-query";
import HeroSectionWithVideo from "../components/HeroSectionWithVideo";
import ServiceSection from "../components/ServiceSection";
import ParticipantsSection from "../components/ParticipantsSection";
import CompetitionNetwork from "../components/CompetitionNetwork";
import NewsSection from "../components/NewsSection";
// import LoadingSpinner from "../components/LoadingSpinner";
import { APiFunctions } from "../API/AccountApiLayer";
import PageLoader from "./PageLoader";

const HomePage = ({ language }) => {
  const fetchHomeData = useCallback(() => APiFunctions.GETWithSlug("home"), []);

  const {
    data: homeData,
    isLoading,
    isError,
    error,
  } = useQuery("homeData", fetchHomeData, {
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
  });

  const memoizedSections = useMemo(() => {
    if (!homeData || !homeData.contentSections) return null;

    return {
      objectives: homeData.contentSections.find(
        (section) => section.sectionName === "Objectives"
      ),
      participants: homeData.contentSections.find(
        (section) => section.sectionName === "Participants"
      ),
    };
  }, [homeData]);

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

  return (
    <PageLoader isLoading={isLoading} progress={progress}>
      <HeroSectionWithVideo language={language} />
      <div dir={language === "ar" ? "rtl" : "ltr"}>
        <ServiceSection
          language={language}
          data={memoizedSections?.objectives}
        />

        <ParticipantsSection
          language={language}
          data={memoizedSections?.participants}
        />

        <CompetitionNetwork language={language} />

        <NewsSection language={language} />
      </div>
    </PageLoader>
  );
};

export default React.memo(HomePage);
