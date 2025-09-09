import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./Features/cartSlice";
import AuthReducer from "./Features/AuthSlice";

export const store = configureStore({
  reducer: {
    Auth: AuthReducer,
    Cart: CartReducer,
  },
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("cartItems", JSON.stringify(state.Cart.cartItems));
  localStorage.setItem("cartBill", JSON.stringify(state.Cart.cartBill));
  localStorage.setItem(
    "totalQuantity",
    JSON.stringify(state.Cart.totalQuantity)
  );
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
