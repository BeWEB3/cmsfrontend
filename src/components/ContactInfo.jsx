import React from "react";
import img from "../pics/ContactInfoImg.svg";

const ContactInfo = ({ language }) => {
  const translations = {
    en: {
      faxNumber: "Fax Number",
      emailAddress: "Email Address",
      contactNumber: "Contact Number",
      phoneNumber: "Phone Number",
      networkName: "Arab Competition Network",
    },
    ar: {
      faxNumber: "رقم الفاكس",
      emailAddress: "البريد الإلكتروني",
      contactNumber: "رقم الاتصال",
      phoneNumber: "رقم الهاتف",
      networkName: "شبكة المنافسة العربية",
    },
  };

  const t = translations[language] || translations.en;

  return (
    <div className=" py-24 relative  ">
      <div className="absolute w-full bg-[white] xl:h-[120px] md:h-[90px] h-[50px] top-[-118px]  z-[2]" />
      <div className=" px-6   ">
        <div className="bg-white rounded-[31px] [box-shadow:0_0_10px_3px_#7B7B7B40] sm:p-12 p-6 max-w-[1339px] mx-auto flex justify-between items-center lg:flex-nowrap flex-wrap gap-6  ">
          <div className="grid grid-cols-2 md:gap-24 sm:gap-12 gap-2  lg:order-1 order-2 ">
            <div className=" flex gap-2 flex-col  ">
              <h3 className="  md:text-[47px] text-[30px] font-bold leading-[47px]  text-[#00567D]   ">
                {t.faxNumber}
              </h3>
              <p className="md:text-[35px] text-[22px] font-light leading-[35px]  text-[#929495]   ">
                +966 114406655
              </p>
            </div>
            <div className=" flex gap-2 flex-col  ">
              <h3 className="md:text-[47px] text-[30px] font-bold leading-[47px]  text-[#00567D]   ">
                {t.emailAddress}
              </h3>
              <p className="md:text-[35px] text-[22px] font-light leading-[35px]  text-[#929495]   ">
                info@gac.gov.sa
              </p>
            </div>
            <div className=" flex gap-2 flex-col  ">
              <h3 className="md:text-[47px] text-[30px] font-bold leading-[47px]  text-[#00567D]   ">
                {t.contactNumber}
              </h3>
              <p className="md:text-[35px] text-[22px] font-light leading-[35px]  text-[#929495]   ">
                8002441222
              </p>
            </div>
            <div className=" flex gap-2 flex-col  ">
              <h3 className="md:text-[47px] text-[30px] font-bold leading-[47px]  text-[#00567D]   ">
                {t.phoneNumber}
              </h3>
              <p className="md:text-[35px] text-[22px] font-light leading-[35px]  text-[#929495]   ">
                +966 114406666
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center lg:order-2 order-1  ">
            <img
              src={img}
              alt="Network Logo"
              className="w-[242px] h-[342.93px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
