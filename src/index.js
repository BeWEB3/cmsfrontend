import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Toaster } from "sonner";
import { QueryClient, QueryClientProvider } from "react-query";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

// Initialize the QueryClient
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Pass the QueryClient to QueryClientProvider */}
    <QueryClientProvider client={queryClient}>
      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
      >
        <App />
      </GoogleReCaptchaProvider>
    </QueryClientProvider>
    <Toaster />
  </React.StrictMode>
);
