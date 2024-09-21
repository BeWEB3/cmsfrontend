import React, { useCallback, useEffect, useMemo, useState } from "react";
import HeroSectionWithImg from "../components/HeroSectionWithImg";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";
import { APiFunctions } from "../API/AccountApiLayer";
import { useQuery } from "react-query";
import PageLoader from "./PageLoader";

function ContactUsPage({ language }) {
  const title = {
    ar: "اتصل بنا",
    en: "Contact Us",
  };

  const fetchHomeData = useCallback(
    () => APiFunctions.GETWithSlug("contactus"),
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
      <HeroSectionWithImg language={language} Title={title} />
      <ContactInfo
        language={language}
        data={memoizedSections?.contentSections[0]}
      />
      <ContactForm language={language} />
    </PageLoader>
  );
}

export default ContactUsPage;
