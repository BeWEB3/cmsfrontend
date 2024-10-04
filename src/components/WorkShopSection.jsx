import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const WorkShopSection = ({ language }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [workshops, setWorkshops] = useState([]);
  const [loading, setLoading] = useState(true);

  const localization = {
    en: {
      conductor: "Conductor",
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
      daysOfWeek: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
    },
    ar: {
      conductor: "قائد",
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
    },
  };

  useEffect(() => {
    fetchWorkshops();
  }, [currentDate]);

  const fetchWorkshops = async () => {
    setLoading(true);
    try {
      // Simulating API call with setTimeout
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // Mock data - replace with actual API call
      const data = [
        {
          title: "Arab Competition Org",
          color: "bg-[#00567D]",
          dates: [3, 4, 5],
        },
        { title: "Market Expert", color: "bg-[#FFA800]", dates: [3, 10, 11] },
        {
          title: "President of the group",
          color: "bg-[#006E5F]",
          dates: [24, 25, 26],
        },
      ];
      setWorkshops(data);
    } catch (error) {
      console.error("Error fetching workshops:", error);
    } finally {
      setLoading(false);
    }
  };

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    return { daysInMonth, firstDayOfMonth };
  };

  const { daysInMonth, firstDayOfMonth } = getDaysInMonth(currentDate);

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

  const getWorkshopsForDate = (day) => {
    return workshops.filter((workshop) => workshop.dates.includes(day));
  };

  return (
    <div className="relative">
      <div className="absolute w-full bg-[white] xl:h-[180px] md:h-[110px] h-[50px] xl:top-[-135px] top-[-110px] md:block hidden z-[2]" />
      <div className="px-6 py-24">
        <div className="bg-white rounded-[31px] [box-shadow:0_0_10px_3px_#7B7B7B40] sm:p-12 p-6 max-w-[1339px] mx-auto">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h1 className="text-4xl text-center font-bold mb-8 text-[#00567D]">
                {localization[language].conductor}
              </h1>
              <div></div>
            </div>
            <div className="">
              <div className="w-full">
                <h2 className=" mb-4  text-2xl !text-center font-bold text-[#515151]">
                  {localization[language].months[currentDate.getMonth()]}{" "}
                  {currentDate.getFullYear()}
                </h2>
                <div className="grid grid-cols-7  gap-[2px]">
                  {localization[language].daysOfWeek.map((day) => (
                    <div
                      key={day}
                      className="bg-[#D9D9D9] text-[#515151] px-[14px] py-[18px] text-[24px] font-bold leading-[22.65px] text-center"
                    >
                      {day}
                    </div>
                  ))}
                  {[...Array(firstDayOfMonth)].map((_, index) => (
                    <div
                      key={`empty-${index}`}
                      className="px-[14px] py-[14px] bg-[#F2F2F2]"
                    />
                  ))}
                  {[...Array(daysInMonth)].map((_, index) => {
                    const day = index + 1;
                    const dayWorkshops = getWorkshopsForDate(day);
                    return (
                      <div
                        key={day}
                        className={`relative  px-[14px] py-[14px] text-[#515151] flex items-center justify-center text-[32px] font-bold leading-[30.2px] bg-[#F2F2F2] `}
                      >
                        <div className="absolute top-2 right-2 flex space-x-1">
                          {dayWorkshops.map((workshop, idx) => (
                            <div
                              key={idx}
                              className={`rounded-full h-[8px] w-[8px] ${workshop.color}`}
                            />
                          ))}
                        </div>
                        {day}
                      </div>
                    );
                  })}
                </div>

                <div className="w-full flex items-start gap-4 mt-4 flex-col">
                  {loading ? (
                    <div className="text-2xl font-bold text-[#515151]">
                      Loading...
                    </div>
                  ) : (
                    workshops.map((workshop, index) => (
                      <div
                        key={index}
                        className={`w-full ${workshop.color} px-6 py-4 rounded-[7px] text-[35px] font-bold leading-[43.4px]  text-white`}
                      >
                        {workshop.title}
                      </div>
                    ))
                  )}
                </div>
                <div className="flex justify-center mt-4 gap-2">
                  <button
                    onClick={goToPreviousMonth}
                    className="p-3 rounded-full bg-white shadow-md hover:opacity-75 disabled:opacity-50"
                    disabled={loading}
                  >
                    <ChevronLeft size={40} color="#00567D" />
                  </button>
                  <button
                    onClick={goToNextMonth}
                    className="p-3 rounded-full bg-white shadow-md hover:opacity-75 disabled:opacity-50"
                    disabled={loading}
                  >
                    <ChevronRight size={40} color="#00567D" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkShopSection;
