import axiosInstance from "./APILayerConfig";

export const APiFunctions = {
  GETAllNews: function () {
    return axiosInstance.request({
      method: "GET",
      url: `get_all_news`,
    });
  },
  GETWithSlug: function (slug) {
    return axiosInstance.request({
      method: "GET",
      url: `get_cms_content?slug=${slug}`,
    });
  },
};
