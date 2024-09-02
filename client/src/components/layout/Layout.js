"use client";

import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const Layout = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
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
      </Provider>
    </QueryClientProvider>
  );
};

export default Layout;
