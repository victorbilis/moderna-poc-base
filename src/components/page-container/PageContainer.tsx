import Box from "@mui/material/Box";
import type { SxProps, Theme } from "@mui/material/styles";
import type { ReactNode } from "react";
import { educationalColors } from "@/lib/educationalPalette";

export interface PageContainerProps {
  children: ReactNode;
  sx?: SxProps<Theme>;
}

/** Container de conteúdo central (max-width, padding, fundo de página). */
export function PageContainer({ children, sx }: PageContainerProps) {
  return (
    <Box
      sx={[
        {
          maxWidth: 1280,
          mx: "auto",
          px: 3,
          py: 3,
          bgcolor: educationalColors.pageBg,
          boxSizing: "border-box",
          minHeight: "100%",
        },
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
    >
      {children}
    </Box>
  );
}
