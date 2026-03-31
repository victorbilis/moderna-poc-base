import IconButton from "@mui/material/IconButton";
import type { IconButtonProps } from "@mui/material/IconButton";
import SvgIcon from "@mui/material/SvgIcon";
import { educationalColors } from "@/lib/educationalPalette";

function BellIcon(props: { fontSize?: number }) {
  const s = props.fontSize ?? 22;
  return (
    <SvgIcon sx={{ fontSize: s }} viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M12 22c1.1 0 2-.9 2-2h-4a2 2 0 0 0 2 2zm6-6V11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"
      />
    </SvgIcon>
  );
}

export interface NotificationIconProps extends Omit<IconButtonProps, "children"> {
  /** Tamanho do ícone em px */
  iconSize?: number;
}

/** Botão de notificações (sino). */
export function NotificationIcon({
  iconSize = 22,
  size = "medium",
  sx,
  "aria-label": ariaLabel = "Notificações",
  ...props
}: NotificationIconProps) {
  return (
    <IconButton
      size={size}
      aria-label={ariaLabel}
      sx={[
        { color: educationalColors.heading },
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
      {...props}
    >
      <BellIcon fontSize={iconSize} />
    </IconButton>
  );
}
