import React from "react";
import { LightbulbIcon, WrenchIcon, UsersIcon, icons } from "lucide-react";

// const objectives = [
//   {
//     id: "01",
//     icon: LightbulbIcon,
//     title: "Knowledge exchange and capacity building",
//   },
//   {
//     id: "02",
//     icon: WrenchIcon,
//     title: "Addressing emerging challenges in competition policy",
//   },
//   {
//     id: "03",
//     icon: UsersIcon,
//     title: "Enhancing cooperation and synergy among stakeholders",
//   },
// ];

const ObjectiveCard = ({ id, Icon, title }) => (
  <div className="bg-white rounded-[12px] [box-shadow:0px_0px_11px_2px_#7B7B7B40] py-8 px-4 relative">
    <div className="absolute top-3 right-6 text-[#0069A7] text-[25px] font-bold leading-[25px] ">
      0{id}
    </div>
    {/* <Icon className="text-[#00567D] w-12 h-12 mb-4" /> */}
    <img src={Icon} alt="" />
    <div className="bg-[#0069A7] w-[40%] h-[2px] mb-6" />
    <div
      className="text-[#0069A7] text-[21px] font-bold leading-[21px] max-w-[360px]"
      dangerouslySetInnerHTML={{ __html: title }}
    />
    {/* <p className="text-[#0069A7] text-[21px] font-bold leading-[21px] max-w-[360px]  ">
      {title}
    </p> */}
  </div>
);

function EventObjectives({ language, objectives }) {
  return (
    <div>
      <div className="max-w-[1300px] mx-auto md:p-8 p-4  ">
        <h2 className="text-[39px] font-bold leading-[48.36px] text-center text-[#00567D] mb-8">
          Objectives
          <div className="w-16 h-1 bg-[#00567D] mx-auto mt-2"></div>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
          {objectives.map((obj, index) => (
            <ObjectiveCard
              key={obj.id}
              id={index + 1}
              Icon={obj?.imagePath}
              title={obj?.description[language]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default EventObjectives;
