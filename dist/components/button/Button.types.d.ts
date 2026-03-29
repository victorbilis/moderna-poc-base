import type * as React from "react";
import type { VariantProps } from "class-variance-authority";
import type { buttonVariants } from "./buttonVariants";
export type ButtonVariant = NonNullable<VariantProps<typeof buttonVariants>["variant"]>;
export type ButtonSize = NonNullable<VariantProps<typeof buttonVariants>["size"]>;
export interface ButtonProps extends React.ComponentProps<"button">, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}
