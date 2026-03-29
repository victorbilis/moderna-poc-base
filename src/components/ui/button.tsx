import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import "@/styles/runtime";

export const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-blue-500 focus-visible:ring-3 focus-visible:ring-blue-500/30 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-red-500 aria-invalid:ring-3 aria-invalid:ring-red-500/20 dark:focus-visible:border-blue-400 dark:focus-visible:ring-blue-400/40 dark:aria-invalid:border-red-400 dark:aria-invalid:ring-red-400/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:text-white dark:hover:bg-blue-400",
        primary:
          "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:text-white dark:hover:bg-blue-400",
        outline:
          "border-blue-500/50 bg-blue-50 text-blue-700 hover:border-blue-600 hover:bg-blue-100 hover:text-blue-800 aria-expanded:border-blue-600 aria-expanded:bg-blue-100 aria-expanded:text-blue-800 dark:border-blue-400/50 dark:bg-blue-500/15 dark:text-blue-100 dark:hover:border-blue-300 dark:hover:bg-blue-500/25 dark:hover:text-blue-50 dark:aria-expanded:border-blue-300 dark:aria-expanded:bg-blue-500/25 dark:aria-expanded:text-blue-50",
        secondary:
          "bg-blue-100 text-blue-900 hover:bg-blue-200 aria-expanded:bg-blue-200 aria-expanded:text-blue-900 dark:bg-blue-500/20 dark:text-blue-100 dark:hover:bg-blue-500/30 dark:aria-expanded:bg-blue-500/30 dark:aria-expanded:text-blue-50",
        ghost:
          "hover:bg-blue-50 hover:text-blue-800 aria-expanded:bg-blue-50 aria-expanded:text-blue-800 dark:hover:bg-blue-500/15 dark:hover:text-blue-100 dark:aria-expanded:bg-blue-500/15 dark:aria-expanded:text-blue-100",
        destructive:
          "bg-red-500/10 text-red-600 hover:bg-red-500/20 focus-visible:border-red-500/40 focus-visible:ring-red-500/20 dark:bg-red-500/20 dark:text-red-300 dark:hover:bg-red-500/30 dark:focus-visible:border-red-400/40 dark:focus-visible:ring-red-400/40",
        link: "text-blue-700 underline-offset-4 hover:underline dark:text-blue-300",
      },
      size: {
        default:
          "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-md px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-md px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
        icon: "size-8",
        "icon-xs":
          "size-6 rounded-md in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-7 rounded-md in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export type ButtonVariant = NonNullable<VariantProps<typeof buttonVariants>["variant"]>;
export type ButtonSize = NonNullable<VariantProps<typeof buttonVariants>["size"]>;

export interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button };
