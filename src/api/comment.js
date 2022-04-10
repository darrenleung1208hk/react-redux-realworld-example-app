import axiosInstance from "./axiosInstance";

export const addCommentsToArticle = (slug, comment) => {
  return axiosInstance
    .post(`/articles/${slug}/comments`, { comment })
    .then(({ data }) => data)
    .catch((error) => JSON.parse(error));
};

export const getCommentsFromArticle = (slug) => {
  return axiosInstance
    .get(`/articles/${slug}/comments`)
    .then(({ data }) => data)
    .catch((error) => JSON.parse(error));
};

export const deleteCommentFromArticle = (slug, id) => {
  return axiosInstance
    .delete(`/articles/${slug}/comments/${id}`)
    .then(({ data }) => data)
    .catch((error) => JSON.parse(error));
};
