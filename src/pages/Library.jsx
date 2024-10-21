import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useQuery } from "react-query";
import HeroSectionWithImg from "../components/HeroSectionWithImg";
import { APiFunctions } from "../API/AccountApiLayer";
import PageLoader from "./PageLoader";
import LibraryContent from "../components/LibraryContent";

function Library({ language }) {
  const fetchLibraryData = useCallback(() => APiFunctions.GetLibraryData(), []);

  const {
    data: librarydata,
    isLoading,
    isError,
    error,
  } = useQuery("librarydata", fetchLibraryData, {
    staleTime: 10,
    cacheTime: 10,
  });

  const memoizedSections = useMemo(() => {
    if (!librarydata || !librarydata?.data) return null;

    return librarydata?.data;
  }, [librarydata]);

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

  const title = {
    ar: "مكتبة",
    en: "Library",
  };

  if (isError) return <div>Error: {error.message}</div>;

  return (
    <PageLoader isLoading={isLoading} progress={progress}>
      <HeroSectionWithImg Title={title} language={language} />
      <LibraryContent
        language={language}
        data={!memoizedSections ? {} : memoizedSections}
      />
    </PageLoader>
  );
}

export default Library;
