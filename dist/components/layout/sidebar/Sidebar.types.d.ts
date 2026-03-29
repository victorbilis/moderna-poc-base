import type * as React from "react";
export interface SidebarItem {
    href: string;
    label: React.ReactNode;
}
export interface SidebarProps extends React.ComponentProps<"aside"> {
    items?: SidebarItem[];
}
