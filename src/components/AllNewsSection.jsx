import React from "react";
import { Link } from "react-router-dom";

function AllNewsSection({ language }) {
  const newsData = [
    {
      date: language === "ar" ? "منذ 5 أيام" : "5 days ago",
      title:
        language === "ar"
          ? "عنوان الأخبار باللغة العربية"
          : "The General Authority for Competition is holding the meeting",
      description:
        language === "ar"
          ? "الهيئة العامة للمنافسة تعقد الاجتماع الدوري لمناقشة القضايا الاقتصادية"
          : "The General Authority for Competition is holding its regular meeting to discuss economic issues.",
      imgSrc: "https://via.placeholder.com/300", // Replace with actual image source
    },
    {
      date: language === "ar" ? "منذ 5 أيام" : "5 days ago",
      title:
        language === "ar"
          ? "عنوان الأخبار باللغة العربية"
          : "The General Authority for Competition is holding the meeting",
      description:
        language === "ar"
          ? "الهيئة العامة للمنافسة تعقد الاجتماع الدوري لمناقشة القضايا الاقتصادية"
          : "The General Authority for Competition is holding its regular meeting to discuss economic issues.",
      imgSrc: "https://via.placeholder.com/300", // Replace with actual image source
    },
    {
      date: language === "ar" ? "منذ 5 أيام" : "5 days ago",
      title:
        language === "ar"
          ? "عنوان الأخبار باللغة العربية"
          : "The General Authority for Competition is holding the meeting",
      description:
        language === "ar"
          ? "الهيئة العامة للمنافسة تعقد الاجتماع الدوري لمناقشة القضايا الاقتصادية"
          : "The General Authority for Competition is holding its regular meeting to discuss economic issues.",
      imgSrc: "https://via.placeholder.com/300", // Replace with actual image source
    },
    {
      date: language === "ar" ? "منذ 5 أيام" : "5 days ago",
      title:
        language === "ar"
          ? "عنوان الأخبار باللغة العربية"
          : "The General Authority for Competition is holding the meeting",
      description:
        language === "ar"
          ? "الهيئة العامة للمنافسة تعقد الاجتماع الدوري لمناقشة القضايا الاقتصادية"
          : "The General Authority for Competition is holding its regular meeting to discuss economic issues.",
      imgSrc: "https://via.placeholder.com/300", // Replace with actual image source
    },
    {
      date: language === "ar" ? "منذ 5 أيام" : "5 days ago",
      title:
        language === "ar"
          ? "عنوان الأخبار باللغة العربية"
          : "The General Authority for Competition is holding the meeting",
      description:
        language === "ar"
          ? "الهيئة العامة للمنافسة تعقد الاجتماع الدوري لمناقشة القضايا الاقتصادية"
          : "The General Authority for Competition is holding its regular meeting to discuss economic issues.",
      imgSrc: "https://via.placeholder.com/300", // Replace with actual image source
    },
    {
      date: language === "ar" ? "منذ 5 أيام" : "5 days ago",
      title:
        language === "ar"
          ? "عنوان الأخبار باللغة العربية"
          : "The General Authority for Competition is holding the meeting",
      description:
        language === "ar"
          ? "الهيئة العامة للمنافسة تعقد الاجتماع الدوري لمناقشة القضايا الاقتصادية"
          : "The General Authority for Competition is holding its regular meeting to discuss economic issues.",
      imgSrc: "https://via.placeholder.com/300", // Replace with actual image source
    },
  ];
  return (
    <div className="relative  ">
      <div className="absolute w-full bg-[white] xl:h-[120px] md:h-[90px] h-[50px] top-[-118px]  z-[2]" />
      <div className=" px-6  py-24  ">
        <div className="bg-white rounded-[31px] [box-shadow:0_0_10px_3px_#7B7B7B40] sm:p-12 p-6 max-w-[1339px] mx-auto   ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsData.map((news, index) => (
              <div
                key={index}
                className="relative rounded-lg overflow-hidden shadow-lg  text-white h-[284px] "
              >
                <img
                  src={news.imgSrc}
                  alt="News"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-6 left-6  text-[white] text-[17px] font-extrabold leading-[17px]  rounded-full">
                  {news.date}
                </div>
                <div
                  className={`p-4  absolute bottom-0  ${
                    language === "ar" ? "right-0" : "left-0"
                  }  `}
                >
                  <h3 className="text-[22px] font-bold leading-[27.28px] text-white mb-2">
                    {news.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Link
          to={"/news"}
          className={
            " block text-[36px] font-bold leading-[36px] text-center text-[#0069A7] relative w-fit mx-auto before:content-[''] before:h-[2px] before:bg-[#0069A7] before:w-[calc(100%-40%)] before:absolute before:bottom-[-4px] before:left-[50%] before:translate-x-[-50%] pb-1 mt-8 "
          }
        >
          {language === "ar" ? "اقرأ المزيد" : "Read More"}
        </Link>
      </div>
    </div>
  );
}

export default AllNewsSection;
