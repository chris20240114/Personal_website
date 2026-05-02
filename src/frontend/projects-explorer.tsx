"use client";

import { useMemo, useState } from "react";
import { categories, type Project, type ProjectCategory } from "@/content/projects";
import { ProjectCard } from "@/components/project-card";

export function ProjectsExplorer({ projects }: { projects: Project[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<ProjectCategory | "all">("all");

  const filtered = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = category === "all" || project.category === category;
      const haystack = `${project.title} ${project.summary} ${project.role} ${project.tech.join(" ")}`.toLowerCase();
      return matchesCategory && haystack.includes(query.toLowerCase());
    });
  }, [category, projects, query]);

  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-zinc-200 bg-white/72 p-4 dark:border-zinc-800 dark:bg-white/[0.04]">
        <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
          <label className="sr-only" htmlFor="project-search">
            Search projects
          </label>
          <input
            className="min-h-11 w-full rounded-lg border border-zinc-300 bg-white px-4 text-sm text-ink outline-none transition placeholder:text-zinc-400 focus:border-teal-700 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50 dark:focus:border-teal-300"
            id="project-search"
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by project, tech, or role..."
            value={query}
          />
          <div className="flex flex-wrap gap-2" role="list" aria-label="Project categories">
            {categories.map((item) => (
              <button
                className={`min-h-10 rounded-lg border px-3 text-sm font-semibold transition ${
                  category === item.value
                    ? "border-ink bg-ink text-white dark:border-teal-300 dark:bg-teal-300 dark:text-ink"
                    : "border-zinc-300 bg-white/70 text-zinc-700 hover:border-zinc-500 dark:border-zinc-700 dark:bg-white/5 dark:text-zinc-300 dark:hover:border-teal-300"
                }`}
                key={item.value}
                onClick={() => setCategory(item.value)}
                type="button"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {filtered.map((project) => (
          <ProjectCard project={project} key={project.slug} />
        ))}
      </div>

      {!filtered.length ? (
        <div className="rounded-lg border border-dashed border-zinc-300 p-8 text-center text-sm text-zinc-500 dark:border-zinc-700 dark:text-zinc-400">
          No projects match that search yet.
        </div>
      ) : null}
    </div>
  );
}
