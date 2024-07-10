import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DarkModeContextProvider } from "./context/darkModeContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthContextProvider } from "./context/authContext";
// import { Routing } from "./Routing";
// import { RouterProvider } from "react-router-dom";
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          {/* <RouterProvider router={Routing} /> */}
          <App />
        </AuthContextProvider>
      </QueryClientProvider>
    </DarkModeContextProvider>
  </React.StrictMode>
);
