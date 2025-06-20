"use client";

import React, { useMemo } from "react";
import { Provider, useSelector, useDispatch } from "react-redux";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { getDesignTokens } from "../mui/theme";
import ColorModeContext from "../mui/ColorModeContext";
import Navbar from "./Navbar";
// import Footer from "./Footer";
import { store } from "../redux/store";
import { toggleMode } from "../redux/themeSlice";

function InnerClientWrapper({ children }) {
  const mode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => dispatch(toggleMode()),
    }),
    [dispatch]
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <main style={{ padding: "2rem" }}>{children}</main>
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
