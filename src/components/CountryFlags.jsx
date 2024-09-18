import React from "react";

import flagss from "../pics/Flag-Saudi-Arabia 1.png";

const countryData = [
  { code: flagss, name: { en: "Oman", ar: "سلطنة عمان" } },
  { code: flagss, name: { en: "Kuwait", ar: "الكويت" } },
  {
    code: flagss,
    name: { en: "United Arab Emirates", ar: "الإمارات العربية المتحدة" },
  },
  { code: flagss, name: { en: "Tunisia", ar: "تونس" } },
  { code: flagss, name: { en: "Algeria", ar: "الجزائر" } },
  { code: flagss, name: { en: "Egypt", ar: "مصر" } },
  {
    code: flagss,
    name: { en: "Saudi Arabia", ar: "المملكة العربية السعودية" },
  },
  { code: flagss, name: { en: "Libya", ar: "ليبيا" } },
  { code: flagss, name: { en: "Lebanon", ar: "لبنان" } },
  { code: flagss, name: { en: "Morocco", ar: "المغرب" } },
  { code: flagss, name: { en: "Yemen", ar: "اليمن" } },
  { code: flagss, name: { en: "Sudan", ar: "جمهورية السودان" } },
  { code: flagss, name: { en: "Qatar", ar: "قطر" } },
  { code: flagss, name: { en: "Palestine", ar: "فلسطين" } },
  { code: flagss, name: { en: "Iraq", ar: "العراق" } },
  { code: flagss, name: { en: "Syria", ar: "سوريا" } },
  { code: flagss, name: { en: "Bahrain", ar: "البحرين" } },
  { code: flagss, name: { en: "Jordan", ar: "الأردن" } },
];

const CountryFlags = ({ language }) => {
  return (
    <div className="relative py-24  ">
      <div className="absolute w-full bg-[white] xl:h-[150px] md:h-[110px] h-[50px] xl:top-[-135px] top-[-110px] md:block hidden  z-[2]" />
      <div className=" sm:px-6 px-4   ">
        <div className="bg-white rounded-[31px] [box-shadow:0_0_10px_3px_#7B7B7B40] sm:p-10 p-8 max-w-[1339px] mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {countryData.map((country) => (
              <div key={country.code} className="flex flex-col items-center">
                <img
                  src={`${country.code}`}
                  alt={`Flag of ${country.name[language]}`}
                  className="w-[110px] h-[73px] object-cover border border-gray-300"
                />
                <p className="mt-2 text-[19px] font-bold leading-[19px] text-center text-[#00567D] ">
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
