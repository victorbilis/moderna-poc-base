import type { SxProps, Theme } from "@mui/material/styles";
import type { ReactNode } from "react";
export interface HorizontalCarouselProps {
    children: ReactNode;
    sx?: SxProps<Theme>;
}
/** Faixa horizontal com rolagem (listas de cards). */
export declare function HorizontalCarousel({ children, sx }: HorizontalCarouselProps): import("react/jsx-runtime").JSX.Element;
