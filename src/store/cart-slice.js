import { createSlice } from "@reduxjs/toolkit";

createSlice({
  name: "cart",
  initialState: { items: [], totalQuantity: 0, totalAmount: 0 },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id); //checking equal item
      if (!existingItem) {
        // If the item isn't added before add it
        state.items.push({
          itemId: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++; //If the item added already, increase quantity and totalprice
        existingItem.totalPrice = totalPrice + existingItem.price;
      }
    },
    removeItemFromCart() {},
  },
});
