import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const wishSlice = createSlice({
  name: "wish",
  initialState: initialState,
  reducers: {
    addWish: (state, action) => {
      state.push(action.payload);
    },
    deleteWish: (state, action) => {
      return state.filter((s) => s.id !== action.payload);
    },
  },
});

export const { addWish, deleteWish } = wishSlice.actions;
export default wishSlice.reducer;
