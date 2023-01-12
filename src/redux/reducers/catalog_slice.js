import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import useHttp from "../../hook/useHttp";

const initialState = {
  catalog: [],
  catalogLoading: "success",
  catalogFilter: "Кресла",
  catalogActive: true,
  filteredCatalog: [],
  search: "",
  infoDetail: {},
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
    setCatalogFilter(state, action) {
      state.catalogFilter = action.payload;
    },
    setCatalogActive(state, action) {
      state.catalogActive = action.payload;
    },
    setFilteredCatalog(state, action) {
      state.filteredCatalog = action.payload;
    },
    setSearch(state, action) {
      state.search = action.payload;
    },
    setInfoDetail(state, action) {
      state.infoDetail = action.payload;
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

export default catalogSlice.reducer;
export const {
  setCatalog,
  setCatalogFilter,
  setCatalogActive,
  setFilteredCatalog,
  setSearch,
  setInfoDetail,
} = catalogSlice.actions;
