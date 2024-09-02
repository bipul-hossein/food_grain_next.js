import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import createWebStorage from "redux-persist/es/storage/createWebStorage";
import userSlice from "./features/user/userSlice";

// export function createPersistStore() {
//   const isServer = typeof window === "undefined";
//   if (isServer) {
//     return {
//       getItem() {
//         return Promise.resolve(null);
//       },
//       setItem() {
//         return Promise.resolve();
//       },
//       removeItem() {
//         return Promise.resolve();
//       },
//     };
//   }
//   return createWebStorage("local");
// }
// const storage =
//   typeof window !== "undefined"
//     ? createWebStorage("local")
//     : createPersistStore();

// const persistConfig = {
//   key: "root",
//   version: 1,
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, cartReducer);
// const persistedUserReducer = persistReducer(persistConfig, userSlice);

//MIDDLEWARE

const localStorageMiddleware = ({ getState }) => {
  return next => action => {
    const result = next(action);
    localStorage.setItem('applicationState', JSON.stringify(getState()));
    return result;
  };
};

const reHydrateStore = () => {
  if (localStorage.getItem('applicationState') !== null) {
    return JSON.parse(localStorage.getItem('applicationState')); // re-hydrate the store
  }
};


export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userSlice,
    // cart: persistedReducer,
    // user: persistedUserReducer,
  },
  preloadedState: reHydrateStore(),
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(localStorageMiddleware),

  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
 
});
// export default store;
// export let persistor = persistStore(store);
