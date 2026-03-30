import type * as React from "react";
import type { AppBarProps } from "@mui/material/AppBar";

export interface NavbarProps extends Omit<AppBarProps, "children" | "sx" | "style"> {
  brand?: React.ReactNode;
  /** Logo ou imagem customizada (tem prioridade sobre `logoSrc`). */
  logo?: React.ReactNode;
  /** URL da imagem do logo (usada quando `logo` não é informado). */
  logoSrc?: string;
  logoAlt?: string;
  /** Área central da barra (ex.: campo de busca, filtros). */
  toolbarCenter?: React.ReactNode;
  actions?: React.ReactNode;
}
