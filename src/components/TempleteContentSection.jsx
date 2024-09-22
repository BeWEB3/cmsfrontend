import React from "react";

const TempleteContentSection = ({ language, data }) => {
  const getContent = (item) =>
    item?.content[language] || item?.content["en"] || "";

  const renderContentItem = (item) => {
    switch (item.contentType.toLowerCase()) {
      case "headline":
      case "heading":
        return (
          <h1
            key={item.id}
            className="text-[42px] font-normal leading-[81.06px] text-center text-[#074163] mb-2"
          >
            {getContent(item)}
          </h1>
        );
      case "button":
        return (
          <div className="flex items-center justify-center">
            <button className="max-w-[400px] mx-auto w-full bg-[#0C5F8F] text-white py-2 px-4 hover:bg-[#0c5f8fbe] transition duration-300 text-[22px] font-normal leading-[42.46px] text-center rounded-[19px]">
              {getContent(item)}
            </button>
          </div>
        );
      case "paragraph":
        return (
          <p
            key={item.id}
            className="text-[#596064] text-[30px] font-normal leading-[57.9px] text-center mb-4"
          >
            {getContent(item)}
          </p>
        );
      case "background image":
      case "image":
        return (
          <div
            key={item?.id}
            className="bg-gray-200 py-6 flex items-center justify-center mb-4 max-w-[505px] mx-auto w-full"
          >
            <img
              src={item?.url}
              alt={item?.alt}
              className="max-w-full h-auto"
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="py-24 relative">
      <div className="absolute w-full bg-[white] xl:h-[160px] md:h-[120px] h-[50px] xl:top-[-140px] top-[-110px] z-[2] md:block hidden" />

      <div className="sm:px-6 px-4">
        <div className="bg-white rounded-[31px] [box-shadow:0_0_10px_3px_#7B7B7B40] sm:p-6 p-2 max-w-[1339px] mx-auto">
          <div className="p-4">
            {data?.contentItems
              // .sort((a, b) => a.order - b.order)
              ?.map(renderContentItem)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TempleteContentSection;
