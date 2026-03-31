import Box from "@mui/material/Box";
import type { SxProps, Theme } from "@mui/material/styles";
import type { ReactNode } from "react";

export interface QuickAccessGridProps {
  children: ReactNode;
  sx?: SxProps<Theme>;
}

/** Grid responsivo (4 → 2 → 1 colunas). */
export function QuickAccessGrid({ children, sx }: QuickAccessGridProps) {
  return (
    <Box
      sx={[
        {
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          },
          gap: 2,
        },
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
    >
      {children}
    </Box>
  );
}
