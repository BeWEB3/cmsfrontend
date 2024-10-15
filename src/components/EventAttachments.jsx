import React from "react";
import { FileIcon } from "lucide-react";
import { Link } from "react-router-dom";

const getFileName = (url) => {
  const parts = url.split("/");
  const fullName = parts[parts.length - 1];
  const nameParts = fullName.split("_");
  return nameParts[nameParts.length - 1];
};

const AttachmentItem = ({ name, id }) => {
  const fileName = getFileName(name);
  return (
    <Link
      to={name}
      download
      target="_blank"
      key={id}
      className="flex flex-col items-center p-4 bg-white rounded-[15px] [box-shadow:0px_0px_11px_2px_#7B7B7B40] pb-8   "
    >
      <FileIcon className="w-12 h-12 text-[#00567D] mb-2" />
      <div className="bg-[#0069A7] w-[40%] h-[3px] mb-4 mt-2" />

      <span className="text-[17px] font-bold leading-[16.05px] mb-4 text-[#00567D]  ">
        {fileName}
      </span>
    </Link>
  );
};

function EventAttachments({ language, files }) {
  return (
    <div className="max-w-[760px] mx-auto md:p-6 p-2 pb-[4rem] ">
      <h2 className="md:text-[39px] text-[28px] font-bold md:leading-[55.77px] leading-[32px] text-center text-[#00567D] mb-8">
        {language === "ar" ? "مرفقات الفعالية" : "Attachments From The Event"}
        <div className="w-20 h-1 bg-[#00567D] mx-auto md:mt-2 rounded-md  "></div>
      </h2>
      <div
        className="grid md:grid-cols-3 grid-cols-2 md:gap-8 gap-4 "
        dir={language === "ar" ? "rtl" : "ltr"}
      >
        {files.map((attachment, index) => (
          <AttachmentItem key={index} name={attachment} id={index} />
        ))}
      </div>
    </div>
  );
}

export default EventAttachments;
