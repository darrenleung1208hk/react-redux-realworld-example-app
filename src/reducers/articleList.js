import { createSlice } from "@reduxjs/toolkit";

export const articleListSlice = createSlice({
  name: "articleList",
  initialState: { articles: [] },
  reducers: {
    setArticles: (state, action) => {
      state.articles = [...action.payload];
    },
    addArticle: (state, action) => {
      state.articles = [...state.articles, action.payload];
    },
    deleteArticle: (state, action) => {
      const updatedArticles = state.articles.filter(
        (article) => article.slug !== action.payload
      );
      state.articles = updatedArticles;
    },
  },
});
