import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import userSlice from "./features/user/userSlice";

//MIDDLEWARE

// const localStorageMiddleware = ({ getState }) => {
//   return next => action => {
//     const result = next(action);
//     localStorage.setItem('applicationState', JSON.stringify(getState()));
//     return result;
//   };
// };

// const reHydrateStore = () => {

//     if (localStorage.getItem('applicationState') !== null) {
//       return JSON.parse(localStorage.getItem('applicationState')); 
//     }
//   };





export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userSlice,
  },
  // preloadedState:reHydrateStore(),  
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(),
  // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(localStorageMiddleware),
});

