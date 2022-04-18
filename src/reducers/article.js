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
    removeArticle: (state) => {
      state.article = {};
    },
  },
});

export const { setArticle, updateArticle, removeArticle } =
  articleSlice.actions;

export default articleSlice.reducer;
