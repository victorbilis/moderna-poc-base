import Box from "@mui/material/Box";
import type { SxProps, Theme } from "@mui/material/styles";
import { AcompanheButton, type AcompanheButtonProps } from "@/components/acompanhe-button";
import { CalendarWidget, type CalendarWidgetProps } from "@/components/calendar-widget";
import { SurfaceCard } from "@/components/surface-card";

export interface MonthAgendaPanelProps {
  calendarProps?: CalendarWidgetProps;
  acompanheProps?: AcompanheButtonProps;
  sx?: SxProps<Theme>;
}

/** Painel com calendário e botão de ação lado a lado. */
export function MonthAgendaPanel({
  calendarProps,
  acompanheProps,
  sx,
}: MonthAgendaPanelProps) {
  return (
    <SurfaceCard
      sx={[
        {
          p: 2,
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "stretch", sm: "center" },
          justifyContent: "space-between",
          gap: 2,
        },
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
    >
      <CalendarWidget {...calendarProps} />
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: { xs: "flex-start", sm: "flex-end" } }}>
        <AcompanheButton {...acompanheProps} />
      </Box>
    </SurfaceCard>
  );
}
