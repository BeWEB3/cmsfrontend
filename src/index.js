import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Toaster } from "sonner";
import { QueryClient, QueryClientProvider } from "react-query";

// Initialize the QueryClient
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Pass the QueryClient to QueryClientProvider */}
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
    <Toaster />
  </React.StrictMode>
);
