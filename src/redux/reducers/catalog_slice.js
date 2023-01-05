import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import useHttp from "../../hook/useHttp";

const initialState = {
  catalog: [],
  catalogLoading: "success",
  catalogStatus: "Кресла",
};

export const fetchCatalog = createAsyncThunk(
  "catalog/fetchCatalog",
  async () => {
    const { request } = useHttp();
    return await request(`http://localhost:5000/catalog`);
  }
);

export const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    setCatalog(state, action) {
      state.catalog = action.payload;
    },
    setCatalogStatus(state, action) {
      state.catalogStatus = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCatalog.pending, (state) => {
        state.catalogLoading = "loading";
      })
      .addCase(fetchCatalog.fulfilled, (state, action) => {
        state.catalogLoading = "success";
        state.catalog = action.payload;
      })
      .addCase(fetchCatalog.rejected, (state) => {
        state.catalogLoading = "error";
      })
      .addDefaultCase(() => {});
  },
});

export const { setCatalog, setCatalogStatus } = catalogSlice.actions;
export default catalogSlice.reducer;
