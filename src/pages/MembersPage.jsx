import React from "react";
import HeroSectionWithImg from "../components/HeroSectionWithImg";
import CountryFlags from "../components/CountryFlags";

function MembersPage({ language }) {
  const tiltles = {
    ar: "أعضاء شبكة المنافسة العربية",
    en: "Members of the Arab Competition Network",
  };

  return (
    <div>
      <HeroSectionWithImg Title={tiltles} language={language} />
      <CountryFlags language={language} />
    </div>
  );
}

export default MembersPage;
