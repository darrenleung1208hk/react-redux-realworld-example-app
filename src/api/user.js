import axiosInstance from "./axiosInstance";

export const getCurrentUser = () => {
  return axiosInstance
    .get("/user")
    .then(({ data }) => data)
    .catch((error) => JSON.parse(error));
};

export const updateUser = (user) => {
  return axiosInstance
    .put("/user", { user })
    .then(({ data }) => data)
    .catch((error) => JSON.parse(error));
};
