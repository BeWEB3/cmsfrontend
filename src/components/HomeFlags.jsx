import React from "react";

function HomeFlags({ language, data, title }) {
  return (
    <section className="lg:pb-36 pb-10 md:pt-6 sm:pt-12 pt-8 bg-[white] relative w-full ">
      <div className="absolute w-full bg-[white] xl:h-[150px] md:h-[120px] h-[80px] xl:top-[-140px] top-[-110px] lg:block hidden  z-[2]" />
      <div className="w-full mx-auto px-4 ">
        {title && (
          <h2 className="text-[#00567D] lg:mt-0 mt-6 md:text-[50px] sm:text-[36px] text-[28px] font-bold md:leading-[50px] sm:leading-[40px] leading-[30px] text-center md:mb-16 mb-7  ">
            {title}
          </h2>
        )}
        <div className="grid grid-cols-1  max-w-[1400px] mx-auto  ">
          <img src={data} alt={data} className="max-w-full h-auto" />
        </div>
      </div>
    </section>
  );
}

export default HomeFlags;
