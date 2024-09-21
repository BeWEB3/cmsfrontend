import React from "react";

const CountryFlags = ({ language, data }) => {
  const flagsData = data?.contentSections[0]?.contentItems;

  // Group the data by country
  const countries = [];
  for (let i = 1; i < flagsData?.length; i += 2) {
    countries.push({
      name: flagsData[i]?.content,
      flag: flagsData[i + 1]?.url,
    });
  }

  return (
    <div className="relative py-24">
      <div className="absolute w-full bg-[white] xl:h-[150px] md:h-[110px] h-[50px] xl:top-[-135px] top-[-110px] md:block hidden z-[2]" />
      <div className="sm:px-6 px-4">
        <div className="bg-white rounded-[31px] [box-shadow:0_0_10px_3px_#7B7B7B40] sm:p-10 p-8 max-w-[1339px] mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {countries.map((country, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={country.flag}
                  alt={`Flag of ${country.name[language]}`}
                  className="w-[110px] h-[73px] object-cover border border-gray-300"
                />
                <p className="mt-2 text-[19px] font-bold leading-[19px] text-center text-[#00567D]">
                  {country.name[language]}
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
