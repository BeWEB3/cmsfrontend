import React from "react";

import HeroSectionWithVideo from "../components/HeroSectionWithVideo";
import ServiceSection from "../components/ServiceSection";
import ParticipantsSection from "../components/ParticipantsSection";
import CompetitionNetwork from "../components/CompetitionNetwork";
import NewsSection from "../components/NewsSection";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import ArticleSummary from "../components/ArticleSummary";
import CountryFlags from "../components/CountryFlags";

const HomePage = ({ language }) => {
  return (
    <>
      <HeroSectionWithVideo language={language} />
      <ServiceSection language={language} />
      <ParticipantsSection language={language} />
      <CompetitionNetwork language={language} />
      <NewsSection language={language} />
      <ContactForm language={language} />
      <ContactInfo language={language} />
      <ArticleSummary language={language} />
      <CountryFlags language={language} />
    </>
  );
};

export default HomePage;