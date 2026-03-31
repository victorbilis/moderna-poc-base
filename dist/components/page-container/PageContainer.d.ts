import type { SxProps, Theme } from "@mui/material/styles";
import type { ReactNode } from "react";
export interface PageContainerProps {
    children: ReactNode;
    sx?: SxProps<Theme>;
}
/** Container de conteúdo central (max-width, padding, fundo de página). */
export declare function PageContainer({ children, sx }: PageContainerProps): import("react/jsx-runtime").JSX.Element;
