import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useRef } from "react";
import Slider from "react-slick/lib/slider";

import imge1 from "../pics/eventSnippetImg (1).png";
import imge2 from "../pics/eventSnippetImg (2).png";

const scheduleItems = [
  {
    id: 3,
    url: imge1,
  },
  {
    id: 4,
    url: imge2,
  },
  {
    id: 5,
    url: imge1,
  },
];

function EventSnippets() {
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
    slidesToShow: 3,
    centerPadding: "10px",

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
    <div className="max-w-[1399px] mx-auto p-6 my-[4rem]   ">
      <div className=" flex flex-col items-center mb-8 ">
        <h2 className="text-[65px] font-bold leading-[65px]  text-[#00567D] mb-2">
          Snippets from the event
        </h2>
        <div className="bg-[#0069A7] w-[10%] h-[5px] " />
      </div>
      <div className="relative [&_div]:!h-full   ">
        <Slider
          {...settings}
          ref={(slider) => {
            sliderRef = slider;
          }}
        >
          {scheduleItems.map((item) => (
            <div key={item.id} className="px-2 my-4  ">
              <div className="h-full ">
                <img src={item.url} alt="" />
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
