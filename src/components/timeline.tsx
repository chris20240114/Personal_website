const items = [
  {
    period: "Now",
    title: "Backend-heavy product systems",
    detail: "Building graph-backed workflows, API layers, and data-rich full-stack interfaces.",
  },
  {
    period: "2025",
    title: "Operational tools and ML pipelines",
    detail: "Worked across internal APIs, PostgreSQL workflows, large records, and fairness-oriented model analysis.",
  },
  {
    period: "2024",
    title: "Research automation and AI agents",
    detail: "Used Python automation and reinforcement learning experiments to support analysis and learning systems.",
  },
  {
    period: "2023",
    title: "Real-user full-stack deployment",
    detail: "Shipped a Django marketplace for a school community and learned from real user feedback.",
  },
];

export function Timeline() {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div className="grid gap-3 rounded-lg border border-zinc-200 bg-white/70 p-4 dark:border-zinc-800 dark:bg-white/[0.04] sm:grid-cols-[7rem_1fr]" key={item.title}>
          <p className="font-mono text-sm text-teal-700 dark:text-teal-300">{item.period}</p>
          <div>
            <h3 className="font-semibold text-ink dark:text-zinc-50">{item.title}</h3>
            <p className="mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-300">{item.detail}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
