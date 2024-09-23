import React, { useCallback, useEffect, useMemo, useState } from "react";
import HeroSectionWithImg from "../components/HeroSectionWithImg";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";
import { APiFunctions } from "../API/AccountApiLayer";
import { useQuery } from "react-query";
import PageLoader from "./PageLoader";

function ContactUsPage({ language }) {
  const fetchHomeData = useCallback(
    () => APiFunctions.GETWithSlug("contactus"),
    []
  );

  const {
    data: contactdata,
    isLoading,
    isError,
    error,
  } = useQuery("contactdata", fetchHomeData, {
    staleTime: 5 * 60 * 1000,
    cacheTime: 10 * 60 * 1000,
  });

  const memoizedSections = useMemo(() => {
    if (!contactdata || !contactdata?.data) return null;

    return {
      heroSection: contactdata?.data?.contentSections?.find(
        (section) => section?.sectionName === "Hero Section"
      ),
      contactSection: contactdata?.data.contentSections?.find(
        (section) => section?.sectionName === "Section 1"
      ),
    };
  }, [contactdata]);

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
      />
      <ContactInfo
        language={language}
        data={memoizedSections?.contactSection}
      />
      {/* memoizedSections?.contentSections[0] */}
      <ContactForm language={language} />
    </PageLoader>
  );
}

export default ContactUsPage;
