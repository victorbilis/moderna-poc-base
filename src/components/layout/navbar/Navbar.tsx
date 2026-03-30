import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@/components/button";
import { cn } from "@/lib/cn";
import type { NavbarProps } from "./Navbar.types";

export function Navbar({ brand = "Base UI", actions, className, ...props }: NavbarProps) {
  return (
    <AppBar
      position="static"
      color="inherit"
      elevation={0}
      className={cn(
        "border-b border-slate-700 bg-slate-900 text-white shadow-none",
        className,
      )}
      {...props}
    >
      <Toolbar variant="dense" className="min-h-14 justify-between px-6 text-white">
        <Typography variant="h6" component="div" className="font-semibold text-white">
          {brand}
        </Typography>
        <Box className="flex items-center gap-2 text-white [&_button]:border-white [&_button]:text-white [&_button:hover]:bg-white/10">
          {actions ?? <Button variant="outline">Login</Button>}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
