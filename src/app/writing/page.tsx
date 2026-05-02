import type { Metadata } from "next";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { posts } from "@/content/posts";

export const metadata: Metadata = {
  title: "Writing",
  description: "Short technical notes and draft posts.",
};

export default function WritingPage() {
  return (
    <Container className="py-16 sm:py-24">
      <SectionHeading
        eyebrow="Writing / notes"
        title="Technical notes in progress"
        description="Short posts can live in structured content now, and the project is ready to evolve toward Markdown or MDX later."
      />

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {posts.map((post) => (
          <article className="rounded-lg border border-zinc-200 bg-white/72 p-5 dark:border-zinc-800 dark:bg-white/[0.04]" key={post.slug}>
            <div className="flex items-center justify-between gap-4">
              <time className="font-mono text-xs text-zinc-500 dark:text-zinc-400" dateTime={post.date}>
                {new Date(`${post.date}T00:00:00`).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
              <span className="rounded-md border border-amber-300 bg-amber-50 px-2 py-1 text-xs font-semibold text-amber-800 dark:border-amber-400/30 dark:bg-amber-300/10 dark:text-amber-200">
                {post.status}
              </span>
            </div>
            <h2 className="mt-4 text-xl font-semibold tracking-tight text-ink dark:text-zinc-50">{post.title}</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">{post.summary}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span className="rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Container>
  );
}
