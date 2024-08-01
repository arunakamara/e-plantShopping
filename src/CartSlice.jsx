import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find((item) => item.name === name);
      if (existingItem) {
        return;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const { name, cost, image, quantity} = action.payload;
      state.items.pop({ name, cost, image, quantity});

    },

    decreaseQuantity: (state, action) => {
      const { name } = action.payload;
      const itemToRemove = state.items.find((item) => item.name === name);
      if (itemToRemove.quantity === 1) {
        state.items = state.items.filter((item) => item.name !== name);
      }

      itemToRemove.quantity--;
    },

    increaseQuantity: (state, action) => {
      const { name } = action.payload;
      const itemToUpdate = state.items.find((item) => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity++;
      }
    },
  },
});

export const { addItem, removeItem, decreaseQuantity, increaseQuantity } =
  CartSlice.actions;

export default CartSlice.reducer;
