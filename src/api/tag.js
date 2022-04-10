import axiosInstance from "./axiosInstance";

export const getTags = () => {
  return axiosInstance
    .get("/tags")
    .then(({ data }) => data)
    .catch((error) => JSON.parse(error));
};
