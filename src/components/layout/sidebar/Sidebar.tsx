import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { cn } from "@/lib/cn";
import type { SidebarProps } from "./Sidebar.types";

const defaultItems = [
  { href: "#", label: "Dashboard" },
  { href: "#", label: "Usuários" },
];

export function Sidebar({ items = defaultItems, className, ...props }: SidebarProps) {
  return (
    <Box
      component="aside"
      className={cn(
        "h-screen w-64 border-r border-slate-700 bg-slate-900 p-4 text-white",
        className,
      )}
      {...props}
    >
      <List disablePadding className="flex flex-col gap-1 text-white">
        {items.map((item, index) => (
          <ListItem key={`${item.href}-${String(index)}`} disablePadding>
            <ListItemButton
              component="a"
              href={item.href}
              className="rounded-md text-white hover:bg-white/10 hover:text-white"
            >
              <ListItemText
                primary={item.label}
                slotProps={{ primary: { variant: "body2", className: "text-white" } }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
