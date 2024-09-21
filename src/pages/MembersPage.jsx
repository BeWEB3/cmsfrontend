import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useQuery } from "react-query";
import HeroSectionWithImg from "../components/HeroSectionWithImg";
import CountryFlags from "../components/CountryFlags";
import { APiFunctions } from "../API/AccountApiLayer";
import PageLoader from "./PageLoader";

function MembersPage({ language }) {
  const tiltles = {
    ar: "أعضاء شبكة المنافسة العربية",
    en: "Members of the Arab Competition Network",
  };

  const fetchHomeData = useCallback(
    () => APiFunctions.GETWithSlug("members"),
    []
  );

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

    return homedata.data;
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
      <HeroSectionWithImg Title={tiltles} language={language} />
      <CountryFlags language={language} data={memoizedSections} />
    </PageLoader>
  );
}

export default MembersPage;
