import toast from "react-hot-toast";
import { createSlice, current } from "@reduxjs/toolkit";
// import { useEffect, useState } from "react";

// const products = () => {
//   if (typeof window !== "undefined") {
//     return localStorage.getItem("products") !== null
//       ? JSON.parse(localStorage.getItem("products"))
//       : [];
//   }
// }; typeof window !== "undefined" ? window.
// const [count, setCount] = useState(null);

//   useEffect(() => {
//     const savedValue = window.localStorage.getItem("count");
//     setCount(savedValue ? Number(savedValue) : 0);
//   }, []);

//   useEffect(() => {
//     if (typeof count === "number") {
//       window.localStorage.setItem("count", count);
//     }
//   }, [count]);

// const [products, setProducts] = useState(null);

// useEffect(() => {
//   const savedValue = window.localStorage.getItem("products");
//   setProducts(savedValue ? JSON.parse(savedValue) : []);
// }, []);

// useEffect(() => {
//   if (typeof products === "undefined") {
//     window.localStorage.setItem("products", products);
//   }
// }, [products]);

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

        // localStorage.setItem(
        //   "products",
        //   JSON.stringify(current(state.products))
        // );
      }
    },
    increaseQuantity: (state, { payload }) => {
      const existingItem = state.products.find(
        (item) => item._id === payload._id
      );
      if (existingItem) {
        existingItem.quantity++;
      }

      // localStorage.setItem("products", JSON.stringify(current(state.products)));
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
      // localStorage.setItem("products", JSON.stringify(current(state.products)));
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
      // localStorage.setItem(
      //   "totalQuantity",
      //   JSON.stringify(state.totalQuantity)
      // );
      // localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));
    },

    deleteItem: (state, { payload }) => {
      state.products = state.products.filter(
        (item) => item._id !== payload?._id
      );
      // Dispatch a success toast
      toast.success("Product removed from cart");
      // localStorage.setItem("products", JSON.stringify(state.products));
      // localStorage.setItem(
      //   "totalQuantity",
      //   JSON.stringify(state.totalQuantity)
      // );
      // localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));
    },
    resetCart: (state) => {
      state.products = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
      // localStorage.removeItem("products", "totalQuantity", "totalAmount");
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  calculateTotals,
  deleteItem,
  resetCart,
} = cartSlice.actions;

export default cartSlice.reducer;
