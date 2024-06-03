"use client";

import { store, persistor } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";
import AuthProvider from "@/contexts/AuthProvider";

const queryClient = new QueryClient();

const Layout = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <AuthProvider>
          <PersistGate loading={null} persistor={persistor}>
            <Toaster
              position="top-right"
              reverseOrder={false}
              gutter={8}
              toastOptions={{
                className: "",
                duration: 5000,
                style: {
                  background: "#363636",
                  color: "#fff",
                },
                success: {
                  duration: 1000,
                  theme: {
                    primary: "green",
                    secondary: "black",
                  },
                },
              }}
            />
            {children}
          </PersistGate>
        </AuthProvider>
      </Provider>
    </QueryClientProvider>
  );
};

export default Layout;
