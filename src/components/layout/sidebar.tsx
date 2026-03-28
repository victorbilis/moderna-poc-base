"use client";

import { cn } from "@/lib/utils";

export function Sidebar() {
  return (
    <aside className="w-64 border-r h-screen p-4">
      <nav className="space-y-2">
        <a
          href="#"
          className={cn("block rounded-md px-3 py-2 text-sm hover:bg-muted")}
        >
          Dashboard
        </a>

        <a
          href="#"
          className="block rounded-md px-3 py-2 text-sm hover:bg-muted"
        >
          Usuários
        </a>
      </nav>
    </aside>
  );
}
