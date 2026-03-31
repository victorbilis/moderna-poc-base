import Box from "@mui/material/Box";
import type { SxProps, Theme } from "@mui/material/styles";
import type { ReactNode } from "react";

export interface HorizontalCarouselProps {
  children: ReactNode;
  sx?: SxProps<Theme>;
}

/** Faixa horizontal com rolagem (listas de cards). */
export function HorizontalCarousel({ children, sx }: HorizontalCarouselProps) {
  return (
    <Box
      sx={[
        {
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          gap: 2,
          overflowX: "auto",
          pb: 1,
          scrollBehavior: "smooth",
          WebkitOverflowScrolling: "touch",
        },
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
    >
      {children}
    </Box>
  );
}
