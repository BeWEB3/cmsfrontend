import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const localization = {
  en: {
    months: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    daysOfWeek: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    workList: [
      {
        text: "In-depth Market Analysis",
        color: "bg-blue-600",
        dates: [3, 4, 5],
      },
      {
        text: "Arab Competition Network",
        color: "bg-blue-400",
        dates: [10, 11],
      },
      {
        text: "Intellectual Property Rights",
        color: "bg-yellow-400",
        dates: [17, 18, 19],
      },
      {
        text: "Kuwait Competition Authority",
        color: "bg-green-400",
        dates: [24, 25, 26],
      },
    ],
    languageToggle: "عربي",
  },
  ar: {
    months: [
      "يناير",
      "فبراير",
      "مارس",
      "أبريل",
      "مايو",
      "يونيو",
      "يوليو",
      "أغسطس",
      "سبتمبر",
      "أكتوبر",
      "نوفمبر",
      "ديسمبر",
    ],
    daysOfWeek: [
      "الأحد",
      "الاثنين",
      "الثلاثاء",
      "الأربعاء",
      "الخميس",
      "الجمعة",
      "السبت",
    ],
    workList: [
      {
        text: "السوق المعمقة في ضوء نظم",
        color: "bg-blue-600",
        dates: [3, 4, 5],
      },
      { text: "شبكة المنافسة العربية", color: "bg-blue-400", dates: [10, 11] },
      {
        text: "حقوق الملكية والسياسات",
        color: "bg-yellow-400",
        dates: [17, 18, 19],
      },
      {
        text: "رئيس المجموعة: جهاز حماية المنافسة بدولة الكويت",
        color: "bg-green-400",
        dates: [24, 25, 26],
      },
    ],
    languageToggle: "English",
  },
};

const WorkShopSection = ({ language }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const goToPreviousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const goToNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    const days = [];
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    return { days, firstDayOfMonth };
  };

  const { days, firstDayOfMonth } = getDaysInMonth(currentDate);

  const getWorkshopForDate = (day) => {
    return localization[language].workList.find((work) =>
      work.dates.includes(day)
    );
  };

  return (
    <>
      <div className="relative">
        <div className="absolute w-full bg-[white] xl:h-[180px] md:h-[110px] h-[50px] xl:top-[-135px] top-[-110px] md:block hidden z-[2]" />
        <div className="px-6 py-24">
          <div className="bg-white rounded-[31px] [box-shadow:0_0_10px_3px_#7B7B7B40] sm:p-12 p-6 max-w-[1339px] mx-auto">
            <div className="grid grid-cols-2 gap-12">
              <div className="w-full">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">
                    {localization[language].months[currentDate.getMonth()]}{" "}
                    {currentDate.getFullYear()}
                  </h2>
                </div>
                <div className="grid grid-cols-7 gap-[2px]">
                  {localization[language].daysOfWeek.map((day) => (
                    <div
                      key={day}
                      className=" bg-[#D9D9D9] text-[#515151] px-[14px] py-[18px]  text-[24px] font-bold leading-[22.65px] text-center  flex  justify-center items-start  "
                    >
                      {day}
                    </div>
                  ))}
                  {Array(firstDayOfMonth)
                    .fill(null)
                    .map((_, index) => (
                      <div
                        key={`empty-${index}`}
                        className="px-[14px] py-[14px] bg-[#F2F2F2] "
                      />
                    ))}
                  {days.map((day) => {
                    const workshop = getWorkshopForDate(day);
                    return (
                      <div
                        key={day}
                        className={`px-[14px] py-[14px] !text-[#515151]  flex items-center justify-center  text-[32px] font-bold leading-[30.2px] text-left  ${
                          workshop ? `${workshop.color} ` : "bg-[#F2F2F2]"
                        }`}
                      >
                        {day}
                      </div>
                    );
                  })}
                </div>
                <div className="flex justify-center mt-4 gap-2">
                  <button
                    onClick={goToPreviousMonth}
                    className="p-3 rounded-full bg-white  [box-shadow:0px_0px_7.7px_2px_#81818140] hover:opacity-50  "
                  >
                    {language === "ar" ? (
                      <ChevronRight size={40} color="#00567D" />
                    ) : (
                      <ChevronLeft size={40} color="#00567D" />
                    )}
                  </button>
                  <button
                    onClick={goToNextMonth}
                    className="p-3 rounded-full bg-white  [box-shadow:0px_0px_7.7px_2px_#81818140]  hover:opacity-50 "
                  >
                    {language === "ar" ? (
                      <ChevronLeft size={40} color="#00567D" />
                    ) : (
                      <ChevronRight size={40} color="#00567D" />
                    )}
                  </button>
                </div>
              </div>
              <div className="w-full flex items-start gap-4 flex-col  ">
                {localization[language].workList.map((work, index) => (
                  <div key={index} className="  ">
                    <div
                      className={`px-6 py-4 rounded-[7px] text-[35px] font-bold leading-[43.4px] text-right text-white  ${work.color}   `}
                    >
                      {work.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkShopSection;
