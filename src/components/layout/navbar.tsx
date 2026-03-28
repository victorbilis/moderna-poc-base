"use client";

import { Button } from "../ui/button";

export function Navbar() {
  return (
    <header className="h-14 border-b flex items-center justify-between px-6">
      <h1 className="font-semibold text-lg">Base UI</h1>

      <div className="flex items-center gap-2">
        <Button variant="outline">Login</Button>
      </div>
    </header>
  );
}
