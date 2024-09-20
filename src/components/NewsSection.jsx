import React, { useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import newImg from "../pics/NewsImg.png";
import { APiFunctions } from "../API/AccountApiLayer";
import { useQuery } from "react-query";

const NewsSection = ({ language }) => {
  const fetchNewsData = useCallback(() => APiFunctions.GETAllNews(), []);

  const {
    data: allNews,
    isLoading,
    isError,
    error,
  } = useQuery("allNews", fetchNewsData, {
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
  });

  const memoizedTrendingNews = useMemo(() => {
    if (!allNews || !allNews?.data) return [];

    return allNews.data
      .filter((news) => news.isTrending)
      .sort((a, b) => a.trendingRank - b.trendingRank);
  }, [allNews]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="bg-white py-10 pb-[6rem] ">
      <div className="container mx-auto px-4">
        <h2 className="sm:text-[36px] text-[30px] font-bold leading-[36px] text-center text-[#0069A7] relative w-fit mx-auto before:content-[''] before:h-[2px] before:bg-[#0069A7] before:w-[calc(100%-70%)] before:absolute before:bottom-[-4px] before:left-[50%] before:translate-x-[-50%] pb-1  mb-8">
          {language === "ar" ? "أخبار المنافسة" : "News of Al-Monafsa"}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {memoizedTrendingNews.map((news, index) => (
            <Link
              to={`/news/${news.uid}`}
              key={index}
              className="relative rounded-lg overflow-hidden shadow-lg  text-white h-[284px] "
            >
              <div className="absolute w-full h-full bg-[linear-gradient(180deg,#00000003_0%,#00567D_100%)] left-0 top-0" />
              <img
                src={news.image || newImg}
                alt="News"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 left-6  text-[white] text-[17px] font-extrabold leading-[17px]  rounded-full">
                {new Date(news.createdAt).toLocaleDateString(
                  language === "ar" ? "ar-SA" : "en-US"
                )}
              </div>
              <div
                className={`p-4  absolute bottom-0  ${
                  language === "ar" ? "right-0" : "left-0"
                }`}
              >
                <h3 className="sm:text-[22px] text-[19px] font-bold sm:leading-[27px] leading-[22px] text-white mb-2">
                  {news.title[language]}
                </h3>
              </div>
            </Link>
          ))}
        </div>
        <Link
          to={"/news"}
          className="block sm:text-[36px] text-[30px] font-bold leading-[36px] text-center text-[#0069A7] relative w-fit mx-auto before:content-[''] before:h-[2px] before:bg-[#0069A7] before:w-[calc(100%-40%)] before:absolute before:bottom-[-4px] before:left-[50%] before:translate-x-[-50%] pb-1 mt-8"
        >
          {language === "ar" ? "اقرأ المزيد" : "Read More"}
        </Link>
      </div>
    </div>
  );
};

export default React.memo(NewsSection);
