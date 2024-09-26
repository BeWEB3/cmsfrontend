import React from "react";

const TextEditorComponent = ({ language = "en", data }) => {
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
        '<ul$1class="list-disc list-inside mb-4 space-y-1 $2"$3>'
      )
      .replace(
        /<ol([^>]*)class="([^"]*)"([^>]*)>/g,
        '<ol$1class="list-decimal list-inside mb-4 space-y-1 $2"$3>'
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

    return {
      __html: addClassIfMissing(
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
          '<ul class="list-disc list-inside mb-4 space-y-1"$1>'
        )
        .replace(
          /<ol(?![^>]*class=)([^>]*)>/g,
          '<ol class="list-decimal list-inside mb-4 space-y-1"$1>'
        )
        .replace(/<li(?![^>]*class=)([^>]*)>/g, '<li class="text-gray-600"$1>'),
    };
  };

  const renderContentItem = (item) => {
    switch (item.contentType) {
      case "Text":
        return (
          <div
            className="text-editor-content"
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
