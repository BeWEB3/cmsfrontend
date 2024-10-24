import DOMPurify from "dompurify";
import React from "react";

function EventBackground({ language, title, description }) {
  const cleandescription = DOMPurify.sanitize(description?.[language]);

  return (
    <div className="max-w-[1293px] mx-auto py-[8rem] ">
      <div className="border-solid relative md:p-12 py-6 px-4 border-[#00567D] border-[2px] rounded-[15px] [box-shadow:0px_0px_11px_2px_#00567D40]   ">
        <h2 className="md:text-[52px] text-[32px] font-bold md:leading-[52px] leading-[32px]  text-[#00567D] mb-8">
          {language === "ar"
            ? "خلفية عن المؤتمر"
            : "Background about the event"}
        </h2>
        <h3 className="md:text-[25px] text-[18px] font-bold leading-[25px]  text-[#6A7270] mb-4">
          {title[language]}
        </h3>
        <div
          className={`bg-[#4D5C5E] w-[40%] h-[2px] mb-4 mt-2 ${
            language === "ar" && "ml-auto"
          }  `}
        />
        <div
          className="md:text-[25px] text-[18px] font-bold leading-[32.75px] text-[#024867]  "
          dangerouslySetInnerHTML={{ __html: cleandescription }}
        />
        {/* <p className="md:text-[25px] text-[20px] font-bold leading-[32.75px] text-[#024867]  ">
          The third annual conference of the Arab Competition Network, organized
          by the General Authority for Competition in the Kingdom of Saudi
          Arabia. The two-day conference will provide a platform for competition
          authorities in Member States to engage in learning from each other,
          drawing on the study of international issues and best practices shared
          between countries. This exchange will enable competition authorities
          to enhance their understanding of competition policy, enforcement
          methods and regulatory frameworks.
        </p> */}
      </div>
    </div>
  );
}

export default EventBackground;
