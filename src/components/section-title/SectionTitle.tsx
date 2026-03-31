import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import type { SxProps, Theme } from "@mui/material/styles";
import type { ReactNode } from "react";
import { educationalColors } from "@/lib/educationalPalette";

export interface SectionTitleProps {
  title: string;
  /** Conteúdo à direita (ex.: link “Ver todos →”). */
  action?: ReactNode;
  sx?: SxProps<Theme>;
}

/** Título de seção (18px semibold) com slot opcional à direita. */
export function SectionTitle({ title, action, sx }: SectionTitleProps) {
  return (
    <Box
      sx={[
        {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          mb: 2,
        },
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
    >
      <Typography
        component="h2"
        sx={{
          fontSize: 18,
          fontWeight: 600,
          color: educationalColors.heading,
          m: 0,
        }}
      >
        {title}
      </Typography>
      {action != null ? <Box sx={{ flexShrink: 0 }}>{action}</Box> : null}
    </Box>
  );
}

export interface SectionLinkActionProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
}

/** Link textual (cor primária, 14px). */
export function SectionLinkAction({ children, onClick, href }: SectionLinkActionProps) {
  if (href) {
    return (
      <Link
        href={href}
        underline="none"
        sx={{
          fontSize: 14,
          color: educationalColors.primary,
          cursor: "pointer",
          fontWeight: 500,
          "&:hover": { textDecoration: "underline" },
        }}
      >
        {children}
      </Link>
    );
  }
  return (
    <Link
      component="button"
      type="button"
      onClick={onClick}
      underline="none"
      sx={{
        fontSize: 14,
        color: educationalColors.primary,
        cursor: "pointer",
        fontWeight: 500,
        border: "none",
        background: "none",
        p: 0,
        font: "inherit",
        "&:hover": { textDecoration: "underline" },
      }}
    >
      {children}
    </Link>
  );
}
