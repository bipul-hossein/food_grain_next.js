"use client";

import AuthProvider from "@/contexts/AuthProvider";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

const Layout = ({ children }) => {
  return (
    <AuthProvider>
      <Provider store={store}>{children}</Provider>
    </AuthProvider>
  );
};

export default Layout;
