import React from "react";

const AboutSection = ({ language }) => {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
            <img
              src="/about-image.jpg"
              alt="About Our Company"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === "ar" ? "عن الشركة" : "About Our Company"}
            </h2>
            <p className="text-lg mb-6 leading-relaxed">
              {language === "ar"
                ? "نحن شركة تكنولوجيا رائدة تأسست في عام 2005. مهمتنا هي تمكين الشركات من خلال الحلول التكنولوجية المبتكرة. نحن نفخر بفريقنا من الخبراء المتفانين وسجلنا الحافل في تقديم مشاريع ناجحة لعملائنا."
                : "We are a leading technology company founded in 2005. Our mission is to empower businesses through innovative technological solutions. We take pride in our team of dedicated experts and our track record of delivering successful projects for our clients."}
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-blue-700 transition duration-300">
              {language === "ar" ? "اقرأ المزيد" : "Read More"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
