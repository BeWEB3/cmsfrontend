import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { APiFunctions } from "../API/AccountApiLayer";

const WorkShopSection = ({ language }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [workshops, setWorkshops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [conductors, setConductors] = useState([]);

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
      conductor: "الجهات المقدمة للورش",
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
      const { month, year } = getDaysInMonth(currentDate);

      console.log(month, year);

      // Simulating API call with setTimeout
      await APiFunctions.GETConductorData(month, year)
        .then((res) => {
          setWorkshops(res.data?.workshopData);
          setConductors(res.data?.conductors);
          // console.log(res.data);
          setLoading(true);
        })
        .catch((err) => {
          console.log(err);
          setError("Failed to fetch workshops. Please try again later.");
        });

      // // Mock data - replace with actual API call
      // const data = [
      //   {
      //     title: "Arab Competition Org",
      //     color: "bg-[#00567D]",
      //     dates: [3, 4, 5],
      //   },
      //   { title: "Market Expert", color: "bg-[#FFA800]", dates: [3, 10, 11] },
      //   {
      //     title: "President of the group",
      //     color: "bg-[#006E5F]",
      //     dates: [24, 25, 26],
      //   },
      // ];
      // setWorkshops(data);
    } catch (error) {
      console.error("Error fetching workshops:", error);
    } finally {
      setLoading(false);
    }
  };

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    return { daysInMonth, firstDayOfMonth, month, year };
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
      <div className="xl:px-6 px-0 py-24">
        <div className="bg-white rounded-[31px] [box-shadow:0_0_10px_3px_#7B7B7B40] md:p-12 sm:p-6 p-4  max-w-[1339px] mx-auto">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
            <div>
              <h1 className="md:text-[35px] text-[28px] font-bold leading-[43.4px] w-fit  mb-1 text-[#00567D]">
                {localization[language].conductor}
                <div className="bg-[#0069A7] w-[40%] h-[5px]  rounded-md mb-8 mx-auto " />
              </h1>

              {conductors.length === 0 ? (
                <div className="flex justify-center items-center h-64">
                  <p className="text-xl text-gray-500">
                    No Conductors available at the moment.
                  </p>
                </div>
              ) : (
                conductors.map((item, index) => (
                  <div
                    key={index}
                    className={`w-full px-6 md:py-4 py-2 rounded-[7px] md:text-[35px] text-[24px] font-bold leading-[43.4px] text-white`}
                    style={{
                      backgroundColor: item.color
                        .replace("bg-[", "")
                        .replace("]", ""),
                    }}
                  >
                    {item.title[language]}
                  </div>
                ))
              )}
            </div>
            <div className="">
              <div className="w-full">
                <h2 className=" mb-4 md:text-[35px] text-[28px] font-bold leading-[43.4px] !text-center  text-[#00567D]">
                  {localization[language].months[currentDate.getMonth()]}{" "}
                  {currentDate.getFullYear()}
                  <div className="bg-[#0069A7] w-[20%] h-[5px]  rounded-md mb-8 mx-auto " />
                </h2>
                <div className="grid grid-cols-7  gap-[2px]">
                  {localization[language].daysOfWeek.map((day) => (
                    <div
                      key={day}
                      className="bg-[#D9D9D9] text-[#515151] md:px-[14px] sm:px-[6px] px-1 sm:py-[18px] py-[12px] md:text-[24px] sm:text-[18px] text-[14px] font-bold leading-[22.65px] text-center"
                    >
                      {day}
                    </div>
                  ))}
                  {[...Array(firstDayOfMonth)].map((_, index) => (
                    <div
                      key={`empty-${index}`}
                      className="md:px-[14px] sm:px-[6px] px-1 sm:py-[18px] py-[12px] bg-[#F2F2F2]"
                    />
                  ))}
                  {[...Array(daysInMonth)].map((_, index) => {
                    const day = index + 1;
                    const dayWorkshops = getWorkshopsForDate(day);
                    return (
                      <div
                        key={day}
                        className={`relative  md:px-[14px] sm:px-[6px] px-1 sm:py-[18px] py-[12px] text-[#515151] flex items-center justify-center md:text-[32px] text-[22px] font-bold leading-[30.2px] bg-[#F2F2F2] `}
                      >
                        <div className="absolute sm:top-2 top-[unset] sm:bottom-[unset] bottom-1 right-2 flex space-x-1">
                          {dayWorkshops.map((workshop, idx) => (
                            <div
                              key={idx}
                              className={`rounded-full sm:h-[8px] h-[6px] sm:w-[8px] w-[6px] `}
                              style={{
                                backgroundColor: workshop.color
                                  .replace("bg-[", "")
                                  .replace("]", ""),
                              }}
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
                  ) : error ? (
                    <div className="text-2xl font-bold text-red-500">
                      {error}
                    </div>
                  ) : workshops.length === 0 ? (
                    <div className="flex justify-center items-center h-64">
                      <p className="text-xl text-gray-500">
                        No workshops available at the moment.
                      </p>
                    </div>
                  ) : (
                    workshops.map((workshop, index) => (
                      <div
                        key={index}
                        className={`w-full  px-6 py-4 rounded-[7px] text-[35px] font-bold leading-[43.4px] text-white`}
                        style={{
                          backgroundColor: workshop.color
                            .replace("bg-[", "")
                            .replace("]", ""),
                        }}
                      >
                        {workshop?.eventTitle[language]}
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
