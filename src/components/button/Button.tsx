import MuiButton from "@mui/material/Button";
import type { ButtonProps as MuiButtonProps } from "@mui/material/Button";
import { cn } from "@/lib/cn";

export type ButtonVariant =
  | "default"
  | "primary"
  | "outline"
  | "secondary"
  | "ghost"
  | "destructive"
  | "link";

export type ButtonSize =
  | "default"
  | "xs"
  | "sm"
  | "lg"
  | "icon"
  | "icon-xs"
  | "icon-sm"
  | "icon-lg";

export interface ButtonProps extends Omit<MuiButtonProps, "variant" | "size" | "color" | "sx" | "style"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

function mapVariant(variant: ButtonVariant): Pick<MuiButtonProps, "variant" | "color"> {
  switch (variant) {
    case "default":
    case "primary":
      return { variant: "contained", color: "primary" };
    case "outline":
      return { variant: "outlined", color: "primary" };
    case "secondary":
      return { variant: "contained", color: "secondary" };
    case "ghost":
      return { variant: "text", color: "primary" };
    case "destructive":
      return { variant: "text", color: "error" };
    case "link":
      return { variant: "text", color: "primary" };
    default:
      return { variant: "contained", color: "primary" };
  }
}

function mapSize(size: ButtonSize): MuiButtonProps["size"] {
  switch (size) {
    case "xs":
    case "sm":
    case "icon-xs":
    case "icon-sm":
      return "small";
    case "lg":
    case "icon-lg":
      return "large";
    case "icon":
      return "medium";
    default:
      return "medium";
  }
}

function variantClassName(variant: ButtonVariant): string {
  switch (variant) {
    case "destructive":
      return "bg-red-500/10 text-red-700 hover:bg-red-500/20 dark:bg-red-500/15 dark:text-red-300 dark:hover:bg-red-500/25";
    case "link":
      return "underline underline-offset-4";
    default:
      return "";
  }
}

function sizeClassName(size: ButtonSize): string {
  switch (size) {
    case "xs":
      return "min-h-6 px-2 py-0.5 text-xs";
    case "icon":
      return "min-h-10 min-w-10 p-2";
    case "icon-xs":
      return "min-h-6 min-w-6 p-0.5 [&_svg]:size-3";
    case "icon-sm":
      return "min-h-7 min-w-7 p-[0.35rem]";
    case "icon-lg":
      return "min-h-9 min-w-9 p-2";
    default:
      return "";
  }
}

export function Button({
  variant = "default",
  size = "default",
  className,
  ...props
}: ButtonProps) {
  const { variant: muiVariant, color } = mapVariant(variant);
  const muiSize = mapSize(size);

  return (
    <MuiButton
      variant={muiVariant}
      color={color}
      size={muiSize}
      disableElevation
      className={cn("font-medium normal-case", variantClassName(variant), sizeClassName(size), className)}
      {...props}
    />
  );
}
