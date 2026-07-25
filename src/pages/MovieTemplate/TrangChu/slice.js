import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../services/api";

export const getListDataMovie = createAsyncThunk(
  "getListDataMovie",
  async (__, { rejectWithValue }) => {
    try {
      const result = await api.get(`QuanLyPhim/LayDanhSachPhim?maNhom=GP01`);
      return result.data.content;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const movieSlice = createSlice({
  name: "movieSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getListDataMovie.pending, (state) => {
      state.loading = true;
      state.data = null;
      state.error = null;
    });
    builder.addCase(getListDataMovie.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(getListDataMovie.rejected, (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    });
  },
});

export default movieSlice.reducer;
