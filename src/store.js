import { configureStore } from "@reduxjs/toolkit";
import { articleSlice, articleListSlice } from "./reducers";

export default configureStore({
  reducer: {
    article: articleSlice,
    articleList: articleListSlice,
  },
});
