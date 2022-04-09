import axiosInstance from "./axiosInstance";

export const listArticles = (params) => {
  return axiosInstance
    .get("/articles", { params })
    .then(({ data }) => data)
    .catch((error) => JSON.parse(error));
};
