import * as React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import GlobalStyles from "@mui/material/GlobalStyles";
import { StyledEngineProvider } from "@mui/material/styles";
import type { Theme } from "@mui/material/styles";
import { createBaseTheme } from "./createBaseTheme";

const layerOrder = "@layer theme, base, mui, components, utilities;";

export interface BaseThemeProviderProps {
  children: React.ReactNode;
  theme?: Theme;
}

export function BaseThemeProvider({ children, theme }: BaseThemeProviderProps) {
  const value = theme ?? createBaseTheme();

  return (
    <StyledEngineProvider enableCssLayer>
      <GlobalStyles styles={layerOrder} />
      <ThemeProvider theme={value}>
        <CssBaseline enableColorScheme />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
