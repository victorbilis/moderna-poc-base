import type { IconButtonProps } from "@mui/material/IconButton";
export interface NotificationIconProps extends Omit<IconButtonProps, "children"> {
    /** Tamanho do ícone em px */
    iconSize?: number;
}
/** Botão de notificações (sino). */
export declare function NotificationIcon({ iconSize, size, sx, "aria-label": ariaLabel, ...props }: NotificationIconProps): import("react/jsx-runtime").JSX.Element;
