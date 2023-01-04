import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import useHttp from "../../hook/useHttp";

const initialState = {
  mebel: [
    { sofas: [] },
    { chairs: [] },
    { armchairs: [] },
    { beds: [] },
    { mattresses: [] },
    { poufs: [] },
    { exclusiveFurnitures: [] },
  ],
  mebelLoading: "success",
  filteredMebel: [],
  search: "",
};

export const fetchMebel = createAsyncThunk("mebel/fetchMebel", async () => {
  const { request } = useHttp();
  return await request(`http://localhost:5000/mebel`);
});

export const mebelSlice = createSlice({
  name: "mebel",
  initialState,
  reducers: {
    setMebel(state, action) {
      state.mebel = action.payload;
    },
    setFilteredMebel(state, action) {
      state.filteredMebel = action.payload;
    },
    setSearch(state, action) {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMebel.pending, (state) => {
        state.mebelLoading = "loading";
      })
      .addCase(fetchMebel.fulfilled, (state, action) => {
        state.mebelLoading = "success";
        state.mebel = action.payload;
      })
      .addCase(fetchMebel.rejected, (state) => {
        state.mebelLoading = "error";
      })
      .addDefaultCase(() => {});
  },
});

export const { setMebel, setFilteredMebel, setSearch } = mebelSlice.actions;
export default mebelSlice.reducer;
