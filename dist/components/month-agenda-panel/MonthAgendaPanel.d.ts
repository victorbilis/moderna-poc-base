import type { SxProps, Theme } from "@mui/material/styles";
import { type AcompanheButtonProps } from "@/components/acompanhe-button";
import { type CalendarWidgetProps } from "@/components/calendar-widget";
export interface MonthAgendaPanelProps {
    calendarProps?: CalendarWidgetProps;
    acompanheProps?: AcompanheButtonProps;
    sx?: SxProps<Theme>;
}
/** Painel com calendário e botão de ação lado a lado. */
export declare function MonthAgendaPanel({ calendarProps, acompanheProps, sx, }: MonthAgendaPanelProps): import("react/jsx-runtime").JSX.Element;
