import React from "react";
import Bulb from "../pics/Light On Bulb.png";

const ServiceSection = ({ language, data }) => {
  const services = data?.contentItems?.cards;

  return (
    <section
      id="services"
      className="pb-36 md:pt-6 sm:pt-12 pt-8 bg-[#00567D] relative w-full "
    >
      <div className="absolute w-full bg-[#00567D] xl:h-[150px] md:h-[120px] h-[80px] xl:top-[-140px] top-[-110px] lg:block hidden  z-[2]" />
      <div className="w-full mx-auto px-4 lg:pt-0 pt-10 ">
        <h2 className="text-white lg:mt-0 mt-6 sm:text-[50px] text-[36px] font-bold leading-[50px] text-center mb-16">
          {data?.contentItems?.sectionHeading[language]}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 max-w-[1400px] mx-auto  ">
          {services?.map((service, index) => (
            <div
              key={index}
              className="bg-[#0C5F8F] p-8 pb-14 rounded-[19px] shadow-sm text-center hover:shadow-lg transition duration-300 text-white flex flex-col items-center "
            >
              <div className="flex justify-center mb-6">
                <img
                  src={service?.image || Bulb}
                  alt=""
                  className=" w-[90px] h-[90px] "
                />
              </div>
              <h3 className="md:text-[32px] text-[26px] font-bold leading-[32px] text-center  ">
                {service.heading[language]}
              </h3>
              <div className=" max-w-[230px] w-full h-[2px] bg-white  mt-4 mb-8 " />
              <p className="sm:text-[19px] text-[16px] font-normal leading-[22.04px] text-center max-w-[340px] mx-auto   ">
                {service.paragraph[language]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
