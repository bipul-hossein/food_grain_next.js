import toast from "react-hot-toast";
import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  // localStorage.getItem("products") !== null
  //   ? JSON.parse(localStorage.getItem("products"))
  //   : [],

  totalQuantity: 0,
  // localStorage.getItem("totalQuantity") !== null
  //   ? JSON.parse(localStorage.getItem("totalQuantity"))
  //   : 0,
  totalAmount: 0,
  // localStorage.getItem("totalAmount") !== null
  //   ? JSON.parse(localStorage.getItem("totalAmount"))
  //   : 0,
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const existingItem = state.products.find(
        (item) => item._id === payload._id
      );
      if (existingItem) {
        existingItem.quantity += payload?.quantity;
      } else {
        state.products.push(payload);

        // Dispatch a success toast
        toast.success("Product added to cart");
      }
    },
    increaseQuantity: (state, { payload }) => {
      const existingItem = state.products.find(
        (item) => item._id === payload._id
      );
      if (existingItem) {
        existingItem.quantity++;
      }

    },
    decreaseQuantity: (state, { payload }) => {
      const existingItem = state.products.find(
        (item) => item._id === payload._id
      );
      if (existingItem.quantity === 1) {
        existingItem.quantity = 1;
      } else {
        existingItem.quantity--;
      }
    },

    calculateTotals: (state) => {
      let totalQuantity = 0;
      let totalAmount = 0;
      state.products.forEach((item) => {
        totalQuantity += item.quantity;
        totalAmount += item.quantity * item.price;
      });
      state.totalQuantity = totalQuantity;
      state.totalAmount = totalAmount;
    },

    deleteItem: (state, { payload }) => {
      state.products = state.products.filter(
        (item) => item._id !== payload?._id
      );
      // Dispatch a success toast
      toast.success("Product removed from cart");
    },
    resetCart: (state) => {
      state.products = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  calculateTotals,
  deleteItem,
  resetCart,
} = cartSlice.actions;

export default cartSlice.reducer;
