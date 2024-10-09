import React, { useCallback, useEffect, useMemo, useState } from "react";
import HeroSectionWithImg from "../components/HeroSectionWithImg";
import AllNewsSection from "../components/AllNewsSection";
import { APiFunctions } from "../API/AccountApiLayer";
import { useQuery } from "react-query";
import PageLoader from "./PageLoader";
import WorkShopSection from "../components/WorkShopSection";

function WorkShops({ language }) {
  const fetchNewsData = useCallback(() => APiFunctions.GETAllNews(), []);

  const {
    data: newsData,
    isLoading,
    isError,
    error,
  } = useQuery("newsData", fetchNewsData, {
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
  });

  const memoizedSections = useMemo(() => {
    if (!newsData || !newsData?.data) return null;

    return {
      AllnewsData: newsData.data,
    };
  }, [newsData]);

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
        language={language}
        Title={{ ar: "ورش العمل", en: "Workshops" }}
        newsTitle={false}
      />
      {memoizedSections && memoizedSections.AllnewsData ? (
        <div dir={language === "ar" ? "rtl" : "ltr"}>
          <WorkShopSection
            language={language}
            ShowallNewsLink={false}
            AllWorkShops={memoizedSections.AllnewsData}
          />
        </div>
      ) : (
        <div className="flex justify-center items-center h-64">
          <p className="text-xl text-gray-500">
            No workshops available at the moment
          </p>
        </div>
      )}
    </PageLoader>
  );
}

export default React.memo(WorkShops);
