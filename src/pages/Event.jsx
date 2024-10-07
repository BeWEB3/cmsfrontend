import React, { useCallback, useEffect, useMemo, useState } from "react";
import HeroSectionWithImg from "../components/HeroSectionWithImg";
import { useParams } from "react-router-dom";
import { APiFunctions } from "../API/AccountApiLayer";
import { useQuery } from "react-query";
import PageLoader from "./PageLoader";
import EventDescription from "../components/EventDescription";
import EventObjectives from "../components/EventObjectives";
import EventBackground from "../components/EventBackground";
import EventSchdule from "../components/EventSchdule";
import EventParticipants from "../components/EventParticipants";
import EventAttachments from "../components/EventAttachments";
import EventSnippets from "../components/EventSnippets";
import EventForm from "../components/EventForm";

function Event({ language }) {
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

  // if (isError) return <div>Error: {error.message}</div>;

  const title = {
    en: "Article Title",
    ar: "عنوان المقال",
  };

  return (
    <>
      {/* <PageLoader isLoading={isLoading} progress={progress}> */}
      <HeroSectionWithImg
        Title={title}
        language={language}
        newsTitle={true}
        newsObj={{ title: memoizedNews?.title, date: memoizedNews?.createdAt }}
        backgroundImg={memoizedNews?.image}
      />
      <EventDescription language={language} />
      <EventObjectives language={language} />
      <EventBackground language={language} />
      <EventSchdule language={language} />
      <EventParticipants language={language} />
      <EventAttachments language={language} />
      <EventSnippets language={language} />
      <EventForm language={language} />
      {/* </PageLoader> */}
    </>
  );
}

export default Event;
