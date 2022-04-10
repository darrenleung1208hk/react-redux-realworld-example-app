import axiosInstance from "./axiosInstance";

export const getProfile = (username) => {
  return axiosInstance
    .get(`/profiles/${username}`)
    .then(({ data }) => data)
    .catch((error) => JSON.parse(error));
};

export const followUser = (username) => {
  return axiosInstance
    .post(`/profiles/${username}/follow`)
    .then(({ data }) => data)
    .catch((error) => JSON.parse(error));
};

export const unfollowUser = (username) => {
  return axiosInstance
    .delete(`/profiles/${username}/follow`)
    .then(({ data }) => data)
    .catch((error) => JSON.parse(error));
};
