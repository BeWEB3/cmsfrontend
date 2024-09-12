import React from "react";

import HeroSectionWithVideo from "../components/HeroSectionWithVideo";
import ServiceSection from "../components/ServiceSection";
import ParticipantsSection from "../components/ParticipantsSection";

const HomePage = ({ language }) => {
  return (
    <>
      <HeroSectionWithVideo language={language} />
      <ServiceSection language={language} />
      <ParticipantsSection language={language} />
    </>
  );
};

export default HomePage;
