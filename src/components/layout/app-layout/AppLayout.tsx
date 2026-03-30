import Box from "@mui/material/Box";
import { Navbar } from "../navbar";
import { Sidebar } from "../sidebar";
import { cn } from "@/lib/cn";
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
    <Box className={cn("min-h-screen bg-white", className)} {...props}>
      <Navbar {...navbarProps} />

      <Box className="flex">
        <Sidebar
          className={cn("h-[calc(100vh-3.5rem)]", sidebarClassName)}
          {...restSidebarProps}
        />

        <Box
          component="main"
          className={cn("flex-1 bg-[#F6FAFF] p-6 text-slate-900", contentClassName)}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}
