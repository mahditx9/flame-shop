import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  relatedProduct: [],
};

export const fetchRelated = createAsyncThunk(
  "categories/fetchRelated",
  async () => {},
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: {},
});
