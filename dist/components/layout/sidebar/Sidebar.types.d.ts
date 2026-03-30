import type * as React from "react";
import type { BoxProps } from "@mui/material/Box";
export interface SidebarItem {
    href: string;
    label: React.ReactNode;
}
export interface SidebarProps extends Omit<BoxProps, "sx" | "style"> {
    items?: SidebarItem[];
}
