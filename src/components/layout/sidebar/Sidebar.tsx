import { cn } from "@/lib/utils";
import "@/styles/runtime";
import type { SidebarProps } from "./Sidebar.types";

const defaultItems = [
  { href: "#", label: "Dashboard" },
  { href: "#", label: "Usuários" },
];

export function Sidebar({
  className,
  items = defaultItems,
  ...props
}: SidebarProps) {
  return (
    <aside
      className={cn("h-screen w-64 border-r border-slate-200 bg-white/80 p-4 dark:border-white/10 dark:bg-slate-950/80", className)}
      {...props}
    >
      <nav className="space-y-2">
        {items.map((item, index) => (
          <a
            key={`${item.href}-${index}`}
            href={item.href}
            className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-800 dark:text-slate-200 dark:hover:bg-blue-500/15 dark:hover:text-blue-100"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
