import type * as React from "react";
import type { AppBarProps } from "@mui/material/AppBar";

export interface NavbarProps extends Omit<AppBarProps, "children" | "sx" | "style"> {
  brand?: React.ReactNode;
  actions?: React.ReactNode;
}
