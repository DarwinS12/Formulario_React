import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { MaterialDesignContent } from "notistack";
import { styled } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";

const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
  "&.notistack-MuiContent-success": {
    backgroundColor: "#FC9B0C",
  },
  "&.notistack-MuiContent-error": {
    backgroundColor: "#FC9B0C",
  },
}));

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <SnackbarProvider
        autoHideDuration={4000}
        Components={{
          success: StyledMaterialDesignContent,
          error: StyledMaterialDesignContent,
        }}
      >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SnackbarProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
