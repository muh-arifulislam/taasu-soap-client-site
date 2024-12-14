import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { TCartItem } from "../../../types";

// Define a type for the slice state
interface CartState {
  data: TCartItem[];
}

// Define the initial state using that type
const initialState: CartState = {
  data: [],
};

export const cartSlice = createSlice({
  name: "cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<TCartItem>) => {
      const findItem = state.data.find(
        (item) => item.product === action.payload.product
      );
      if (!findItem) {
        state.data.push(action.payload);
      }
    },

    increaseQuantity: (
      state,
      action: PayloadAction<{
        id: string;
      }>
    ) => {
      const findItem = state.data.find(
        (item) => item.product === action.payload.id
      );
      if (findItem) {
        findItem.quantity += 1;
      }
    },

    decreaseQuantity: (
      state,
      action: PayloadAction<{
        id: string;
      }>
    ) => {
      const findItem = state.data.find(
        (item) => item.product === action.payload.id
      );
      if (findItem && findItem?.quantity > 1) {
        findItem.quantity -= 1;
      }
    },

    updateCartQuantity: (
      state,
      action: PayloadAction<{
        id: string;
        quantity: number;
      }>
    ) => {
      const findItem = state.data.find(
        (item) => item.product === action.payload.id
      );
      if (findItem && action.payload.quantity > 0) {
        findItem.quantity = action.payload.quantity;
      }
    },

    removeFromCart: (state, action: PayloadAction<{ id: string }>) => {
      const filteredItems = state.data.filter(
        (item) => !(item.product === action.payload.id)
      );
      state.data = filteredItems;
    },

    emptyCart: (state) => {
      state.data = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  updateCartQuantity,
  emptyCart,
} = cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCart = (state: RootState) => state.cart.data;

export default cartSlice.reducer;
