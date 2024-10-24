import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useQuery } from "react-query";
import HeroSectionWithVideo from "../components/HeroSectionWithVideo";
// import ServiceSection from "../components/ServiceSection";
// import ParticipantsSection from "../components/ParticipantsSection";
import CompetitionNetwork from "../components/CompetitionNetwork";
import NewsSection from "../components/NewsSection";
import PageLoader from "./PageLoader";
import { APiFunctions } from "../API/AccountApiLayer";
import HomeFlags from "../components/HomeFlags";
import HeroSectionWithImg from "../components/HeroSectionWithImg";

const HomePage = ({ language }) => {
  const fetchHomeData = useCallback(() => APiFunctions.GETHomeData(), []);

  const {
    data: homedata,
    isLoading,
    isError,
    error,
  } = useQuery("homedata", fetchHomeData, {
    staleTime: 5 * 60 * 1000,
    cacheTime: 10 * 60 * 1000,
  });

  const memoizedSections = useMemo(() => {
    if (!homedata || !homedata.data) return null;

    return {
      heroSection: homedata.data?.section1,
      FlagsData: homedata.data?.section2,
      TableData: homedata.data?.section3,
      competitionNet: homedata.data?.section4,
    };
  }, [homedata]);

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
      {memoizedSections?.heroSection?.contentItems?.heroImage ? (
        <>
          <HeroSectionWithImg
            language={language}
            backgroundImg={
              memoizedSections?.heroSection?.contentItems?.heroImage
            }
          />
        </>
      ) : (
        <>
          <HeroSectionWithVideo
            language={language}
            HeroVideoData={memoizedSections?.heroSection}
          />
        </>
      )}

      <div dir={language === "ar" ? "rtl" : "ltr"}>
        <HomeFlags
          language={language}
          data={memoizedSections?.FlagsData?.contentItems?.flagsImage[language]}
          title={
            memoizedSections?.FlagsData?.contentItems?.sectionHeading[language]
          }
        />
        <HomeFlags
          language={language}
          data={memoizedSections?.TableData?.contentItems?.tableImage[language]}
          title={false}
        />
        {/* 
        <ServiceSection
          language={language}
          data={memoizedSections?.FlagsData}
        /> */}

        {/* <ParticipantsSection
          language={language}
          data={memoizedSections?.participants}
        /> */}

        <CompetitionNetwork
          language={language}
          data={memoizedSections?.competitionNet}
        />

        <NewsSection language={language} />
      </div>
    </PageLoader>
  );
};

export default React.memo(HomePage);
