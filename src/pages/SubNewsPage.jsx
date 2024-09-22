import React, { useCallback, useEffect, useMemo, useState } from "react";
import HeroSectionWithImg from "../components/HeroSectionWithImg";
import { useParams } from "react-router-dom";
import ArticleSummary from "../components/ArticleSummary";
import NewsSection from "../components/NewsSection";
import { APiFunctions } from "../API/AccountApiLayer";
import { useQuery } from "react-query";
import PageLoader from "./PageLoader";

function SubNewsPage({ language }) {
  const { uid } = useParams();

  const fetchHomeData = useCallback(() => APiFunctions.GETOneNews(uid), [uid]);

  const {
    data: oneNews,
    isLoading,
    isError,
    error,
  } = useQuery(["oneNews", uid], fetchHomeData, {
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
  });

  const memoizedNews = useMemo(() => {
    if (!oneNews || !oneNews.data) return null;

    return oneNews.data;
  }, [oneNews]);

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

  const title = {
    en: "Article Title",
    ar: "عنوان المقال",
  };

  return (
    <PageLoader isLoading={isLoading} progress={progress}>
      <HeroSectionWithImg
        Title={title}
        language={language}
        newsTitle={true}
        newsObj={{ title: memoizedNews?.title, date: memoizedNews?.createdAt }}
        backgroundImg={memoizedNews?.image}
      />
      <ArticleSummary language={language} data={memoizedNews} />
      <NewsSection language={language} />
    </PageLoader>
  );
}

export default SubNewsPage;
