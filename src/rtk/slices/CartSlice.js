import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  initialState: [],
  name: "cartslice",
  reducers: {
    addToCart: (state, action) => {
      const findedProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (findedProduct) {
        findedProduct.quantity += 1;
      } else {
        if (action.payload.hasOwnProperty("quantity")) {
          state.push(action.payload);
        } else {
          const ProductClone = { ...action.payload, quantity: 1 };
          state.push(ProductClone);
        }
      }
    },
    deleteFromCart: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
    clearCart: (state, action) => {
      return [];
    },
  },
});

export const { addToCart, deleteFromCart, clearCart } = CartSlice.actions;
export default CartSlice.reducer;
