import React from "react";
import HeroSectionWithImg from "../components/HeroSectionWithImg";
import AllNewsSection from "../components/AllNewsSection";

function NewsPage({ language }) {
  return (
    <div>
      <HeroSectionWithImg language={language} />
      <AllNewsSection language={language} />
    </div>
  );
}

export default NewsPage;
