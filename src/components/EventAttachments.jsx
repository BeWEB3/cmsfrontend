import React from "react";
import { FileIcon } from "lucide-react";
import { Link } from "react-router-dom";

const getFileName = (url) => {
  const parts = url.split("/");
  const fullName = parts[parts.length - 1];
  const nameParts = fullName.split("_");
  return nameParts[nameParts.length - 1];
};

const AttachmentItem = ({ name }) => {
  const fileName = getFileName(name);
  return (
    <Link
      to={name}
      download
      target="_blank"
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
    <div className="max-w-[760px] mx-auto p-6">
      <h2 className="md:text-[39px] text-[29px] font-bold leading-[55.77px] text-center text-[#00567D] mb-8">
        {language === "ar" ? "مرفقات الفعالية" : "Attachments From The Event"}
        <div className="w-20 h-1 bg-[#00567D] mx-auto mt-2 rounded-md  "></div>
      </h2>
      <div className="grid md:grid-cols-3 grid-cols-2 md:gap-8 gap-4 ">
        {files.map((attachment, index) => (
          <AttachmentItem key={index} name={attachment} />
        ))}
      </div>
    </div>
  );
}

export default EventAttachments;
