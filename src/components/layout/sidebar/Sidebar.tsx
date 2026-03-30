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
  { href: "#", label: "Dashboard", icon: <IconDashboard />, selected: true },
  { href: "#", label: "Usuários", icon: <IconUsers /> },
];

export function Sidebar({ items = defaultItems, className, ...props }: SidebarProps) {
  return (
    <Box
      component="aside"
      className={cn(
        "flex h-screen w-64 flex-col border-r border-slate-200 bg-white p-4 text-slate-900",
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
      <List disablePadding className="flex flex-col gap-0.5 text-slate-900">
        {items.map((item, index) => (
          <ListItem key={`${item.href}-${String(index)}`} disablePadding className="block">
            <ListItemButton
              component="a"
              href={item.href}
              aria-current={item.selected ? "page" : undefined}
              className={cn(
                "rounded-lg px-3 py-2 text-slate-800 transition-colors",
                "hover:bg-slate-100 hover:[&_.sidebar-item-icon]:text-slate-800",
                item.selected &&
                  "bg-[#8ACEFE] hover:bg-[#8ACEFE] [&_.sidebar-item-icon]:text-slate-900",
              )}
            >
              {item.icon != null ? (
                <ListItemIcon
                  className={cn(
                    "min-w-0 shrink-0 text-slate-500 [&:not(:empty)]:mr-3 [&:not(:empty)]:min-w-[2.25rem]",
                    item.selected && "text-slate-900",
                  )}
                >
                  <span className="sidebar-item-icon flex items-center justify-center text-slate-500 transition-colors">
                    {item.icon}
                  </span>
                </ListItemIcon>
              ) : null}
              <ListItemText
                primary={item.label}
                slotProps={{
                  primary: {
                    variant: "body2",
                    className: cn("font-medium", item.selected ? "text-slate-900" : "text-slate-800"),
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
