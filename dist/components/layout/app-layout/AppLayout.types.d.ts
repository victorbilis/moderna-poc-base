import type * as React from "react";
import type { NavbarProps } from "../navbar";
import type { SidebarProps } from "../sidebar";
export interface AppLayoutProps extends React.ComponentProps<"div"> {
    children: React.ReactNode;
    contentClassName?: string;
    navbarProps?: NavbarProps;
    sidebarProps?: SidebarProps;
}
