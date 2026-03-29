import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-zinc-400 focus-visible:ring-3 focus-visible:ring-zinc-400/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-red-500 aria-invalid:ring-3 aria-invalid:ring-red-500/20 dark:focus-visible:border-zinc-500 dark:focus-visible:ring-zinc-500/50 dark:aria-invalid:border-red-400 dark:aria-invalid:ring-red-400/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-zinc-950 text-zinc-50 hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200",
        outline:
          "border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-950 aria-expanded:bg-zinc-100 aria-expanded:text-zinc-950 dark:border-white/15 dark:bg-white/5 dark:text-zinc-50 dark:hover:bg-white/10 dark:hover:text-zinc-50 dark:aria-expanded:bg-white/10 dark:aria-expanded:text-zinc-50",
        secondary:
          "bg-zinc-100 text-zinc-950 hover:bg-zinc-200 aria-expanded:bg-zinc-200 aria-expanded:text-zinc-950 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-700 dark:aria-expanded:bg-zinc-700 dark:aria-expanded:text-zinc-50",
        ghost:
          "hover:bg-zinc-100 hover:text-zinc-950 aria-expanded:bg-zinc-100 aria-expanded:text-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:aria-expanded:bg-zinc-800 dark:aria-expanded:text-zinc-50",
        destructive:
          "bg-red-500/10 text-red-600 hover:bg-red-500/20 focus-visible:border-red-500/40 focus-visible:ring-red-500/20 dark:bg-red-500/20 dark:text-red-300 dark:hover:bg-red-500/30 dark:focus-visible:border-red-400/40 dark:focus-visible:ring-red-400/40",
        link: "text-zinc-950 underline-offset-4 hover:underline dark:text-zinc-50",
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
