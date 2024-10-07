import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import imge from "../pics/NewsImg.png";
import { Link } from "react-router-dom";

const newsItems = [
  {
    id: 1,
    image: [imge, imge, imge, imge, imge, imge],
    date: "أغسطس 24, 2023",
    title: "Title",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

function EventDescription({ language }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % newsItems[0].image.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + newsItems[0].image.length) % newsItems[0].image.length
    );
  };

  return (
    <div className="relative">
      <div className="absolute w-full bg-white xl:h-[180px] md:h-[110px] h-[50px] xl:top-[-135px] top-[-110px] md:block hidden z-[2]" />
      <div className="sm:px-6 px-4 md:py-24 pt-24 pb-16  max-w-[1400px] mx-auto  ">
        <div className="flex items-center justify-between mb-4">
          <Link
            to={-1}
            className="text-[#00567D] flex items-start justify-center gap-2  text-[30px] font-bold leading-[28.32px]"
          >
            <ChevronLeft className="w-6 h-6 text-[#00567D]" />
            back
          </Link>
        </div>
        <div className="grid xl:grid-cols-2 gap-12 py-[1rem]   ">
          <div className="relative xl:mb-0 mb-8  ">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform ease-in-out duration-300"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {newsItems[0].image.map((img, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 relative overflow-hidden "
                  >
                    <div className="absolute w-full rounded-[15px] h-full bg-[linear-gradient(180deg,#00000003_0%,#00567D_100%)] left-0 top-0" />
                    <img
                      src={img}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-[455px] object-cover rounded-[15px]"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute bottom-[-10%] left-0 right-0 flex justify-center">
              <button
                onClick={prevSlide}
                className="bg-white p-2 rounded-full shadow-md mx-2"
              >
                <ChevronLeft className="w-6 h-6 text-[#00567D]" />
              </button>
              <button
                onClick={nextSlide}
                className="bg-white p-2 rounded-full shadow-md mx-2"
              >
                <ChevronRight className="w-6 h-6 text-[#00567D]" />
              </button>
            </div>
          </div>
          <div className="">
            <p className="text-[17px] font-bold leading-[17px] text-[#141414] mb-4">
              {newsItems[0].date}
            </p>
            <h2 className="text-[42px] font-bold leading-[52.08px] text-[#141414] mb-6">
              {newsItems[0].title}
            </h2>
            <p className="text-[22px] font-bold leading-[27.28px] text-[#979797]">
              {newsItems[0].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDescription;
