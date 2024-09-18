import React from "react";
import HeroSectionWithImg from "../components/HeroSectionWithImg";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";

function ContactUsPage({ language }) {
  const title = {
    ar: "اتصل بنا",
    en: "Contact Us",
  };
  return (
    <div>
      <HeroSectionWithImg language={language} Title={title} />
      <ContactInfo language={language} />
      <ContactForm language={language} />
    </div>
  );
}

export default ContactUsPage;
