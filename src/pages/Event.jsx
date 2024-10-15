import React, { useCallback, useEffect, useMemo, useState } from "react";
import HeroSectionWithImg from "../components/HeroSectionWithImg";
import { useParams } from "react-router-dom";
import { APiFunctions } from "../API/AccountApiLayer";
import { useQuery } from "react-query";
import PageLoader from "./PageLoader";
import EventDescription from "../components/EventDescription";
import EventObjectives from "../components/EventObjectives";
import EventBackground from "../components/EventBackground";
import EventParticipants from "../components/EventParticipants";
import EventAttachments from "../components/EventAttachments";
import EventSnippets from "../components/EventSnippets";
import EventForm from "../components/EventForm";
import EventSchedule from "../components/EventSchdule";

function Event({ language }) {
  const { uid } = useParams();

  const fetchOneEvent = useCallback(
    () => APiFunctions.GETMeetingbyUid(uid),
    [uid]
  );

  const {
    data: oneEvent,
    isLoading,
    isError,
    error,
  } = useQuery(["oneEvent", uid], fetchOneEvent, {
    staleTime: 10,
    cacheTime: 10,
  });

  const memoizedEvent = useMemo(() => {
    if (!oneEvent || !oneEvent?.data) return null;

    return oneEvent?.data;
  }, [oneEvent]);

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
        Title={memoizedEvent?.heroSection?.title}
        language={language}
        newsTitle={true}
        newsObj={{
          title: memoizedEvent?.heroSection?.title,
          date: memoizedEvent?.heroSection?.eventDate,
        }}
        backgroundImg={memoizedEvent?.heroSection?.heroImage}
      />
      {memoizedEvent?.gallerySection && (
        <EventDescription
          language={language}
          title={memoizedEvent?.gallerySection?.title}
          description={memoizedEvent?.gallerySection?.description}
          images={memoizedEvent?.gallerySection?.galleryImages}
          date={memoizedEvent?.gallerySection?.eventDate}
        />
      )}
      {memoizedEvent?.objectives && memoizedEvent?.objectives?.length > 0 && (
        <EventObjectives
          language={language}
          objectives={memoizedEvent?.objectives}
        />
      )}
      {memoizedEvent?.eventBackground && (
        <EventBackground
          language={language}
          title={memoizedEvent?.eventBackground?.title}
          description={memoizedEvent?.eventBackground?.description}
        />
      )}
      {memoizedEvent?.eventSchedule &&
        memoizedEvent?.eventSchedule?.length > 0 && (
          <EventSchedule
            language={language}
            schedule={memoizedEvent?.eventSchedule}
          />
        )}

      {memoizedEvent?.participants && (
        <EventParticipants
          language={language}
          participants={memoizedEvent?.participants?.participantDetails}
        />
      )}
      {memoizedEvent?.attachments &&
        memoizedEvent?.attachments?.isAttachmentsVisible && (
          <EventAttachments
            language={language}
            files={memoizedEvent?.attachments?.files}
          />
        )}

      {memoizedEvent?.snippets &&
        memoizedEvent?.snippets?.isSnippetsVisible && (
          <EventSnippets
            language={language}
            snippets={memoizedEvent?.snippets?.snippetFiles}
          />
        )}

      {memoizedEvent?.registrationForm &&
        memoizedEvent?.registrationForm?.isRegistrationFormVisible && (
          <EventForm language={language} eventuid={uid} />
        )}
    </PageLoader>
  );
}

export default Event;
