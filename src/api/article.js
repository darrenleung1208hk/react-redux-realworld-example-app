import axiosInstance from "./axiosInstance";

export const listArticles = (params) => {
  return axiosInstance
    .get("/articles", { params })
    .then(({ data }) => data)
    .catch((error) => JSON.parse(error));
};

export const feedArticles = () => {
  return axiosInstance
    .get("/articles/feed")
    .then(({ data }) => data)
    .catch((error) => JSON.parse(error));
};

export const getArticle = (slug) => {
  return axiosInstance
    .get(`/articles/${slug}`)
    .then(({ data }) => data)
    .catch((error) => JSON.parse(error));
};

export const createArticle = (data) => {
  return axiosInstance
    .post("/articles", data)
    .then(({ data }) => data)
    .catch((error) => JSON.parse(error));
};

export const updateArticle = (slug, data) => {
  return axiosInstance
    .put(`/articles/${slug}`, data)
    .then(({ data }) => data)
    .catch((error) => JSON.parse(error));
};

export const deleteArticle = (slug) => {
  return axiosInstance
    .delete(`/articles/${slug}`)
    .then(({ data }) => data)
    .catch((error) => JSON.parse(error));
};

export const favoriteArticle = (slug) => {
  return axiosInstance
    .post(`/articles/${slug}/favorite`)
    .then(({ data }) => data)
    .catch((error) => JSON.parse(error));
};

export const unfavoriteArticle = (slug) => {
  return axiosInstance
    .delete(`/articles/${slug}/favorite`)
    .then(({ data }) => data)
    .catch((error) => JSON.parse(error));
};
