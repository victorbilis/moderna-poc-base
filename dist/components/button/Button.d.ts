import type { ButtonProps as MuiButtonProps } from "@mui/material/Button";
export type ButtonVariant = "default" | "primary" | "outline" | "secondary" | "ghost" | "destructive" | "link";
export type ButtonSize = "default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg";
export interface ButtonProps extends Omit<MuiButtonProps, "variant" | "size" | "color" | "sx" | "style"> {
    variant?: ButtonVariant;
    size?: ButtonSize;
}
export declare function Button({ variant, size, className, ...props }: ButtonProps): import("react/jsx-runtime").JSX.Element;
