import { configureStore } from "@reduxjs/toolkit";
import wishSlice from "./slice/wishSlice";

const store = configureStore({
  reducer: {
    wish: wishSlice,
  },
});

export default store;
