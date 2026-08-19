import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../services/api";
import { ListMovie, MovieState, ResponseAPI } from "./../../../type";
import { AxiosError } from "axios";

const initialState: MovieState<ListMovie[]> = {
  loading: false,
  data: null,
  error: null,
};

export const fetchMovieData = createAsyncThunk(
  "fetchMovieData",
  async (__, { rejectWithValue }) => {
    try {
      const result = await api.get<ResponseAPI<ListMovie[]>>(
        `QuanLyPhim/LayDanhSachPhim?maNhom=GP02`,
      );
      return result.data.content;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const movieSlice = createSlice({
  name: "movieSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovieData.pending, (state) => {
      state.loading = true;
      state.data = null;
      state.error = null;
    });

    builder.addCase(fetchMovieData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    });

    builder.addCase(fetchMovieData.rejected, (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload as AxiosError;
    });
  },
});

export default movieSlice.reducer;
