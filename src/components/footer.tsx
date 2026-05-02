import Link from "next/link";
import { navigation, site } from "@/content/site";
import { Container } from "./container";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200/80 py-10 dark:border-zinc-800">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-semibold text-ink dark:text-zinc-50">{site.name}</p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-600 dark:text-zinc-300">{site.tagline}</p>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-zinc-600 dark:text-zinc-300">
          {navigation.map((item) => (
            <Link className="transition hover:text-teal-700 dark:hover:text-teal-300" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
      </Container>
    </footer>
  );
}
