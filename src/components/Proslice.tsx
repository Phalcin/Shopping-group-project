// redux/proSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../../type";

interface ProState {
  favoriteData: ProductType[];
  // other state properties...
}

const initialState: ProState = {
  favoriteData: [],
  // other initial state properties...
};

const proSlice = createSlice({
  name: "pro",
  initialState,
  reducers: {
    addToFavorite(state, action: PayloadAction<ProductType>) {
      state.favoriteData.push(action.payload);
    },
    removeFromFavorite(state, action: PayloadAction<ProductType>) {
      state.favoriteData = state.favoriteData.filter(
        (item) => item._id !== action.payload._id,
      );
    },
    // other reducers...
  },
});

export const { addToFavorite, removeFromFavorite } = proSlice.actions;

export default proSlice.reducer;
