import React from "react";

const ContactInfo = ({ language, data }) => {
  const contentItems = data?.contentItems;

  const getContent = (contentType) => {
    const item = contentItems?.find(
      (item) => item?.contentType === contentType
    );
    return item ? item?.content[language] || item?.content?.en : "";
  };

  const imageUrl =
    contentItems?.find((item) => item?.contentType === "Image")?.url || "";

  return (
    <div className="py-24 relative">
      <div className="absolute w-full bg-[white] xl:h-[150px] md:h-[120px] h-[50px] xl:top-[-135px] top-[-110px] md:block hidden z-[2]" />
      <div className="px-6">
        <div className="bg-white rounded-[31px] [box-shadow:0_0_10px_3px_#7B7B7B40] sm:p-12 p-6 max-w-[1339px] mx-auto w-full flex justify-between items-center xl:flex-nowrap flex-wrap gap-10">
          <div className="grid sm:grid-cols-2 md:gap-24 sm:gap-12 gap-2 lg:order-1 order-2 lg:w-[unset] w-full">
            <div className="flex md:gap-2 gap-1 flex-col w-full">
              <h3 className="md:text-[47px] text-[18px] font-bold md:leading-[47px] leading-[26px] text-[#00567D]">
                {getContent("Fax Number Heading")}
              </h3>
              <p className="md:text-[35px] text-[16px] font-light md:leading-[35px] leading-[22px] text-[#929495]">
                {getContent("Fax Number")}
              </p>
            </div>
            <div className="flex md:gap-2 gap-1 flex-col">
              <h3 className="md:text-[47px] text-[18px] font-bold md:leading-[47px] leading-[26px] text-[#00567D]">
                {getContent("Email Address Heading")}
              </h3>
              <p className="md:text-[35px] text-[16px] font-light md:leading-[35px] leading-[22px] text-[#929495]">
                {getContent("Email Address")}
              </p>
            </div>
            <div className="flex md:gap-2 gap-1 flex-col">
              <h3 className="md:text-[47px] text-[16px] font-bold md:leading-[47px] leading-[26px] text-[#00567D]">
                {getContent("Contact Number Heading")}
              </h3>
              <p className="md:text-[35px] text-[18px] font-light md:leading-[35px] leading-[22px] text-[#929495]">
                {getContent("Contact Number")}
              </p>
            </div>
            <div className="flex md:gap-2 gap-1 flex-col">
              <h3 className="md:text-[47px] text-[16px] font-bold md:leading-[47px] leading-[26px] text-[#00567D]">
                {getContent("Phone Number Heading")}
              </h3>
              <p className="md:text-[35px] text-[18px] font-light md:leading-[35px] leading-[22px] text-[#929495]">
                {getContent("Phone Number")}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center lg:order-2 order-1 lg:w-[unset] w-full">
            <img
              src={imageUrl}
              alt="Network Logo"
              className="md:w-[242px] md:h-[342px] w-[200px] h-[280px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
