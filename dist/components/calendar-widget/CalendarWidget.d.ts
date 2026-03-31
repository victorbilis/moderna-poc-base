import type { SxProps, Theme } from "@mui/material/styles";
export interface CalendarWidgetProps {
    /** Ano (ex.: 2026) */
    year?: number;
    /** Mês 0–11 */
    month?: number;
    /** Data destacada (ex.: hoje). Só aparece se cair no mês exibido. */
    highlightDate?: Date;
    sx?: SxProps<Theme>;
}
/** Calendário compacto com cabeçalho do mês e grade D–S. */
export declare function CalendarWidget({ year: yearProp, month: monthProp, highlightDate: highlightProp, sx, }: CalendarWidgetProps): import("react/jsx-runtime").JSX.Element;
