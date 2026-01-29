"use client";

import { SnackbarProvider as NotistackProvider } from "notistack";
import React from "react";

interface SnackbarProviderProps {
  children: React.ReactNode;
}

const SnackbarProvider: React.FC<SnackbarProviderProps> = ({ children }) => {
  return (
    <NotistackProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      autoHideDuration={3000}
    >
      {children}
    </NotistackProvider>
  );
};

export default SnackbarProvider;
