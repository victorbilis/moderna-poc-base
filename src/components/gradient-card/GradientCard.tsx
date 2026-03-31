import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import type { SxProps, Theme } from "@mui/material/styles";
import type { ReactNode } from "react";
import { educationalColors } from "@/lib/educationalPalette";

export interface GradientCardProps {
  title: string;
  icon?: ReactNode;
  onClick?: () => void;
  sx?: SxProps<Theme>;
}

/** Card com gradiente (atalhos / acesso rápido). */
export function GradientCard({ title, icon, onClick, sx }: GradientCardProps) {
  const inner = (
    <Box
      sx={{
        height: 120,
        borderRadius: "16px",
        p: 2.5,
        display: "flex",
        alignItems: "center",
        gap: 1.5,
        color: "#FFFFFF",
        fontWeight: 600,
        fontSize: 16,
        background: `linear-gradient(135deg, ${educationalColors.primary}, ${educationalColors.secondary})`,
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      {icon != null ? (
        <Box sx={{ display: "flex", color: "#FFFFFF", flexShrink: 0, "& svg": { fontSize: 24 } }}>{icon}</Box>
      ) : null}
      <Typography
        component="span"
        sx={{
          color: "inherit",
          fontWeight: 600,
          fontSize: 16,
          textAlign: "left",
        }}
      >
        {title}
      </Typography>
    </Box>
  );

  if (onClick) {
    return (
      <ButtonBase
        focusRipple
        onClick={onClick}
        sx={[
          {
            display: "block",
            width: "100%",
            borderRadius: "16px",
            textAlign: "left",
          },
          ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
        ]}
      >
        {inner}
      </ButtonBase>
    );
  }

  return (
    <Box sx={[{ width: "100%" }, ...(Array.isArray(sx) ? sx : sx ? [sx] : [])]}>{inner}</Box>
  );
}
