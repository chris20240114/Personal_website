import Link from "next/link";
import type { Project } from "@/content/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col rounded-lg border border-zinc-200 bg-white/72 p-5 shadow-sm transition hover:-translate-y-1 hover:border-zinc-300 hover:shadow-soft dark:border-zinc-800 dark:bg-white/[0.04] dark:hover:border-teal-300/60 dark:hover:shadow-soft-dark">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-700 dark:text-teal-300">
            {project.category.replace("-", " ")}
          </p>
          <h3 className="mt-3 text-xl font-semibold tracking-tight text-ink dark:text-zinc-50">
            <Link href={`/projects/${project.slug}`}>
              <span className="absolute inset-0" aria-hidden="true" />
              {project.title}
            </Link>
          </h3>
        </div>
        <span className="shrink-0 rounded-md border border-zinc-200 px-2 py-1 text-xs text-zinc-500 dark:border-zinc-700 dark:text-zinc-400">
          {project.timeframe}
        </span>
      </div>
      <p className="mt-2 text-sm font-medium text-zinc-700 dark:text-zinc-200">{project.role}</p>
      <p className="mt-4 flex-1 text-sm leading-6 text-zinc-600 dark:text-zinc-300">{project.summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.slice(0, 6).map((item) => (
          <span className="rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300" key={item}>
            {item}
          </span>
        ))}
      </div>
      <div className="mt-6 text-sm font-semibold text-teal-700 transition group-hover:translate-x-1 dark:text-teal-300">
        Read case study
      </div>
    </article>
  );
}
