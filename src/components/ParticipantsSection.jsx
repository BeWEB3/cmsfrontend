import React from "react";
import participantIcon from "../pics/participantsIcon.png";
import artBoard from "../pics/Artboard.png";

const ParticipantsSection = ({ language, data }) => {
  const participants = data?.contentItems?.participants || [];
  const sectionHeading = data?.contentItems?.sectionHeading || {
    en: "Participants",
    ar: "المشاركين",
  };

  return (
    <div className="py-16 sm:pb-[18rem] pb-[6rem] relative">
      <div className="mx-auto">
        <h2 className="sm:text-[50px] text-[36px] font-bold leading-[50px] text-center mb-10 text-[#00567D]">
          {sectionHeading[language]}
        </h2>
        <div
          className={`grid lg:grid-cols-2 gap-8 px-4 max-w-[1390px] mx-auto ${
            language === "ar" ? "!text-right" : "!text-left"
          }`}
        >
          {participants.map((participant, index) => (
            <div
              key={index}
              className="bg-white [box-shadow:0_0_10px_3px_#7B7B7B40] rounded-[12px] p-6 w-full flex flex-col"
            >
              <img
                src={participant.image || participantIcon}
                alt={participant.name[language]}
                className="rounded-[6px] h-32 w-32 mb-4"
              />
              <h3 className="text-[16px] font-bold leading-[16px] text-[#00567D] mb-2">
                {participant.name[language]}
              </h3>

              <p className="text-[14px] font-normal leading-[14px] text-[#919397] mb-4">
                {participant.designation[language]}
              </p>
              <div className="w-full">
                <h4
                  className={`text-[16px] font-bold leading-[16px] text-[#00567D] mb-2 leftLineOnText ${
                    language === "ar" && "before:left-[unset]"
                  }`}
                >
                  {language === "ar"
                    ? "المؤهلات العلمية"
                    : "Academic Qualifications"}
                </h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
                  {participant.academicQualifications.map(
                    (qualification, i) => (
                      <li
                        key={i}
                        className="text-[12px] font-normal leading-[17.16px] text-[#00567D]"
                      >
                        {qualification[language]}
                      </li>
                    )
                  )}
                </ul>

                <h4
                  className={`text-[16px] font-bold leading-[16px] text-[#00567D] mb-2 leftLineOnText ${
                    language === "ar" && "before:left-[unset]"
                  }`}
                >
                  {language === "ar"
                    ? "الخبرة العملية"
                    : "Practical Experience"}
                </h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
                  {participant.practicalExperience.map((exp, i) => (
                    <li
                      key={i}
                      className="text-[12px] font-normal leading-[17.16px] text-[#00567D]"
                    >
                      {exp[language]}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute w-full bg-[#00567D] xl:h-[120px] md:h-[90px] h-[50px] bottom-[-5px] z-[2]" />
      <img
        src={artBoard}
        alt=""
        className="sm:[object-fit:unset] object-cover absolute xl:bottom-[-35px] lg:bottom-[-25px] md:bottom-[-5px] sm:bottom-[-20px] bottom-[-10px] z-[4] bg-transparent w-full xl:h-[280px] sm:h-[unset] h-[90px]"
      />
    </div>
  );
};

export default ParticipantsSection;
