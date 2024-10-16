import React, { useCallback, useEffect, useMemo, useState } from "react";
import HeroSectionWithImg from "../components/HeroSectionWithImg";
import { APiFunctions } from "../API/AccountApiLayer";
import { useQuery } from "react-query";
import PageLoader from "./PageLoader";
import AllEventsSection from "../components/AllEventsSection";

function AllEvents({ language }) {
  const fetchNewsData = useCallback(() => APiFunctions.GETAllMeetings(), []);

  const {
    data: eventData,
    isLoading,
    isError,
    error,
  } = useQuery("eventData", fetchNewsData, {
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
  });

  const memoizedSections = useMemo(() => {
    if (!eventData || !eventData?.data) return null;

    return {
      AllEventData: eventData.data,
    };
  }, [eventData]);

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
        Title={{ ar: "الأحداث والمؤتمرات", en: "Events & Meetings" }}
        newsTitle={false}
      />
      {memoizedSections && memoizedSections.AllEventData ? (
        <div dir={language === "ar" ? "rtl" : "ltr"}>
          <AllEventsSection
            language={language}
            ShowallNewsLink={false}
            AllEvent={memoizedSections.AllEventData}
          />
        </div>
      ) : (
        <div className="flex justify-center items-center h-64">
          <p className="text-xl text-gray-500">
            No news available at the moment.
          </p>
        </div>
      )}
    </PageLoader>
  );
}

export default React.memo(AllEvents);
