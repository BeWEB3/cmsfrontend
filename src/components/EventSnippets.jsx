import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useRef } from "react";
import Slider from "react-slick/lib/slider";

function EventSnippets({ language, snippets }) {
  let sliderRef = useRef(null);

  const next = () => {
    sliderRef.slickNext();
  };

  const previous = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    className: "center",
    centerMode: false,
    infinite: false,
    slidesToShow: 3,
    centerPadding: "10px",
    speed: 500,
    responsive: [
      {
        breakpoint: 1200,
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

  const isVideo = (url) => {
    return url.toLowerCase().endsWith(".mp4");
  };

  return (
    <div className="max-w-[1399px] mx-auto md:p-6 my-[4rem]   ">
      <div className=" flex flex-col items-center mb-8 ">
        <h2 className="md:text-[65px] text-[30px] font-bold md:leading-[65px] leading-[35px] text-center  text-[#00567D] md:mb-2">
          {language === "ar" ? "مقتطفات الفعالية" : "Snippets from the event"}
        </h2>
        <div className="bg-[#0069A7] w-[20%] h-[5px]  rounded-md " />
      </div>
      <div className="relative [&_div]:!h-full   ">
        <Slider
          {...settings}
          ref={(slider) => {
            sliderRef = slider;
          }}
        >
          {snippets.map((item, index) => (
            <div
              key={index}
              className="px-2 my-4 overflow-hidden rounded-[16px] "
            >
              <div className="h-full w-full overflow-hidden rounded-[16px]">
                {isVideo(item) ? (
                  <video
                    src={item}
                    className="w-full h-full object-cover"
                    controls
                  />
                ) : (
                  <img
                    src={item}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </div>
          ))}
        </Slider>
        <div className=" py-6 flex justify-center items-center gap-2  ">
          <button
            onClick={previous}
            className=" bg-white p-2 rounded-full shadow-md"
          >
            <ChevronLeft className="w-6 h-6 text-[#00567D]" />
          </button>
          <button
            onClick={next}
            className=" bg-white p-2 rounded-full shadow-md"
          >
            <ChevronRight className="w-6 h-6 text-[#00567D]" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventSnippets;
