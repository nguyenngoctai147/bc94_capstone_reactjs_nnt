import { configureStore } from "@reduxjs/toolkit";
import movieDataReducer from "./../pages/MoviePage/TrangChu/slice";
import pageMovieTheaterReducer from "./../pages/MoviePage/RapPhim/slice";

const store = configureStore({
  reducer: {
    movieDataReducer,
    pageMovieTheaterReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
