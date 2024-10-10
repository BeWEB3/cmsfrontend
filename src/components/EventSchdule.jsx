import React, { useRef } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";

function EventSchedule({ language, schedule }) {
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
    infinite: false,
    centerPadding: "470px",
    slidesToShow: 1,
    speed: 500,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "00px",
        },
      },
    ],
  };

  return (
    <div className="max-w-[1399px] mx-auto p-6">
      <div className="flex flex-col items-center mb-8">
        <h2 className="md:text-[65px] text-[35px] font-bold leading-[65px] text-[#00567D] mb-2">
          Event Schedule
        </h2>
        <div className="bg-[#0069A7] w-[20%] h-[5px] rounded-md  " />
      </div>
      <div className="relative">
        <Slider
          {...settings}
          ref={(slider) => {
            sliderRef = slider;
          }}
        >
          {schedule.map((item) => (
            <div key={item.day} className="px-2 my-4">
              <div className="bg-white border-solid border-[2px] border-[rgba(0,86,125,0.1)] [box-shadow:0px_0px_12px_1px_rgba(0,86,125,0.1)] rounded-[21px] py-12 px-10 md:max-w-[638px]  flex flex-col items-center">
                <div className="md:w-[102px] w-[80px] md:h-[102px] h-[80px] border-solid border-[4px] border-[#00567D] rounded-full flex items-center justify-center text-[#00567D] md:text-[63px] text-[33px] font-bold leading-[63px] mb-6">
                  {item.day}
                </div>
                <p className="md:text-[21px] text-[18px] font-bold leading-[21.84px] text-[#00567D] mb-6 text-center">
                  {item.timeAndTopic[language]}
                </p>
                <div className="bg-[#0069A7] w-[40%] h-[2px] mb-6" />
                <div className="w-full">
                  <div
                    className="overflow-y-auto flex-grow   xl:text-[21px] text-[18px] font-bold xl:leading-[30.24px] leading-[24px] text-center text-[#090909]"
                    dangerouslySetInnerHTML={{
                      __html: item.description[language],
                    }}
                  />
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
