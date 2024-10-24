import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import artBoard from "../pics/Artboard.png";
import { Facebook, Pause, Play, Twitter, Youtube } from "lucide-react";

const HeroSectionWithVideo = ({ language, HeroVideoData }) => {
  const videoUrl = HeroVideoData?.contentItems?.video;
  const socialLinks = HeroVideoData?.contentItems?.socialLinks;

  const videoRef = useRef(null);
  const progressRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
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

  // Add a useEffect to check if the video is playable
  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener("canplaythrough", () => {
        videoElement.play();
      });
      videoElement.addEventListener("error", (error) => {
        console.error("Error playing video:", error);
      });
    }
  }, [videoUrl]);

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

  // const handleSeek = (e) => {
  //   if (videoRef.current && progressRef.current) {
  //     const rect = progressRef.current.getBoundingClientRect();
  //     const x = e.clientX - rect.left;
  //     const percentage = (x / rect.width) * 100;
  //     const seekTime = (percentage / 100) * videoRef.current.duration;
  //     videoRef.current.currentTime = seekTime;
  //     setProgress(percentage);
  //   }
  // };

  return (
    <div className=" relative  ">
      <video
        ref={videoRef}
        className="w-full xl:h-[1100px] lg:h-[830px] md:h-[650px] h-[600px] object-cover "
        onTimeUpdate={handleProgress}
        loop={true}
        muted={true}
        autoPlay={true}
        playsInline={true}
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute lg:bottom-[40%] bottom-[10%] z-10 right-6 flex items-center gap-4  ">
        <div
          className="w-[200px] h-1 bg-[#ffffffaf]   relative flex items-center "
          // onClick={handleSeek}
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
      <div className="absolute left-4 top-[50%] translate-y-[-100%] flex flex-col gap-4 text-white z-[3]">
        {socialLinks && (
          <>
            {socialLinks.twitter && (
              <Link
                to={socialLinks.twitter.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter />
              </Link>
            )}
            {socialLinks.facebook && (
              <Link
                to={socialLinks.facebook.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook />
              </Link>
            )}
            {socialLinks.youtube && (
              <Link
                to={socialLinks.youtube.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube />
              </Link>
            )}
          </>
        )}
      </div>

      {/* Artboard Image */}

      <img
        src={artBoard}
        alt=""
        className=" sm:[object-fit:unset] object-cover absolute xl:bottom-[-20px] lg:bottom-[0px] md:bottom-[-80px] sm:bottom-[-70px] bottom-[-50px] z-[4] bg-transparent  w-full xl:h-[280px] sm:h-[unset] h-[90px]"
      />
    </div>
  );
};

export default HeroSectionWithVideo;
