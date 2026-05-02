"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation, site } from "@/content/site";
import { ThemeToggle } from "@/frontend/theme-toggle";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/70 bg-paper/82 backdrop-blur-xl dark:border-zinc-800/80 dark:bg-night-paper/82">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link className="flex items-center gap-3 font-semibold tracking-tight" href="/" aria-label="Home">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-ink text-sm text-white dark:bg-teal-300 dark:text-ink">
            C
          </span>
          <span className="hidden text-ink dark:text-zinc-50 sm:inline">{site.name}</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {navigation.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                className={`rounded-md px-3 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-zinc-900 text-white dark:bg-teal-300 dark:text-ink"
                    : "text-zinc-600 hover:bg-zinc-100 hover:text-ink dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-white"
                }`}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            className="hidden min-h-10 rounded-lg border border-zinc-300 bg-white/70 px-3 text-xs font-semibold text-zinc-600 transition hover:border-zinc-500 dark:border-zinc-700 dark:bg-white/5 dark:text-zinc-300 dark:hover:border-teal-300 sm:inline-flex sm:items-center"
            onClick={() => window.dispatchEvent(new Event("open-command-palette"))}
            type="button"
          >
            Ctrl K
          </button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
