"use client";

import React, { useMemo } from "react";
import { Provider, useSelector } from "react-redux";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { getDesignTokens } from "../mui/theme";
import ColorModeContext from "../mui/ColorModeContext";
import Navbar from "./Navbar";
// import Footer from "./Footer";
import { store } from "../redux/store";

function InnerClientWrapper({ children }) {
  const mode = useSelector((state) => state.theme.mode); // <-- Live from Redux

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {}, // No need to change mode here
    }),
    []
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <main>{children}</main>
        {/* <Footer /> */}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default function ClientWrapper({ children }) {
  return (
    <Provider store={store}>
      <InnerClientWrapper>{children}</InnerClientWrapper>
    </Provider>
  );
}
