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
  GETSocialLinks: function (slug) {
    return axiosInstance.request({
      method: "GET",
      url: `get_social_links`,
    });
  },
  POSTContact: function (dat) {
    return axiosInstance.request({
      method: "POST",
      url: `contactus`,
      data: dat,
    });
  },
  GETSearch: function (dat) {
    return axiosInstance.request({
      method: "GET",
      url: `search?query=${dat}`,
    });
  },
};
