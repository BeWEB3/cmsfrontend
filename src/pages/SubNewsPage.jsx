import React from "react";
import HeroSectionWithImg from "../components/HeroSectionWithImg";
import { useParams } from "react-router-dom";
import ArticleSummary from "../components/ArticleSummary";
import NewsSection from "../components/NewsSection";

function SubNewsPage({ language }) {
  const { name } = useParams();

  const title = {
    en: "Article Title",
    ar: "Página de noticias sub",
  };
  return (
    <div>
      <HeroSectionWithImg Title={title} language={language} newsTitle={true} />
      <ArticleSummary language={language} />
      <NewsSection language={language} />
    </div>
  );
}

export default SubNewsPage;
