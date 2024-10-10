import { ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function AllEventsSection({ language, AllEvent }) {
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
              <div
                // to={`/event/${event.uid}`}
                key={index}
                className="relative rounded-[15px] overflow-hidden shadow-lg text-white border-[#C0C0C0] border-[1px] border-solid "
              >
                <div className="absolute w-full h-full bg-[linear-gradient(180deg,#00000003_0%,#00567D_100%)] left-0 top-0" />
                <img
                  src={event.heroImage}
                  alt="Events"
                  className="w-full  object-cover h-[237px] "
                />
                {/* <div className="absolute top-4 left-3 text-[white] text-[17px] font-extrabold leading-[17px] rounded-full bg-[#00567D] p-[8px]  ">
                  {new Date(event.eventDate).toLocaleDateString(
                    language === "ar" ? "ar-SA" : "en-US"
                  )}
                </div> */}
                {/* <div
                  className={`p-4 absolute bottom-0 ${
                    language === "ar" ? "right-0" : "left-0"
                  }`}
                >
                  <h3 className="text-[22px] font-bold leading-[27.28px] text-white mb-2">
                    {event.title[language]}
                  </h3>
                </div> */}
                <div className=" bg-white px-4 py-5 w-full relative z-50   ">
                  <p className="text-[25px] font-bold leading-[25px]  text-black    mb-4             ">
                    {event.title[language]}
                  </p>
                  <div className=" flex items-center justify-between  ">
                    <div className=" text-[#141414] text-[17px] font-extrabold leading-[17px]  ">
                      {new Date(event.eventDate).toLocaleDateString(
                        language === "ar" ? "ar-SA" : "en-US"
                      )}
                    </div>
                    <Link
                      to={`/event/${event.uid}`}
                      className={` bg-[#00567D] rounded-[56px] px-4 py-1 [box-shadow:0_0_16px_5px_#C8C8C821] ${
                        language === "ar" && "rotate-180"
                      }   `}
                    >
                      <ArrowRight color="white" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllEventsSection;
