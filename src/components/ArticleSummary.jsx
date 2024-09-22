import React from "react";
import { Calendar } from "lucide-react";

const ArticleSummary = ({ language, data }) => {
  return (
    <div className="py-24 relative">
      <div className="absolute w-full bg-[white] xl:h-[180px] md:h-[130px] h-[50px] xl:top-[-135px]  top-[-110px] md:block hidden z-[2]" />

      <div className=" px-6  ">
        <h2 className=" lg:text-[60px] text-[40px] font-bold lg:leading-[66px] leading-[40px] text-center text-[#00567D] relative w-fit mx-auto before:content-[''] before:h-[2px] before:bg-[#0069A7] before:w-[calc(100%-50%)] before:absolute before:bottom-[-2px] before:left-[50%] before:translate-x-[-50%] pb-1  mb-10">
          {data?.title[language]}
        </h2>
        <div className="bg-white rounded-[31px] [box-shadow:0_0_10px_3px_#7B7B7B40] p-6 max-w-[1339px] mx-auto">
          <div className="prose max-w-none">
            {data?.description[language]
              .split("\n\n")
              .map((paragraph, index) => (
                <p
                  key={index}
                  className="mb-4 lg:text-[40px] text-[20px] font-normal lg:leading-[77px] leading-[30px] text-[#00567D]  "
                >
                  {paragraph}
                </p>
              ))}
          </div>
          <div className="flex items-center justify-end gap-1 mt-4 ">
            <Calendar size={16} className="mr-1" />
            <span className=" text-[21px] font-normal leading-[26.04px]  text-[#00567D]  ">
              {new Date(data?.createdAt).toLocaleDateString(
                language === "ar" ? "ar-SA" : "en-US"
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleSummary;
