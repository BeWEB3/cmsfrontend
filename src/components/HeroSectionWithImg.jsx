import React from "react";
import { Link } from "react-router-dom";

import heroVideo from "../pics/HeroVideoImg.png";
import Facebook from "../pics/Facebook F.svg";
import Youtube from "../pics/YouTube.svg";
import Twitter from "../pics/Twitter.svg";
import artBoard from "../pics/Artboard.png";

import Calender from "../pics/Calendar.png";

const HeroSectionWithImg = ({ language, Title, newsTitle = false }) => {
  return (
    <div className=" relative  ">
      <img
        src={heroVideo}
        alt=""
        className="relative z-[1] lg:h-[830px] md:h-[650px] h-[600px] object-cover w-full " // Lower z-index for the image
      />
      <div className="absolute inset-0 bg-black opacity-70 z-[2]" />
      <div className="absolute sm:left-4 left-[50%] sm:translate-x-[unset] translate-x-[-50%]  sm:top-[50%] sm:bottom-[unset] bottom-[7rem] sm:translate-y-[-100%] flex sm:flex-col flex-row gap-2 text-white z-[3]  [&>a>img]:sm:w-[30px] [&>a>img]:w-[35px]       ">
        <Link to={""} target="_blank">
          <img src={Facebook} alt="" />
        </Link>
        <Link to={""} target="_blank">
          <img src={Youtube} alt="" />
        </Link>
        <Link to={""} target="_blank">
          <img src={Twitter} alt="" />
        </Link>
      </div>

      {newsTitle ? (
        <>
          <div className=" absolute top-[45%] translate-x-[-50%] translate-y-[-50%] left-[50%] z-[3]  ">
            <div className=" text-white flex items-center justify-center gap-1 mb-3 text-[21px] font-normal leading-[26.04px] text-center  ">
              <img src={Calender} alt="" width={"40px"} height={"40px"} />
              <span>22 Aug 2022</span>
            </div>
            <h2 className=" block w-full mx-auto before:content-[''] before:h-[2px] before:bg-[white] before:w-[calc(100%+10%)] before:absolute before:bottom-[-4px] before:left-[50%] before:translate-x-[-50%] pb-2  text-white  lg:text-[50px] sm:text-[30px] text-[25px] font-bold lg:leading-[50px] sm:leading-[30px] leading-[22px]  text-center    ">
              {Title ? (language === "ar" ? Title.ar : Title.en) : ""}
            </h2>
          </div>
        </>
      ) : (
        <>
          <h2 className=" block w-fit mx-auto before:content-[''] before:h-[2px] before:bg-[white] before:w-[calc(100%-50%)] before:absolute before:bottom-[-4px] before:left-[50%] before:translate-x-[-50%] pb-1  text-white  lg:text-[50px] sm:text-[30px] text-[25px] font-bold lg:leading-[50px] sm:leading-[30px] leading-[22px]  text-center  absolute top-[45%] translate-x-[-50%] translate-y-[-50%] left-[50%] z-[3]  ">
            {Title ? (language === "ar" ? Title.ar : Title.en) : ""}
          </h2>
        </>
      )}

      {/* Artboard Image */}
      <img
        src={artBoard}
        alt=""
        className="absolute bottom-0 z-[4] bg-transparent  w-full 2xl:hidden lg:block hidden  "
      />
    </div>
  );
};

export default HeroSectionWithImg;
