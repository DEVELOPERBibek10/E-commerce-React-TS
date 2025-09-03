import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./Features/cartSlice"

export const store = configureStore({
  reducer: {
    Cart: CartReducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
  