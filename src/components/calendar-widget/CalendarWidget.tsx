import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type { SxProps, Theme } from "@mui/material/styles";
import { educationalColors } from "@/lib/educationalPalette";

const WEEKDAY_LABELS = ["D", "S", "T", "Q", "Q", "S", "S"] as const;

function daysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function buildDayCells(year: number, month: number): (number | null)[] {
  const firstDow = new Date(year, month, 1).getDay();
  const total = daysInMonth(year, month);
  const cells: (number | null)[] = [];
  for (let i = 0; i < firstDow; i += 1) cells.push(null);
  for (let d = 1; d <= total; d += 1) cells.push(d);
  return cells;
}

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
export function CalendarWidget({
  year: yearProp,
  month: monthProp,
  highlightDate: highlightProp,
  sx,
}: CalendarWidgetProps) {
  const now = new Date();
  const year = yearProp ?? now.getFullYear();
  const month = monthProp ?? now.getMonth();
  const highlightDate = highlightProp ?? now;

  const monthTitle = new Intl.DateTimeFormat("pt-BR", {
    month: "long",
    year: "numeric",
  }).format(new Date(year, month, 1));

  const cells = buildDayCells(year, month);
  const highlightDay =
    highlightDate.getFullYear() === year && highlightDate.getMonth() === month
      ? highlightDate.getDate()
      : null;

  return (
    <Box sx={sx}>
      <Typography
        sx={{
          fontSize: 14,
          fontWeight: 600,
          color: educationalColors.heading,
          mb: 1,
          textTransform: "capitalize",
        }}
      >
        {monthTitle}
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(7, minmax(0, 1fr))",
          gap: 0.5,
          maxWidth: 240,
        }}
      >
        {WEEKDAY_LABELS.map((label, i) => (
          <Typography
            key={`h-${i}`}
            sx={{
              fontSize: 11,
              color: educationalColors.muted,
              textAlign: "center",
              fontWeight: 500,
            }}
          >
            {label}
          </Typography>
        ))}
        {cells.map((day, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: 28,
            }}
          >
            {day != null ? (
              <Typography
                sx={{
                  width: 28,
                  height: 28,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 12,
                  color:
                    highlightDay === day ? "#FFFFFF" : educationalColors.heading,
                  bgcolor:
                    highlightDay === day ? educationalColors.primary : "transparent",
                  borderRadius: "50%",
                  fontWeight: highlightDay === day ? 600 : 400,
                }}
              >
                {day}
              </Typography>
            ) : null}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
