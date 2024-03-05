"use client";

import { store } from "@/redux/store";
// import { persistor, store } from "@/redux/store";
// // import { store } from "@/redux/store";
// import { SessionProvider } from "next-auth/react";
// import React from "react";
// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";

// const Layout = ({ children }) => {
//   return (
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <SessionProvider>{children}</SessionProvider>
//       </PersistGate>
//     </Provider>
//   );
// };

// export default Layout;

import React from "react";
import { Provider } from "react-redux";

const Layout = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Layout;
