export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-ink dark:text-zinc-50 sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-300">{description}</p> : null}
    </div>
  );
}
