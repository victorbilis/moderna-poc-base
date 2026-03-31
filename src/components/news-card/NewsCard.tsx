import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type { SxProps, Theme } from "@mui/material/styles";
import { educationalColors, educationalShadows } from "@/lib/educationalPalette";

export interface NewsCardProps {
  timeLeft: string;
  title: string;
  line1: string;
  line2: string;
  sx?: SxProps<Theme>;
}

/** Card de destaque (ex.: novidade / simulado) em carrossel. */
export function NewsCard({ timeLeft, title, line1, line2, sx }: NewsCardProps) {
  return (
    <Box
      sx={[
        {
          flexShrink: 0,
          minWidth: 240,
          bgcolor: educationalColors.white,
          p: 2,
          borderRadius: "12px",
          boxShadow: educationalShadows.card,
        },
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
    >
      <Typography sx={{ fontSize: 12, color: educationalColors.muted }}>{timeLeft}</Typography>
      <Typography
        sx={{
          fontSize: 16,
          fontWeight: 600,
          color: educationalColors.heading,
          mt: 1,
        }}
      >
        {title}
      </Typography>
      <Typography sx={{ fontSize: 12, color: educationalColors.muted, mt: 1 }}>{line1}</Typography>
      <Typography sx={{ fontSize: 12, color: educationalColors.muted, mt: 0.5 }}>{line2}</Typography>
    </Box>
  );
}
