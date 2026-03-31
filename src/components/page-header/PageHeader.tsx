import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { SxProps, Theme } from "@mui/material/styles";
import type { ReactNode } from "react";
import { NotificationIcon } from "@/components/notification-icon";
import { UserAvatar } from "@/components/user-avatar";
import { educationalColors } from "@/lib/educationalPalette";

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
export function PageHeader({
  greeting,
  dateLabel,
  userName,
  userRole,
  avatarSrc,
  avatarAlt,
  onNotificationClick,
  slotRight,
  sx,
}: PageHeaderProps) {
  return (
    <Box
      sx={[
        {
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "flex-start", sm: "center" },
          justifyContent: "space-between",
          gap: 2,
        },
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
    >
      <Box>
        <Typography
          component="h1"
          sx={{
            fontSize: 24,
            fontWeight: 600,
            color: educationalColors.heading,
            m: 0,
          }}
        >
          {greeting}
        </Typography>
        <Typography sx={{ fontSize: 14, color: educationalColors.muted, mt: 0.5 }}>{dateLabel}</Typography>
      </Box>

      {slotRight ?? (
        <Stack direction="row" spacing={1.5} alignItems="center">
          <NotificationIcon onClick={onNotificationClick} />
          <UserAvatar src={avatarSrc} alt={avatarAlt ?? userName}>
            {!avatarSrc ? userName.charAt(0).toUpperCase() : null}
          </UserAvatar>
          <Stack spacing={0} alignItems="flex-start">
            <Typography sx={{ fontSize: 14, fontWeight: 600, color: educationalColors.heading }}>
              {userName}
            </Typography>
            <Typography sx={{ fontSize: 12, color: educationalColors.muted }}>{userRole}</Typography>
          </Stack>
        </Stack>
      )}
    </Box>
  );
}
