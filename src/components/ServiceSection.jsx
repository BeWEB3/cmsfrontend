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
    <section id="services" className="pb-28 pt-10 bg-[#00567D]">
      <div className="container mx-auto px-4">
        <h2 className="text-white text-[50px] font-bold leading-[50px] text-center mb-16">
          {language === "ar" ? "الأهداف" : "Objectives"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#0C5F8F] p-8 pb-14 rounded-[19px] shadow-md text-center hover:shadow-lg transition duration-300 text-white flex flex-col items-center "
            >
              <div className="flex justify-center mb-6">
                <img src={service.icon} alt="" />
              </div>
              <h3 className="text-[32px] font-bold leading-[32px] text-center  ">
                {service.title}
              </h3>
              <div className=" max-w-[230px] w-full h-[2px] bg-white  mt-3 mb-6 " />
              <p className="text-[19px] font-normal leading-[22.04px] text-center max-w-[299px] mx-auto   ">
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
