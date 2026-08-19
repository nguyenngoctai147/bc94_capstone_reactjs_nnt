/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import {
  ListMovie,
  MoviesState,
  ResponseAPI,
  PaginationMovieResponse,
} from "./../../../type";
import api from "../../../services/api";

const initialState: MoviesState<ListMovie[]> = {
  loading: false,
  data: null,
  error: null,
  currentPage: 1,
  totalPages: 0,
  totalCount: 0,
  count: 0,
};

export const fetchListMovies = createAsyncThunk(
  "fetchListMovies",
  async (__, { rejectWithValue }) => {
    try {
      const result = await api.get<ResponseAPI<ListMovie[]>>(
        `QuanLyPhim/LayDanhSachPhim?maNhom=GP01`,
      );
      return result.data.content;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const panigationListMovie = createAsyncThunk(
  "panigationListMovie",
  async (
    {
      maNhom,
      soTrang,
      soPhanTuTrenTrang,
    }: {
      maNhom: string;
      soTrang: number;
      soPhanTuTrenTrang: number;
    },
    { rejectWithValue },
  ) => {
    try {
      const result = await api.get<PaginationMovieResponse<ListMovie[]>>(
        `QuanLyPhim/LayDanhSachPhimPhanTrang`,
        {
          params: {
            maNhom,
            soTrang,
            soPhanTuTrenTrang,
          },
        },
      );

      return result.data.content;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const movieTheaterSlice = createSlice({
  name: "movieTheaterSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchListMovies.pending, (state) => {
      state.loading = true;
      state.data = null;
      state.error = null;
    });
    builder.addCase(fetchListMovies.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(fetchListMovies.rejected, (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload as AxiosError;
    });
    builder.addCase(panigationListMovie.pending, (state) => {
        state.loading = true;
        state.data = null;
        state.error = null;
    });
    builder.addCase(panigationListMovie.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.data = action.payload.items;
      state.currentPage = action.payload.currentPage;
      state.totalPages = action.payload.totalPages;
      state.totalCount = action.payload.totalCount;
      state.count = action.payload.count;
    });
    builder.addCase(panigationListMovie.rejected, (state, action) => {
        state.loading = false;
        state.data = null;
        state.error = action.payload as AxiosError;
    });
  },
});

export default movieTheaterSlice.reducer;
