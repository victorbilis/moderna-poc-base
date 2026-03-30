import type { ReactNode } from "react";
import type { BoxProps } from "@mui/material/Box";
import type { NavbarProps } from "../navbar";
import type { SidebarProps } from "../sidebar";
export interface AppLayoutProps extends Omit<BoxProps, "sx" | "style"> {
    children: ReactNode;
    contentClassName?: string;
    navbarProps?: NavbarProps;
    sidebarProps?: SidebarProps;
}
