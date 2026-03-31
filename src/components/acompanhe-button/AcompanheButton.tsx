import Button from "@mui/material/Button";
import type { ButtonProps } from "@mui/material/Button";
import { educationalColors } from "@/lib/educationalPalette";

export type AcompanheButtonProps = Omit<ButtonProps, "variant">;

const defaultSx = {
  bgcolor: educationalColors.primary,
  color: "#FFFFFF",
  px: 2,
  py: 1,
  borderRadius: "8px",
  fontSize: 14,
  fontWeight: 500,
  textTransform: "none",
  boxShadow: "none",
  "&:hover": {
    bgcolor: "#2563c4",
    boxShadow: "none",
  },
} as const;

/** Botão de ação primária (estilo “Acompanhe”). */
export function AcompanheButton({ sx, children = "Acompanhe", ...props }: AcompanheButtonProps) {
  return (
    <Button
      variant="contained"
      disableElevation
      sx={[defaultSx, ...(Array.isArray(sx) ? sx : sx ? [sx] : [])]}
      {...props}
    >
      {children}
    </Button>
  );
}
