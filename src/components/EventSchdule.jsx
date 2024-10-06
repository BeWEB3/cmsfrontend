import React, { useRef } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Note: You would need to import the CSS for react-slick and its default theme
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const scheduleItems = [
  {
    id: 3,
    time: "اليوم الرابع 11:15 - 9:45 صباحا",
    title: "الجلسة الأولى: القضاء وقانون المنافسة",
    description:
      "تهدف هذه الجلسة إلى التعرف على الدور القضائي في قضايا المنافسة وحدود الرقابة القضائية على القرارات الصادرة عن سلطات المنافسة بشأن القضايا المختلفة (الممارسات - التركز الاقتصادي) وستتضمن الجلسة مناقشات وعرض أمثلة دولية وإقليمية ووطنية",
  },
  {
    id: 4,
    time: "Day four: 9:00am-11:am Session 1: law of competition",
    title: "",
    description:
      "This session aims to identify the judicial role in competition cases and the limits of judicial oversight of the decisions issued by competition authorities regarding various issues (fine - requests for economic concentration - measures) and the like. The session will include panel discussions and international, regional and national examples.",
  },
  {
    id: 5,
    time: "الجلسة الأولى: القضاء وقانون المنافسة",
    title: "",
    description:
      "الدور القضائي في قضايا المنافسة وحدود الرقابة القضائية على القرارات الصادرة عن سلطات المنافسة بشأن القضايا المختلفة (الغرامات - طلبات التركز الاقتصادي - التدابير) وما شابه ذلك. وستتضمن الجلسة مناقشات وعرض أمثلة دولية وإقليمية ووطنية",
  },
];

function EventSchedule() {
  let sliderRef = useRef(null);

  const next = () => {
    sliderRef.slickNext();
  };

  const previous = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "300px",
    slidesToShow: 1,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "40px",
        },
      },
    ],
  };

  return (
    <div className="max-w-[1399px] mx-auto p-6">
      <div className="flex flex-col items-center mb-8">
        <h2 className="text-[65px] font-bold leading-[65px] text-[#00567D] mb-2">
          Event Schedule
        </h2>
        <div className="bg-[#0069A7] w-[10%] h-[2px]" />
      </div>
      <div className="relative">
        <Slider
          {...settings}
          ref={(slider) => {
            sliderRef = slider;
          }}
        >
          {scheduleItems.map((item) => (
            <div key={item.id} className="px-2 my-4">
              <div className="bg-white border-solid border-[2px] border-[rgba(0,86,125,0.1)] [box-shadow:0px_0px_12px_1px_rgba(0,86,125,0.1)] rounded-[21px] py-12 px-10 max-w-[638px] h-[500px] flex flex-col items-center">
                <div className="w-[102px] h-[102px] border-solid border-[4px] border-[#00567D] rounded-full flex items-center justify-center text-[#00567D] text-[63px] font-bold leading-[63px] mb-6">
                  {item.id}
                </div>
                <p className="text-[21px] font-bold leading-[21.84px] text-[#00567D] mb-6 text-center">
                  {item.time}
                </p>
                <div className="bg-[#0069A7] w-[40%] h-[2px] mb-6" />
                <div className="w-full">
                  <p className="text-[21px] font-bold leading-[30.24px] text-center text-[#090909]">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="py-6 flex justify-center items-center gap-2">
          <button
            onClick={previous}
            className="bg-white p-2 rounded-full shadow-md"
          >
            <ChevronLeft className="w-6 h-6 text-[#00567D]" />
          </button>
          <button
            onClick={next}
            className="bg-white p-2 rounded-full shadow-md"
          >
            <ChevronRight className="w-6 h-6 text-[#00567D]" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventSchedule;
