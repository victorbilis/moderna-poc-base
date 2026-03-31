import type { SxProps, Theme } from "@mui/material/styles";
import type { ReactNode } from "react";
export interface QuickAccessGridProps {
    children: ReactNode;
    sx?: SxProps<Theme>;
}
/** Grid responsivo (4 → 2 → 1 colunas). */
export declare function QuickAccessGrid({ children, sx }: QuickAccessGridProps): import("react/jsx-runtime").JSX.Element;
