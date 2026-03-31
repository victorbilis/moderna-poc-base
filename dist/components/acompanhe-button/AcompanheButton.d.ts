import type { ButtonProps } from "@mui/material/Button";
export type AcompanheButtonProps = Omit<ButtonProps, "variant">;
/** Botão de ação primária (estilo “Acompanhe”). */
export declare function AcompanheButton({ sx, children, ...props }: AcompanheButtonProps): import("react/jsx-runtime").JSX.Element;
