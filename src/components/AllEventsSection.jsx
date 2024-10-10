import React from "react";
import { Link } from "react-router-dom";

function AllEventsSection({ language, ShowallNewsLink = true, AllEvent }) {
  const sortNewsArray = (newsArray) => {
    return newsArray.sort((a, b) => {
      if (a.eventDate && !b.eventDate) return -1;
      if (!a.eventDate && b.eventDate) return 1;

      if (a.eventDate && b.eventDate) {
        return a.eventDate - b.eventDate;
      }

      return new Date(b.eventDate) - new Date(a.eventDate);
    });
  };

  const sortedNewsArray = sortNewsArray(AllEvent);

  return (
    <div className="relative">
      <div className="absolute w-full bg-[white] xl:h-[180px] md:h-[110px] h-[50px] xl:top-[-135px] top-[-110px] md:block hidden z-[2]" />
      <div className="px-6 py-24">
        <div className="bg-white rounded-[31px] [box-shadow:0_0_10px_3px_#7B7B7B40] sm:p-12 p-6 max-w-[1339px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedNewsArray?.map((event, index) => (
              <Link
                to={`/event/${event.uid}`}
                key={index}
                className="relative rounded-lg overflow-hidden shadow-lg text-white "
              >
                <div className="absolute w-full h-full bg-[linear-gradient(180deg,#00000003_0%,#00567D_100%)] left-0 top-0" />
                <img
                  src={event.heroImage}
                  alt="Events"
                  className="w-full  object-cover h-[276px] "
                />
                <div className="absolute top-4 left-3 text-[white] text-[17px] font-extrabold leading-[17px] rounded-full bg-[#00567D] p-[8px]  ">
                  {new Date(event.eventDate).toLocaleDateString(
                    language === "ar" ? "ar-SA" : "en-US"
                  )}
                </div>
                <div
                  className={`p-4 absolute bottom-0 ${
                    language === "ar" ? "right-0" : "left-0"
                  }`}
                >
                  <h3 className="text-[22px] font-bold leading-[27.28px] text-white mb-2">
                    {event.title[language]}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {ShowallNewsLink && (
          <Link
            to="/events"
            className="block text-[36px] font-bold leading-[36px] text-center text-[#0069A7] relative w-fit mx-auto before:content-[''] before:h-[2px] before:bg-[#0069A7] before:w-[calc(100%-40%)] before:absolute before:bottom-[-4px] before:left-[50%] before:translate-x-[-50%] pb-1 mt-8"
          >
            {language === "ar" ? "اقرأ المزيد" : "Read More"}
          </Link>
        )}
      </div>
    </div>
  );
}

export default AllEventsSection;
