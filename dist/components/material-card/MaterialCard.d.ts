import type { SxProps, Theme } from "@mui/material/styles";
export interface MaterialCardProps {
    coverUrl?: string;
    coverAlt?: string;
    title: string;
    description: string;
    sx?: SxProps<Theme>;
}
/** Card com capa e textos (biblioteca / catálogo). */
export declare function MaterialCard({ coverUrl, coverAlt, title, description, sx, }: MaterialCardProps): import("react/jsx-runtime").JSX.Element;
