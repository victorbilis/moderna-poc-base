import * as React from "react";
import type { Theme } from "@mui/material/styles";
export interface BaseThemeProviderProps {
    children: React.ReactNode;
    theme?: Theme;
}
export declare function BaseThemeProvider({ children, theme }: BaseThemeProviderProps): import("react/jsx-runtime").JSX.Element;
