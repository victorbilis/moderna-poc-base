import type { SxProps, Theme } from "@mui/material/styles";
export interface NewsCardProps {
    timeLeft: string;
    title: string;
    line1: string;
    line2: string;
    sx?: SxProps<Theme>;
}
/** Card de destaque (ex.: novidade / simulado) em carrossel. */
export declare function NewsCard({ timeLeft, title, line1, line2, sx }: NewsCardProps): import("react/jsx-runtime").JSX.Element;
