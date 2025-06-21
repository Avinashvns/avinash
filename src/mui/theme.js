// export const getDesignTokens = (mode) => ({
//   palette: {
//     mode,
//     ...(mode === "light"
//       ? {
//           primary: { main: "#1976d2" },
//           background: { default: "#fff", paper: "#fff" },
//         }
//       : {
//           primary: { main: "#90caf9" },
//           background: { default: "#121212", paper: "#121212" },
//         }),
//   },
// });

import { createTheme, responsiveFontSizes } from '@mui/material/styles';

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: { main: '#11998e' }, // solid color matching gradient
          background: { default: '#f4f6f8', paper: '#fff' },
          text: {
            primary: '#000',
            secondary: '#555',
            disabled: '#999',
          },
        }
      : {
          primary: { main: '#11998e' }, // same solid matching gradient
          background: { default: '#121212', paper: '#1e1e1e' },
          text: {
            primary: '#fff',
            secondary: '#ccc',
            disabled: '#777',
          },
        }),
  },
  typography: {
    fontFamily: `'Roboto', sans-serif`,
    h1: { fontSize: '2rem', fontWeight: 700 },
    body1: { fontSize: '1rem' },
  },
  shape: {
    borderRadius: 8,
  },
});




export const createAppTheme = (mode) => {
  let theme = createTheme(getDesignTokens(mode));
  theme = responsiveFontSizes(theme);
  return theme;
};
