// features/apiSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetcher, poster, patcher } from "../utils/"; // Adjust the path accordingly

interface DataState {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: DataState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchData = createAsyncThunk("data/fetch", async (url: string) => {
  return await fetcher(url);
});

export const postData = createAsyncThunk(
  "data/post",
  async ({ url, data }: { url: string; data: any }) => {
    return await poster(url, data);
  }
);

export const updateData = createAsyncThunk(
  "data/update",
  async ({ url, data }: { url: string; data: any }) => {
    return await patcher(url, data);
  }
);

const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch data";
      });
  },
});

export const apiReducer = apiSlice.reducer;
