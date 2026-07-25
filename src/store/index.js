import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../pages/MovieTemplate/TrangChu/slice";

const store = configureStore({
  reducer: {
    movieReducer,
  },
});

export default store;
