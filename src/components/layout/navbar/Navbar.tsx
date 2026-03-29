import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import "@/styles/runtime";
import type { NavbarProps } from "./Navbar.types";

export function Navbar({
  className,
  brand = "Base UI",
  actions,
  ...props
}: NavbarProps) {
  return (
    <header
      className={cn(
        "flex h-14 items-center justify-between border-b border-slate-200 bg-white/80 px-6 dark:border-white/10 dark:bg-slate-950/80",
        className,
      )}
      {...props}
    >
      <h1 className="text-lg font-semibold">{brand}</h1>

      <div className="flex items-center gap-2">
        {actions ?? <Button variant="outline">Login</Button>}
      </div>
    </header>
  );
}
