import { createTheme } from "@mui/material/styles";

export function createBaseTheme() {
  return createTheme({
    cssVariables: true,
    palette: {
      mode: "light",
      primary: { main: "#2563eb" },
      secondary: { main: "#1d4ed8" },
      background: { default: "#f8fafc", paper: "#ffffff" },
      error: { main: "#dc2626" },
    },
    typography: {
      fontFamily: [
        "Geist Variable",
        "Geist",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica",
        "Arial",
        "sans-serif",
      ].join(","),
    },
    shape: { borderRadius: 8 },
  });
}
