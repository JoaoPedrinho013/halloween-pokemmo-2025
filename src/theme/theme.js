import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#fb923c' },
    secondary: { main: '#9333ea' },
    background: {
      default: '#000000',
      paper: '#111827',
    },
    text: {
      primary: '#ffffff',
      secondary: '#d1d5db',
    },
  },
  typography: {
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
});
