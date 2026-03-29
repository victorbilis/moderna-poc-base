import { cn } from "@/lib/utils";
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
    <aside className={cn("h-screen w-64 border-r p-4", className)} {...props}>
      <nav className="space-y-2">
        {items.map((item, index) => (
          <a
            key={`${item.href}-${index}`}
            href={item.href}
            className="block rounded-md px-3 py-2 text-sm hover:bg-muted"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
