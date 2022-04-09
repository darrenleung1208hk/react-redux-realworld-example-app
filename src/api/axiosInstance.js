import axios from "axios";

const API_ENDPOINT =
  process.env.REACT_APP_API_ENDPOINT || "https://api.realworld.io/api";

const axiosInstance = axios.create({ baseURL: API_ENDPOINT });

export default axiosInstance;
