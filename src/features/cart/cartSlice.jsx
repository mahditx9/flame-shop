import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    increaseItemQuantity(state, action) {
      // PAYLOAD IS ID
      const product = state.cart.find((el) => el.id == action.payload);
      product.quantity++;
      product.totalPrice = product.quantity * product.price;
    },
  },
});

export const getProductQuantity = (id) => (store) =>
  store.cart.cart?.find((item) => item.id === id)?.quantity ?? 0;
export const getCart = () => (store) => store.cart.cart;
export const { addItem, increaseItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;
