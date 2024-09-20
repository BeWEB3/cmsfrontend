import React from "react";
import artBoard from "../pics/Artboard.png";

const CompetitionNetwork = ({ language, data }) => {
  const content = data?.section3?.contentItems;

  return (
    <div className="relative bg-[#00567D] sm:py-20 py-6 xl:pb-[8rem] lg:mb-[10rem] mb-[5rem]">
      <div className="mx-auto px-4 flex justify-center gap-8 sm:mb-24 mb-8">
        <div className="bg-[#E2ECF0] text-[#00567D] sm:p-6 p-4 rounded-md shadow-lg w-full max-w-[1128px]">
          <h2
            className={`sm:text-[36px] text-[20px] font-bold leading-[36px] text-[#0069A7] leftLineOnText mb-4 ${
              language === "ar"
                ? "before:left-[unset] before:right-0 text-right"
                : ""
            }`}
          >
            {content?.sectionHeading[language]}
          </h2>
          <div
            className={`text-lg leading-relaxed ${
              language === "ar" ? "text-right" : "text-left"
            }`}
          >
            <ol className="list-decimal list-inside mt-4 [&>li]:my-4 [&>li]:sm:text-[20px] [&>li]:text-[16px] [&>li]:font-normal [&>li]:sm:leading-[26.2px] [&>li]:leading-[22px] text-[#0069A7]">
              {content?.points?.map((point, index) => (
                <li key={index}>{point[language]}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      <img
        src={artBoard}
        alt=""
        className="sm:[object-fit:unset] object-cover absolute xl:bottom-[-135px] lg:bottom-[-115px] md:bottom-[-90px] sm:bottom-[-70px] bottom-[-55px] z-[4] bg-transparent w-full xl:h-[280px] sm:h-[unset] h-[90px]"
      />
    </div>
  );
};

export default CompetitionNetwork;
