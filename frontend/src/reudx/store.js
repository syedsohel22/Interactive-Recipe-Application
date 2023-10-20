import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./authReducer/userSlice";

export const store = configureStore({
  reducer: { user: userReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
