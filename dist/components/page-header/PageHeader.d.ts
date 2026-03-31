import type { SxProps, Theme } from "@mui/material/styles";
import type { ReactNode } from "react";
export interface PageHeaderProps {
    greeting: string;
    dateLabel: string;
    userName: string;
    userRole: string;
    avatarSrc?: string;
    avatarAlt?: string;
    onNotificationClick?: () => void;
    /** Substitui o bloco padrão (sino + avatar + nome). */
    slotRight?: ReactNode;
    sx?: SxProps<Theme>;
}
/** Cabeçalho de página: saudação/data e área do usuário. */
export declare function PageHeader({ greeting, dateLabel, userName, userRole, avatarSrc, avatarAlt, onNotificationClick, slotRight, sx, }: PageHeaderProps): import("react/jsx-runtime").JSX.Element;
