import React, { useState, useMemo } from "react";
import { FileText } from "lucide-react";

function LibraryContent({ language, data = {} }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const pdfItems = useMemo(() => Object.entries(data), [data]);

  const categories = useMemo(() => {
    const uniqueCategories = new Set(
      pdfItems.map(([_, item]) => item.category.name)
    );
    return ["All", ...uniqueCategories];
  }, [pdfItems]);

  const filteredPdfItems = useMemo(() => {
    if (selectedCategory === "All") return pdfItems;
    return pdfItems.filter(
      ([_, item]) => item.category.name === selectedCategory
    );
  }, [pdfItems, selectedCategory]);

  return (
    <div>
      <div className="relative py-24">
        <div className="absolute w-full bg-[white] xl:h-[150px] md:h-[110px] h-[50px] xl:top-[-135px] top-[-110px] md:block hidden z-[2]" />
        <div className="sm:px-6 px-4">
          <div className="bg-white sm:rounded-[31px] rounded-[8px] [box-shadow:0_0_10px_3px_#7B7B7B40] sm:p-10 p-6 max-w-[1339px] mx-auto">
            <div className="mb-6" dir={language === "ar" ? "rtl" : "ltr"}>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="block w-full max-w-xs pl-6 pr-6  py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:mt-8"
              dir={language === "ar" ? "rtl" : "ltr"}
            >
              {filteredPdfItems.map(([key, item]) => (
                <div key={key} className="flex flex-col items-center">
                  <div className="w-full aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden mb-2 flex items-center justify-center">
                    <FileText size={48} className="text-gray-400" />
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-sm mb-1 line-clamp-1">
                      {item.title[language]}
                    </h3>
                    <p className="text-xs text-gray-600 mb-2 line-clamp-2">
                      {item.description[language]}
                    </p>
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      {item.category.name}
                    </span>
                  </div>
                  <a
                    href={item.url.filePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 flex items-center text-blue-600 hover:text-blue-800"
                  >
                    <FileText size={16} className="mr-1" />
                    <span className="text-xs">Open PDF</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LibraryContent;
