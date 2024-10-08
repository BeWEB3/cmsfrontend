import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useQuery } from "react-query";
import HeroSectionWithImg from "../components/HeroSectionWithImg";
import CountryFlags from "../components/CountryFlags";
import { APiFunctions } from "../API/AccountApiLayer";
import PageLoader from "./PageLoader";
import WorkShopSection from "../components/WorkShopSection";

function MembersPage({ language }) {
  const fetchHomeData = useCallback(
    () => APiFunctions.GETWithSlug("networkpresidency"),
    []
  );

  const {
    data: membersdata,
    isLoading,
    isError,
    error,
  } = useQuery("membersdata", fetchHomeData, {
    staleTime: 5 * 60 * 1000,
    cacheTime: 10 * 60 * 1000,
  });

  const memoizedSections = useMemo(() => {
    if (!membersdata || !membersdata?.data) return null;

    return {
      heroSection: membersdata?.data?.contentSections?.find(
        (section) => section?.sectionName === "Hero Section"
      ),
      flagsSection: membersdata?.data.contentSections?.find(
        (section) => section?.sectionName === "Section 2"
      ),
    };
  }, [membersdata]);

  // console.log(memoizedSections?.flagsSection);

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
      <HeroSectionWithImg
        Title={
          memoizedSections?.heroSection?.contentItems?.find(
            (item) => item?.contentType === "Headline"
          )?.content
        }
        backgroundImg={
          memoizedSections?.heroSection?.contentItems?.find(
            (item) => item?.contentType === "Background Image"
          )?.url
        }
        language={language}
      />
      {memoizedSections?.flagsSection && (
        <CountryFlags
          language={language}
          data={memoizedSections?.flagsSection}
        />
      )}
      <WorkShopSection
        language={language}
        ShowallNewsLink={false}
        AllWorkShops={memoizedSections.AllnewsData}
      />
    </PageLoader>
  );
}

export default MembersPage;
