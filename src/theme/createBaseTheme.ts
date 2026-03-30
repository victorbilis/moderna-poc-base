import { createTheme } from "@mui/material/styles";

export function createBaseTheme() {
  return createTheme({
    cssVariables: true,
    palette: {
      mode: "light",
      primary: { main: "#3D637D" },
      secondary: { main: "#1d4ed8" },
      background: { default: "#f8fafc", paper: "#ffffff" },
      error: { main: "#dc2626" },
    },
    typography: {
      fontFamily: [
        '"Nunito Variable"',
        '"Nunito"',
        "system-ui",
        "Segoe UI",
        "sans-serif",
      ].join(","),
    },
    shape: { borderRadius: 8 },
  });
}
