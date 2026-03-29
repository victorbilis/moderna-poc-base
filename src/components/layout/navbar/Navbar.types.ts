import type * as React from "react";

export interface NavbarProps extends React.ComponentProps<"header"> {
  brand?: React.ReactNode;
  actions?: React.ReactNode;
}
