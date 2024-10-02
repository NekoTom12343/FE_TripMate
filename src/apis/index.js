import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  validateStatus: function (status) {
    return status < 500;
  },
});

export const get = async (url) => {
  const response = await axiosInstance.get(url);
  if (response.status === 200) return response.data;
  const error = new Error();
  error.status = response.status;
  error.info = await response.json();
  throw error;
};

export default axiosInstance;
