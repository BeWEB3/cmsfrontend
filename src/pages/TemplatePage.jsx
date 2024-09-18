import React from "react";
import HeroSectionWithImg from "../components/HeroSectionWithImg";
import TempleteContentSection from "../components/TempleteContentSection";

function TemplatePage({ language }) {
  const title = {
    en: "Template Page",
    ar: "صفحة القالب",
  };

  return (
    <div>
      <HeroSectionWithImg Title={title} language={language} />
      <TempleteContentSection language={language} />
    </div>
  );
}

export default TemplatePage;
