import Paper from "@mui/material/Paper";
import type { PaperProps } from "@mui/material/Paper";
import { educationalShadows } from "@/lib/educationalPalette";

export type SurfaceCardProps = PaperProps;

/** Card branco com sombra suave. */
export function SurfaceCard({ elevation = 0, sx, ...props }: SurfaceCardProps) {
  return (
    <Paper
      elevation={elevation}
      sx={[
        {
          bgcolor: "#FFFFFF",
          borderRadius: "12px",
          boxShadow: educationalShadows.card,
        },
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
      {...props}
    />
  );
}
