import React from "react";
import HeroSectionWithImg from "../components/HeroSectionWithImg";
import AllNewsSection from "../components/AllNewsSection";

function NewsPage({ language }) {
  return (
    <div>
      <HeroSectionWithImg
        language={language}
        Title={{ ar: "أخبار المنافسة", en: "Competition news" }}
        newsTitle={false}
      />
      <AllNewsSection language={language} ShowallNewsLink={false} />
    </div>
  );
}

export default NewsPage;
