import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useRef } from "react";
import Slider from "react-slick/lib/slider";

function EventParticipants({ language, participants }) {
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
          centerPadding: participants.length >= 1 ? "00px" : "50px",
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
    <div className="w-full max-w-[1400px] mx-auto my-[6rem]  ">
      <div className="flex flex-col items-center mb-8">
        <h2 className="md:text-[65px] text-[35px] font-bold leading-[65px] text-[#00567D] mb-2">
          {language === "en" ? "Participants" : "المشاركين"}
        </h2>
        <div className="bg-[#0069A7] w-[20%] h-[5px] rounded-md   " />
      </div>

      <Slider
        {...settings}
        ref={(slider) => {
          sliderRef = slider;
        }}
      >
        {participants.map((participant, index) => (
          <ParticipantCard
            key={index}
            name={participant?.name}
            designation={participant?.designation}
            imagePath={participant?.imagePath}
            qualifications={participant?.qualifications}
            language={language}
          />
        ))}
      </Slider>

      <div className=" py-6 flex justify-center items-center gap-2  ">
        <button
          onClick={previous}
          className=" bg-white p-2 rounded-full shadow-md"
        >
          <ChevronLeft className="w-6 h-6 text-[#00567D] " />
        </button>
        <button onClick={next} className=" bg-white p-2 rounded-full shadow-md">
          <ChevronRight className="w-6 h-6 text-[#00567D] " />
        </button>
      </div>
    </div>
  );
}

export default EventParticipants;

const ParticipantCard = ({
  name,
  title,
  qualifications,
  designation,
  language,
  key,
  imagePath,
}) => {
  console.log(name, qualifications, designation, key, imagePath);

  return (
    <div key={key} className=" px-2 my-4  ">
      <div className="bg-white rounded-[34px] shadow-md px-4 py-8 flex flex-col items-center [box-shadow:0px_0px_12px_1px_#7B7B7B40] h-full lg:max-w-[383px] text-center  gap-6  ">
        <img src={imagePath} alt={name} className="rounded-full mb-2" />
        <h3
          className={`text-[18px] font-bold leading-[18px]   text-[#00567D]  w-full`}
        >
          {name[language]}
        </h3>

        {/* <p
        className={`text-[14px] font-bold leading-[14px]  text-[#919397] w-full`}
      >
        {title}
      </p> */}

        <div
          className="text-[16px] font-bold leading-[16px]  w-full text-[#00567D]  "
          dangerouslySetInnerHTML={{
            __html: qualifications[language],
          }}
        />
        <div
          className="text-[16px] font-bold leading-[16px]  w-full text-[#00567D]  "
          dangerouslySetInnerHTML={{
            __html: designation[language],
          }}
        />

        {/* <ul className={`list-disc list-inside text-sm w-full`}>
        {qualifications.map((qual, index) => (
          <li
            key={index}
            className=" text-[12px] font-bold leading-[17.16px] text-[#00567D]   "
          >
            {qual}
          </li>
        ))}
      </ul> */}
      </div>
    </div>
  );
};
