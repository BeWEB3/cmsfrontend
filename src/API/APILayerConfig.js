import axios from "axios";

const API = `https://cmsapi.validatione.com/api/`;
// const API = `https://acnapiuat.gac.gov.sa/api/`;

const axiosInstance = axios.create({
  baseURL: API,
});

let lastError = null;

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // console.log(response);
    return response;
  },
  (error) => {
    if (error) {
      // toast.error(error.response.data.Message || "An error occurred");
    }
    if (error.status === 500) {
      window.location.href = "/not-found";
    }
    lastError = error;
    return Promise.reject(error);
  }
);

// Function to get the last error
export const getLastError = () => {
  const error = lastError;
  // Reset the lastError variable
  lastError = null;
  return error;
};

export default axiosInstance;
