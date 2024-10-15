import React from "react";
// import { LightbulbIcon, WrenchIcon, UsersIcon, icons } from "lucide-react";

const ObjectiveCard = ({ id, Icon, title, language }) => (
  <div className="bg-white rounded-[12px] [box-shadow:0px_0px_11px_2px_#7B7B7B40] py-8 px-4 relative">
    <div
      className={`absolute top-3 right-6 text-[#0069A7] text-[25px] font-bold leading-[25px] ${
        language === "ar" && " left-6 right-[unset] "
      }  `}
    >
      0{id}
    </div>
    {/* <Icon className="text-[#00567D] w-12 h-12 mb-4" /> */}
    <img src={Icon} alt="" className=" pt-4 " />
    <div className="bg-[#0069A7] w-[40%] h-[2px] mb-4 mt-4 " />
    <div
      className="text-[#0069A7] md:text-[21px] text-[17px] font-bold leading-[21px] max-w-[360px]"
      dangerouslySetInnerHTML={{ __html: title }}
    />
    {/* <p className="text-[#0069A7] text-[21px] font-bold leading-[21px] max-w-[360px]  ">
      {title}
    </p> */}
  </div>
);

function EventObjectives({ language, objectives }) {
  return (
    <>
      <div className="max-w-[1300px] mx-auto md:p-8 p-4  ">
        <h2 className="md:text-[39px] text-[26px] font-bold leading-[48.36px] text-center text-[#00567D] mb-8">
          {language === "ar" ? "الأهداف" : "Objectives"}
          <div className="w-16 h-1 bg-[#00567D] mx-auto md:mt-2"></div>
        </h2>
        <div
          className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6"
          dir={language === "ar" ? "rtl" : "ltr"}
        >
          {objectives.map((obj, index) => (
            <ObjectiveCard
              key={index}
              id={index + 1}
              Icon={obj?.imagePath}
              title={obj?.description[language]}
              language={language}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default EventObjectives;
