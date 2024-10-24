import DOMPurify from "dompurify";
import { FileIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const TextEditorComponent = ({ language, data }) => {
  const renderContent = (content) => {
    const htmlContent = content[language] || content["en"];

    const styledHtmlContent = htmlContent
      .replace(
        /<h1([^>]*)class="([^"]*)"([^>]*)>/g,
        '<h1$1class="text-[42px] font-normal leading-[81.06px] text-[#074163] mb-2 $2"$3>'
      )
      .replace(
        /<h2([^>]*)class="([^"]*)"([^>]*)>/g,
        '<h2$1class="text-3xl font-semibold mb-3 text-gray-800 $2"$3>'
      )
      .replace(
        /<h3([^>]*)class="([^"]*)"([^>]*)>/g,
        '<h3$1class="text-2xl font-medium mb-2 text-gray-700 $2"$3>'
      )
      .replace(
        /<p([^>]*)class="([^"]*)"([^>]*)>/g,
        '<p$1class="mb-4 text-gray-600 $2"$3>'
      )
      .replace(
        /<a([^>]*)class="([^"]*)"([^>]*)>/g,
        '<a$1class="text-blue-600 hover:text-blue-800 underline $2"$3>'
      )
      .replace(
        /<ul([^>]*)class="([^"]*)"([^>]*)>/g,
        `<ul$1class="list-disc
        ${language === "ar" ? "![list-style:arabic-indic]" : ""} 
        list-inside mb-4 space-y-1 $2"$3>`
      )
      .replace(
        /<ol([^>]*)class="([^"]*)"([^>]*)>/g,
        `<ol$1class=" ${
          language === "ar" ? "![list-style:arabic-indic]" : "list-decimal"
        }  list-inside mb-4 space-y-1 $2"$3>`
      )
      .replace(
        /<li([^>]*)class="([^"]*)"([^>]*)>/g,
        '<li$1class="text-gray-600 $2"$3>'
      );

    // Add classes to elements without existing class attributes
    const addClassIfMissing = (tag, classes) => {
      const regex = new RegExp(`<${tag}(?![^>]*class=)([^>]*)>`, "g");
      return styledHtmlContent.replace(regex, `<${tag} class="${classes}"$1>`);
    };

    const sanitizedContent = DOMPurify.sanitize(
      addClassIfMissing(
        "h1",
        "text-[42px] font-normal leading-[81.06px] text-[#074163] mb-4"
      )
        .replace(
          /<h2(?![^>]*class=)([^>]*)>/g,
          '<h2 class="text-3xl font-semibold mb-3 text-gray-800"$1>'
        )
        .replace(
          /<h3(?![^>]*class=)([^>]*)>/g,
          '<h3 class="text-2xl font-medium mb-2 text-gray-700"$1>'
        )
        .replace(
          /<p(?![^>]*class=)([^>]*)>/g,
          '<p class="mb-2 text-gray-600  "$1>'
        )
        .replace(
          /<a(?![^>]*class=)([^>]*)>/g,
          '<a class="text-blue-600 hover:text-blue-800 underline"$1>'
        )
        .replace(
          /<ul(?![^>]*class=)([^>]*)>/g,
          `<ul class="${
            language === "ar" ? "![list-style:arabic-indic]" : ""
          } list-inside mb-4 space-y-1"$1>`
        )
        .replace(
          /<ol(?![^>]*class=)([^>]*)>/g,
          `<ol class="${
            language === "ar" ? "![list-style:arabic-indic]" : "list-decimal "
          } list-inside mb-4 space-y-1"$1>`
        )
        .replace(/<li(?![^>]*class=)([^>]*)>/g, '<li class="text-gray-600"$1>')
    );

    return { __html: sanitizedContent };
  };

  const getFileName = (url) => {
    const parts = url.split("/");
    const fullName = parts[parts.length - 1];
    const nameParts = fullName.split("_");
    return nameParts[nameParts.length - 1];
  };

  const renderContentItem = (item) => {
    switch (item.contentType) {
      case "Text":
        return (
          <div
            className="text-editor-content"
            dir={language === "ar" ? "rtl" : "ltr"}
            dangerouslySetInnerHTML={renderContent(item.content)}
          />
        );
      case "Image":
        return (
          <img
            src={item.url}
            alt={`Content asset`}
            className="w-full h-auto rounded-lg shadow-md transition-transform duration-300 hover:scale-[1.02]"
          />
        );
      case "File Title":
        return (
          <h3 className="text-2xl font-medium mb-2 text-gray-700">
            {item.content[language]}
          </h3>
        );
      case "File Description":
        return <p className="mb-4 text-gray-600">{item.content[language]}</p>;
      case "File":
        const fileName = getFileName(item.url);
        return (
          <Link
            to={item.url}
            download
            target="_blank"
            className="flex flex-col items-center p-4 bg-white rounded-[15px] [box-shadow:0px_0px_11px_2px_#7B7B7B40] pb-8 max-w-[450px] mx-auto"
          >
            <FileIcon className="w-12 h-12 text-[#00567D] mb-2" />
            <div className="bg-[#0069A7] w-[40%] h-[3px] mb-4 mt-2" />
            <span className="text-[17px] font-bold leading-[16.05px]  text-[#00567D]">
              {fileName}
            </span>
          </Link>
        );
      default:
        return null;
    }
  };

  return (
    <div className="py-24 relative bg-gray-100">
      <div className="absolute w-full bg-white xl:h-[160px] md:h-[120px] h-[50px] xl:top-[-140px] top-[-110px] z-[2] md:block hidden" />

      <div className="sm:px-6 px-4 max-w-7xl mx-auto">
        <div className="bg-white rounded-[31px] shadow-lg sm:p-8 p-4 transition-all duration-300 hover:shadow-xl">
          {data.contentItems
            .sort((a, b) => a.order - b.order)
            .map((item) => (
              <div key={item.id} className="mb-8 last:mb-0">
                {renderContentItem(item)}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TextEditorComponent;
