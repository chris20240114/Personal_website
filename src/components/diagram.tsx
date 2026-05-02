export function WorkflowDiagram({ steps }: { steps: string[] }) {
  return (
    <div className="rounded-lg border border-zinc-200 bg-white/72 p-4 dark:border-zinc-800 dark:bg-white/[0.04]">
      <div className="grid gap-3 md:grid-cols-2">
        {steps.map((step, index) => (
          <div className="relative rounded-lg border border-zinc-200 bg-paper p-4 dark:border-zinc-800 dark:bg-night-paper" key={step}>
            <div className="mb-3 grid h-8 w-8 place-items-center rounded-md bg-ink font-mono text-xs text-white dark:bg-teal-300 dark:text-ink">
              {String(index + 1).padStart(2, "0")}
            </div>
            <p className="text-sm leading-6 text-zinc-700 dark:text-zinc-300">{step}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
