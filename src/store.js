import { configureStore } from "@reduxjs/toolkit";
import articleReducer from "./reducers/article";
import articleListReducer from "./reducers/articleList";

export default configureStore({
  reducer: {
    article: articleReducer,
    articleList: articleListReducer,
  },
});
