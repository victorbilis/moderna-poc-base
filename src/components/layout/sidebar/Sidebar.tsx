import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { cn } from "@/lib/cn";
import type { SidebarProps } from "./Sidebar.types";

function IconDashboard() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-[1.125rem] shrink-0"
      aria-hidden
    >
      <rect x="3" y="3" width="7" height="9" rx="1.25" />
      <rect x="14" y="3" width="7" height="5" rx="1.25" />
      <rect x="14" y="11" width="7" height="10" rx="1.25" />
      <rect x="3" y="15" width="7" height="6" rx="1.25" />
    </svg>
  );
}

function IconUsers() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-[1.125rem] shrink-0"
      aria-hidden
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

const defaultItems = [
  { href: "#", label: "Dashboard", icon: <IconDashboard /> },
  { href: "#", label: "Usuários", icon: <IconUsers /> },
];

export function Sidebar({ items = defaultItems, className, ...props }: SidebarProps) {
  return (
    <Box
      component="aside"
      className={cn(
        "flex h-screen w-64 flex-col border-r border-slate-700/80 bg-gradient-to-b from-slate-900 to-slate-950 p-4 text-white shadow-[inset_-1px_0_0_0_rgba(255,255,255,0.04)]",
        className,
      )}
      {...props}
    >
      <Typography
        variant="overline"
        className="mb-3 px-2 text-[0.65rem] font-semibold tracking-[0.12em] text-slate-500"
        component="p"
      >
        Menu
      </Typography>
      <List disablePadding className="flex flex-col gap-0.5 text-white">
        {items.map((item, index) => (
          <ListItem key={`${item.href}-${String(index)}`} disablePadding className="block">
            <ListItemButton
              component="a"
              href={item.href}
              className="rounded-lg px-3 py-2 text-white transition-colors hover:bg-white/10 hover:text-white hover:[&_.sidebar-item-icon]:text-white"
            >
              {item.icon != null ? (
                <ListItemIcon className="min-w-0 shrink-0 text-slate-400 [&:not(:empty)]:mr-3 [&:not(:empty)]:min-w-[2.25rem]">
                  <span className="sidebar-item-icon flex items-center justify-center text-slate-400 transition-colors">
                    {item.icon}
                  </span>
                </ListItemIcon>
              ) : null}
              <ListItemText
                primary={item.label}
                slotProps={{
                  primary: { variant: "body2", className: "font-medium text-slate-100" },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
