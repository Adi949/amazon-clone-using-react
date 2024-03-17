import { createSlice } from "@reduxjs/toolkit";

const basket = createSlice({
  name: "basket",
  initialState: {
    items: [],
    len: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quan++;
      } else {
        state.items.push({
          ...action.payload,
          quan: 1,
        });
        state.len = state.items.length;
      }
    },
    deleteFromCart: (state, action) => {
      const removeitem = state.items.filter(
        (item) => item.id !== action.payload.id
      );
      state.items = removeitem;
      state.len = state.items.length;
    },
    increment: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);

      item.quan++;
      // item.id === action.payload.id;
      // console.log(state.quan);
    },
    decrement: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item.quan === 1) {
        state.quan = 1;
      } else {
        item.quan--;
      }
    },
  },
});

export const { addToCart, deleteFromCart, increment, decrement } =
  basket.actions;
export default basket.reducer;
