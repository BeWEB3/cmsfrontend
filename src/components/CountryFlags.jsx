import React from "react";

const CountryFlags = ({ language, data }) => {
  const flagsData = data?.contentItems;

  const countries = [];
  for (let i = 2; i < flagsData?.length; i += 2) {
    const countryName = flagsData[i]?.content?.[language];
    const countryFlag = flagsData[i + 1]?.url;
    if (countryName && countryFlag) {
      countries.push({
        name: countryName,
        flag: countryFlag,
      });
    }
  }

  // Extract the first two images
  const englishImage = flagsData?.find(
    (item) => item?.contentType === "English Image"
  );
  const arabicImage = flagsData?.find(
    (item) => item?.contentType === "Arabic Image"
  );
  const firstTwoImages = language === "en" ? [englishImage] : [arabicImage];

  return (
    <div className="relative py-24">
      <div className="absolute w-full bg-[white] xl:h-[150px] md:h-[110px] h-[50px] xl:top-[-135px] top-[-110px] md:block hidden z-[2]" />
      <div className="sm:px-6 px-4 mb-12 ">
        <div className="bg-white sm:rounded-[31px] rounded-[8px] [box-shadow:0_0_10px_3px_#7B7B7B40] sm:p-10 p-2 max-w-[1339px] mx-auto">
          {firstTwoImages?.map((item, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={item.url}
                alt={`${item.contentType}`}
                className="w-full h-full "
              />
            </div>
          ))}
        </div>
      </div>
      <div className="sm:px-6 px-4">
        <div className="bg-white sm:rounded-[31px] rounded-[8px] [box-shadow:0_0_10px_3px_#7B7B7B40] sm:p-10 p-6  max-w-[1339px] mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 sm:mt-8">
            {countries?.map((country, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={country?.flag}
                  alt={`Flag of ${country?.name}`}
                  className="  w-[110px] h-[73px] object-cover border border-gray-300"
                />
                <p className="mt-2 sm:text-[19px] text-[17px] font-bold leading-[19px] text-center text-[#00567D]">
                  {country?.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryFlags;
