import axiosInstance from "./axiosInstance";

export const login = () => {
  return axiosInstance
    .post("/users/login")
    .then(({ data }) => data)
    .catch((error) => JSON.parse(error));
};

export const register = () => {
  return axiosInstance
    .post("/users")
    .then(({ data }) => data)
    .catch((error) => JSON.parse(error));
};
