import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import Facebook from "../pics/Facebook F.svg";
import Youtube from "../pics/YouTube.svg";
import Twitter from "../pics/Twitter.svg";
import artBoard from "../pics/Artboard.png";
import { Pause, Play } from "lucide-react";

const HeroSectionWithVideo = ({ language }) => {
  const videoRef = useRef(null);
  const progressRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener("timeupdate", handleProgress);
      return () => {
        videoElement.removeEventListener("timeupdate", handleProgress);
      };
    }
  }, []);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleProgress = () => {
    if (videoRef.current) {
      const currentTime = videoRef.current.currentTime;
      const duration = videoRef.current.duration;
      const percentage = (currentTime / duration) * 100;
      setProgress(percentage);
    }
  };

  const handleSeek = (e) => {
    if (videoRef.current && progressRef.current) {
      const rect = progressRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = (x / rect.width) * 100;
      const seekTime = (percentage / 100) * videoRef.current.duration;
      videoRef.current.currentTime = seekTime;
      setProgress(percentage);
    }
  };

  return (
    <div className=" relative  ">
      <video
        ref={videoRef}
        className="w-full lg:h-[830px] md:h-[650px] h-[600px] object-cover "
        onTimeUpdate={handleProgress}
        loop
      >
        <source src="videos/herovideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute bottom-[40%] z-10 right-6 flex items-center gap-4  ">
        <div
          className="w-[200px] h-1 bg-[#ffffffaf]  cursor-pointer relative flex items-center "
          onClick={handleSeek}
          ref={progressRef}
        >
          <div
            className="h-2 bg-[#5b5f63f1] "
            style={{ width: `${progress}%` }}
          />
        </div>
        <button
          onClick={handlePlayPause}
          className=" transform  bg-transparent border-white border-[1px] bg-opacity-50 text-white rounded-full p-4 hover:bg-opacity-75 transition-all"
        >
          {isPlaying ? (
            <Pause size={24} fill="white" />
          ) : (
            <Play size={24} fill="white" />
          )}
        </button>
      </div>
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

export default HeroSectionWithVideo;
