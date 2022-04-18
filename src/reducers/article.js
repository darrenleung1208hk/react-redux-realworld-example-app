import { createSlice } from "@reduxjs/toolkit";

export const articleSlice = createSlice({
  name: "article",
  initialState: { article: {} },
  reducers: {
    setArticle: (state, action) => {
      state.article = action.payload;
    },
    updateArticle: (state, action) => {
      state.article = { ...state.article, ...action.payload };
    },
    deleteArticle: (state) => {
      state.article = {};
    },
  },
});
