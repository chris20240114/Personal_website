import Link from "next/link";
import type { ReactNode } from "react";

const variants = {
  primary:
    "border-ink bg-ink text-white hover:-translate-y-0.5 hover:shadow-soft dark:border-teal-300 dark:bg-teal-300 dark:text-ink",
  secondary:
    "border-zinc-300 bg-white/70 text-ink hover:-translate-y-0.5 hover:border-ink dark:border-zinc-700 dark:bg-white/5 dark:text-zinc-100 dark:hover:border-teal-300",
  ghost:
    "border-transparent text-zinc-700 hover:border-zinc-300 hover:bg-white/60 dark:text-zinc-200 dark:hover:border-zinc-700 dark:hover:bg-white/5",
};

export function ButtonLink({
  href,
  children,
  variant = "secondary",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  external?: boolean;
}) {
  const className = `inline-flex min-h-11 items-center justify-center rounded-lg border px-4 text-sm font-semibold transition ${variants[variant]}`;

  if (external) {
    return (
      <a className={className} href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}
