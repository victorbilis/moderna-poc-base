import { cn } from "@/lib/utils";
import { Navbar } from "../navbar";
import { Sidebar } from "../sidebar";
import type { AppLayoutProps } from "./AppLayout.types";

export function AppLayout({
  className,
  contentClassName,
  children,
  navbarProps,
  sidebarProps,
  ...props
}: AppLayoutProps) {
  const { className: sidebarClassName, ...restSidebarProps } = sidebarProps ?? {};

  return (
    <div className={cn("min-h-screen bg-slate-50 dark:bg-slate-950", className)} {...props}>
      <Navbar {...navbarProps} />

      <div className="flex">
        <Sidebar className={cn("h-[calc(100vh-3.5rem)]", sidebarClassName)} {...restSidebarProps} />

        <main className={cn("flex-1 p-6", contentClassName)}>{children}</main>
      </div>
    </div>
  );
}
