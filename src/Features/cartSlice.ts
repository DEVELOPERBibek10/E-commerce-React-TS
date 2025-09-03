import type { CartProduct, Product } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface cartData {
  cartItems: CartProduct[];
  cartBill: { subTotal: number; shipping: number; tax: number; total: number };
  totalQuantity: number;
}

const initialState: cartData = {
  cartItems: [],
  cartBill: { subTotal: 0, shipping: 0, tax: 0, total: 0 },
  totalQuantity: 0,
};

export const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>): void => {
      const item = action.payload;
      const cartStatus = state.cartItems.some(
        (cartItem) => cartItem.id === item.id
      );
      if (!cartStatus) {
        state.cartItems.push({ ...item, quantity: 1 });
      } else {
        return;
      }
    },
    removeFromCart: (state, action: PayloadAction<{ id: number }>): void => {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
    },
    setQuantity: (
      state,
      action: PayloadAction<{ id: number; operation: number }>
    ): void => {
      const { id, operation } = action.payload;
      state.cartItems = state.cartItems.map((cartItem) => {
        return cartItem.id === id
          ? { ...cartItem, quantity: cartItem.quantity + operation }
          : cartItem;
      });
      state.cartItems = state.cartItems.filter(
        (cartItems) => cartItems.quantity >= 1
      );
    },
    setTotalQuantity: (state) => {
      state.totalQuantity = state.cartItems.reduce((total, cartItem) => {
        return total + cartItem.quantity;
      }, 0);
    },
  },
});

export const { addToCart, removeFromCart, setQuantity, setTotalQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
