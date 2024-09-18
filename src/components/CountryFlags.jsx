import React from "react";

const countryData = [
  { code: "om", name: { en: "Oman", ar: "سلطنة عمان" } },
  { code: "kw", name: { en: "Kuwait", ar: "الكويت" } },
  {
    code: "ae",
    name: { en: "United Arab Emirates", ar: "الإمارات العربية المتحدة" },
  },
  { code: "tn", name: { en: "Tunisia", ar: "تونس" } },
  { code: "dz", name: { en: "Algeria", ar: "الجزائر" } },
  { code: "eg", name: { en: "Egypt", ar: "مصر" } },
  { code: "sa", name: { en: "Saudi Arabia", ar: "المملكة العربية السعودية" } },
  { code: "ly", name: { en: "Libya", ar: "ليبيا" } },
  { code: "lb", name: { en: "Lebanon", ar: "لبنان" } },
  { code: "ma", name: { en: "Morocco", ar: "المغرب" } },
  { code: "ye", name: { en: "Yemen", ar: "اليمن" } },
  { code: "sd", name: { en: "Sudan", ar: "جمهورية السودان" } },
  { code: "qa", name: { en: "Qatar", ar: "قطر" } },
  { code: "ps", name: { en: "Palestine", ar: "فلسطين" } },
  { code: "iq", name: { en: "Iraq", ar: "العراق" } },
  { code: "sy", name: { en: "Syria", ar: "سوريا" } },
  { code: "bh", name: { en: "Bahrain", ar: "البحرين" } },
  { code: "jo", name: { en: "Jordan", ar: "الأردن" } },
];

const CountryFlags = ({ language }) => {
  return (
    <div className="relative py-24  ">
      <div className="absolute w-full bg-[white] xl:h-[120px] md:h-[90px] h-[50px] xl:top-[-118px] top-[-80px] md:block hidden  z-[2]" />
      <div className=" px-6   ">
        <div className="bg-white rounded-[31px] [box-shadow:0_0_10px_3px_#7B7B7B40] p-6 max-w-[1339px] mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {countryData.map((country) => (
              <div key={country.code} className="flex flex-col items-center">
                <img
                  src={`/api/placeholder/60/40?text=${country.code.toUpperCase()}`}
                  alt={`Flag of ${country.name[language]}`}
                  className="w-15 h-10 object-cover border border-gray-300"
                />
                <p className="mt-2 text-xs text-center text-gray-600">
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
