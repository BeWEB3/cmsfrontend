import React, { useCallback, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

function EventDescription({ language, title, description, date, images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const imagesLength = useMemo(() => images?.length || 0, [images]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesLength);
  }, [imagesLength]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + imagesLength) % imagesLength
    );
  }, [imagesLength]);

  const formattedDate = useMemo(() => {
    if (!date) return "";
    return new Date(date).toLocaleDateString(
      language === "ar" ? "ar-EG" : "en-US",
      {
        year: "numeric",
        month: "long",
        day: "numeric",
      }
    );
  }, [date, language]);

  const renderImage = useCallback(
    ({ src, index }) => (
      <div
        key={index}
        className="w-full flex-shrink-0 relative overflow-hidden"
      >
        <div className="absolute w-full rounded-[15px] h-full bg-[linear-gradient(180deg,#00000003_0%,#00567D_100%)] left-0 top-0" />
        <img
          src={src}
          alt={`Slide ${index + 1}`}
          className="w-full h-[455px] object-cover rounded-[15px]"
        />
      </div>
    ),
    []
  );

  const renderNavigationButton = useCallback(
    ({ onClick, icon: Icon }) => (
      <button
        onClick={onClick}
        className="bg-white p-2 rounded-full shadow-md mx-2"
      >
        <Icon className="w-6 h-6 text-[#00567D]" />
      </button>
    ),
    []
  );

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
            {language === "ar" ? "رجوع" : "back"}
          </Link>
        </div>
        <div className="grid xl:grid-cols-2 gap-12 py-[1rem]   ">
          <div className="relative xl:mb-0 mb-8  ">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform ease-in-out duration-300"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {images?.map((img, index) => renderImage({ src: img, index }))}
              </div>
            </div>
            <div className="absolute bottom-[-10%] left-0 right-0 flex justify-center">
              {renderNavigationButton({
                onClick: prevSlide,
                icon: ChevronLeft,
              })}
              {renderNavigationButton({
                onClick: nextSlide,
                icon: ChevronRight,
              })}
            </div>
          </div>
          <div className="">
            <p className="text-[17px] font-bold leading-[17px] text-[#141414] mb-4">
              {formattedDate}
            </p>
            <h2 className="text-[42px] font-bold leading-[52.08px] text-[#141414] mb-6">
              {title?.[language]}
            </h2>
            <div
              className="text-[22px] font-bold leading-[27.28px] text-[#979797]"
              dangerouslySetInnerHTML={{ __html: description?.[language] }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDescription;
