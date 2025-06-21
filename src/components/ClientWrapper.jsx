"use client";

import React, { useMemo } from "react";
import { Provider, useSelector } from "react-redux";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { createAppTheme } from "../mui/theme";
import Navbar from "./Navbar";
import { store } from "../redux/store";

function InnerClientWrapper({ children }) {
  const mode = useSelector((state) => state.theme.mode);
  const theme = useMemo(() => createAppTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <main>{children}</main>
    </ThemeProvider>
  );
}

export default function ClientWrapper({ children }) {
  return (
    <Provider store={store}>
      <InnerClientWrapper>{children}</InnerClientWrapper>
    </Provider>
  );
}
