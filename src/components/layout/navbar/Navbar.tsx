import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@/components/button";
import { cn } from "@/lib/cn";
import type { NavbarProps } from "./Navbar.types";

export function Navbar({
  brand = "Base UI",
  logo,
  logoSrc,
  logoAlt = "",
  toolbarCenter,
  actions,
  className,
  ...props
}: NavbarProps) {
  const logoNode =
    logo ??
    (logoSrc ? (
      <Box
        component="img"
        src={logoSrc}
        alt={logoAlt}
        className="h-9 max-h-10 w-auto max-w-[180px] object-contain object-left"
      />
    ) : null);

  return (
    <AppBar
      position="static"
      color="inherit"
      elevation={0}
      className={cn(
        "border-b border-slate-700/90 bg-slate-900 text-white shadow-[0_1px_0_0_rgba(255,255,255,0.06)]",
        className,
      )}
      {...props}
    >
      <Toolbar variant="dense" className="min-h-14 gap-4 px-4 text-white sm:px-6">
        <Box className="flex min-w-0 shrink-0 items-center gap-3">
          {logoNode}
          {brand != null && brand !== false && (
            <Typography
              variant="h6"
              component="div"
              className={cn(
                "truncate font-semibold tracking-tight text-white",
                logoNode && "hidden sm:block",
              )}
            >
              {brand}
            </Typography>
          )}
        </Box>

        {toolbarCenter != null ? (
          <Box className="mx-auto flex min-w-0 max-w-xl flex-1 justify-center px-2">
            {toolbarCenter}
          </Box>
        ) : (
          <Box className="min-w-0 flex-1" aria-hidden />
        )}

        <Box className="flex shrink-0 items-center gap-2 text-white [&_button]:border-white [&_button]:text-white [&_button:hover]:bg-white/10">
          {actions ?? <Button variant="outline">Login</Button>}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
