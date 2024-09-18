import React from "react";
import { Calendar } from "lucide-react";

const ArticleSummary = ({ language }) => {
  const translations = {
    en: {
      title: "The Article",
      content: `The General Authority for Competition is holding the third conference of the Arab Competition Network, scheduled to be held in the city of Riyadh on March 3, 2024, corresponding to Sha'aban 22, 1445 AH, in the city of Riyadh at the King Abdullah Petroleum Studies and Research Center (KAPSARC).
      
      The conference includes a series of dialogue sessions in the areas of competition and its policies and learning about the best international experiences in those fields with the participation of international experts and specialists.`,
      date: "22 Aug 2022",
    },
    ar: {
      title: "المقال",
      content: `تعقد الهيئة العامة للمنافسة المؤتمر الثالث لشبكة المنافسة العربية، المقرر عقده في مدينة الرياض في 3 مارس 2024، الموافق 22 شعبان 1445 هـ، في مدينة الرياض بمركز الملك عبد الله للدراسات والبحوث البترولية (كابسارك).

      يتضمن المؤتمر سلسلة من الجلسات الحوارية في مجالات المنافسة وسياساتها والتعرف على أفضل التجارب الدولية في تلك المجالات بمشاركة خبراء ومختصين دوليين.`,
      date: "22 أغسطس 2022",
    },
  };

  const t = translations[language] || translations.en;

  return (
    <div className="py-24 relative">
      <div className="absolute w-full bg-[white] xl:h-[120px] md:h-[90px] h-[50px] top-[-118px]  z-[2]" />

      <div className=" px-6  ">
        <h2 className=" text-[60px] font-bold leading-[66px] text-center text-[#00567D] relative w-fit mx-auto before:content-[''] before:h-[2px] before:bg-[#0069A7] before:w-[calc(100%-50%)] before:absolute before:bottom-[-2px] before:left-[50%] before:translate-x-[-50%] pb-1  mb-10">
          {t.title}
        </h2>
        <div className="bg-white rounded-[31px] [box-shadow:0_0_10px_3px_#7B7B7B40] p-6 max-w-[1339px] mx-auto">
          <div className="prose max-w-none">
            {t.content.split("\n\n").map((paragraph, index) => (
              <p
                key={index}
                className="mb-4 text-[40px] font-normal leading-[77.2px]  text-[#00567D]  "
              >
                {paragraph}
              </p>
            ))}
          </div>
          <div className="flex items-center justify-end gap-1 mt-4 ">
            <Calendar size={16} className="mr-1" />
            <span className=" text-[21px] font-normal leading-[26.04px]  text-[#00567D]  ">
              {t.date}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleSummary;
