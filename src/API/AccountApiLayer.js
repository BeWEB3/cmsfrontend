import axiosInstance from "./APILayerConfig";

export const APiFunctions = {
  GETAllNews: function () {
    return axiosInstance.request({
      method: "GET",
      url: `get_all_news`,
    });
  },
  GETOneNews: function (uid) {
    return axiosInstance.request({
      method: "GET",
      url: `get_news_by_uid?uid=${uid}`,
    });
  },
  GETHomeData: function () {
    return axiosInstance.request({
      method: "GET",
      url: `get_home_content`,
    });
  },
  GETWithSlug: function (slug) {
    return axiosInstance.request({
      method: "GET",
      url: `get_cms_content?slug=${slug}`,
    });
  },
  // GETWithSlug: function (slug) {
  //   return axiosInstance.request({
  //     method: "GET",
  //     url: `get_cms_content?slug=${slug}`,
  //   });
  // },
};
