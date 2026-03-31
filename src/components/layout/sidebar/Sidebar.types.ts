import type * as React from "react";
import type { BoxProps } from "@mui/material/Box";

export interface SidebarItem {
  href: string;
  label: React.ReactNode;
  /** Texto auxiliar abaixo do título (ex.: descrição curta). */
  subtitle?: React.ReactNode;
  /** Ícone à esquerda do rótulo (ex.: ícone MUI ou SVG). */
  icon?: React.ReactNode;
  /** Destaque visual do item ativo (ex.: rota atual). */
  selected?: boolean;
}

export interface SidebarProps extends Omit<BoxProps, "sx" | "style"> {
  items?: SidebarItem[];
}
