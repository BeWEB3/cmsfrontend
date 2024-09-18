import React from "react";
import HeroSectionWithImg from "../components/HeroSectionWithImg";
import TempleteContentSection from "../components/TempleteContentSection";

function TemplatePage({ language }) {
  return (
    <div>
      <HeroSectionWithImg Title={{}} language={language} />
      <TempleteContentSection language={language} />
    </div>
  );
}

export default TemplatePage;
