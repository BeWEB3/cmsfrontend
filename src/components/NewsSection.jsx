import React from "react";

const NewsSection = ({ language }) => {
  // Dummy data for the news cards
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
  ];

  return (
    <div className="bg-white py-10 pb-[6rem] ">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-[36px] font-bold leading-[36px] text-center text-[#0069A7] relative w-fit mx-auto before:content-[''] before:h-[2px] before:bg-[#0069A7] before:w-[calc(100%-70%)] before:absolute before:bottom-[-4px] before:left-[50%] before:translate-x-[-50%] pb-1  mb-8">
          {language === "ar" ? "أخبار المنافسة" : "News of Al-Monafsa"}
        </h2>

        {/* News Cards Grid */}
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
              <div className="p-4  absolute bottom-0 left-0  ">
                <h3 className="text-[22px] font-bold leading-[27.28px] text-white mb-2">
                  {news.title}
                </h3>
                {/* <p className="text-sm">{news.description}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
