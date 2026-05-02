"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { navigation, site } from "@/content/site";
import { projects } from "@/content/projects";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const items = useMemo(
    () => [
      ...navigation.map((item) => ({ title: item.label, href: item.href, type: "Page" })),
      ...projects.map((project) => ({ title: project.title, href: `/projects/${project.slug}`, type: "Project" })),
      { title: "Email Chris", href: `mailto:${site.email}`, type: "Action" },
    ],
    [],
  );

  const filtered = items.filter((item) => `${item.title} ${item.type}`.toLowerCase().includes(query.toLowerCase()));

  useEffect(() => {
    const onOpen = () => setOpen(true);
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen(true);
      }
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("open-command-palette", onOpen);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("open-command-palette", onOpen);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 bg-ink/30 p-4 backdrop-blur-sm dark:bg-black/50" role="dialog" aria-modal="true" aria-label="Command palette">
      <div className="mx-auto mt-20 max-w-xl overflow-hidden rounded-lg border border-zinc-200 bg-paper shadow-soft dark:border-zinc-700 dark:bg-night-paper dark:shadow-soft-dark">
        <div className="border-b border-zinc-200 p-3 dark:border-zinc-800">
          <input
            autoFocus
            className="w-full rounded-md border border-zinc-300 bg-white px-3 py-3 text-sm text-ink outline-none transition focus:border-teal-600 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50 dark:focus:border-teal-300"
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search pages and projects..."
            value={query}
          />
        </div>
        <div className="max-h-96 overflow-y-auto p-2">
          {filtered.length ? (
            filtered.map((item) => (
              <Link
                className="flex items-center justify-between rounded-md px-3 py-3 text-sm transition hover:bg-zinc-100 dark:hover:bg-white/10"
                href={item.href}
                key={`${item.type}-${item.href}`}
                onClick={() => setOpen(false)}
              >
                <span className="font-medium text-ink dark:text-zinc-50">{item.title}</span>
                <span className="text-xs text-zinc-500 dark:text-zinc-400">{item.type}</span>
              </Link>
            ))
          ) : (
            <p className="px-3 py-8 text-center text-sm text-zinc-500 dark:text-zinc-400">No results found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
