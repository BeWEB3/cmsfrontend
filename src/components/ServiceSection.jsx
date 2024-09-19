import React from "react";

import Bulb from "../pics/Light On Bulb.png";

const ServiceSection = ({ language }) => {
  const services = [
    {
      icon: Bulb,
      title: language === "ar" ? "هدف المستوى الأول" : "First Level Goal",
      description:
        language === "ar"
          ? "تنمية وتنويع الاقتصاد"
          : "Developing and diversifying the economy",
    },
    {
      icon: Bulb,
      title: language === "ar" ? "هدف المستوى الثاني" : "Second Level Goal",
      description:
        language === "ar"
          ? "3.6 تعميق اندماج الاقتصاد السعودي في المنظومة الإقليمية والعالمية"
          : "Our experts provide guidance to help you make smart technology decisions",
    },
    {
      icon: Bulb,
      title: language === "ar" ? "هدف المستوى الثالث" : "Third Level Goal",
      description:
        language === "ar"
          ? "3.6.2 تطوير العلاقات الاقتصادية الإقليمية3.6.3 تطوير العلاقات الاقتصادية مع الشركاء العالميين"
          : "We transform your data into actionable insights to drive business growth",
    },
  ];

  return (
    <section
      id="services"
      className="pb-36 md:pt-6 sm:pt-12 pt-8 bg-[#00567D] relative w-full "
    >
      <div className="absolute w-full bg-[#00567D] xl:h-[150px] md:h-[120px] h-[80px] xl:top-[-140px] top-[-110px] lg:block hidden  z-[2]" />
      <div className="w-full mx-auto px-4 lg:pt-0 pt-10 ">
        <h2 className="text-white lg:mt-0 mt-6 sm:text-[50px] text-[36px] font-bold leading-[50px] text-center mb-16">
          {language === "ar" ? "الأهداف" : "Objectives"}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 max-w-[1400px] mx-auto  ">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#0C5F8F] p-8 pb-14 rounded-[19px] shadow-sm text-center hover:shadow-lg transition duration-300 text-white flex flex-col items-center "
            >
              <div className="flex justify-center mb-6">
                <img src={service.icon} alt="" />
              </div>
              <h3 className="md:text-[32px] text-[26px] font-bold leading-[32px] text-center  ">
                {service.title}
              </h3>
              <div className=" max-w-[230px] w-full h-[2px] bg-white  mt-4 mb-8 " />
              <p className="sm:text-[19px] text-[16px] font-normal leading-[22.04px] text-center max-w-[340px] mx-auto   ">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
