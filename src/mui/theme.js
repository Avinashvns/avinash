import { createTheme } from "@mui/material/styles";

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: { main: "#1976d2" },
          background: { default: "#fafafa", paper: "#fff" },
        }
      : {
          // palette values for dark mode
          primary: { main: "#90caf9" },
          background: { default: "#121212", paper: "#1d1d1d" },
        }),
  },
});
