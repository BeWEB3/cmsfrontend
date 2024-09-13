import React from "react";

import participantIcon from "../pics/participantsIcon.png";
import artBoard from "../pics/Artboard.png";

const ParticipantsSection = ({ language }) => {
  const participants = {
    en: [
      {
        name: "His Excellency Dr. Ahmed bin Abdulkarim Al-Khulafi",
        title:
          "Chairman of the Board of Directors of the General Authority for Competition",
        image: participantIcon,
        qualifications: [
          "Doctorate in Economics: Colorado State University (USA) 2000 AD",
          "Master in Business Administration: Colorado State University (USA) 2000",
          "Master in Economics: University of Portland (USA) 1998",
          "Bachelor of Law: King Saud University, 1987 AD",
        ],
        experience: [
          "Advisor to the Royal Court with the rank of Minister and Chairman of the Board of Directors of the General Authority for Competition from 2021-2026.",
          "Deputy Governor for Research and International Affairs at the Saudi Monetary Agency from 2013-2016.",
          "Executive Director of the Kingdom’s Office at the International Monetary Fund from 2011-2013.",
        ],
        memberships: [
          "Member of the Board of Directors of the Saudi Fund for Development from 2020-2011 AD.",
          "Member of the Board of Directors of the Advisory Board of the Saudi Tourism Information and Research Center 'MAS'.",
          "Affiliated with the Ministry of Tourism from 2008-2010 AD.",
          "Member of the Balance of Payments Committee at the International Monetary Fund from 2005-2008.",
        ],
      },
    ],
    ar: [
      {
        name: "معالي الدكتور أحمد بن عبد الكريم الخليفي",
        title: "رئيس مجلس إدارة الهيئة العامة للمنافسة",
        image: participantIcon,
        qualifications: [
          "دكتوراه في الاقتصاد: جامعة ولاية كولورادو (الولايات المتحدة الأمريكية) 2000 م",
          "ماجستير في إدارة الأعمال: جامعة ولاية كولورادو (الولايات المتحدة الأمريكية) 2000",
          "ماجستير في الاقتصاد: جامعة بورتلاند (الولايات المتحدة الأمريكية) 1998",
          "بكالوريوس في القانون: جامعة الملك سعود، 1987 م",
        ],
        experience: [
          "مستشار في الديوان الملكي برتبة وزير ورئيس مجلس إدارة الهيئة العامة للمنافسة من 2021 إلى 2026.",
          "نائب محافظ البحوث والشؤون الدولية في مؤسسة النقد العربي السعودي من 2013 إلى 2016.",
          "المدير التنفيذي لمكتب المملكة العربية السعودية في صندوق النقد الدولي من 2011 إلى 2013.",
        ],
        memberships: [
          "عضو مجلس إدارة صندوق التنمية السعودي من 2020 إلى 2011 م.",
          "عضو مجلس إدارة المجلس الاستشاري لمركز المعلومات والبحوث السياحية 'ماس'.",
          "تابع لوزارة السياحة من 2008 إلى 2010 م.",
          "عضو لجنة ميزان المدفوعات في صندوق النقد الدولي من 2005 إلى 2008.",
        ],
      },
    ],
  };

  const currentParticipants = participants[language] || participants["en"];

  return (
    <div className=" py-16 pb-[18rem]  relative">
      <div className="container mx-auto">
        <h2 className="text-[50px] font-bold leading-[50px] text-center mb-10 text-[#00567D]  ">
          {language === "ar" ? "المشاركين" : "Participants"}
        </h2>
        <div
          className={`flex justify-center flex-wrap gap-8 ${
            language === "ar" ? "!text-right" : "!text-left"
          }`}
        >
          {currentParticipants.map((participant, index) => (
            <div
              key={index}
              className="bg-white [box-shadow:0_0_10px_3px_#7B7B7B40] rounded-[12px] p-6 w-full max-w-[100%] md:w-[682px] flex flex-col "
            >
              <img
                src={participant.image}
                alt={participant.name}
                className="rounded-[6px] h-32 w-32 mb-4"
              />
              <h3 className="text-[16px] font-bold leading-[16px]  text-[#00567D]  mb-2">
                {participant.name}
              </h3>
              <p className="text-[14px] font-normal leading-[14px]  text-[#919397]  mb-4">
                {participant.title}
              </p>

              <div className=" w-full">
                <h4 className="text-[16px] font-bold leading-[16px]  text-[#00567D]  mb-2  leftLineOnText  ">
                  Academic Qualifications
                </h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
                  {participant.qualifications.map((qualification, i) => (
                    <li
                      key={i}
                      className="text-[12px] font-normal leading-[17.16px]  text-[#00567D]   "
                    >
                      {qualification}
                    </li>
                  ))}
                </ul>

                <h4 className="text-[16px] font-bold leading-[16px]  text-[#00567D]  mb-2 leftLineOnText">
                  Practical Experience
                </h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
                  {participant.experience.map((exp, i) => (
                    <li
                      key={i}
                      className="text-[12px] font-normal leading-[17.16px]  text-[#00567D]   "
                    >
                      {exp}
                    </li>
                  ))}
                </ul>

                <h4 className="text-[16px] font-bold leading-[16px]  text-[#00567D]  mb-2 leftLineOnText">
                  Memberships
                </h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {participant.memberships.map((membership, i) => (
                    <li
                      key={i}
                      className="text-[12px] font-normal leading-[17.16px]  text-[#00567D]   "
                    >
                      {membership}
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
        className="absolute bottom-0 z-[4] bg-transparent  w-full  "
      />
    </div>
  );
};

export default ParticipantsSection;
