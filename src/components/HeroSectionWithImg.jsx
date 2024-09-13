import React from "react";
import { Link } from "react-router-dom";

import heroVideo from "../pics/HeroVideoImg.png";
import Facebook from "../pics/Facebook F.svg";
import Youtube from "../pics/YouTube.svg";
import Twitter from "../pics/Twitter.svg";
import artBoard from "../pics/Artboard.png";

const HeroSectionWithImg = ({ language }) => {
  return (
    <div className=" relative  ">
      <img
        src={heroVideo}
        alt=""
        className="relative z-[1] lg:h-[830px] md:h-[650px] h-[600px] object-cover w-full " // Lower z-index for the image
      />
      <div className="absolute inset-0 bg-black opacity-70 z-[2]" />
      <div className="absolute left-4 top-[50%] translate-y-[-100%] flex flex-col gap-2 text-white z-[3]">
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

      {/* Artboard Image */}
      <div className="absolute w-full bg-[#00567D] xl:h-[120px] md:h-[90px] h-[50px] bottom-[-5px] z-[2]" />
      <img
        src={artBoard}
        alt=""
        className="absolute bottom-0 z-[4] bg-transparent  w-full  "
      />
    </div>
  );
};

export default HeroSectionWithImg;
