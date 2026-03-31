import type { SxProps, Theme } from "@mui/material/styles";
import type { ReactNode } from "react";
export interface GradientCardProps {
    title: string;
    icon?: ReactNode;
    onClick?: () => void;
    sx?: SxProps<Theme>;
}
/** Card com gradiente (atalhos / acesso rápido). */
export declare function GradientCard({ title, icon, onClick, sx }: GradientCardProps): import("react/jsx-runtime").JSX.Element;
