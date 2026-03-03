"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/exercises", label: "Exercises" },
  { href: "/workout", label: "Workout" },
  { href: "/stats", label: "Stats" },
] as const;

export default function AppNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/exercises" className="font-semibold tracking-tight">
          Cali Tracker
        </Link>

        <nav className="flex items-center gap-2">
          {links.map((l) => {
            const isActive = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
                  isActive
                    ? "bg-amber-300 text-black shadow-sm"
                    : "text-black/70 hover:bg-black/5"
                }`}>
                {l.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
