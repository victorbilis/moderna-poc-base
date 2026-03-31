import type { SxProps, Theme } from "@mui/material/styles";
import type { ReactNode } from "react";
export interface SectionTitleProps {
    title: string;
    /** Conteúdo à direita (ex.: link “Ver todos →”). */
    action?: ReactNode;
    sx?: SxProps<Theme>;
}
/** Título de seção (18px semibold) com slot opcional à direita. */
export declare function SectionTitle({ title, action, sx }: SectionTitleProps): import("react/jsx-runtime").JSX.Element;
export interface SectionLinkActionProps {
    children: ReactNode;
    onClick?: () => void;
    href?: string;
}
/** Link textual (cor primária, 14px). */
export declare function SectionLinkAction({ children, onClick, href }: SectionLinkActionProps): import("react/jsx-runtime").JSX.Element;
