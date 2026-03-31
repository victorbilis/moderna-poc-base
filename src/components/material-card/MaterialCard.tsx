import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import type { SxProps, Theme } from "@mui/material/styles";
import { educationalColors, educationalShadows } from "@/lib/educationalPalette";

export interface MaterialCardProps {
  coverUrl?: string;
  coverAlt?: string;
  title: string;
  description: string;
  sx?: SxProps<Theme>;
}

/** Card com capa e textos (biblioteca / catálogo). */
export function MaterialCard({
  coverUrl,
  coverAlt = "",
  title,
  description,
  sx,
}: MaterialCardProps) {
  return (
    <Card
      elevation={0}
      sx={[
        {
          flexShrink: 0,
          width: 220,
          bgcolor: educationalColors.white,
          borderRadius: "12px",
          p: 1.5,
          boxShadow: educationalShadows.card,
          boxSizing: "border-box",
        },
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
    >
      {coverUrl ? (
        <Box
          component="img"
          src={coverUrl}
          alt={coverAlt}
          sx={{
            width: "100%",
            height: 120,
            objectFit: "cover",
            borderRadius: "8px",
            display: "block",
          }}
        />
      ) : (
        <Box
          sx={{
            height: 120,
            borderRadius: "8px",
            bgcolor: "grey.200",
          }}
        />
      )}
      <CardContent sx={{ p: 0, pt: 1, "&:last-child": { pb: 0 } }}>
        <Typography sx={{ fontSize: 14, fontWeight: 600, color: educationalColors.heading }}>{title}</Typography>
        <Typography sx={{ fontSize: 12, color: educationalColors.muted, mt: 0.5 }}>{description}</Typography>
      </CardContent>
    </Card>
  );
}
