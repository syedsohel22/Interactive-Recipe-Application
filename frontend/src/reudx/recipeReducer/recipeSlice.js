import { createSlice } from "@reduxjs/toolkit";

const initialState = { recipes: [], loading: false, error: false };

const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    recipeStart: (state) => {
      state.loading = true;
    },
    recipeSuccess: (state, action) => {
      state.recipes = action.payload;
      state.loading = false;
      state.error = false;
    },
    recipeFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { recipeFailure, recipeSuccess, recipeStart } =
  recipeSlice.actions;

export default recipeSlice.reducer;
