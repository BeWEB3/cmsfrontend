import React from "react";

import HeroSectionWithVideo from "../components/HeroSectionWithVideo";
import ServiceSection from "../components/ServiceSection";
import ParticipantsSection from "../components/ParticipantsSection";
import CompetitionNetwork from "../components/CompetitionNetwork";
import NewsSection from "../components/NewsSection";

const HomePage = ({ language }) => {
  return (
    <>
      <HeroSectionWithVideo language={language} />
      <ServiceSection language={language} />
      <ParticipantsSection language={language} />
      <CompetitionNetwork language={language} />
      <NewsSection language={language} />
    </>
  );
};

export default HomePage;
