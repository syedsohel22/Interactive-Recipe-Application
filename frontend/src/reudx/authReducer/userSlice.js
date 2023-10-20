import { createSlice } from "@reduxjs/toolkit";

const initialState = { currentUser: null, loading: false, error: false };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerStart: (state) => {
      state.loading = true;
    },
    registerSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = false;
    },
    registerFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { registerStart, registerFailure, registerSuccess } =
  userSlice.actions;

export default userSlice.reducer;